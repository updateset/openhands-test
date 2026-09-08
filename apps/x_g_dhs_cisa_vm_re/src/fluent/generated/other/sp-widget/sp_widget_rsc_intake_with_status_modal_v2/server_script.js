(function() {
    /* populate the 'data' object */
    /* e.g., data.table = $sp.getValue('table'); */
    data.org_size = $sp.getParameter('org_size');
    // Google ReCaptcha information
    // data.siteKey = gs.getProperty("x_g_dhs_cisa_vm_re.rsc_google_site_key");
    data.user_ip = gs.getSession().getClientIP();
    data.user_agent = '';
    data.response = {};



    data.isLoggedIn = gs.isLoggedIn();
    if (data.isLoggedIn) {
        data.user = {
            "email": gs.getUser().getEmail(),
        };
    }


    data.questionnaire = [];
    var allItems = {};
    var sectionItems = [];

    // Fetch all records from the questionnaire table
    var questionsGR = new GlideRecord('x_g_dhs_cisa_vm_re_rsc_portal_questions');
    questionsGR.addQuery('questionnaire_size', $sp.getParameter('org_size'));
    questionsGR.addQuery('version', $sp.getParameter('version'));

    questionsGR.orderBy('order');
    questionsGR.query();

    while (questionsGR.next()) {
        var item = {
            sys_id: questionsGR.getUniqueValue(),
            parent: questionsGR.getValue('parent') || null,
            question: questionsGR.getValue('question'),
            title: questionsGR.getValue('title'),
            template: questionsGR.getValue('template'),
            level: questionsGR.getValue('level'), // 'section' | 'sub_section' | 'question'
            column_name: questionsGR.getValue('column_name'),
            points: parseInt(questionsGR.getValue('points')) || 0,
            tooltip_body: questionsGR.getValue('tooltip_body'),
            show_resource: questionsGR.getValue("show_resource"),
            resource_url: questionsGR.getValue("resource_url"),
            description: questionsGR.getValue('description'),
            question_type: questionsGR.getValue('question_type'),
            hidden: false,
            children: []
        };
        allItems[item.sys_id] = item;
    }

    // Second pass: build parent-child relationships
    for (var sys_id in allItems) {
        var item = allItems[sys_id];
        if (item.parent && allItems[item.parent]) {
            allItems[item.parent].children.push(item);
        } else {
            // no parent it's a root section
            sectionItems.push(item);
        }
    }

    data.questionnaire = sectionItems;

})();
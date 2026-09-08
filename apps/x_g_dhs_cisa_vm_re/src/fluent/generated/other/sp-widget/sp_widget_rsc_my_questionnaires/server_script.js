(function() {

    function getQuestionnaires() {
        try {
            var util = new x_g_dhs_cisa_vm_re.RSCSyncUtil();
            return util.getSurveys();

        } catch (e) {
            return e.message;
        }
    }

    if (gs.isLoggedIn()) {
        data.user = true;

        var items = getQuestionnaires();
        data.tableItems = [];

        for (var i in items) {
            if (i === "count")
                continue;
            data.tableItems.push({
                number: items[i].number,
                version: items[i].version,
                submitted: items[i].sys_updated_on,
				id : i,
            });
        }

    } else {
        data.user = false;
    }
    
})();
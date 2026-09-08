(function() {

    /* integrations to be moved to script include */

    function tableAPI(query, fields, table) {
        try {
            var util = new x_g_dhs_cisa_vm_re.RSCSyncUtil();
            return util.getCSDTableData(query, fields, table);

        } catch (e) {
            return e.message;
        }
    }

    function submitProducer(vars) {
        try {
            var variables = {
                //"cy_hy_enroll": "Yes", //needed until record producer changes
                "short_description": "This is a new account request from the RSC Portal",
                "description": "This is a new account request from the RSC Portal"
            };

            var util = new x_g_dhs_cisa_vm_re.RSCSyncUtil();
            data.producer = util.submitProducer({
                variables: {
                    ...variables,
                    ...vars
                }
            });
        } catch (ex) {
            data.producer = ex.message;
        }
    }

    data.siteKey = gs.getProperty("x_g_dhs_cisa_vm_re.rsc_google_site_key");
    data.user_ip = gs.getSession().getClientIP();
    data.user_agent = '';
    data.response = {};

    // data.states = tableAPI('gen_location_typeLIKE79d9a908dbdaf7003890341f7c961980^ORDERBYname', 'name,sys_id', 'x_dhs_location_dhs_location').body.result;
    // data.terms = tableAPI('current=true^type=qrganization_account', 'terms.template', 'x_aver_cisa_vm_policy').body.result;

    if (gs.isLoggedIn()) {
        data.user = {
            "email": gs.getUser().getEmail(),
            "first": gs.getUser().getFirstName(),
            "last": gs.getUser().getLastName()
        };
    }

    data.isLoggedIn = gs.isLoggedIn();


    if (input && input.action && input.action == "submit") {
        var apiUtil = new x_g_dhs_cisa_vm_re.RSCSyncUtil(),
            reCaptcha = null,
            captchaAction = input.action,
            captchaError = "<p>Error processing your request due to reCaptcha failure.</p><p>For more information on this please reference this <a href='https://developers.google.com/search/blog/2018/10/introducing-recaptcha-v3-new-way-to'>Article</a></p>";

        data.response.captcha = true;
        if (input.hasOwnProperty('token')) {
            reCaptcha = JSON.parse(
                apiUtil.verifyReCaptcha(
                    input.token,
                    captchaAction,
                    data.user_ip,
                    input.user_agent
                )
            );
        } else {
            gs.addErrorMessage(captchaError);
            data.response.captcha = false;
            return;
        }

		data.test = reCaptcha;

        try {
            var passingScore = parseFloat(
                gs.getProperty("x_g_dhs_cisa_vm_re.rsc_google_score")
            );

            if (gs.isLoggedIn()) {
                reCaptcha.riskAnalysis.score += parseFloat(
                    gs.getProperty("x_g_dhs_cisa_vm_re.rsc_google_logged_in_score")
                );
            }

            if (reCaptcha.riskAnalysis.score < passingScore) {
                gs.addErrorMessage(captchaError);

                data.response.captcha = false;
                return;
            } else {
                submitProducer(input.vars);
            }
        } catch (ex) {
            gs.addErrorMessage(captchaError);

            data.response.captcha = false;
            return;
        }

    }

})();
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

    data.elements = {};
    var grUtil = new global.GRUtil();
    grUtil.getElements("x_g_dhs_rsc_rsc_import", false, data.elements);


    // START Retrieve parameters from URL
    if ($sp.getParameter("case_id")) {
        //data.case_id = $sp.getParameter("case_id");
        data.case_id = gs.generateGUID();
    } else {
        data.case_id = gs.generateGUID();
    }
    // END Retrieve parameters from URL


    function tableAPI(query, fields, table) {
        try {
            var util = new x_g_dhs_cisa_vm_re.RSCSyncUtil();
            return util.getCSDTableData(query, fields, table);

        } catch (e) {
            return e.message;
        }
    }

    // data.terms = tableAPI('current!=false^type=questionnaire', 'terms.template,sys_id', 'x_aver_cisa_vm_policy').body.result;
    // data.states = tableAPI('gen_location_typeLIKE79d9a908dbdaf7003890341f7c961980^ORDERBYname', 'name,sys_id,parent.name', 'x_dhs_location_dhs_location').body.result;

    data.contactId = '';
    data.accountId = '';
    if (gs.isLoggedIn()) {
        // var contact = tableAPI('email=' + gs.getUser().getEmail(), 'sys_id,account', 'customer_contact').body.result;
        // data.contactLog = contact;

        // Contact/Account handling
        // try {
        // 	if (contact != undefined && contact.length > 0) {
        // 		data.contactId = contact[0].sys_id;

        // 		if (contact[0].account != '') {
        // 			data.accountId = contact[0].account.value;
        // 		}
        // 	}
        // } catch (err) {
        // 	if (data.contactId != '') {
        // 		// Keep contactId if it was set
        // 	} else {
        // 		data.contactId = '';
        // 	}

        // 	data.accountId = '';
        // }
    }

    //generates the payload structure we need
    function generatePayload(obj, email) {

        // Remove controller injection for contact and account information
        delete obj['contact'];
        delete obj['account'];

        var static = {
            "contact": data.contactId, //needs to be retrieved via table API using email (if exists)
            "account": data.accountId, //needs to be retrieved via table API using email (if exists)
            "email": email,
            "version": "1", //idk how this will work yet lol
            "organization_size": data.org_size,
            "u_policy": data.terms[0]['sys_id'], //current policy needed on page load?
            "u_questionnaire": gs.generateGUID()
        };

        function getQuestionText(qid) {

            var getQuestion = new GlideRecord('x_g_dhs_cisa_vm_re_rsc_portal_questions');
            if (getQuestion.get("column_name", qid)) {
                var html = getQuestion.getValue('question');
                return html.replace(/<[^>]*>/g, '').trim();
            } else {
                if (qid == 'u_hq_location') {
                    return 'In what U.S state or territory is your organization headquartered?';
                }
            }

        }

        return Object.entries(obj)
            .filter(([k, v]) => v && k !== "u_sys_id")
            .map(([k, v]) => ({
                u_qid: k,
                u_question_text: getQuestionText(k),
                question_answer: v === "no" ? "no_unsure" : v,
                ...static,
            }));
    }



    if (input && input.submit && input.responses != undefined) {
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
                var payload = {
                    records: generatePayload(input.responses, input.email)
                };

                data.payload = payload;
                data.submitResults = apiUtil.submitSurvey(payload);
                return;
            }
        } catch (ex) {
            gs.addErrorMessage(captchaError);

            data.response.captcha = false;
            return;
        }
    }

    /*
    	data.sectors = [];
    	data.sub_sectors = {};

    	var sector = new GlideRecord("x_g_dhs_cisa_vm_re_rsc_sectors");
    	sector.query();
    	while (sector.next()) {
    		var parent = sector.getDisplayValue("parent");
    		if (parent && parent != "") {
    			data.sectors.push(parent);
    		}
    	}

    	// START Sector compilation
    	data.sectorObj = {};
    	data.sectors = [];
    	var sectorGlide = new GlideRecord("x_g_dhs_cisa_vm_re_rsc_sectors");
    	sectorGlide.orderBy("sector");
    	sectorGlide.addNullQuery("parent");
    	sectorGlide.query();

    	while (sectorGlide.next()) {
    		var temp = {};
    		temp.name = sectorGlide.sector.toString();
    		temp.child = [];

    		var subSectorGlide = new GlideRecord("x_g_dhs_cisa_vm_re_rsc_sectors");
    		subSectorGlide.addQuery("parent", sectorGlide.getUniqueValue());
    		subSectorGlide.orderBy("sector");
    		subSectorGlide.query();

    		while (subSectorGlide.next()) {
    			temp.child.push(subSectorGlide.sector.toString());
    		}

    		var sectorTemp = {
    			value: temp.name,
    			children: temp.child,
    		};

    		data.sectors.push(temp);
    		data.sectorObj[temp.name] = sectorTemp;
    	}

    */


    // END Sector compilation

    // START State compilation
    // data.statesObj = {};
    // data.states = [];
    // var rscStates = new GlideRecord("x_g_dhs_cisa_vm_re_rsc_us_states");
    // rscStates.orderBy("name");
    // rscStates.query();

    // while (rscStates.next()) {
    // 	var temp = {};
    // 	temp.state = rscStates.name.toString();
    // 	temp.region = rscStates.region.toString();

    // 	data.statesObj[temp.state] = temp;
    // 	data.states.push(temp);
    // }
    // END State compilation

	
    var questions = new GlideRecord('x_g_dhs_cisa_vm_re_rsc_portal_questions');
    questions.addQuery('questionnaire_size', 'small');
    questions.orderBy('order');
    //    questions.addQuery('version', $sp.getParameter('version'));
    questions.query();
    while (questions.next()) {
        data[questions.getValue('column_name')] = $sp.getWidget("rsc_question_boolean", {
            title: questions.getValue('title'),
            column_name: questions.getValue('column_name'),
        });
    }
    /*
        // START Templatized Question Widgets
        data['q1'] = $sp.getWidget("rsc_question_boolean", {
            title: "Question 1",
            column_name: "u_pw_different",
        });

        data.q2 = $sp.getWidget("rsc_question_boolean", {
            title: "Question 2",
            column_name: "u_pw_strong",
        });

        data.q3 = $sp.getWidget("rsc_question_boolean", {
            title: "Question 3",
            column_name: "u_mfa_enabled",
        });

        data.q4 = $sp.getWidget("rsc_question_boolean", {
            title: "Question 4",
            column_name: "u_backup_data",
        });

        data.q6 = $sp.getWidget("rsc_question_boolean", {
            title: "Question 4a",
            column_name: "u_backup_auto",
        });

        data.q7 = $sp.getWidget("rsc_question_boolean", {
            title: "Question 4b",
            column_name: "u_backup_access",
        });

        data.q9 = $sp.getWidget("rsc_question_boolean", {
            title: "Question 5",
            column_name: "u_security_features",
        });

        data.q10 = $sp.getWidget("rsc_question_boolean", {
            title: "Question 6",
            column_name: "u_fw_av",
        });

        data.q11 = $sp.getWidget("rsc_question_boolean", {
            title: "Question 7",
            column_name: "u_disable_svcs",
        });

        data.q12 = $sp.getWidget("rsc_question_boolean", {
            title: "Question 8",
            column_name: "u_software_updates",
        });
        data.q14 = $sp.getWidget("rsc_question_boolean", {
            title: "Question 9",
            column_name: "u_trusted_software"
        });

        data.q13 = $sp.getWidget("rsc_question_boolean", {
            title: "Question 10",
            column_name: "u_sm_inc_response_plan",
        });
    */
    // START Baseline
    data.qC2_3 = $sp.getWidget("rsc_question_state", {
        title: "Question 2.3",
        column_name: "u_asset_inventory",
    });

    data.qC4_2 = $sp.getWidget("rsc_question_state", {
        title: "Question 4.2",
        column_name: "u_annual_cyber_training",
    });

    data.qC5_5 = $sp.getWidget("rsc_question_state", {
        title: "Question 5.5",
        column_name: "u_3rd_party_cyber_validation",
    });
    // END Baseline

    // START Data Security
    data.qC1_2 = $sp.getWidget("rsc_question_state", {
        title: "Question 1.2",
        column_name: "u_log_unsuccessful_login",
    });

    data.qC3_1 = $sp.getWidget("rsc_question_state", {
        title: "Question 3.1",
        column_name: "u_log_storage",
    });

    data.qC3_2 = $sp.getWidget("rsc_question_state", {
        title: "Question 3.2",
        column_name: "u_log_storage_detect_resp",
    });

    data.qB1_1 = $sp.getWidget("rsc_question_state", {
        title: "Question 1.0",
        column_name: "u_iam_security",
    });

    data.qB1_7 = $sp.getWidget("rsc_question_state", {
        title: "Question 7.0",
        column_name: "u_inc_response_plan",
    });

    data.qC2_1 = $sp.getWidget("rsc_question_state", {
        title: "Question 2.1",
        column_name: "u_hw_software_firmware_approval",
    });

    data.qC7_3 = $sp.getWidget("rsc_question_state", {
        title: "Question 7.3",
        column_name: "u_inc_reporting_policy",
    });

    data.qC2_4 = $sp.getWidget("rsc_question_state", {
        title: "Question 2.4",
        column_name: "u_prohibit_unauth_devices",
    });

    data.qC2_5 = $sp.getWidget("rsc_question_state", {
        title: "Question 2.5",
        column_name: "u_network_diagrams",
    });

    data.qC4_1 = $sp.getWidget("rsc_question_state", {
        title: "Question 4.1",
        column_name: "u_named_cyber_role",
    });

    data.qC4_3 = $sp.getWidget("rsc_question_state", {
        title: "Question 4.3",
        column_name: "u_ot_cyber_training",
    });

    data.qC5_3 = $sp.getWidget("rsc_question_state", {
        title: "Question 5.3",
        column_name: "u_public_services_disabled",
    });

    data.qC5_4 = $sp.getWidget("rsc_question_state", {
        title: "Question 5.4",
        column_name: "u_no_public_devices",
    });

    data.qC1_1 = $sp.getWidget("rsc_question_state", {
        title: "Question 1.1",
        column_name: "u_pw_length",
    });

    data.qC3_4 = $sp.getWidget("rsc_question_state", {
        title: "Question 3.4",
        column_name: "u_secure_credential_storage",
    });

    data.qC7_4 = $sp.getWidget("rsc_question_state", {
        title: "Question 7.4",
        column_name: "u_regular_backups",
    });

    data.qB1_2 = $sp.getWidget("rsc_question_state", {
        title: "Question 2.0",
        column_name: "u_device_config",
    });

    data.qB1_3 = $sp.getWidget("rsc_question_state", {
        title: "Question 3.0",
        column_name: "u_cia_data",
    });

    data.qB1_4 = $sp.getWidget("rsc_question_state", {
        title: "Question 4.0",
        column_name: "u_governance_training",
    });

    data.qC1_3 = $sp.getWidget("rsc_question_state", {
        title: "Question 1.3",
        column_name: "u_change_default_pw",
    });

    data.qC1_7 = $sp.getWidget("rsc_question_state", {
        title: "Question 1.7",
        column_name: "u_departing_employee_return",
    });

    data.qC2_6 = $sp.getWidget("rsc_question_state", {
        title: "Question 2.6",
        column_name: "u_basline_config_documents",
    });

    data.qC3_3 = $sp.getWidget("rsc_question_state", {
        title: "Question 3.3",
        column_name: "u_connect_deny_default",
    });

    data.qC3_6 = $sp.getWidget("rsc_question_state", {
        title: "Question 3.6",
        column_name: "u_email_tls_dkim",
    });

    data.qC7_1 = $sp.getWidget("rsc_question_state", {
        title: "Question 7.1",
        column_name: "u_asset_recovery_plan",
    });

    data.qC7_2 = $sp.getWidget("rsc_question_state", {
        title: "Question 7.2",
        column_name: "u_cyber_incident_plan",
    });

    data.qB1_5 = $sp.getWidget("rsc_question_state", {
        title: "Question 5.0",
        column_name: "u_vul_management",
    });

    data.qB1_6 = $sp.getWidget("rsc_question_state", {
        title: "Question 6.0",
        column_name: "u_supply_chain_risk",
    });

    data.qC1_4 = $sp.getWidget("rsc_question_state", {
        title: "Question 1.4",
        column_name: "u_strong_mfa",
    });

    data.qC1_5 = $sp.getWidget("rsc_question_state", {
        title: "Question 1.5",
        column_name: "u_separate_admin",
    });

    data.qC1_6 = $sp.getWidget("rsc_question_state", {
        title: "Question 1.6",
        column_name: "u_unique_svc_accounts",
    });

    data.qC3_5 = $sp.getWidget("rsc_question_state", {
        title: "Question 3.5",
        column_name: "u_tls_enabled",
    });

    data.qC3_7 = $sp.getWidget("rsc_question_state", {
        title: "Question 3.7",
        column_name: "u_ttp_list",
    });

    data.qC5_2 = $sp.getWidget("rsc_question_state", {
        title: "Question 5.2",
        column_name: "u_security_research_contact",
    });

    data.qC6_1 = $sp.getWidget("rsc_question_state", {
        title: "Question 6.1",
        column_name: "u_security_inc_sla",
    });

    data.qC6_2 = $sp.getWidget("rsc_question_state", {
        title: "Question 6.2",
        column_name: "u_security_vuln_sla",
    });

    data.qC6_3 = $sp.getWidget("rsc_question_state", {
        title: "Question 6.3",
        column_name: "u_vendor_eval_docs",
    });

    data.qC5_1 = $sp.getWidget("rsc_question_state", {
        title: "Question 5.1",
        column_name: "u_kev_mitagation",
    });

    data.qC2_2 = $sp.getWidget("rsc_question_state", {
        title: "Question 2.2 ",
        column_name: "u_macros_disabled",
    });

    data.qD1_2 = $sp.getWidget("rsc_question_boolean", {
        column_name: "u_small_business",
    });

    data.qD1_3 = $sp.getWidget("rsc_question_boolean", {
        column_name: "u_employees",
    });

    data.qD1_12 = $sp.getWidget("rsc_question_boolean", {
        column_name: "u_cisa_services",
    });

    var statusModalOptions = [{
        "name": "Fundamental Cybersecurity Practices",
        "template": "rsc_question_introduction",
        "org_size": "large",
        "selected": false,
        "childSelected": true,
        "children": [{
            "name": "Identity Access Management (IAM)",
            "selected": false,
            "template": "rsc_iam",
            "completedPoints": 0,
            "totalPoints": 7
        }, {
            "name": "Device Configuration & Security",
            "selected": false,
            "template": "rsc_device_configuration_security",
            "completedPoints": 0,
            "totalPoints": 6
        }, {
            "name": "Data Security",
            "selected": false,
            "template": "rsc_data_security",
            "completedPoints": 0,
            "totalPoints": 7
        }, {
            "name": "Governance & Training",
            "selected": false,
            "template": "rsc_governance_training",
            "completedPoints": 0,
            "totalPoints": 3
        }, {
            "name": "Vulnerability Management",
            "selected": false,
            "template": "rsc_vulnerability_management",
            "completedPoints": 0,
            "totalPoints": 5
        }, {
            "name": "Supply Chain Risk Management",
            "selected": false,
            "template": "rsc_supply_chain_risk_management",
            "completedPoints": 0,
            "totalPoints": 3
        }, {
            "name": "Incident Response",
            "selected": false,
            "template": "rsc_incident_response",
            "completedPoints": 0,
            "totalPoints": 4
        }]
    }, {
        "name": "Regional Information",
        "template": "rsc_general_org_info",
        "org_size": "large",
        "selected": false,
        "childSelected": true,
        "completedPoints": 0,
        "totalPoints": 1,
        "children": []
    }, {
        "name": "Summary and Resources",
        "template": "rsc_intake_summary",
        "org_size": "large",
        "selected": false,
        "childSelected": false,
        "children": []
    }, {
        "name": "Fundamental Cybersecurity Practices",
        "template": "rsc_question_introduction",
        "org_size": "medium",
        "selected": false,
        "childSelected": true,
        "children": [{
            "name": "Identity Access Management (IAM)",
            "selected": false,
            "template": "rsc_iam",
            "completedPoints": 0,
            "totalPoints": 8
        }, {
            "name": "Device Configuration & Security",
            "selected": false,
            "template": "rsc_device_configuration_security",
            "completedPoints": 0,
            "totalPoints": 7
        }, {
            "name": "Data Security",
            "selected": false,
            "template": "rsc_data_security",
            "completedPoints": 0,
            "totalPoints": 8
        }, {
            "name": "Governance & Training",
            "selected": false,
            "template": "rsc_governance_training",
            "completedPoints": 0,
            "totalPoints": 4
        }, {
            "name": "Vulnerability Management",
            "selected": false,
            "template": "rsc_vulnerability_management",
            "completedPoints": 0,
            "totalPoints": 6
        }, {
            "name": "Supply Chain Risk Management",
            "selected": false,
            "template": "rsc_supply_chain_risk_management",
            "completedPoints": 0,
            "totalPoints": 4
        }, {
            "name": "Incident Response",
            "selected": false,
            "template": "rsc_incident_response",
            "completedPoints": 0,
            "totalPoints": 5
        }]
    }, {
        "name": "Regional Information",
        "template": "rsc_general_org_info",
        "org_size": "medium",
        "selected": false,
        "completedPoints": 0,
        "totalPoints": 1,
        "childSelected": true,
        "children": []
    }, {
        "name": "Summary and Resources",
        "template": "rsc_intake_summary",
        "org_size": "medium",
        "selected": false,
        "childSelected": false,
        "children": []
    }, {
        "name": "Security Best Practices",
        "template": "rsc_security_best_practices",
        "org_size": "small",
        "selected": false,
        "completedPoints": 0,
        "totalPoints": 12,
        "childSelected": true,
        "children": []
    }, {
        "name": "Regional Information",
        "template": "rsc_general_org_info",
        "org_size": "small",
        "selected": false,
        "completedPoints": 0,
        "totalPoints": 1,
        "childSelected": true,
        "children": []
    }, {
        "name": "Summary and Resources",
        "template": "rsc_intake_summary",
        "org_size": "small",
        "selected": false,
        "childSelected": false,
        "children": []
    }];
    data.statusModalOptions = {
        section: JSON.stringify(statusModalOptions)
    };

    data.formFields = [{
            template: "rsc_security_best_practices",
            column: "u_pw_different",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_pw_strong",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_mfa_enabled",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_backup_data",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_backup_auto",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_backup_access",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_security_features",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_fw_av",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_disable_svcs",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_software_updates",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_trusted_software",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_sm_inc_response_plan",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_iam",
            column: "u_iam_security",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_iam",
            column: "u_pw_length",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_iam",
            column: "u_log_unsuccessful_login",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_iam",
            column: "u_change_default_pw",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_iam",
            column: "u_strong_mfa",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_iam",
            column: "u_separate_admin",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_iam",
            column: "u_unique_svc_accounts",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_iam",
            column: "u_departing_employee_return",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_device_config",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_hw_software_firmware_approval",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_macros_disabled",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_asset_inventory",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_prohibit_unauth_devices",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_network_diagrams",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_basline_config_documents",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_cia_data",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_data_security",
            column: "u_log_storage",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_log_storage_detect_resp",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_connect_deny_default",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_secure_credential_storage",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_tls_enabled",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_email_tls_dkim",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_ttp_list",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_governance_training",
            column: "u_governance_training",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_governance_training",
            column: "u_named_cyber_role",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_governance_training",
            column: "u_annual_cyber_training",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_governance_training",
            column: "u_ot_cyber_training",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_vulnerability_management",
            column: "u_vul_management",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_vulnerability_management",
            column: "u_kev_mitagation",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_vulnerability_management",
            column: "u_security_research_contact",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_vulnerability_management",
            column: "u_public_services_disabled",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_vulnerability_management",
            column: "u_no_public_devices",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_vulnerability_management",
            column: "u_3rd_party_cyber_validation",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_supply_chain_risk_management",
            column: "u_supply_chain_risk",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_supply_chain_risk_management",
            column: "u_security_inc_sla",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_supply_chain_risk_management",
            column: "u_security_vuln_sla",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_supply_chain_risk_management",
            column: "u_vendor_eval_docs",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_incident_response",
            column: "u_inc_response_plan",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_incident_response",
            column: "u_asset_recovery_plan",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_incident_response",
            column: "u_cyber_incident_plan",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_incident_response",
            column: "u_inc_reporting_policy",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_incident_response",
            column: "u_regular_backups",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_general_org_info",
            column: "u_hq_location",
            small: true,
            medium: true,
            large: true,
        },
    ];


})();
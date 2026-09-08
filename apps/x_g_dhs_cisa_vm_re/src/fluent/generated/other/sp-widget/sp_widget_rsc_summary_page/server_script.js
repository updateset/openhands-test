(function () {

	// User Information
	data.isLoggedIn = gs.isLoggedIn();



	// URL Params
	data.org_size = 'small'; // Default to small for now
	data.pageId = $sp.getParameter("id");



	// Retrieve Questionnaire
	data.responses = {};

	function getQuestionnaires() {
		try {
			var util = new x_g_dhs_cisa_vm_re.RSCSyncUtil();
			return util.getSurveys();

		} catch (e) {
			return e.message;
		}
	}

	// User information
	data.accessRestricted = true;
	if (gs.isLoggedIn()) {
		data.user = true;
		if (data.pageId) {
			var survey = getQuestionnaires();
			data.test = survey;
			if (survey[$sp.getParameter("record")] == undefined) {
				gs.addErrorMessage('Record Not found!');
				data.accessRestricted = true;
				return;
			} else {
				data.accessRestricted = false;
			}
			data.responses = survey[$sp.getParameter("record")];
			data.org_size = data.responses.organization_size;
		}
	} else {
		gs.addErrorMessage('Record Not found!');
		data.user = false;
	}



	// START State compilation
	function tableAPI(query, fields, table) {
		try {
			var util = new x_g_dhs_cisa_vm_re.RSCSyncUtil();
			return util.getCSDTableData(query, fields, table);

		} catch (e) {
			return e.message;
		}
	}

	data.states = tableAPI('gen_location_typeLIKE79d9a908dbdaf7003890341f7c961980^ORDERBYname', 'name,sys_id,parent.name', 'x_dhs_location_dhs_location').body.result;
	data.terms = tableAPI('current!=false^type=questionnaire', 'terms.template,sys_id', 'x_aver_cisa_vm_policy').body.result;
	// END State compilation



	// START Templatized Question Widgets
	data.q1 = $sp.getWidget("rsc_question_boolean", {
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

	/* template
	  data.q_ = $sp.getWidget('rsc_question_state', {
		  title: "Question ",
		  column_name: 'here'
	  });
	  */
	// END Templatized Question Widgets

})();
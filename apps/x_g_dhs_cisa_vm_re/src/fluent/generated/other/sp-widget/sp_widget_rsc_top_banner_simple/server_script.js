(function () {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */

	// Timeout properties
	data.redirect = gs.getProperty('x_g_dhs_cisa_vm_re.rsc_timeout_redirect');


	// Track Page ID
	data.pageId = $sp.getParameter("id");

	// DAP Analytics
	data.src = gs.getProperty('x_g_dhs_cisa_vm_re.rsc_dap_src');
	data.collectAnalytics = false;

	var pages = ['rsc_login_page', 'rsc_index', 'rsc_welcome', 'rsc_intake', 'rsc_cyhy_enrollment_landing'];

	if (data.pageId == null) {
		data.collectAnalytics = true;
	}
	if (pages.indexOf(data.pageId) > -1) {
		data.collectAnalytics = true;
	}


	// Retrieve Completed Questionnaries
	function getQuestionnaires() {
		try {
			var util = new x_g_dhs_cisa_vm_re.RSCSyncUtil();
			return util.getSurveys();

		} catch (e) {
			return e.message;
		}
	}

	function tableAPI(query, fields, table) {
		try {
			var util = new x_g_dhs_cisa_vm_re.RSCSyncUtil();
			return util.getCSDTableData(query, fields, table);

		} catch (e) {
			return e.message;
		}
	}

	if (gs.isLoggedIn()) {
		data.user = true;

		var first = gs.getUser().getFirstName(),
			last = gs.getUser().getLastName();
		data.userInitials = first.substring(0, 1) + last.substring(0, 1);

		// data.contact = tableAPI('email=' + gs.getUser().getEmail(), 'sys_id,account,account.phone,account.name,account.street,account.city,account.zip,account.u_state_province.name,account.u_county', 'customer_contact').body.result;

		var items = getQuestionnaires();
		data.tableItems = [];
		data.count = 0;

		// Load user
		data.load = gs.getUser().isMemberOf('Early Release');

		if (items.hasOwnProperty('count')) {
			data.count = items.count;
		}

	} else {
		data.user = false;
	}

})();
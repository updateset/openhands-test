(function() {
    /* populate the 'data' object */
    /* e.g., data.table = $sp.getValue('table'); */
    data.simpleBanner = $sp.getWidget('rsc_top_banner_simple');
    data.usaBanner = $sp.getWidget('rsc_usa_banner');

    function tableAPI(query, fields, table) {
        try {
            var util = new x_g_dhs_cisa_vm_re.RSCSyncUtil();
            return util.getCSDTableData(query, fields, table);

        } catch (e) {
            return e.message;
        }
    }


    if (gs.isLoggedIn()) {
        data.contact = tableAPI('email=' + gs.getUser().getEmail(), 'sys_id,account,account.phone,account.name,account.street,account.city,account.zip,account.u_state_province.name,account.u_county', 'customer_contact').body.result;
    }

	// DAP Analytics
	data.src = gs.getProperty('x_g_dhs_cisa_vm_re.rsc_dap_src');
	data.collectAnalytics = false;
	data.pageId = $sp.getParameter("id");
	var pages = ['rsc_login_page', 'rsc_index', 'rsc_welcome', 'rsc_intake', 'rsc_cyhy_enrollment_landing'];
	
	if (data.pageId == null) {
		data.collectAnalytics = true;
	}
	if (pages.indexOf(data.pageId) > -1) {
		data.collectAnalytics = true;
	}

})();
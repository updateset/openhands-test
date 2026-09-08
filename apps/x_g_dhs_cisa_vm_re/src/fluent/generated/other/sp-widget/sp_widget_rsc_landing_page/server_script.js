(function () {

	if (gs.isLoggedIn()) {
		data.user = true;
	} else {
		data.user = false;
	}

	function tableAPI(query, fields, table) {
		try {
			var util = new x_g_dhs_cisa_vm_re.RSCSyncUtil();
			return util.getCSDTableData(query, fields, table);

		} catch (e) {
			return e.message;
		}
	}

	// data.terms = tableAPI('current!=false^type=questionnaire', 'terms.template,sys_id', 'x_aver_cisa_vm_policy').body.result;

})();
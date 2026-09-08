api.controller = function (rscContactFactory) {
	/* widget controller */
	var c = this;

	// window.onload = function () {
	if (c.data.collectAnalytics) {
		var dap = document.createElement('script');
		dap.src = c.data.src;
		dap.id = '_fed_an_ua_tag';
		dap.type = 'text/javascript';
		dap.async = true;

		document.head.appendChild(dap);
	}
	// <script async type="text/javascript" src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=dhs&subagency=CISA&dapdev=true" id="_fed_an_ua_tag"></script>
	// }


	if (c.data.contact != undefined && c.data.contact.length > 0) {
		if (c.data.contact[0].account.value) {
			rscContactFactory.account = c.data.contact[0].account.value || "";
			rscContactFactory.phone = c.data.contact[0]["account.phone"] || "";
			rscContactFactory.account_name = c.data.contact[0]["account.name"] || "";
			rscContactFactory.account_address = c.data.contact[0]["account.street"] || "";
			rscContactFactory.account_city = c.data.contact[0]["account.city"] || "";
			rscContactFactory.account_zip = c.data.contact[0]["account.zip"] || "";
			rscContactFactory.account_state = c.data.contact[0]["account.u_state_province.name"] || "";
			rscContactFactory.account_county = c.data.contact[0]["account.u_county"] || "";
		} else {
			rscContactFactory.account = "";
		}

		rscContactFactory.sys_id = c.data.contact[0].sys_id;
	}

	//Logging
	// window.rsc = {
	// 	controller: c,
	// 	contactFactory: rscContactFactory
	// };

};
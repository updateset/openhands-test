(function () {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */

	data.siteKey = gs.getProperty("x_g_dhs_cisa_vm_re.rsc_google_site_key");
	data.user_ip = gs.getSession().getClientIP();
	data.user_agent = '';
	data.response = {};
	data.letter = {};

	if (gs.isLoggedIn()) {
		data.user = {
			"email": gs.getUser().getEmail(),
			"first": gs.getUser().getFirstName(),
			"last": gs.getUser().getLastName()
		};
	}

	//retrieve content letter content
	var gsa = new GlideSysAttachment();
	var file = gsa.getAttachments('sys_properties', gs.getProperty('x_g_dhs_cisa_vm_re.acceptance_letter'));

	if (file.next()) {
		data.letter.file_name = file.getValue('file_name');
		data.letter.content_type = file.getValue('content_type');
		data.letter.content = gsa.getContentBase64(file);
	}


	function tableAPI(query, fields, table) {
        try {
            var util = new x_g_dhs_cisa_vm_re.RSCSyncUtil();
            return util.getCSDTableData(query, fields, table);

        } catch (e) {
            return e.message;
        }
    }
	

	data.isLoggedIn = gs.isLoggedIn();

	// Load Acceptance Letter Terms
	if (data.isLoggedIn) {
		// data.terms = tableAPI('current=true^type=cyhy_vs_enrollment', 'terms.template', 'x_aver_cisa_vm_policy').body.result;
	}


	// if (input && input.action && input.action == "submit") {

	// 	var apiUtil = new x_g_dhs_cisa_vm_re.RSCSyncUtil(),
	// 		reCaptcha = null,
	// 		captchaAction = input.action,
	// 		captchaError = "<p>Error processing your request due to reCaptcha failure.</p><p>For more information on this please reference this <a href='https://developers.google.com/search/blog/2018/10/introducing-recaptcha-v3-new-way-to'>Article</a></p>";

	// 	// reCaptcha Processing
	// 	data.response.captcha = true;
		// if (input.hasOwnProperty('token')) {
		// 	reCaptcha = JSON.parse(
		// 		apiUtil.verifyReCaptcha(
		// 			input.token,
		// 			captchaAction,
		// 			data.user_ip,
		// 			input.user_agent
		// 		)
		// 	);
		// } else {
		// 	gs.addErrorMessage(captchaError);
		// 	data.response.captcha = false;
		// 	return;
		// }

	// 	data.test = reCaptcha;

	// 	try {
	// 		var passingScore = parseFloat(
	// 			gs.getProperty("x_g_dhs_cisa_vm_re.rsc_google_score")
	// 		);

	// 		if (gs.isLoggedIn()) {
	// 			reCaptcha.riskAnalysis.score += parseFloat(
	// 				gs.getProperty("x_g_dhs_cisa_vm_re.rsc_google_logged_in_score")
	// 			);
	// 		}

	// 		if (reCaptcha.riskAnalysis.score < passingScore) {
	// 			gs.addErrorMessage(captchaError);

	// 			data.response.captcha = false;
	// 			return;
	// 		} else {
	// 			enrollmentAPI(input.vars);
	// 		}
	// 	} catch (ex) {
	// 		gs.addErrorMessage(captchaError);

	// 		data.response.captcha = false;
	// 		return;
	// 	}

	// }


	/*
		service = sys id's of services'
		files = {"files":[{"fileName":"Test.txt","content":"I am text.","ContentType":"text/csv"}]}
		We Encode the content to base64 Encoded
	*/
	function enrollmentAPI(payload) {

		payload.u_requested_for = gs.getUser().getEmail();
		var gnisAPI = new rscUSGS();
		var location = gnisAPI.getDetails(payload.city, payload.u_state, payload.county);

		var apiUtil = new RSCSyncUtil();
		var result = apiUtil.submitEnrollment({ ...payload, ...location });
		data.response.submission = result;
	}

})();
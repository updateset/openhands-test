api.controller = function (rscNav, rscForm, rscStateRegions, $window, $timeout, $document) {
	/* widget controller */
	var c = this;

	// Set user agent
	c.data.user_agent = $window.navigator.userAgent;


	// Init
	c.nav = rscNav;
	c.loading = false;


	// User analysis
	c.user = {
		"account": c.data.accountId != '' ? true : false,
		"loggedIn": c.data.isLoggedIn,
	};	


	c.rscForm = rscForm;
	c.rscForm.setElements(c.data.elements);
	c.rscForm.initialize(c.data.case_id);

	c.state = rscStateRegions;
	c.state.loadStates(c.data.states);


	// Setup email field
	if (c.data.user) {
		c.rscForm.customer_email = c.data.user.email;
	}


	c.evalSubmitFlag = false;
	c.evalSubmit = function () {
		// Pass user to submit when they are authenticated
		if (c.user.loggedIn) {
			c.submit();
		} else {
			// Nudge the user to provide email
			if (c.rscForm.customer_email == '') {
				c.evalSubmitFlag = true;
			} 
			// Don't bother the user if they already provided an email
			else {
				c.submit();
			}
		}
	};

	c.submit = function (parm) {
		// User does not wish to save their email address
		if (parm == 1) {
			c.rscForm.customer_email = '';
		}

		// Disable modal if submission occurs
		c.evalSubmitFlag = false;
		
		// Enable loading spinner
		c.loading = true;

		grecaptcha.enterprise.ready(function () {
			grecaptcha.enterprise.execute(c.data.siteKey, {
				action: 'submit_questionnaire'
			}).then(function (resp) {

				// Submit
				c.server.get({
					"action": "submit_questionnaire",
					"submit": true,
					"responses": rscForm.getRestBody(),
					"email": c.rscForm.customer_email,
					"user_agent": c.data.user_agent,
					"token": resp
				}).then(function (r) {

					if (r.data.response.captcha == false) {
						$timeout(() => {
							c.navigate('/rsc?id=rsc_welcome');
						}, 5000);
					} else {
						// Paginate and end spin
						$timeout(() => {
							c.nav.nextPage();
							c.loading = false;
						}, 2000);
					}
				});
			});
		});
	};


	// Set title
	var title = "RSC Intake";
	c.template_header_org_size = "";
	c.org_image_src = "";

	if (c.data.org_size == 'small') {
		title += " Small - ReadySetCyber";
		c.template_header_org_size = "Small Organizations";
		c.org_image_src = "/x_g_dhs_cisa_vm_re.small-org.svg";
	} else if (c.data.org_size == 'medium') {
		title += " Medium - ReadySetCyber";
		c.template_header_org_size = "Medium Organizations";
		c.org_image_src = "/x_g_dhs_cisa_vm_re.medium-org.svg";
	} else if (c.data.org_size == 'large') {
		title += " Large - ReadySetCyber";
		c.template_header_org_size = "Large Organizations";
		c.org_image_src = "/x_g_dhs_cisa_vm_re.large-org.svg";
	}
	$(document).prop('title', title);


	// Modal for tooltips
	c.show_global_modal = false;
	c.global_modal_template = "";

	c.toggle_global_modal = function (template) {
		c.global_modal_template = template ? template : "";
		c.show_global_modal = !c.show_global_modal;
	};


	// START Navigation Logic
	c.navigate = function (link) {
		window.open(link, '_self');
	};

	c.requestNav = function () {
		var url = "/rsc?id=rsc_request_account";
		window.open(url, "_self");
	};

	c.loginNav = function () {
		var url = "/rsc?id=login";
		window.open(url, "_self");
	};

	c.getFooter = function () {
		// // Set the form nav footer based on the current page. Default to normal nav footer.
		var footer = "rsc_intake_footer";
		switch (c.nav.getTemplate()) {
			case "rsc_general_org_info":
				footer = "rsc_intake_submit_footer";
				break;
			case "rsc_intake_summary":
				footer = "rsc_intake_summary_footer";
				break;
			default:
				footer = "rsc_intake_footer";
		}
		return footer;
	};
	// END Navigation Logic

	c.baselineValidation = function (question) {
		if ((c.rscForm.elements[question].value && c.rscForm.elements[question].value != "not_started") || c.data.org_size == 'large') {
			return true;
		} else {
			return false;
		}
	};



	// Scroll Top
	c.top = function () {
		var element = document.getElementById('rsc-intake-top');
		if (element) {
			element.scrollIntoView({
				block: "nearest",
				behavior: "smooth",
			});

		}
	};



	// START Print
	c.print = function () {
		window.print();
	};
	// END Print


	// Logging
	// window.rsc = {
	// 	controller: c,
	// 	rscForm
	// };	

};
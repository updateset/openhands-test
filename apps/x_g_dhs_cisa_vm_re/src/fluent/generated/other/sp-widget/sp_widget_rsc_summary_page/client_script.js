api.controller = function (rscContactFactory, rscStateRegions, rscSummary, rscForm, $timeout) {
	/* widget controller */
	var c = this;

	if (c.data.accessRestricted == true) {
		$timeout(() => {
			window.open('/rsc?id=rsc_welcome', '_self');
		}, 2000);

	}

	// Send back to welcome page if they don't have an account
	if (rscContactFactory.account == '') {
		window.open('/rsc?id=rsc_welcome', '_self');
	}

	// Init
	c.nav = rscSummary;
	c.nav.loadOrgSize(c.data.org_size);
	rscForm.elements = {};
	c.rscForm = rscForm;

	c.state = rscStateRegions;
	c.state.loadStates(c.data.states);



	if (c.data.responses != {}) {
		c.rscForm.elements.number = { value: c.data.responses.number };
		c.rscForm.elements.version = { value: c.data.responses.version };
		c.rscForm.elements.updated = { value: c.data.responses.sys_updated_on };
		for (var r in c.data.responses.answers) {
			if (c.rscForm.elements[r] == undefined) {
				c.rscForm.elements[r] = {
					value: ""
				}
			}
			if (r === 'u_hq_location') {
				c.rscForm.elements[r].value = c.data.responses.answers[r]
				['question_answer_text'];
				c.state.recordState(c.rscForm.elements[r].value);
				continue;
			}

			c.rscForm.elements[r].value = c.data.responses.answers[r]['question_answer_text'].toLowerCase().split('/')[0].replace(' ', '_');
		}
	}



	// User analysis
	c.user = {
		"account": rscContactFactory.account != '' ? true : false,
		"loggedIn": c.data.user,
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



	// Page Navigation
	c.requestNav = function () {
		var url = "/rsc?id=rsc_request_account";
		window.open(url, "_self");
	};

	c.navigate = function () {
		var url = "/rsc?id=rsc_welcome";
		window.open(url, "_self");
	}



	c.baselineValidation = function (question) {
		// When org size is large the leading question will not be present
		if (c.data.org_size == 'large') {
			return true;
		}
		
		if (c.rscForm.elements[question].value && c.rscForm.elements[question].value != "not_started") {
			return true;
		}
		
		return false;
	};



	// Scroll Top
	c.top = function () {
		var element = document.getElementById('sum_top');
		if (element) {
			element.scrollIntoView({
				block: "nearest",
				behavior: "smooth",
			});

		}
	}



	// START Print
	c.print = function () {
		window.print();
	};

	// window.rsc = {
	// 	controller: c
	// };

};
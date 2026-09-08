api.controller = function (rscContactFactory, rscOrgRequestFactory, iepDataManager, $window, $timeout) {
	/* widget controller */
	var c = this;

	// DAP Analytics
	// if (c.data.collectAnalytics) {
	// 	var dap = document.createElement('script');
	// 	dap.src = c.data.src;
	// 	dap.id = '_fed_an_ua_tag';
	// 	dap.type = 'text/javascript';
	// 	dap.async = true;

	// 	document.head.appendChild(dap);
	// }


	// Apply contact information to factory
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


	// Timeout Logic
	c.timeout = false;

	// Helper function to cancel timeout function with each heartbeat
	c.cancelTimeout = function (timeout) {
		if (timeout) {
			$timeout.cancel(timeout);
		}
	};

	// Wrap heartbeat monitor in if condition in case we need to quickly disable it once in Prod.
	// if (c.data.redirect == true) {
	// 	// Listen for system heartbeat
	// 	// Heartbeat will be found every 30 seconds if the user session is active
	// 	window.amb.getClient().getChannel('/meta/connect').subscribe(function (message) {
	// 		// Cancel the timeout function if a heartbeat is located
	// 		c.cancelTimeout(c.timeout);

	// 		// This function only runs if the heartbeat isn't found in the last 30 seconds
	// 		// 31250 milliseconds should allow for buffer if heartbeat isn't exactly 30 seconds
	// 		c.timeout = $timeout(function () {
	// 			$window.location.assign("/rsc");
	// 		}, 31250);
	// 	});
	// }


	// Routing for user click on My Questionnaire link
	c.submitted = function () {
		return rscOrgRequestFactory.eval();
	};

	c.myQuestionnaires = function () {
		if (c.data.pageId == 'rsc_request_account' && c.submitted()) {
			window.open('/rsc?id=rsc_my_questionnaires', '_self');
		} else if (rscContactFactory.account != '') {
			window.open('/rsc?id=rsc_my_questionnaires', '_self');
		} else {
			c.queueModal(1);
		}
	};

	// Questionnaire Modal
	c.accountRegistration = false;
	c.queueModal = function (parm) {
		c.accountRegistration = !c.accountRegistration;

		if (parm == 2) {
			window.open('/rsc?id=rsc_request_account', '_self');
		}

	};


	// Avatar Options
	c.areOptionsOpen = false;

	c.toggleOptions = function () {
		c.areOptionsOpen = !c.areOptionsOpen;
	};

	c.closeOptions = function () {
		c.areOptionsOpen = false;
	};


	// Determine IEP Menu options
	c.iep = iepDataManager;

	c.iepOptionsCheck = function (option) {
		c.orgs = c.iep.getOrgs();
		if (c.orgs.length == 0) {
			if (option.name == 'Meet with CISA') {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	};


	// Menu Options
	c.menuOneItems = [{
		name: "Report a Cyber Incident",
		link: "/irf?id=irf_incident_reporting_start",
		target: "_self",
	},
	{
		name: "Share Indicators and Defensive Measures",
		link: "https://www.cisa.gov/forms/share-indicators",
		target: "_blank",
	},
	{
		name: "Report Malware",
		link: "https://www.malware.us-cert.gov/",
		target: "_blank",
	},
	{
		name: "Report Software or ICS Vulnerabilities",
		link: "https://www.kb.cert.org/vuls/report/",
		target: "_blank",
	},
	{
		name: "Report Vulnerabilities in U.S. Government Websites",
		link: "https://www.kb.cert.org/vuls/report/",
		target: "_blank",
	},
	];

	c.menuTwoItems = [{
		name: "ReadySetCyber",
		link: "/rsc?id=rsc_welcome",
		target: "_self",
	},
	{
		name: "Enroll in Cyber Hygiene",
		link: "/rsc?id=rsc_cyhy_enrollment_landing",
		target: "_self",
	},
	{
		name: "Chat with CISA",
		link: "https://www.cisa.gov/about/regions",
		target: "_blank",
	},
	];

	c.menuThreeItems = [{
		name: "Meet with CISA",
		link: "/iep?id=iephome",
		target: "_self",
	},
	{
		name: "My Organization Profile",
		link: "/iep?id=iep_my_organization",
		target: "_self",
	},
	{
		name: "Request a Meeting",
		link: "/iep?id=iep_request_meeting",
		target: "_self",
	},
	{
		name: "My Meetings",
		link: "/iep?id=iep_my_meetings",
		target: "_self",
	},
	{
		name: "My Organizations Capabilities",
		link: "/iep?id=iep_view_capabilities",
		target: "_self",
	},
	];

};
import { SPAngularProvider } from '@servicenow/sdk/core'

SPAngularProvider({
    $id: Now.ID['aa58900687b08a50147ec9550cbb3590'],
    name: 'rscNav',
    type: 'factory',
    script: `function rscNav(rscForm, $timeout, $location, $anchorScroll, $rootScope) {
	var nav = {};

	nav.currentPage = 0;
	nav.show_url = false;
	nav.org_size = 'small'; // Default in the absence of selection

	/* Save the original
	nav.pages = [
		'rsc_general_org_info',
		'rsc_security_best_practices',
		'rsc_baseline',
		'rsc_iam',
		'rsc_device_configuration_security',
		'rsc_data_security',
		'rsc_governance_training',
		'rsc_vulnerability_management',
		'rsc_supply_chain_risk_management',
		'rsc_incident_response',
		'rsc_org_specific_info',
		'rsc_intake_summary'
	];	
	*/

	nav.pages = [];

	nav.smallPages = [
		'rsc_security_best_practices',
		'rsc_general_org_info',
		'rsc_intake_summary'
	];

	// Where does this go: 'rsc_org_specific_info'
	nav.medLargePages = [
		'rsc_question_introduction',
		'rsc_iam',
		'rsc_device_configuration_security',
		'rsc_data_security',
		'rsc_governance_training',
		'rsc_vulnerability_management',
		'rsc_supply_chain_risk_management',
		'rsc_incident_response',
		'rsc_general_org_info',
		'rsc_intake_summary'
	];

	nav.setPage = function (index) {
		if (rscForm.customer_email == undefined) {
			rscForm.customer_email = '';
		}

		$rootScope.$emit('rsc_save', {
			page: nav.pages[nav.currentPage]
		});

		if (index >= 0 && index < nav.pages.length)
			nav.currentPage = index;
		else
			nav.currentPage = 0;

		var element = document.getElementById('rsc-intake-top');
		if (element) {
			element.scrollIntoView({
				block: "nearest",
				behavior: "smooth",
			});

			$timeout(() => {
				document.getElementById('rsc-intake-container').focus();
			}, 1000);


		}

		// console.warn('Status Modal Logging', nav.currentPage);	
	}

	nav.pageJump = function (elementID) {
		$location.hash(elementID);
		$anchorScroll();
	}

	nav.getPage = function () {
		return nav.currentPage;
	}

	nav.isSummaryPage = function () {
		if (nav.currentPage == (nav.pages.length - 1)) {
			return true;
		}

		return false;
	}

	nav.nextPage = function () {
		nav.setPage(nav.currentPage + 1);
	}

	nav.prevPage = function () {
		nav.setPage(nav.currentPage - 1);
	}

	nav.getTemplate = function () {
		return nav.pages[nav.currentPage];
	}

	nav.loadOrgSize = function (size) {
		nav.org_size = size;

		// Change page array based on size
		if (size == 'small') {
			nav.pages = nav.smallPages;
		} else if (size == 'medium' || size == 'large') {
			nav.pages = nav.medLargePages;
		}
	}

	return nav;
}`,
})

import { SPAngularProvider } from '@servicenow/sdk/core'

SPAngularProvider({
    $id: Now.ID['c56bbfd387156a50ee0cb848cebb3559'],
    name: 'rscSummary',
    type: 'factory',
    script: `function rscSummary() {
	var obj = {};

	obj.org_size = 'small'; // Default in the absence of selection
	obj.show_url = false;

	obj.pages = [];
	obj.smallPages = [
		'rsc_sum_security_best_practices',
		'rsc_sum_general_org_info'
	];
	obj.medLargePages = [
		'rsc_sum_iam',
		'rsc_sum_device_configuration_security',
		'rsc_sum_data_security',
		'rsc_sum_governance_training',
		'rsc_sum_vulnerability_management',
		'rsc_sum_supply_chain_risk_management',
		'rsc_sum_incident_response',
		'rsc_sum_general_org_info'
	];

	obj.loadOrgSize = function (size) {
		obj.org_size = size;

		// Change page array based on size
		if (size == 'small') {
			obj.pages = obj.smallPages;
		} else if (size == 'medium' || size == 'large') {
			obj.pages = obj.medLargePages;
		}
	};

	obj.isSummaryPage = function () {
		return true;
	};

	return obj;
}`,
})

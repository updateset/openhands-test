import { SPAngularProvider } from '@servicenow/sdk/core'

SPAngularProvider({
    $id: Now.ID['7cbbd9a347ed62108d277d88c26d432f'],
    name: 'rscOrgRequestFactory',
    type: 'factory',
    script: `function rscOrgRequestFactory() {
    var obj = {};

	obj.submitted = false;

	obj.submit = function () {
		obj.submitted = true;
	};

	obj.eval = function () {
		return obj.submitted;
	};

	
    return obj;
}`,
})

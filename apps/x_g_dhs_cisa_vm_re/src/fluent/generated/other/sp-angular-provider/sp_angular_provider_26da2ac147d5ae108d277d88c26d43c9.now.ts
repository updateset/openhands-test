import { SPAngularProvider } from '@servicenow/sdk/core'

SPAngularProvider({
    $id: Now.ID['26da2ac147d5ae108d277d88c26d43c9'],
    name: 'rscContactFactory',
    type: 'factory',
    script: `function rscContactFactory() {
    var obj = {
		account : "",
		sys_id : "",
		phone: "",
		account_name: "",
		account_address:"",
		account_city: "",
		account_zip: "",
		account_state: "",
		account_county: "",
	};
    return obj;
}`,
})

import { SPAngularProvider } from '@servicenow/sdk/core'

SPAngularProvider({
    $id: Now.ID['7217481247f166108d277d88c26d4391'],
    name: 'rscCyhyFactory',
    type: 'factory',
    script: `function rscCyhyFactory() {
	var obj = {
		fields: {
			technical_poc_name: {
				label: "Technical Point of Contact Name",
				fieldType: "string",
				required: false,
				page: 1
			},
			technical_poc_first_name: {
				label: "Technical Point of Contact First Name",
				fieldType: "string",
				required: true,
				page: 1
			},
			technical_poc_last_name: {
				label: "Technical Point of Contact Last Name",
				fieldType: "string",
				required: true,
				page: 1
			},
			technical_poc_email: {
				label: "Technical Point of Contact Email",
				fieldType: "string",
				required: true,
				page: 1
			},
			technical_poc_phone: {
				label: "Technical Point of Contact Work Phone Number",
				fieldType: "string",
				required: true,
				page: 1
			},
			second_technical_poc: {
				label: "Add secondary technical point of contact",
				fieldType: "boolean",
				required: false,
				page: 1
			},
			technical_poc_2_name: {
				label: "Secondary Technical Point of Contact Name",
				fieldType: "string",
				required: false,
				page: 1
			},
			technical_poc_2_first_name: {
				label: "Secondary Technical Point of Contact First Name",
				fieldType: "string",
				required: function (form) {
					return form.second_technical_poc.value == true;
				},
				page: 1
			},
			technical_poc_2_last_name: {
				label: "Secondary Technical Point of Contact Last Name",
				fieldType: "string",
				required: function (form) {
					return form.second_technical_poc.value == true;
				},
				page: 1
			},
			technical_poc_2_email: {
				label: "Secondary Technical Point of Contact Email",
				fieldType: "string",
				required: function (form) {
					return form.second_technical_poc.value == true;
				},
				page: 1
			},
			technical_poc_2_phone: {
				label: "Secondary Technical Point of Contact Work Phone Number",
				fieldType: "string",
				required: function (form) {
					return form.second_technical_poc.value == true;
				},
				page: 1
			},
			distro_email: {
				label: "Distribution Email",
				fieldType: "string",
				required: true,
				page: 1
			},
			password_delivery: {
				label: "How would you like this password delivered",
				fieldType: "string",
				required: true,
				page: 1
			},
			u_requested_scan_start_date: {
				label: "When should scan(s) begin",
				fieldType: "string",
				required: false,
				page: 1
			},
			ip_addresses: {
				label: "IPv4 Addresses",
				fieldType: "string",
				required: true,
				page: 1
			},
			verified: {
				label: 'IPv4 Addresses: Please click "Verify Format" before proceeding',
				fieldType: "boolean",
				required: function (form) {
					return form.ip_addresses.value != '';
				},
				page: 1
			},
			review_attestation: {
				label: "By checking this box, you assert that you have read this legal document in full.",
				fieldType: "boolean",
				required: true,
				page: 2
			},
			typed_signature: {
				label: "Type your signature here",
				fieldType: "string",
				required: false,
				page: 2
			},
			signature: {
				label: "Signature",
				fieldType: "string",
				required: true,
				page: 2
			},
			signature_date_time: {
				label: "Signature Date Time",
				fieldType: "string",
				required: false,
				page: 2
			},
			authorized_name: {
				label: "Authorizing Official Name",
				fieldType: "string",
				required: false,
				page: 2
			},
			authorized_first_name: {
				label: "Authorizing Official First Name",
				fieldType: "string",
				required: false,
				page: 2
			},
			authorized_last_name: {
				label: "Authorizing Official Last Name",
				fieldType: "string",
				required: false,
				page: 2
			},
			authorized_email: {
				label: "Authorizing Official Email",
				fieldType: "string",
				required: false,
				page: 2
			},
			authorized_title: {
				label: "Authorizing Official Title",
				fieldType: "string",
				required: true,
				page: 2
			},
			authorized_phone: {
				label: "Authorizing Official Phone Number",
				fieldType: "string",
				required: false,
				page: 2
			},
			authorized_date: {
				label: "Date",
				fieldType: "string",
				required: false,
				page: 2
			},
			v_entity_name: {
				label: "Organization Name",
				fieldType: "string",
				required: false,
				page: 2
			},
			v_street: {
				label: "Organization Headquarters Street Address",
				fieldType: "string",
				required: false,
				page: 2
			},
			city: {
				label: "Organization Headquarters City",
				fieldType: "string",
				required: false,
				page: 2
			},
			v_zip_code: {
				label: "Organization Headquarters Zip code",
				fieldType: "string",
				required: false,
				page: 2
			},
			country: {
				label: "Organization Headquarters Country",
				fieldType: "string",
				required: false,
				page: 2
			},
			county: {
				label: "Organization Headquarters County",
				fieldType: "string",
				required: false,
				page: 2
			},
			u_state: {
				label: "Organization Headquarters State/Territory",
				fieldType: "string",
				required: false,
				page: 2
			},
			u_customer_account: {
				label: "Customer Account",
				fieldType: "string", // Debatable whether we need this or not
				required: false,
				page: 2
			},
			// gnis_location: {
			// 	fieldType: "string",
			// 	required: true
			// },
			u_requested_for: {
				label: "Requested For",
				fieldType: "string", // Email of logged in user
				required: false,
				page: 2
			},
		}
	};
	return obj;
}`,
})

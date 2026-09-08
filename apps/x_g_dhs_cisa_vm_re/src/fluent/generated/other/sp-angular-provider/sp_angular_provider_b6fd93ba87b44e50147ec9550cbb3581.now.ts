import { SPAngularProvider } from '@servicenow/sdk/core'

SPAngularProvider({
    $id: Now.ID['b6fd93ba87b44e50147ec9550cbb3581'],
    name: 'rscForm',
    type: 'factory',
    script: `function rscForm() {
	var form = {};

	form.id = "";
	form.elements = {};
	form.contact = {
		user: {
			email: '',
			sys_id: ''
		}
	};

	form.customer_email = '';

	form.initialize = function(sys_id)
	{
		form.id = sys_id;
		form.elements.sys_id.value = sys_id;
	};

	/* for will by dynamically initialized based on the columns in the x_g_dhs_circia_xv2_circia_case table
    The object will be form.column_name
    for example
    form.elements.x_g_dhs_circia_xv2_on_behalf {
    	"element": "x_g_dhs_circia_xv2_on_behalf",
    	"column_label": "On Behalf Of",
    	"type": "String",
    	"mandatory": "false",
    	"read_only": "false",
    	"choices": []
    }
    */

	form.setElements = function(elements) {
		//Creates a deep copy of the object instead of a reference to c.data.elements
		form.elements = JSON.parse(JSON.stringify(elements));
	};

	form.setContact = function() {				
		//Creates a deep copy of the object instead of a reference to c.data.elements
		form.contact.user.email = form.elements.u_contact_email.value;
		form.contact.user.sys_id = form.elements.u_contact_sys_id.value;
	};

	form.getRestBody = function() {
		var keys = Object.keys(form.elements);
		var body = {};

		body.u_sys_id = form.id;

		for (var i = 0; i < keys.length; i++) {
			var bkey = String(keys[i]).startsWith('u_') ? keys[i] : "u_" + keys[i];
			if (form.elements[keys[i]].type == "Date" || form.elements[keys[i]].type == "Date/Time") {
				var dt = new Date(form.elements[keys[i]].value);
				//Confirm the date is a valid date
				if (dt instanceof Date && !isNaN(dt)) {
					//yyyy-MM-dd HH:mm:ss
					body[bkey] = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + " " + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();
				} else {
					body[bkey] = "";
				}
			} else {
				body[bkey] = form.elements[keys[i]].value ? form.elements[keys[i]].value.toString() : "";
			}
		}

		return body;
	};

	form.getValue = function(column) {
		if (column in form.elements) {
			return form.elements[column].value;
		}

		return '';
	};

	form.getContactBody = function(target) {
		var body = {};
		if (target in form.contact) {
			var keys = Object.keys(form.contact[target]);

			for (var i = 0; i < keys.length; i++) {
				if (form.contact[target][keys[i]]) {
					body[keys[i]] = form.contact[target][keys[i]].toString();
				} else {
					body[keys[i]] = "";
				}
			}
		}

		return body;
	};

	return form;
}`,
})

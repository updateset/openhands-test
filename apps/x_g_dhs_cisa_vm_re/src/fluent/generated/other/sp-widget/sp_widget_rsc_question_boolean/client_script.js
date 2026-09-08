api.controller = function ($sce, rscNav, rscForm, rscSummary, $window, $timeout) {
	/* widget controller */
	var c = this;

	c.rscForm = rscForm;
	if (c.data.pageId == 'rsc_questionnaire_summary') {
		c.nav = rscSummary;
	} else {
		c.nav = rscNav;
	}



	// Strip html from text
	var sanitize = function (text) {
		return text ? String(text).replace(/<[^>]+>/gm, '') : '';
	}

	if (c.data.show_question) {
		c.question = $sce.trustAsHtml(c.data.question);
		c.resource_url = $sce.trustAsHtml(c.data.resource_url);
		c.resource_no_url = $sce.trustAsHtml(c.data.resource_no_url);

		c.question_label = sanitize(c.data.question);

		if (c.data.tooltip_body) {
			c.tooltip_body = $sce.trustAsHtml(c.data.tooltip_body);
		}
	}


	//modal states
	c.show_modal = false;

	c.toggle_modal = function (event) {
		c.show_modal = !c.show_modal;
	};

	c.focus_element = function () {
		angular.element("#close_modal_" + c.data.sys_id).focus();
	};


	//uswds modal
	c.defaultVisible = false;

	// c.checkEnter = function(event){
	// 	if (event.key === 'Enter' || event.keyCode === 13) {
	// 		alert(event.key);
	// 		if(c.tooltip_body){
	// 			c.defaultVisible = !c.defaultVisible;
	// 		}
	// 	}
	// };


	//uswds radio
	c.dual_radio = {
		id: c.options.column_name,
		label: "",
		value_no_border: "",
		value_bordered: "",
		choices: [{
			value: "yes",
			displayValue: "Yes",
		},
		{
			value: "no",
			displayValue: "No/Unsure",
		}
		],
	};

	//open accordion by default on No

	// ng-change="c.toggleAccordionOnNo()" on the usa-radio-input

	//c.toggleAccordionOnNo = function(){
	//if(c.rscForm.elements[c.options.column_name].value == 'no'){
	//$timeout(function(){
	//var accordion_id = c.data.sys_id + "_accordion";
	//accordion = document.getElementById(accordion_id).click();
	//},0)
	//}
	//}

};
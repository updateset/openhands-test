api.controller = function ($sce, rscNav, rscSummary, rscForm) {
	/* widget controller */
	var c = this;
	
	c.rscForm = rscForm;
	if (c.data.pageId == 'rsc_questionnaire_summary') {
		c.nav = rscSummary;
	} else {
		c.nav = rscNav;
	}

	// Strip html from text
	var sanitize = function(text) {
		return text ? String(text).replace(/<[^>]+>/gm, '') : '';
	}
	
	if (c.data.show_question) {
		c.question = $sce.trustAsHtml(c.data.question);
		//c.resource_url = $sce.trustAsHtml(c.data.resource_url);
		//c.resource_no_url = $sce.trustAsHtml(c.data.resource_no_url);
		c.question_label = sanitize(c.data.question);
		
		if (c.data.tooltip_body) {
			c.tooltip_body = $sce.trustAsHtml(c.data.tooltip_body);
		}
	}
	
	c.show_modal = false;

	c.toggle_modal = function () {
		c.show_modal = !c.show_modal;
	};
	
	c.focus_element = function(){
	angular.element("#close_modal_" + c.data.sys_id).focus();
	};
};
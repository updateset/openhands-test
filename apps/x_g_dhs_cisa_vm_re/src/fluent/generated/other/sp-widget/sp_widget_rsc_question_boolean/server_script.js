(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */
	
	// URL Params
	data.pageId = $sp.getParameter("id");


	data.show_question = false;
	
	var question = new GlideRecord("x_g_dhs_cisa_vm_re_rsc_portal_questions");
	question.addQuery("column_name", options.column_name);
	question.query();
	if(question.next())
		{
			data.show_question = true;
			
			data.question = question.getValue("question");
			data.tooltip = question.getValue("tooltip");
			data.resource_url = question.getValue("resource_url");
			data.resource_no_url = question.getValue("resource_no_url");
			data.tooltip_body = question.getValue("tooltip_body");
			data.show_resource = question.getValue("show_resource");
			data.template = question.angular_template.id+"";
			data.sys_id = question.getUniqueValue();
		}

})();
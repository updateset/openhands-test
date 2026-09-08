(function() {	
	// Only run the below after the client controller calls this. Reason: Catalog item loads quicker & the script below requires the variable_name loaded in the page
	if(input) { 

		var cat_item = 'b47eb99687e771106fa97627cebb3558';//$sp.getParameter('sys_id');        // Get the sys_id of the current record producer shown on the page
    gs.warn(cat_item);
		var var_gr = new GlideRecord('item_option_new');  // Initiate a glide record object (Variables table)
		var_gr.addQuery('cat_item', cat_item);            // Query the r-producer calling this embedded article widget
		var_gr.addQuery('sys_id', input.varSysId);        // Query the variable   calling this embedded article widget
		var_gr.addQuery('sp_widget', gs.getProperty('x_g_dhs_cisa_vm_re.embedded.article.widget')); // the sys_id of this widget;
		var_gr.query();                                   // Execute the query

		if (var_gr.next()) {
			data.kbNumber = var_gr.default_value.toString();// Get the default value set in this variable of the record producer

			var article = new GlideRecord('kb_knowledge');  // Initiate a glide record object (knowledge article table)
			article.addQuery('number', data.kbNumber);      // The KB number corresponds to the default value set in this variable of the record producer
			//article.addQuery('workflow_state', 'published');// The KB article should be in the published state to be shown to end-users
			article.query();                                // Execute the query

			if(article.next()) { // If an article is found, show the article
				data.articleTitle = article.getDisplayValue('short_description').toString();               // Capture the title of the article
				data.articleHTML  = article.text.toString().replace('<![CDATA[ ', '').replace(' ]]>', ''); // Capture & clean the body HTML of the article
			} else {             // If an article is not found, display the below message
				data.articleHTML = '<p>Article missing or out-dated. Please contact support.<p>';
			}
		} else {               // If no variable is found in this record producer that is calling this widget, then show the below message
			data.articleHTML = '<p>This widget has been called in error. Please contact support.<p>';
		}
	}
})();
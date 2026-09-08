api.controller = function (rscContactFactory) {
	/* widget controller */
	var c = this;

	// Static var Init
	c.view = 'alpha';

	// Factory Init
	c.rscContactFactory = rscContactFactory;


	// View control
	if (c.data.loggedIn) {
		c.view = 'bravo';
	} else {
		c.view = 'alpha';
	}

	if (c.rscContactFactory.account != '') {
		c.view = 'charlie';

		window.open("?id=rsc_cyhy_enrollment", "_self");
	}
	
	c.pageNav = function (option) {
		var url = '';

		if (option == 0) {
			url = '?id=login';
			window.open(url, "_self");
		}
		if (option == 1) {
			url = '?id=rsc_request_account';
			window.open(url, "_self");
		}
	};


	// Logging
	// window.c = c;

};
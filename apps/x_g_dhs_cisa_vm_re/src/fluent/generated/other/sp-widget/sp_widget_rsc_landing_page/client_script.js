api.controller = function (rscContactFactory) {
	/* widget controller */
	var c = this;

	// User analysis
	c.user = {
		"account": 	rscContactFactory.account != '' ? true: false,
		"loggedIn": c.data.user,
	};

	// Modal visibility flag
	c.modalDefaultVis = false;

	c.size = false;

	c.navigate = function (size) {
		var url = "?id=rsc_intake&org_size=" + size;
		window.open(url, "_self");
	};

	c.requestNav = function () {		
		var url = "?id=rsc_request_account";
		window.open(url, "_self");
	};

	c.loginNav = function(){
		var url = "?id=login";
		window.open(url,"_self");
	};

	// Logging
	// window.rsc = { controller: c };
};
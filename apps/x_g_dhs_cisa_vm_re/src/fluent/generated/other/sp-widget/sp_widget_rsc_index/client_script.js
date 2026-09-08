api.controller = function ($location) {
	/* widget controller */
	var c = this;

	// Users can't acces this page if they are logged in.
	if (c.data.isLoggedIn) {
		$location.url('/rsc?id=rsc_welcome');
	}

	c.navigate = function (route) {
		if (route == 1) {
			var url = "/rsc?id=rsc_login_page";
		}
		if (route == 2) {
			var url = "/rsc?id=rsc_welcome";
		}

		window.open(url, "_self");
	};


};
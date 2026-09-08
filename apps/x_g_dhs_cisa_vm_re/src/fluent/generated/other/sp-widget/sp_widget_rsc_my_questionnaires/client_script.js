api.controller = function (rscContactFactory) {
    /* widget controller */
    var c = this;

    // User analysis
    c.user = {
        "account": rscContactFactory.account != '' ? true : false,
        "loggedIn": c.data.user,
    };

	// Send back to welcome page if they are not logged in
	if (!c.user.loggedIn) {
		window.open('/rsc', '_self');
	}
	
	// Send back to welcome page if they don't have an account
	if (rscContactFactory.account == '') {
		window.open('/rsc?id=rsc_welcome', '_self');
	}


    // Table Control
    c.limit = 5;
    
    c.total = c.data.tableItems.length;
    c.page = 1;
    c.pages = Math.ceil(c.total / c.limit);
    
    c.base = 0;
    c.top = 5;

    c.paginate = function (page) {
        c.page = page;
        c.top = page * c.limit;
        c.base = c.top - c.limit;
    };

    c.getNumber = function (number) {
        return new Array(number);
    };



    // Logging
    // window.rsc = { controller: c };

};
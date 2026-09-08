api.controller = function () {
	/* widget controller */
	var c = this;
	
	window.open('/login_with_sso.do?glide_sso_id=' + c.data.idp, '_self');

};
api.controller=function($sce, $window) {
	/* widget controller */
	var c = this;
	c.trustedContent = $sce.trustAsHtml(c.options.content);
	c.trustedTitle = $sce.trustAsHtml(c.options.title);

	c.navigate = function()
	{
		window.open(c.options.link,c.options.target);
	};
	
	var showLogo = true;

	c.getShowLogo = function()
	{
		//return showLogo;
		return true;
	}
	
	var appWindow = angular.element($window);
	appWindow.bind('resize', function(){
		if($window.innerWidth <= 800)
		{
			showLogo = false;
		} else {
			showLogo = true;
		}
	});
	
	c.dynamicHeight = {'min-height': c.options.card_height};
	c.dynamicContentHeight = {'height': c.options.card_content_height};
};
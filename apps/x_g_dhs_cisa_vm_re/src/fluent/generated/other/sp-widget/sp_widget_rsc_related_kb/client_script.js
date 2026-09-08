api.controller = function($scope) { // REMEBER to add $scope in the parameter list here (not in by default)
	var c = this;
	
	$scope.onLoad = function() // This function is called by line 7 of the HTML Template
	{
		var fieldSysId       = $scope.page.field.variable_name.toString(); // Gets the variable_name calling this widget
		$scope.data.varSysId = fieldSysId.replace('IO:', '');		       // Extracts the sys_id of the variable
		c.server.update();                                                 // Executes code in the server script to fetch the data from the article
	};
};
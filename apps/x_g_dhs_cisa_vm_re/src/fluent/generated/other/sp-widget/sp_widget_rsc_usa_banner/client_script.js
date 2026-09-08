api.controller=function($scope) {
  /* widget controller */
  var c = this;
	
	// Toggle dropdown
	$scope.selected = false;
	c.toggleLink = function() {
		if ($scope.selected == false) {
			$scope.selected = true;
		} else {
			$scope.selected = false;
		}
	};
};
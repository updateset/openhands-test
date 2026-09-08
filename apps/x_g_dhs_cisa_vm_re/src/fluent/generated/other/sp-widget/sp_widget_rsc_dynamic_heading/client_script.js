api.controller = function () {
	/* widget controller */
	var c = this;

	c.capitalizeFirstLetter = function (string) {
		// console.warn('Cap function running', string);
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
};
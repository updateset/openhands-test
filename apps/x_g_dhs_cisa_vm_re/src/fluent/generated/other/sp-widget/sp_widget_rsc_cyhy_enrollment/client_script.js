api.controller = function (rscContactFactory, rscCyhyFactory, rscCyhyIpVal, $window, $timeout, $scope) {
	/* widget controller */
	var c = this;


	// Factory Init
	c.rscContactFactory = rscContactFactory;
	c.rscCyhyFactory = rscCyhyFactory;
	c.rscCyhyIpVal = rscCyhyIpVal;


	// VAR INIT \\
	c.today = new Date().toISOString().split('T')[0];


	// Set pages
	c.pages = ['cyhy_enrollment_page_1', 'cyhy_enrollment_page_2', 'cyhy_enrollment_confirmation'];
	c.page = 'cyhy_enrollment_page_1';

	// Set user agent
	c.data.user_agent = $window.navigator.userAgent;

	// Loading spinner
	c.loading = false;

	// Form Submission
	c.incompleteForm = false;


	// REDIRECTS \\
	// Return to welcome page
	c.navigate = function () {
		var url = "?id=rsc_welcome";
		window.open(url, "_self");
	};

	// Users can't acces this page if they aren't logged in.
	// if (!c.data.isLoggedIn) {
	// 	c.navigate();
	// }

	// Users can't access this page if they don't have an associated organization
	// c.hasOrg = c.rscContactFactory.account == '' ? false : true;
	// if (c.rscContactFactory.account == '') {
	// 	c.navigate();
	// }


	// Form Init
	const FACTORIES = [rscCyhyFactory];
	c.form = {};

	class Field {
		constructor(field) {
			this._fieldType = field.fieldType || "string";
			this._options = field.options || [];
			this._value = field.value || '';
			this._page = field.page || 0;
			this._label = field.label || '';

			//handles dynamic requirement of fields as either static boolean or function; default to false
			const required = field.required ?? false;
			this._required = typeof required === "function" ? required : () => !!required;

			//handles dynamic visibility of fields as either static boolean or function; defaults to true
			const show = field.show ?? true;
			this._show = typeof show === "function" ? show : () => !!show;
		}

		get label() {
			return this._label;
		}

		get options() {
			return this._options;
		}

		get value() {
			return this._value;
		}

		set value(val) {
			this._value = val;
		}

		get page() {
			return this._page;
		}

		get isInvalid() {
			return this._required && !this._value ? true : false;
		}

		get showField() {
			return this._show(c.form);
		}

		get isRequired() {
			return this._required(c.form);
		}
	}

	c.form = Object.fromEntries(FACTORIES.flatMap(({
		fields
	}) => Object.entries(fields).map(([k, v]) => [k, new Field(v)])));


	// Populate Authorized User information
	if (c.data.user) {
		// Contact Information
		c.form.authorized_first_name.value = c.data.user.first;
		c.form.authorized_last_name.value = c.data.user.last;
		c.form.authorized_email.value = c.data.user.email;
		c.form.authorized_date.value = new Date();
		c.form.authorized_phone.value = rscContactFactory.phone;

		// Account Information
		c.form.v_entity_name.value = rscContactFactory.account_name;
		c.form.v_street.value = rscContactFactory.account_address;
		c.form.city.value = rscContactFactory.account_city;
		c.form.v_zip_code.value = rscContactFactory.account_zip;
		c.form.u_state.value = rscContactFactory.account_state;
		c.form.county.value = rscContactFactory.account_county;
		c.form.country.value = 'United States of America '; // Static for now
	}


	// Get Requested Date
	c.getRequestedDate = function () {
		if (c.form.u_requested_scan_start_date.value != '') {
			return new Date(c.form.u_requested_scan_start_date.value).toISOString().split('T')[0];
		}

	};


	// Clear POC 2 fields on checkbox unselect
	c.dateFlag = false;
	$scope.$watch(() => {
		return {
			tech: c.form.second_technical_poc.value,
			scan: c.form.u_requested_scan_start_date.value
		};
	}, (newValue, oldValue) => {

		// Second Tech flag
		if (newValue.tech == false && oldValue.tech == true) {
			c.form.technical_poc_2_name.value = '';
			c.form.technical_poc_2_first_name.value = '';
			c.form.technical_poc_2_last_name.value = '';
			c.form.technical_poc_2_email.value = '';
			c.form.technical_poc_2_phone.value = '';
		}

		// Requested Scan Date
		if (newValue.scan == undefined) {
			c.dateFlag = true;
		} else {
			c.dateFlag = false;
		}

	}, true);


	// Page level validation
	c.pageValidation = function (idx) {

		return Object.keys(c.form).filter(key => {
			return c.form[key].page == idx && c.form[key].isRequired && c.form[key].isInvalid;
		});
	};


	// Testing IP Val
	c.results = [];
	c.invalids = [];
	c.validateAll = function () {
		var ipArray = c.form.ip_addresses.value
			.split(/[\n,]+/) // Split on newline or comma
			.map(ip => ip.trim()) // Remove leading/trailing whitespace
			.filter(ip => ip.length > 0); // Remove empty entries

		c.results = c.rscCyhyIpVal.validateIpArray(ipArray);

		// Array of objects containing IP, Type, and Reason for failure
		c.invalids = c.findInvalids(c.results);

		if (c.invalids.length > 0) {
			c.form.verified.value = false;
			c.modalDefaultVis = true;
		} else {
			c.form.verified.value = true;
			c.modalDefaultVis = false;
		}
	};

	c.findInvalids = function (array) {
		return array.filter(obj => obj.valid === false);
	};

	c.downloadCSV = function () {
		var result = [
			['IP Address', 'Error Type'],
			...c.rscCyhyIpVal.csvMap(c.results)
		],
			csvRaw = c.rscCyhyIpVal.arrayToCsv(result);

		var blob = new Blob([csvRaw], {
			type: 'text/csv;charset=utf-8;'
		});

		var url = URL.createObjectURL(blob),
			a = Object.assign(document.createElement('a'), {
				href: url,
				download: 'IP Addresses - CyHy Enrollment.csv',
				style: 'display:none'
			});

		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};


	// Focus IP input
	c.focusIP = function () {
		c.modalDefaultVis = !c.modalDefaultVis;

		var ip = document.getElementById('ip_addresses');
		ip.focus();
	};


	//submit enrollment
	function buildPayloadBody() {
		var body = {};

		body.country = c.form.country.value;
		body.technical_poc_2_name = c.form.technical_poc_2_first_name.value + " " + c.form.technical_poc_2_last_name.value;
		body.county = c.form.county.value;
		body.technical_poc_2_email = c.form.technical_poc_2_email.value;
		body.authorized_name = c.form.authorized_first_name.value + " " + c.form.authorized_last_name.value;
		body.password_delivery = c.form.password_delivery.value;
		body.u_state = c.form.u_state.value;
		body.city = c.form.city.value;
		body.signature = c.form.signature.value;
		body.ip_addresses = c.form.ip_addresses.value;
		body.technical_poc_2_phone = c.form.technical_poc_2_phone.value;
		body.u_requested_scan_start_date = c.form.u_requested_scan_start_date.value;
		body.authorized_phone = c.form.authorized_phone.value;
		body.technical_poc_email = c.form.technical_poc_email.value;
		body.signature_date_time = c.form.signature_date_time.value;
		body.authorized_title = c.form.authorized_title.value;
		body.distro_email = c.form.distro_email.value;
		body.technical_poc_name = c.form.technical_poc_first_name.value + " " + c.form.technical_poc_last_name.value;
		body.technical_poc_phone = c.form.technical_poc_phone.value;
		body.authorized_email = c.form.authorized_email.value;

		return body;
	}

	c.submitEnrollment = function () {

		// This will throw a non-issue JS error in the console during submit as the model needs a date object.
		if (c.form.u_requested_scan_start_date.value == '' || !c.form.u_requested_scan_start_date.value) {
			c.form.u_requested_scan_start_date.value = new Date().toISOString().split('T')[0];
		} else {
			c.form.u_requested_scan_start_date.value = new Date(c.form.u_requested_scan_start_date.value).toISOString().split('T')[0];
		}

		// Recaptcha
		// grecaptcha.enterprise.ready(function () {
		// 	grecaptcha.enterprise.execute(c.data.siteKey, {
		// 		action: 'submit_cyhy'
		// 	}).then(function (resp) {

		// 		// API push to CSD
		// 		c.server.get({

		// 			action: "submit",
		// 			vars: buildPayloadBody(),
		// 			token: resp

		// 		}).then(function (r) {
		// 			if (r.data.response.captcha == false) {
		// 				$timeout(() => {
		// 					c.navigate();
		// 				}, 5000);
		// 			}
		// 		});

		// 	});
		// });

	};


	// Pagination \\
	c.incompleteFields = false;

	// Scroll Top
	function scrollTop() {
		var element = document.getElementById('cyhy_enrollment_top');
		if (element) {
			element.scrollIntoView({
				block: "nearest",
				behavior: "smooth",
			});
		}
	}

	c.paginate = function (idx, validate) {
		if (validate) {
			if (c.pageValidation(idx).length > 0) {
				c.incompleteFields = true;
				scrollTop();
			} else {
				c.incompleteFields = false;

				if (idx == 1) {
					c.assembleCanvas();
					// c.assembleTerms();
					scrollTop();
				}
				if (idx == 2) {
					c.loading = true;

					$timeout(() => {
						c.submitEnrollment();
						scrollTop();
						c.loading = false;
					}, 2500);


				}
				c.page = c.pages[idx];

			}
		} else {
			// If the requested scan date is undefined clear it on pagination
			if (c.form.u_requested_scan_start_date.value == undefined) {
				c.form.u_requested_scan_start_date.value = '';
			}

			c.page = c.pages[idx];
			scrollTop();
		}
	};


	// Modal Vis
	c.modalDefaultVis = false;
	c.form.verified.value = false;


	// SIGNATURE LOGIC \\
	c.typed_signature = '';

	// Canvas
	c.assembleCanvas = function () {
		$timeout(() => {
			c.canvas = document.getElementById("signature_pad"),
				c.ctx = c.canvas.getContext("2d"),
				c.nameInput = document.getElementById("signature_type"),
				c.isDrawing = false,
				c.penColor = "#000000";

			c.canvas.addEventListener("mousedown", e => {
				c.isDrawing = true;
				c.ctx.beginPath();
				c.ctx.moveTo(e.offsetX, e.offsetY);
			});

			c.canvas.addEventListener("mousemove", e => {
				if (!c.isDrawing) return;
				c.ctx.strokeStyle = c.penColor;
				c.ctx.lineTo(e.offsetX, e.offsetY);
				c.ctx.stroke();
			});

			// c.isDrawing = false
			c.canvas.addEventListener("mouseup", () => c.isDrawing = false);
			c.canvas.addEventListener("mouseout", () => c.isDrawing = false);

			c.resizeCanvas();

		}, 500);
	};

	c.resizeCanvas = function () {
		var ratio = window.devicePixelRatio || 1;
		c.canvas.width = c.canvas.offsetWidth * ratio;
		c.canvas.height = c.canvas.offsetHeight * ratio;
		c.ctx.scale(ratio, ratio);
		c.ctx.lineWidth = 2;
		c.ctx.lineCap = "round";
	};

	c.clearSignature = function () {
		c.ctx.clearRect(0, 0, c.canvas.width, c.canvas.height);
		c.form.typed_signature.value = '';
		c.form.signature.value = '';
		c.form.signature_date_time.value = '';
	};

	c.saveSignature = function () {
		c.base64 = c.canvas.toDataURL("image/png");

		if (c.isCanvasEmpty(c.canvas)) {
			c.form.signature.value = '';
		} else {
			c.form.signature.value = c.base64.split(',')[1];
			c.form.signature_date_time.value = new Date();
		}
	};

	c.isCanvasEmpty = function (canvas) {
		var ctx = canvas.getContext('2d');
		var pixelBuffer = new Uint32Array(
			ctx.getImageData(0, 0, canvas.width, canvas.height).data.buffer
		);

		return !pixelBuffer.some(color => color !== 0);
	};

	c.renderName = function () {
		// Clear signature if populated before adding in text
		if (c.isCanvasEmpty(c.canvas) || c.form.typed_signature.value != '') {
			c.clearSignature();

			var name = c.nameInput.value.trim();
			if (!name) return;

			c.ctx.font = "36px 'Pacifico', cursive, sans-serif";
			c.ctx.fillStyle = c.penColor;

			var textWidth = c.ctx.measureText(name).width,
				x = (c.canvas.offsetWidth - textWidth) / 2,
				y = c.canvas.offsetHeight / 2 + 10;

			c.ctx.fillText(name, x, y);

		}

		c.saveSignature();
	};

	// Signature section touched
	c.signatureTouched = false;
	c.leaveSignature = function () {
		c.signatureTouched = true;
	};


	// Attestation Logic
	c.attestationError = false;

	c.attestationTouched = function () {
		$scope.$evalAsync(() => {
			c.attestationError = true;
		});
	};

	// c.onScroll = function () {
	// 	var bottom = Math.ceil(c.terms.scrollTop + c.terms.clientHeight) >= c.terms.scrollHeight;
	// 	console.warn('event listener running');
	// 	if (bottom == true) {
	// 		$scope.$evalAsync(() => {
	// 			c.attestationDisabled = false;
	// 			console.warn('attestation disabled', c.attestationDisabled);

	// 			c.terms.removeEventListener('scroll', c.onScroll);
	// 		});
	// 	}
	// };

	// c.assembleTerms = function () {
	// 	$timeout(() => {
	// 		c.terms = document.getElementById("docbox");
	// 		c.terms.addEventListener('scroll', c.onScroll);
	// 	}, 500);
	// };


	// Logging	
	/*
	window.form = c.form;
	*/

	// window.c = c;

	// window.flip = function (idx) {
	// 	$scope.$evalAsync(() => {
	// 		c.paginate(idx, false);
	// 	});
	// };

};
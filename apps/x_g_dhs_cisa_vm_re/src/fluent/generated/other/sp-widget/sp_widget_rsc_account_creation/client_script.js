api.controller = function(rscOnboardingFactory, rscContactFactory, rscOrgRequestFactory, $window, $timeout, $scope, $location) {
    /* widget controller */
    var c = this;

    // Set user agent
    c.data.user_agent = $window.navigator.userAgent;

    // Users can't acces this page if they aren't logged in.
    // if (!c.data.isLoggedIn) {
    //     window.open('?id=rsc_welcome', '_self');
    // }

    // Users can't access this page if they already have an associated organization	
	c.account = rscContactFactory.account;
    // if (rscContactFactory.account != '') {
    //     window.open('?id=rsc_welcome', '_self');
    // }

    // Init
    c.page = 'create_account';

    rscOnboardingFactory.v_state.options = c.data.states;
    c.rscOnboardingFactory = rscOnboardingFactory;

    if (c.data.user) {
        c.rscOnboardingFactory.v_entity_poc_name.value = c.data.user.first;
        c.rscOnboardingFactory.v_entity_poc_last_name.value = c.data.user.last;
        c.rscOnboardingFactory.v_entity_email.value = c.data.user.email;
    }

    // Loading spinner
    c.loading = false;



    // Terms of agreement
    c.modalDefaultVis = false;
    c.terms = false;
    c.queueModal = function() {
        c.modalDefaultVis = !c.modalDefaultVis;
    };
    c.acceptTerms = function() {
        c.modalDefaultVis = !c.modalDefaultVis;
        c.terms = true;
    };


    // Navigation 
    c.navigate = function() {
        var url = "?id=rsc_welcome";
        window.open(url, "_self");
    };

	c.navToCyhyEnrollment = function(){
		var url = "/rsc?id=rsc_cyhy_enrollment";
        window.open(url, "_self");
	};

    // Submit form
    c.testProducer = function() {
        // Enable loading spinner
        c.loading = true;

        // Intercept website value and adjust if necessary
        var website = c.rscOnboardingFactory.website.value;
        if (!website.toLowerCase().includes('www.')) {
            c.rscOnboardingFactory.website.value = 'www.' + website;
        }

        grecaptcha.enterprise.ready(function() {
            grecaptcha.enterprise.execute(c.data.siteKey, {
                action: 'submit_account'
            }).then(function(resp) {

                c.server.get({
                    action: "submit",
                    vars: flattenObject(rscOnboardingFactory),
                    user_agent: c.data.user_agent,
                    token: resp
                }).then(function(r) {
                    if (r.data.response.captcha == false) {
                        $timeout(() => {
                            c.navigate();
                        }, 5000);
                    } else {
                        // Scroll Top
                        $timeout(() => {
                            var element = document.getElementById('create_account_top');
                            if (element) {
                                element.scrollIntoView({
                                    block: "nearest",
                                    behavior: "smooth",
                                });

                                rscOrgRequestFactory.submit();
                                c.page = 'submission_confirmation';
                                c.loading = false;
                            }
                        }, 1000);                        
                    }
                });
            });
        });
    };

    function flattenObject(obj) {
        return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v.value]));
    }



    // Form validation	
    c.incompleteForm = false;
    c.validateSubmit = function() {
        c.incompleteForm = false;

        $timeout(() => {
            if (c.missingFields.length > 0) {
                c.incompleteForm = true;

                // Return user to top of screen for alert
                var element = document.getElementById('create_account_top');
                if (element) {
                    element.scrollIntoView({
                        block: "nearest",
                        behavior: "smooth",
                    });

                }
				$('#error_summary').focus();
            }
            if (c.missingFields.length == 0) {
                c.incompleteForm = false;
                c.testProducer();
            }
        }, 0);

    };

    // Watch fields for validation
    $scope.$watch(() => {
        return {
            fields: rscOnboardingFactory
        }
    }, (newValue) => {
        c.missingFields = [];

        // Iterate over each field
        Object.keys(newValue.fields).forEach(fieldKey => {
            var field = newValue.fields[fieldKey];

            // Check if we're required
            if (field.required && (!field.value || field.value.trim() === '')) {
                c.missingFields.push({
                    id: field.id,
                    label: field.label,
                    order: field.order
                });
            }

            // Clear value for Sector
            if (field.id == "v_critical_infrastrcuture_sub_sector" && field.value == '') {
                c.rscOnboardingFactory.v_critical_infrastrcuture_sub_sector.value = '';
            }
        });

    }, true);

    $scope.$watch(() => {
        return c.rscOnboardingFactory.v_critical_infrastrcuture_sector.value;
    }, function(newValue, oldValue) {
        if (newValue != oldValue) {
            c.rscOnboardingFactory.v_critical_infrastrcuture_sub_sector.value = '';
        }
    });

    // Logging
    // window.rsc = {
    // 	factory: rscOnboardingFactory,
    // 	controller: c,
    // };

	// window.flip = function () {
	// 	c.page = 'submission_confirmation';
	// };

};
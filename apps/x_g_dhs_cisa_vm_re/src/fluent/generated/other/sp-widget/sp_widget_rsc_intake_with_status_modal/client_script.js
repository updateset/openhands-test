api.controller = function(rscNavWithStatusModal, rscSaveWithStatusModal, rscForm, rscStateRegions, $window, $timeout, $document) {
    /* widget controller */
    var c = this;

    // Set user agent
    c.data.user_agent = $window.navigator.userAgent;


    // Init
    c.nav = rscNavWithStatusModal;
    c.loading = false;


    // User analysis
    c.user = {
        "account": c.data.accountId != '' ? true : false,
        "loggedIn": c.data.isLoggedIn,
    };

	
    c.dual_radio = {
        id: 'col1',
        label: "",
        value_no_border: "",
        value_bordered: "",
        choices: [{
                value: "yes",
                displayValue: "Yes",
            },
            {
                value: "no",
                displayValue: "No/Unsure",
            }
        ]
    };
    c.rscForm = rscForm;
    c.rscForm.setElements(c.data.elements);
    c.rscForm.initialize(c.data.case_id);

    c.state = rscStateRegions;
    // c.state.loadStates(c.data.states);

    rscSaveWithStatusModal.formFields = c.data.formFields;

    // Setup email field
    if (c.data.user) {
        c.rscForm.customer_email = c.data.user.email;
    }


    c.nav.loadOrgSize(c.data.org_size);

    c.sections = JSON.parse(c.data.statusModalOptions.section);

    c.toggleSection = function(passedIndex) {
        c.sections[passedIndex].selected = !c.sections[passedIndex].selected;
    };

    c.getClass = function(template) {
        if (c.data.org_size == 'small') {
            if (c.nav.getPage() == 2 && template != 'rsc_intake_summary') {
                return 'section-disabled';
            }
            if (c.nav.getPage() != 2 && template == 'rsc_intake_summary') {
                return 'section-disabled';
            }
        } else {
            if (c.nav.getPage() == 9 && template != 'rsc_intake_summary') {
                return 'section-disabled';
            }
            if (c.nav.getPage() != 9 && template == 'rsc_intake_summary') {
                return 'section-disabled';
            }
        }
    };

    c.navTo = function(section, parent) {
        if (section.hasOwnProperty("template")) {
            /*
            if (parent) {
            	parent.childSelected = true;
            }
            */

            var pageDestination = section.template;
            c.nav.setPage(c.nav.pages.indexOf(pageDestination));
        } else {
            if (section.hasOwnProperty("element_id")) {
                var currentPage = c.nav.getTemplate(),
                    id = section.element_id,
                    summaryPage = "rsc_intake_summary";

                if (currentPage != summaryPage) {
                    c.nav.setPage(c.nav.pages.indexOf(summaryPage));
                }
                c.nav.pageJump(id);
            }
        }
    };

    c.getPercentComplete = function() {
        // return (c.nav.currentPage / (c.nav.pages.length - 2)) * 100;
        //debugger;
        c.master = rscSaveWithStatusModal.processStatus();
        return c.master.overall * 100;
    };

    c.roundDown = function(x) {
        return Math.floor(x);
    };

    c.sectionCompletion = function(completed, total) {
        return Math.round((parseInt(completed) / parseInt(total)) * 100);
    };

    c.isSelected = function(section) {
        var page = c.nav.getTemplate();

        if (section.children.length > 0) {
            var templates = [];
            if (section.children[0].hasOwnProperty("template")) {
                for (var i = 0; i < section.children.length; i++) {
                    var temp = section.children[i].template;
                    templates.push(temp);
                }

                if (templates.indexOf(page) > -1) {
                    // section.selected = true;
                    return true;
                } else if (page == 'rsc_question_introduction') {
                    return true;
                }
            } else {
                if (section.template == page) {
                    // console.warn('Selected no children', page)
                    // section.selected = true;
                    return true;
                }
            }
        } else {
            if (section.template == page) {
                // console.warn('Selected no children', page)
                // section.selected = true;
                return true;
            }
        }

        return false;
    };

    c.isChildSelected = function(child) {
        var page = c.nav.getTemplate();

        if (child.template == page) {
            return true;
        }

        return false;
    };


    function waitForElm(selector) {
        return new Promise((resolve, reject) => {
            $(document).ready(function() {
                if (document.querySelector(selector)) {
                    return resolve(document.querySelector(selector));
                }

                const observer = new MutationObserver(mutations => {
                    if (document.querySelector(selector)) {
                        observer.disconnect();
                        resolve(document.querySelector(selector));
                    }
                });

                if (!document.querySelector(selector)) {
                    reject(null);
                }

                // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
                observer.observe(document, {
                    childList: true,
                    subtree: true
                });

            });
        });
    }

    function addScrollEvent(elm) {
        elm.addEventListener('scroll', function(event) {
            var statusModal = document.querySelector("#rsc_status");
            var floating = {
                position: 'fixed',
                zIndex: '300',
                width: '25%',
                top: '2px',
            }

            var relativePosition = {
                position: 'relative',
                width: '108%'
            }

            if (window.innerWidth <= 991) {
                relativePosition.width = '100vw';
            }
            var statusDefaultHeight = 500;

            var avaliableHeight = elm.scrollHeight - statusDefaultHeight; // total element size minus status modal size
            var overSize = avaliableHeight - elm.scrollTop - 425;

            if (overSize < 0) {
                statusModal.style.height = (statusDefaultHeight + overSize) + 'px';
            } else {
                statusModal.style.height = statusDefaultHeight + 'px';
            }

            if (elm.scrollTop >= 378 && window.innerWidth > 991) {
                Object.assign(statusModal.style, floating);
            } else {
                Object.assign(statusModal.style, relativePosition);
            }
        });
    }

    function processEvent() {
        waitForElm("div.sp-page-root.page.flex-column.sp-can-animate > section").then((elm) => {
            addScrollEvent(elm);
        }).catch(() => {
            $timeout(processEvent, 1000);
        });

    }

    processEvent();

    c.evalSubmitFlag = false;
    c.evalSubmit = function() {
        // Pass user to submit when they are authenticated
        if (c.user.loggedIn) {
            c.submit();
        } else {
            // Nudge the user to provide email
            if (c.rscForm.customer_email == '') {
                c.evalSubmitFlag = true;
            }
            // Don't bother the user if they already provided an email
            else {
                c.submit();
            }
        }
    };

    c.submit = function(parm) {
        // User does not wish to save their email address
        if (parm == 1) {
            c.rscForm.customer_email = '';
        }

        // Disable modal if submission occurs
        c.evalSubmitFlag = false;

        // Enable loading spinner
        c.loading = true;

        $timeout(() => {
            c.nav.nextPage();
            c.loading = false;
        }, 2000);

        /*
        grecaptcha.enterprise.ready(function () {
        	grecaptcha.enterprise.execute(c.data.siteKey, {
        		action: 'submit_questionnaire'
        	}).then(function (resp) {

        		// Submit
        		c.server.get({
        			"action": "submit_questionnaire",
        			"submit": true,
        			"responses": rscForm.getRestBody(),
        			"email": c.rscForm.customer_email,
        			"user_agent": c.data.user_agent,
        			"token": resp
        		}).then(function (r) {

        			if (r.data.response.captcha == false) {
        				$timeout(() => {
        					c.navigate('/rsc?id=rsc_welcome');
        				}, 5000);
        			} else {
        				// Paginate and end spin
        				$timeout(() => {
        					c.nav.nextPage();
        					c.loading = false;
        				}, 2000);
        			}
        		});
        	});
        }); */
    };


    // Set title
    var title = "RSC Intake";
    c.template_header_org_size = "";
    c.org_image_src = "";

    if (c.data.org_size == 'small') {
        title += " Small - ReadySetCyber";
        c.template_header_org_size = "Small Organizations";
        c.org_image_src = "/x_g_dhs_cisa_vm_re.small-org.svg";
    } else if (c.data.org_size == 'medium') {
        title += " Medium - ReadySetCyber";
        c.template_header_org_size = "Medium Organizations";
        c.org_image_src = "/x_g_dhs_cisa_vm_re.medium-org.svg";
    } else if (c.data.org_size == 'large') {
        title += " Large - ReadySetCyber";
        c.template_header_org_size = "Large Organizations";
        c.org_image_src = "/x_g_dhs_cisa_vm_re.large-org.svg";
    }
    $(document).prop('title', title);


    // Modal for tooltips
    c.show_global_modal = false;
    c.global_modal_template = "";

    c.toggle_global_modal = function(template) {
        c.global_modal_template = template ? template : "";
        c.show_global_modal = !c.show_global_modal;
    };


    // START Navigation Logic
    c.navigate = function(link) {
        window.open(link, '_self');
    };

    c.requestNav = function() {
        var url = "/rsc?id=rsc_request_account";
        window.open(url, "_self");
    };

    c.navToCyhyEnrollment = function() {
        var url = "/rsc?id=rsc_cyhy_enrollment_landing";
        window.open(url, "_self");
    };

    c.loginNav = function() {
        var url = "/rsc?id=login";
        window.open(url, "_self");
    };

    c.getFooter = function() {
        // // Set the form nav footer based on the current page. Default to normal nav footer.
        var footer = "rsc_intake_footer_wsm";
        switch (c.nav.getTemplate()) {
            case "rsc_general_org_info":
                footer = "rsc_intake_submit_footer";
                break;
            case "rsc_intake_summary":
                footer = "rsc_intake_summary_footer";
                break;
            default:
                footer = "rsc_intake_footer_wsm";
        }
        return footer;
    };
    // END Navigation Logic

    c.baselineValidation = function(question) {
        if ((c.rscForm.elements[question].value && c.rscForm.elements[question].value != "not_started") || c.data.org_size == 'large') {
            return true;
        } else {
            return false;
        }
    };



    // Scroll Top
    c.top = function() {
        var element = document.getElementById('rsc-intake-top');
        if (element) {
            element.scrollIntoView({
                block: "nearest",
                behavior: "smooth",
            });

        }
    };



    // START Print
    c.print = function() {
        window.print();
    };
    // END Print


    // Logging
    // window.rsc = {
    // 	controller: c,
    // 	rscForm
    // };	

};
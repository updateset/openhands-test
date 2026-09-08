api.controller = function (rscSave, rscNav, $location, $anchorScroll, $timeout) {
	/* widget controller */
	var c = this;

	c.nav = rscNav;
	c.nav.loadOrgSize(c.data.org_size);

	c.sections = JSON.parse(c.options.section);

	c.toggleSection = function (passedIndex) {
		c.sections[passedIndex].selected = !c.sections[passedIndex].selected;
	};

	c.getClass = function (template) {
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

	c.navTo = function (section, parent) {
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

	c.getPercentComplete = function () {
		// return (c.nav.currentPage / (c.nav.pages.length - 2)) * 100;
		//debugger;
		c.master = rscSave.processStatus();
		return c.master.overall * 100;
	};

	c.roundDown = function (x) {
		return Math.floor(x);
	};

	c.sectionCompletion = function (completed, total) {
		return Math.round((parseInt(completed) / parseInt(total)) * 100);
	};

	c.isSelected = function (section) {
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

	c.isChildSelected = function (child) {
		var page = c.nav.getTemplate();

		if (child.template == page) {
			return true;
		}

		return false;
	};


	function waitForElm(selector) {
		return new Promise((resolve, reject) => {
			$(document).ready(function () {
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
		elm.addEventListener('scroll', function (event) {
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

};

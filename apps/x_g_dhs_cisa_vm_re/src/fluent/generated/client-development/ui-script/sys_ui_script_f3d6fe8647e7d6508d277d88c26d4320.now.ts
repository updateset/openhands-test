import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['f3d6fe8647e7d6508d277d88c26d4320'],
    table: 'sys_ui_script',
    data: {
        active: 'false',
        global: 'false',
        ignore_in_now_experience: 'false',
        name: 'x_g_dhs_cisa_vm_re.uswdsLibraryRSC',
        script: `angular.module("uswdsLibraryRSC", []).directive("usaAccordion", function () {
	return {
		restrict: "E",
		transclude: true,
		replace: true,
		scope: {
			type: "@",
			multiselectable: "@",
		},
		template: '<div ng-class="getCSSClass()" ng-transclude></div>',
		controller: function ($scope) {
			$scope.getCSSClass = () => {
				// Styling
				var css = "usa-accordion";
				if ($scope.type == "bordered") {
					css += " usa-accordion--bordered";
				}

				return css;
			};

			// Functionality
			var items = {}; // Add array to track accordion items

			this.addItem = function (item) {
				items[item.id] = item.open;
			};

			this.closeOthers = function (skipItem) {
				if ($scope.multiselectable !== "true") {
					var keys = Object.keys(items);
					keys.forEach(function (key) {
						if (key !== skipItem) {
							items[key] = false;
						}
					});
				}
			};

			this.checkOpen = (id) => {
				return items[id];
			};
		},
	};
})
	.directive("usaAccordionItem", function () {
		return {
			restrict: "E",
			require: "^usaAccordion",
			transclude: true,
			replace: true,
			scope: {
				id: "@",
				isOpen: "=?",
			},
			template: "<div class='usa-accordion__heading' ng-transclude></div>",
			controller: function ($scope, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;

				// Functionality
				$scope.isOpen = $scope.isOpen || false;

				this.toggle = () => {
					$scope.isOpen = !$scope.accordionCtrl.checkOpen($scope.id);
					$scope.accordionCtrl.addItem({ id: $scope.id, open: $scope.isOpen });

					if ($scope.isOpen) {
						$scope.accordionCtrl.closeOthers($scope.id);
					}
				};

				// Controller level objects
				this.id = $scope.id;
			},
			link: function ($scope, $element, $attrs, usaAccordionCtrl) {
				// Error handling for missing attributes
				if (!($attrs.id && $attrs.id != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: id";
					temp.element = $element;
					temp.attributes = $attrs;

					console.error("USWDS Directive Level 0 Error: <usa-accordion-item></usa-accordion-item>", temp);
				}

				$scope.accordionCtrl = usaAccordionCtrl;

				// Initialize with the provided isOpen value
				usaAccordionCtrl.addItem({ id: $scope.id, open: $scope.isOpen });

				// Watch for external changes to isOpen
				$scope.$watch("isOpen", function (newValue, oldValue) {
					if (newValue !== oldValue) {
						usaAccordionCtrl.addItem({ id: $scope.id, open: newValue });
						if (newValue) {
							usaAccordionCtrl.closeOthers($scope.id);
						}
					}
				});
			},
		};
	})
	.directive("usaAccordionTrigger", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			require: ["^usaAccordionItem", "^?usaAccordion"],
			template: \`
				<button type="button" class="usa-accordion__button" aria-expanded="{{show()}}" aria-controls="{{parentId}}-content" ng-click="toggle()">
				<i class="fa" ng-class="getIconClass()" style="float: right;"></i>
				<span ng-transclude></span></button>
			\`,
			link: function ($scope, $element, $attrs, controllers) {
				$scope.parentId = controllers[0].id;
				$scope.toggle = () => {
					controllers[0].toggle();
				};

				$scope.show = () => {
					return controllers[1].checkOpen($scope.parentId);
				};

				$scope.getIconClass = () => {
					return controllers[1].checkOpen($scope.parentId)
						? 'fa-minus'
						: 'fa-plus';
				};
			},
		};
	})
	.directive("usaAccordionContent", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			require: ["^usaAccordionItem", "^?usaAccordion"],
			template:
				'<div id="{{parentId}}-content" class="usa-accordion__content usa-prose" ng-show="show()" ng-transclude></div>',
			link: function ($scope, $element, $attrs, controllers) {
				$scope.parentId = controllers[0].id;
				$scope.show = () => {
					return controllers[1].checkOpen($scope.parentId);
				};
			},
		};
	}).directive("usaFileInputWrapper", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				dragText: "@?",
				chooseText: "@?",
				files: "=",
			},
			template:
				'<div class="usa-file-input">\\
                    <div class="usa-sr-only" aria-live="polite">{{fileNames}}</div>\\
                    <div class="usa-file-input__target">\\
                        <div class="usa-file-input__box"></div>\\
                        <div class="usa-file-input__preview-heading" ng-show="files.length > 0">{{countFilesText()}} <span class="usa-file-input__choose">{{changeFileText()}}</span></div>\\
                        <div class="usa-file-input__instructions" aria-hidden="true" ng-show="files.length == 0">\\
                            <span class="usa-file-input__drag-text">{{dragText ? dragText : "Drag files here or "}}</span>\\
                            <span class="usa-file-input__choose">{{chooseText ? chooseText : "choose from folder"}}</span>\\
                        </div>\\
                        <div class="usa-file-input__preview" ng-repeat="file in files">\\
                            <img ng-class="getAttachmentImage(file)">{{file.name}}\\
                            <div></div>\\
                        </div>\\
                        <ng-transclude></ng-transclude>\\
                    </div>\\
                </div>',
			controller: function ($scope, $element, $window, $timeout) {
				this.files = $scope.files;
				$scope.fileNames = "No file selected.";

				$scope.countFilesText = function () {
					if (!this.files) {
						return "";
					}

					if (this.files && this.files.length == 1) {
						return "Selected file";
					} else {
						return this.files.length + " files selected";
					}
				};

				$scope.changeFileText = function () {
					if (!this.files) {
						return "";
					}

					if (this.files.length == 1) {
						return "Change file";
					} else {
						return "Change files";
					}
				};

				this.setSRfileNames = function (text) {
					$timeout(function () {
						$scope.fileNames = text;
					}, 1000);
				};

				$scope.getAttachmentImage = function (file) {
					let appendClass = "usa-file-input__preview-image ";

					switch (file.extension) {
						case "pdf":
							appendClass = appendClass + "usa-file-input__preview-image--pdf";
							break;

						case "doc":
						case "docx":
						case "pages":
							appendClass = appendClass + "usa-file-input__preview-image--word";
							break;

						case "xls":
						case "xlsx":
						case "numbers":
							appendClass = appendClass + "usa-file-input__preview-image--excel";
							break;

						case "mov":
						case "mp4":
							appendClass = appendClass + "usa-file-input__preview-image--video";
							break;

						default:
							appendClass = appendClass + "usa-file-input__preview-image--generic";
					}

					return appendClass;
				};
			},
			link: function (scope, element, attrs, ctrl) {
				if (!(attrs.files)) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: files";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-file-input-wrapper></usa-file-input-wrapper>", temp);
				}
			},
		};
	})
	.directive("usaFileInput", function () {
		return {
			restrict: "E",
			replace: true,
			require: "^^usaFileInputWrapper",
			scope: {},
			template: '<input class="usa-file-input__input" type="file"></input>',
			link: function (scope, element, attr, usaFileInputWrapperCtrl) {
				element.on("change", function (event) {
					let filesList = event.target.files;

					if (filesList.length > 0) {
						usaFileInputWrapperCtrl.files.length = 0;

						for (let i = 0; i < filesList.length; i++) {
							//add the files to the array
							filesList[i].extension = filesList[i].name.split(".").pop();
							usaFileInputWrapperCtrl.files.push(filesList[i]);
						}

						// Map the files to their names
						var srTextFileNames = usaFileInputWrapperCtrl.files.map((file) => file.name).join(", ");
						var numOfFiles = filesList.length;

						if (numOfFiles == 1) {
							usaFileInputWrapperCtrl.setSRfileNames("You have selected the file: " + srTextFileNames);
							element.attr("aria-label", "Change file");
						} else {
							usaFileInputWrapperCtrl.setSRfileNames("You have selected " + numOfFiles + " files: " + srTextFileNames);
							element.attr("aria-label", "Change files");
						}
					} else {
						usaFileInputWrapperCtrl.files.length = 0;
						usaFileInputWrapperCtrl.setSRfileNames("No file selected.");
						element.attr("aria-label", "Drag file here or choose from folder");
					}

					scope.$apply();
				});
			},
		};
	}).directive("usaAlert", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			scope: {
				variant: '@?',
				slim: '@?',
				noIcon: '@?'
			},
			template: '<div class="{{getCSS()}}"><div class="usa-alert__body" ng-transclude></div></div>',
			controller: function ($scope, $element, $window) {
				$scope.debug = $window.uswdsDebug;

				$scope.getCSS = function () {
					let classes = ['usa-alert'];

					switch ($scope.variant) {
						case "warning":
							classes.push("usa-alert--warning");
							break;
						case "success":
							classes.push("usa-alert--success");
							break;
						case "error":
							classes.push("usa-alert--error");
							break;
						case "emergency":
							classes.push("usa-alert--emergency");
							break;
						case "info":
						default:
							classes.push("usa-alert--info");
					}

					if ($scope.slim == "true") {
						classes.push("usa-alert--slim");
					}
					if ($scope.noIcon == "true") {
						classes.push("usa-alert--no-icon");
					}

					return classes.join(" ");
				};
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					let invalidAttributes = [];
					const validVariants = ["warning", "success", "error", "emergency", "info"];
					if (attrs.variant && !validVariants.includes(attrs.variant)) invalidAttributes.push("variant");
					if (attrs.slim && (attrs.slim !== "true" && attrs.slim !== "false")) invalidAttributes.push("slim");
					if (attrs.noIcon && (attrs.noIcon !== "true" && attrs.noIcon !== "false")) invalidAttributes.push("no-icon");

					if (invalidAttributes.length > 0) {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attribute: " + invalidAttributes.join(", ");
						temp.element = element;
						temp.attributes = attrs;

						console.warn("USWDS Directive Level 0 Error: <usa-alert></usa-alert>", temp);
					}
				}
			}
		};
	})
	.directive("usaAlertHeading", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			require: '^usaAlert',
			scope: {
				headingLevel: "@"
			},
			template: '<div class="usa-alert__heading" role="heading" aria-level="{{headingLevel}}" ng-transclude></div>'
		};
	})
	.directive("usaAlertText", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			require: '^usaAlert',
			template: '<p class="usa-alert__text" ng-transclude></p>'
		};
	}).directive("usaButtonGroup", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: '<ul class="usa-button-group" ng-transclude></ul>'
		};
	})
	.directive("usaButtonGroupItem", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: '<li class="usa-button-group__item" ng-transclude></li>',
		};
	}).directive("usaBreadcrumb", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`
            <nav class="usa-breadcrumb" aria-label="Breadcrumbs">
                <ol class="usa-breadcrumb__list" ng-transclude></ol>
            </nav>\`,
			controller: function () {
				this.items = [];

				this.registerItem = function (item) {
					this.items.push(item);
					return {
						position: this.items.length,
					};
				};
			},
		};
	})
	.directive("usaBreadcrumbItem", function () {
		return {
			restrict: "E",
			require: "^usaBreadcrumb",
			replace: true,
			scope: {
				link: "@",
				label: "@",
			},
			template: \`
            <li ng-class="getClass()" aria-current="{{isCurrent() ? 'page' : undefined}}">
                <a ng-if="!isCurrent()" href="{{link}}" class="usa-breadcrumb__link">
                    <span>{{label}}</span>
                </a>
                <span ng-if="isCurrent()">{{label}}</span>
            </li>\`,
			controller: function ($scope, $window) {
				$scope.getClass = function () {
					var baseClass = "usa-breadcrumb__list-item";
					if ($scope.isCurrent()) {
						baseClass += " usa-current";
					}
					return baseClass;
				};
			},
			link: function (scope, element, attrs, breadcrumbCtrl) {
				// Error handling for missing attributes
				if (!(attrs.link && attrs.link != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: link";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-breadcrumb-item></usa-breadcrumb-item>", temp);
				}
				if (!(attrs.label && attrs.label != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: label";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-breadcrumb-item></usa-breadcrumb-item>", temp);
				}

				var positionInfo = breadcrumbCtrl.registerItem(scope);
				scope.isCurrent = () => {
					return positionInfo.position === breadcrumbCtrl.items.length;
				};
			},
		};
	}).directive("usaButton", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			scope: {
				variant: '@?',
				big: '@?',
				unstyled: '@?',
				inverse: '@?',
			},
			template: '<button class="{{getVariantClass()}}" ng-transclude></button>',
			controller: function ($scope, $element, $window) {
				$scope.debug = $window.uswdsDebug;

				$scope.getVariantClass = function () {
					let classes = ["usa-button"];
					switch ($scope.variant) {
						case "secondary":
							classes.push("usa-button--secondary");
							break;
						case "cool":
							classes.push("usa-button--accent-cool");
							break;
						case "warm":
							classes.push("usa-button--accent-warm");
							break;
						case "outline":
							classes.push("usa-button--outline");
							break;
						case "base":
							classes.push("usa-button--base");
							break;
					}

					if ($scope.inverse == "true") {
						classes.push("usa-button--inverse");
					}

					if ($scope.big == "true") {
						classes.push("usa-button--big");
					}

					if ($scope.unstyled == "true") {
						classes.push("usa-button--unstyled");
					}

					return classes.join(" ");
				};
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					let invalidAttributes = [];
					const validVariants = ["secondary", "cool", "warm", "outline", "base"];
					if (attrs.variant && !validVariants.includes(attrs.variant)) invalidAttributes.push("variant");
					if (attrs.big && (attrs.big !== "true" && attrs.big !== "false")) invalidAttributes.push("big");
					if (attrs.unstyled && (attrs.unstyled !== "true" && attrs.unstyled !== "false")) invalidAttributes.push("unstyled");
					if (attrs.inverse && (attrs.inverse !== "true" && attrs.inverse !== "false")) invalidAttributes.push("inverse");

					if (invalidAttributes.length > 0) {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attribute: " + invalidAttributes.join(", ");
						temp.element = element;
						temp.attributes = attrs;
						console.warn("USWDS Directive Level 0 Error: <usa-button></usa-button>", temp);
					}
				}
			}
		};
	}).directive('usaCharacterCount', function ($timeout) {
		return {
			restrict: 'A',
			controller: function ($scope, $element, $attrs, $window) {
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs) {

				let invalidAttributes = [];

				if (element.prop('tagName') !== 'INPUT' && element.prop('tagName') !== 'TEXTAREA') invalidAttributes.push('Invalid element type');
				if (!attrs.id || attrs.id.trim() == '') invalidAttributes.push('Missing id attribute');

				if (invalidAttributes.length > 0) {
					const temp = Object.create(null);
					temp.errorMessage = invalidAttributes.join(', ');
					temp.element = element;
					temp.attributes = attrs;
					console.error("USWDS Directive Level 0 Error: usa-character-count", temp);
					return;
				}

				if (scope.debug && scope.debug == true) {
					if (!attrs.usaCharacterCount || parseInt(attrs.usaCharacterCount) < 1 || isNaN(parseInt(attrs.usaCharacterCount))) {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attributes: maxlength (defaulting to 10)";
						temp.element = element;
						temp.attributes = attrs;
						console.warn("USWDS Directive Level 1 Error: <usa-character-count></usa-character-count>", temp);
					}
				}

				var timeout;
				var maxLength = parseInt(attrs.usaCharacterCount);
				if (isNaN(maxLength) || maxLength < 1) {
					maxLength = 10;
				}

				var messageSpan = angular.element('<span id="' + attrs.id + '-message" class="usa-character-count__message usa-sr-only">You can enter up to ' + maxLength + ' characters</span>');
				var statusDiv = angular.element('<div class="usa-character-count__status usa-hint" aria-hidden="true"></div>');
				var srStatusDiv = angular.element('<div class="usa-character-count__sr-status usa-sr-only" aria-live="polite" aria-busy="true"></div>');

				element.after(messageSpan);
				messageSpan.after(srStatusDiv);
				messageSpan.after(statusDiv);

				element.attr('aria-describedby', ((element.attr('aria-describedby') || '') + ' ' + attrs.id + '-message').trim());

				function updateCharacterCount() {
					statusDiv.removeClass('usa-character-count__status--invalid');
					var characterCount = element.val().length;
					var message;
					var spanMessage = "You can enter up to " + maxLength + " characters.";

					if (characterCount === 0) {
						message = maxLength + ' characters allowed';
					} else if (maxLength - characterCount == 1) {
						message = '1 character left';
						spanMessage += " You have 1 character reamining.";
					} else if (characterCount - maxLength == 1) {
						message = (characterCount - maxLength) + ' character over the limit';
						statusDiv.addClass('usa-character-count__status--invalid');
						spanMessage += " You are 1 character over the limit.";
					} else if (characterCount <= maxLength) {
						message = (maxLength - characterCount) + ' characters left';
						spanMessage += " You have " + (maxLength - characterCount) + " characters left.";
					} else {
						message = (characterCount - maxLength) + ' characters over the limit';
						statusDiv.addClass('usa-character-count__status--invalid');
						spanMessage += " You are " + (characterCount - maxLength) + " characters over the limit.";
					}

					messageSpan.text(spanMessage);
					statusDiv.text(message);


					if (timeout) {
						clearTimeout(timeout);
					}

					timeout = setTimeout(function () {
						srStatusDiv.text(message);
					}, 1000);
				}

				element.on('input', updateCharacterCount);

				$timeout(function () {
					updateCharacterCount();
				}, 0);

				$timeout(function () {
					srStatusDiv.attr('aria-busy', 'false');
				}, 2000);
			}
		};
	}).directive("usaBreadcrumbRdfa", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				vocab: "@",
			},
			template: \`
            <nav class="usa-breadcrumb" aria-label="Breadcrumbs">
                <ol class="usa-breadcrumb__list" vocab="{{vocab}}" typeof="BreadcrumbList" ng-transclude></ol>
            </nav>\`,
			controller: function () {
				this.items = [];

				this.registerItem = function (item) {
					this.items.push(item);
					return {
						position: this.items.length,
					};
				};
			},
			link: function (scope, element, attrs, breadcrumbCtrl) {
				// Error handling for missing attributes
				if (!(attrs.vocab && attrs.vocab != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: vocab";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-breadcrumb-rdfa></usa-breadcrumb-rdfa>", temp);
				}
			}
		};
	})
	.directive("usaBreadcrumbRdfaItem", function () {
		return {
			restrict: "E",
			require: "^usaBreadcrumbRdfa",
			replace: true,
			scope: {
				link: "@",
				label: "@",
			},
			template: \`
                <li ng-class="getClass()" aria-current="{{isCurrent() ? 'page' : undefined}}" property="itemListElement" typeof="ListItem">
                    
                    <!-- Link if not current -->
                    <a ng-if="!isCurrent()" href="{{link}}" class="usa-breadcrumb__link" property="item" typeof="WebPage">
                        <span property="name">{{label}}</span>
                    </a>
                    
                    <!-- Span if current -->
                    <span ng-if="isCurrent()">{{label}}</span>
                    <meta property="position" content="{{position}}" />
                </li>
            \`,
			controller: function ($scope) {
				$scope.getClass = function () {
					var baseClass = "usa-breadcrumb__list-item";
					if ($scope.current) {
						baseClass += " usa-current";
					}
					return baseClass;
				};
			},
			link: function (scope, element, attrs, breadcrumbCtrl) {
				var positionInfo = breadcrumbCtrl.registerItem(scope);
				scope.position = positionInfo.position;
				scope.isCurrent = () => {
					return positionInfo.position === breadcrumbCtrl.items.length;
				};

				// Error handling for missing attributes
				if (!(attrs.link && attrs.link != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: link";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-breadcrumb-rdfa-item></usa-breadcrumb-rdfa-item>", temp);
				}

				if (!(attrs.label && attrs.label != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: label";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-breadcrumb-rdfa-item></usa-breadcrumb-rdfa-item>", temp);
				}
			},
		};
	}).directive('usaCardGroup', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<ul class="usa-card-group" ng-transclude></ul>',
			controller: function ($scope, $element) { }
		};
	})
	.directive('usaCard', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			require: '^usaCardGroup',
			scope: {
				flag: '@?',
				headerFirst: '@?'
			},
			template: '<li class="{{getCSS()}}"><div class="usa-card__container" ng-transclude></div></li>',
			controller: function ($scope, $element, $window) {
				$scope.debug = $window.uswdsDebug;

				$scope.getCSS = function () {
					let classes = ['usa-card'];
					if ($scope.flag == 'left' || $scope.flag == 'right') {
						classes.push('usa-card--flag');
						if ($scope.flag == "right") {
							classes.push('usa-card--media-right');
						}
					}

					if ($scope.headerFirst == "true") {
						classes.push('usa-card--header-first');
					}
					return classes.join(' ');
				}
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					let invalidAttributes = [];
					const validVariants = ["left", "right"];
					if (attrs.flag && !validVariants.includes(attrs.flag)) invalidAttributes.push("flag");
					if (attrs.headerFirst && (attrs.headerFirst !== "true" && attrs.headerFirst !== "false")) invalidAttributes.push("headerFirst");

					if (invalidAttributes.length > 0) {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attribute(s): " + invalidAttributes.join(", ");
						temp.element = element;
						temp.attributes = attrs;
						console.warn("USWDS Directive Level 1 Error: <usa-card></usa-card>", temp);
					}
				}
			}
		};
	})
	.directive('usaCardContainer', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<div class="usa-card__container" ng-transclude></div>'
		};
	})
	.directive('usaCardHeader', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<div class="usa-card__header"><h4 class="usa-card__heading" ng-transclude></h4></div>'
		};
	})
	.directive('usaCardMedia', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			scope: {
				mediaType: '@?'
			},
			template: '<div class="usa-card__media {{getMediaType()}}"><div class="usa-card__img" ng-transclude></div></div>',
			controller: function ($scope, $element, $window) {
				$scope.debug = $window.uswdsDebug;

				$scope.getMediaType = function () {
					let classes = ['usa-card__media'];
					if ($scope.mediaType == 'inset' || $scope.mediaType == 'exdent') {
						classes.push('usa-card__media--' + $scope.mediaType);
					}
					return classes.join(' ');
				}
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					const mediaTypes = ["inset", "exdent"];
					if (attrs.mediaType && !mediaTypes.includes(attrs.mediaType)) {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attribute: mediaType";
						temp.element = element;
						temp.attributes = attrs;
						console.error("USWDS Directive Level 1 Error: <usa-card-media></usa-card-media>", temp);
					}
				}
			}
		};
	})
	.directive('usaCardBody', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<div class="usa-card__body" ng-transclude></div>'
		};
	})
	.directive('usaCardFooter', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<div class="usa-card__footer" ng-transclude></div>'
		};
	}).directive("usaClickOutside", function ($document, $parse, $timeout) {
		return {
			restrict: "A",
			link: function ($scope, elem, attr) {
				// postpone linking to next digest to allow for unique id generation
				$timeout(function () {
					var classList = attr.outsideIfNot !== undefined ? attr.outsideIfNot.split(/[ ,]+/) : [],
						fn;

					function eventHandler(e) {
						var i, element, r, id, classNames, l;

						// check if our element already hidden and abort if so
						if (angular.element(elem).hasClass("ng-hide")) {
							return;
						}

						//if right click
						if (e.button == 2) {
							return;
						}

						// checks if directive is on a dropdown and is not open
						if (angular.element(elem).hasClass("dropdown") && !angular.element(elem).hasClass("open")) {
							return;
						}

						// if there is no click target, no point going on
						if (!e || !e.target) {
							return;
						}

						// loop through the available elements, looking for classes in the class list that might match and so will eat
						for (element = e.target; element; element = element.parentNode) {
							// check if the element is the same element the directive is attached to and exit if so (props @CosticaPuntaru)
							if (element === elem[0]) {
								return;
							}

							// now we have done the initial checks, start gathering id's and classes
							(id = element.id), (classNames = element.className), (l = classList.length);

							// Unwrap SVGAnimatedString classes
							if (classNames && classNames.baseVal !== undefined) {
								classNames = classNames.baseVal;
							}

							// if there are no class names on the element clicked, skip the check
							if (classNames || id) {
								// loop through the elements id's and classnames looking for exceptions
								for (i = 0; i < l; i++) {
									//prepare regex for class word matching
									r = new RegExp("\\\\b" + classList[i] + "\\\\b");

									// check for exact matches on id's or classes, but only if they exist in the first place
									if ((id !== undefined && id === classList[i]) || (classNames && r.test(classNames))) {
										// now let's exit out as it is an element that has been defined as being ignored for clicking outside
										return;
									}
								}
							}
						}

						// if we have got this far, then we are good to go with processing the command passed in via the click-outside attribute
						$timeout(function () {
							fn = $parse(attr["usaClickOutside"]);
							fn($scope, { event: e });
						});
					}

					// if the devices has a touchscreen, listen for this event
					if (_hasTouch()) {
						$document.on("touchstart", eventHandler);
					}

					// still listen for the click event even if there is touch to cater for touchscreen laptops
					$document.on("click", eventHandler);

					// when the scope is destroyed, clean up the documents event handlers as we don't want it hanging around
					$scope.$on("$destroy", function () {
						if (_hasTouch()) {
							$document.off("touchstart", eventHandler);
						}

						$document.off("click", eventHandler);
					});

					/**
					 * @description Private function to attempt to figure out if we are on a touch device
					 * @private
					 **/
					function _hasTouch() {
						// works on most browsers, IE10/11 and Surface
						return "ontouchstart" in window || navigator.maxTouchPoints;
					}
				});
			},
		};
	}).directive("usaCheckbox", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: '<div class="usa-checkbox" ng-transclude></div>',
			controller: function () {
			}
		};
	})
	.directive("usaCheckboxInput", function () {
		return {
			restrict: "E",
			replace: true,
			require: '^usaCheckbox',
			scope: {
				variant: '@?',
			},
			template: '<input class="{{getCss()}}" aria-checked="{{getAriaChecked()}}" type="checkbox"></input>',
			controller: function ($scope, $attrs, $element, $window) {
				$scope.debug = $window.uswdsDebug;

				$scope.getCss = function () {
					let classes = ['usa-checkbox__input'];

					if ($scope.variant == 'tile') {
						classes.push('usa-checkbox__input--tile');
					}

					return classes.join(' ');
				};

				$scope.getAriaChecked = function () {
					return $element[0].checked;
				};
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					if (attrs.variant && attrs.variant != 'tile') {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attribute: variant. Expected 'tile'";
						temp.element = element;
						temp.attributes = attrs;

						console.warn("USWDS Directive Level 1 Error: <usa-checkbox-input></usa-checkbox-input>", temp);
					};
				}
			}
		};
	})
	.directive("usaCheckboxLabel", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			require: '^usaCheckbox',
			template: '<label class="usa-checkbox__label" ng-transclude></label>',
			controller: function () {
			}
		};
	}).directive("usaCheckboxLabelDescription", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			require: '^usaCheckboxLabel',
			template: '<span class="usa-checkbox__label-description" ng-transclude></span>',
		};
	}).directive("usaBanner", function () {
		return {
			restrict: "E",
			replace: true,
			template: \`
		<section class="usa-banner" aria-label="Official website of the United States government">
			<div class="usa-accordion">
				<header ng-class="getHeaderClass()">
					<div class="usa-banner__inner">
						<div class="grid-col-auto">
							<img aria-hidden="true" class="usa-banner__header-flag" src="https://designsystem.digital.gov/assets/img/us_flag_small.png" alt="" width="16" height="11" />
						</div>
						<div class="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
							<p class="usa-banner__header-text">An official website of the United States government</p>
							<p class="usa-banner__header-action">Here's how you know</p>
						</div>
						<button type="button" class="usa-accordion__button usa-banner__button" ng-click="toggleLink()" aria-expanded="{{getSelected()}}" aria-controls="gov-banner-default">
							<span class="usa-banner__button-text">Here's how you know</span>
							<i class="fa" ng-class="{'fa-angle-down': !getSelected(), 'fa-angle-up': getSelected()}" aria-hidden="true"></i>
						</button>
					</div>
				</header>
				<div ng-if="getSelected()" class="usa-banner__content usa-accordion__content" id="gov-banner-default">
					<div class="grid-row grid-gap-lg">
						<div class="usa-banner__guidance tablet:grid-col-6">
						<img class="usa-banner__icon usa-media-block__img" src="https://designsystem.digital.gov/assets/img/icon-dot-gov.svg" role="img" alt="" aria-hidden="true" />
						<div class="usa-media-block__body">
							<p><strong>Official websites use .gov</strong><br />A <strong>.gov</strong> website belongs to an official government organization in the United States.</p>
						</div>
					</div>
					<div class="usa-banner__guidance tablet:grid-col-6">
						<img class="usa-banner__icon usa-media-block__img" src="https://designsystem.digital.gov/assets/img/icon-https.svg" role="img" alt="" aria-hidden="true" />
						<div class="usa-media-block__body">
							<p><strong>Secure .gov websites use HTTPS</strong><br />A <strong>lock</strong> ( 
								<span class="icon-lock"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" class="usa-banner__lock-image" role="img" aria-labelledby="banner-lock-description-default" focusable="false">
									<title id="banner-lock-title-default">Lock</title>
									<desc id="banner-lock-description-default">Locked padlock icon</desc>
									<path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z" />
								</svg></span>) or <strong>https://</strong> means you've safely connected to the .gov website. Share sensitive information only on official, secure websites.</p>
						</div>
						</div>
					</div>
				</div>
			</div>	
		</section>\`,
			controller: function ($scope) {
				// Toggle dropdown
				$scope.selected = false;
				$scope.toggleLink = function () {
					$scope.selected = !$scope.selected;
				};

				$scope.getSelected = function () {
					return $scope.selected;
				};

				$scope.getHeaderClass = function () {
					var headerClass = "";
					if ($scope.getSelected()) {
						headerClass = "usa-banner__header usa-banner__header--expanded";
					} else {
						headerClass = "usa-banner__header";
					}

					return headerClass;
				};
			},
		};
	}).directive("usaComboBox", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				id: "@",
			},
			template: '<div class="usa-combo-box" ng-transclude></div>',
			controller: function ($scope) {
				// Set ID
				this.id = $scope.id;

				// Set the selected value in the parent directive
				$scope.selectedValue = "";

				// Publish the value to the input directive
				this.publishValue = (value, title) => {
					$scope.selectedValue = value.toString();
					// Broadcast the change to input directive
					$scope.$broadcast("valueUpdated", { value: value });
				};

				// The input directive will use this function to retrieve the value during initialization
				this.retrieveValue = () => {
					return $scope.selectedValue;
				};

				// Set the value in the select directive
				this.setValue = (value) => {
					$scope.selectedValue = value;
					// Broadcast the change to select directive
					$scope.$broadcast("updateSelect", { value: value });
				};

				// Function to update options
				this.updateOptions = () => {
					// Broadcast the updated options to the input directive
					$scope.$broadcast("optionsUpdated");
				};

				// Store the last valid value
				$scope.lastValidValue = "";

				// Add flag to track if we're clicking inside the list
				$scope.clickingList = false;

				// Add function to set the flag when mouse enters the list
				$scope.onListMouseEnter = () => {
					$scope.clickingList = true;
				};

				// Add function to clear the flag when mouse leaves the list
				$scope.onListMouseLeave = () => {
					$scope.clickingList = false;
				};

				// Monitor the results for the screen reader
				$scope.resultStatus = "";
			},
			link: function (scope, element, attrs, ctrl) {
				element.attr("id", "");

				// Error handling for missing attributes
				if (!(attrs.id && attrs.id != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: id";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-combo-box></usa-combo-box>", temp);
				}
			},
		};
	})
	.directive("usaComboBoxSelect", function () {
		return {
			restrict: "E",
			require: "^usaComboBox",
			replace: true,
			transclude: true,
			scope: {
				model: "=",
				watchModel: "=",
			},
			template:
				'<select ng-model="model" class="usa-select usa-sr-only usa-combo-box__select" name="{{ctrl.id}}--select--hidden" aria-hidden="true" tabindex="-1" ng-transclude></select>',
			controller: function ($scope, $timeout) {
				// Publish changes to the parent directive
				$scope.$watch("model", function (newValue) {
					if (newValue) {
						// Notify parent directive after brief timeout
						// This is to ensure all the options are available at load
						$timeout(() => {
							$scope.ctrl.publishValue(newValue);
						}, 100);
					}
				});

				// Listen for updates from parent
				$scope.$on("updateSelect", function (event, data) {
					$scope.model = data.value.toString();
				});

				// Watch for changes to the watchModel value
				if ($scope.watchModel !== undefined) {
					$scope.$watch("watchModel", function (newValue, oldValue) {
						if (newValue !== oldValue) {
							$scope.ctrl.updateOptions();
						}
					});
				}
			},
			link: function (scope, element, attrs, ctrl) {
				scope.ctrl = ctrl;

				// Error handling for missing attributes
				if (!(attrs.model && attrs.model != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: model";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-combo-box-select></usa-combo-box-select>", temp);
				}
			},
		};
	})
	.directive("usaComboBoxOption", function () {
		return {
			restrict: "E",
			require: "^usaComboBox",
			replace: true,
			transclude: true,
			scope: {
				label: "@",
				value: "@",
			},
			template: "<option ng-transclude></option>",
			link: function (scope, element, attrs, ctrl) {
				element[0].title = ctrl.id + "--" + scope.label;

				// Error handling for missing attributes
				if (!(attrs.label && attrs.label != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: label";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-combo-box-option></usa-combo-box-option>", temp);
				}

				if (!(attrs.value && attrs.value != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: value";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-combo-box-option></usa-combo-box-option>", temp);
				}
			},
		};
	})
	.directive("usaComboBoxInput", function ($compile) {
		return {
			restrict: "E",
			require: "^usaComboBox",
			replace: true,
			transclude: true,
			scope: {
				filterFunction: "&",
			},
			template:
				'<div usa-click-outside="toggleList(1)">' +
				'<input id="{{id}}" ng-model="searchString" ng-click="toggleList(2)" ng-blur="toggleList(3)" class="usa-combo-box__input" type="text" role="combobox" aria-autocomplete="list" autocomplete="false" aria-expanded="{{getListVisibility()}}" aria-owns="{{id}}--list" aria-controls="{{id}}--list" aria-activedescendant="{{getActiveDescendant()}}">' +
				'<span class="usa-combo-box__clear-input__wrapper" tabindex="-1">' +
				'<button ng-show="showClear()" ng-style="{{getClearButtonStyle()}}" ng-click="clear()" aria-label="Clear the select contents for {{id}}" type="button" id="{{id}}-clear-combobox-button">' +
				'<i class="fa fa-times" aria-hidden="true"></i>' +
				"</button>" +
				"</span>" +
				'<span class="usa-combo-box__input-button-separator" tabindex="-1"></span>' +
				'<span class="usa-combo-box__toggle-list__wrapper" tabindex="-1">' +
				'<button class="usa-combo-box__toggle-list" aria-label="Toggle the dropdown list for {{id}}" type="button" ng-click="toggleList()" id="{{id}}-comboboxbutton" tabindex="-1" aria-hidden="true">' +
				'<i class="fa fa-angle-down" aria-hidden="true"></i>' +
				"</button>" +
				"</span>" +
				'<ul id="{{id}}--list" class="usa-combo-box__list" role="listbox" tabindex="-1" ng-show="getListVisibility()" ng-mouseenter="onListMouseEnter()" ng-mouseleave="onListMouseLeave()">' +
				'<li ng-repeat="option in filteredOptions track by $index" id="{{id}}--option--{{$index}}" name="{{id}}--option" aria-setsize="{{filteredOptions.length}}" aria-posinset="{{$index}}" aria-selected="selected({{$index}})" class="usa-combo-box__list-option" tabindex="-1" role="option" title="{{getSelectionStatus(option.value)}}" value="{{option.value}}" ng-mousedown="preventBlur($event)" ng-click="setInput(option.value, option.label)" ng-mouseenter="trackOption($index)" ng-mouseleave="trackOption(-1)" data-state="{{isCurrentIndex($index)}}" data-selected="{{isSelected(option.value)}}">' +
				'<span ng-bind-html="option.html"></span>' +
				"</li>" +
				'<li ng-if="filteredOptions.length === 0" class="usa-combo-box__list-option--no-results" tabindex="-1" role="option">' +
				"No options found" +
				"</li>" +
				"</ul>" +
				'<div class="usa-combo-box-status usa-sr-only" role="status" aria-atomic="true">{{getResultStatus()}}</div>' +
				"</div>",
			controller: function ($scope, $timeout, $sce) {
				this.id = $scope.id;

				// Store the last valid value
				$scope.lastValidValue = "";

				// Add flag to track if we're clicking inside the list
				$scope.clickingList = false;

				// Add function to set the flag when mouse enters the list
				$scope.onListMouseEnter = () => {
					$scope.clickingList = true;
				};

				// Add function to clear the flag when mouse leaves the list
				$scope.onListMouseLeave = () => {
					$scope.clickingList = false;
				};

				// Monitor the results for the screen reader
				$scope.resultStatus = "";

				// Store the options
				$scope.options = [];

				// Store the filtered options
				$scope.filteredOptions = [];

				// Load complete
				$scope.loadComplete = false;

				// Watch for changes to the model value
				// $scope.$watch("model", function (newValue, oldValue) {
				// 	if (newValue !== oldValue) {
				// 		updateOptions();
				// 	}
				// });

				// Function to update options
				function updateOptions() {
					// Retrieve the options
					var optionElements = document.getElementsByTagName("option");

					$timeout(() => {
						$scope.options = Array.from(optionElements)
							.filter((el) => el.title.startsWith($scope.id))
							.map((el) => ({
								element: el,
								value: el.value,
								label: el.label,
								html: $sce.trustAsHtml(el.innerHTML),
							}));
						// Update filtered options
						$scope.searchString = '';
						$scope.filteredOptions = $scope.options;
					}, 100);
				}

				// Initial options setup
				$timeout(() => {
					updateOptions();

					// Retrieve the initial value from the parent directive
					$timeout(() => {
						$scope.lastValidValue = $scope.ctrl.retrieveValue();
						if ($scope.lastValidValue) {
							// Wait a bit for options to be available
							var matchingOption = Array.from($scope.options).find((option) => option.value == $scope.lastValidValue);
							$scope.searchString = matchingOption ? matchingOption.label : "";

							// Ensure list stays hidden during initialization
							$scope.showList = false;
						}
					}, 100);

					// Load complete
					$scope.loadComplete = true;
				}, 100);

				/**
				 * This will only run if the initial load is complete
				 * Watch for changes to searchString and show list when the user types
				 * If we automatically revert the value because the searchString is not a valid option, do not open the list
				 * Update the filteredOptions based on the searchString
				 */
				$scope.$watch("searchString", function (newValue, oldValue) {
					if ($scope.loadComplete) {
						if (!$scope.showList && newValue !== "") {
							var matchingOption = $scope.options.find((option) => option.label === $scope.searchString);
							if (!matchingOption) {
								$scope.showList = true;
							}
						}

						$scope.filteredOptions = $scope.options.filter($scope.getFilterFunction);

						// Manage the resultStatus for screen readers
						if (!$scope.showList) {
							$scope.resultStatus = "";
						} else {
							if ($scope.filteredOptions.length > 0) {
								$scope.resultStatus = $scope.filteredOptions.length + " results available";
								$scope.trackOption(0);
							} else {
								$scope.resultStatus = "No results";
							}
						}
					}
				});

				$scope.getResultStatus = () => {
					return $scope.resultStatus;
				};

				// -- STYLING -- //
				// Replacing "usa-combo-box__clear-input" with ng-style
				$scope.getClearButtonStyle = () => {
					var style =
						"{'right': 'calc(2.5em + 3px)', 'background-color': 'transparent', 'background-position': 'center', 'border': '0', 'bottom': '1px', 'cursor': 'pointer', 'margin-bottom': '0', 'opacity': '.6', 'padding-right': '1rem', 'position': 'absolute', 'top': '1px', 'z-index': '100'}";

					return style;
				};

				// -- FILTER LIST -- //
				$scope.getFilterFunction = (option) => {
					// -- SCENARIO 1: User passes their own function to filter the list -- //
					if ($scope.filterFunction()) {
						// Use custom filter function if provided
						return $scope.filterFunction();
					}

					// -- SCENARIO 2: Show all options if searchString is empty -- //
					if ($scope.searchString === "") {
						return true;
					}

					// -- SCENARIO 3: A value has already been selected. Show all options -- //
					if ($scope.lastValidValue) {
						var matchingOption = $scope.options.find((opt) => opt.value === $scope.lastValidValue);
						if (matchingOption && matchingOption.label === $scope.searchString) {
							return true;
						} else {
							return option.label.toLowerCase().includes($scope.searchString.toLowerCase());
						}
					}

					// -- SCENARIO 4: Normal filtering -- //
					return option.label.toLowerCase().includes($scope.searchString.toLowerCase());
				};

				// -- LIST VISIBILITY -- //
				$scope.showList = false;

				/**
				 * Validate the input and revert to the last valid value if the input is not a valid option
				 * @returns {boolean} - True if the input is a valid option, false otherwise
				 */
				$scope.validateAndRevertInput = () => {
					try {
						var matchingOption = $scope.options.find((option) => option.label === $scope.searchString);
						if (!matchingOption) {
							if ($scope.lastValidValue) {
								$scope.searchString = $scope.options.find((option) => option.value === $scope.lastValidValue).label;
							} else {
								$scope.searchString = "";
							}
						}
						return matchingOption;
					} catch (error) {
						// If there is an error, revert to the last valid value
						$scope.searchString = "";
						return matchingOption;
					}
				};

				$scope.toggleList = (parm) => {
					// For blur events (parm === 3), check if we're clicking inside the list
					if (parm === 3 && $scope.clickingList) {
						return;
					}

					/**
					 * 1 = Click outside && Clear
					 * This will always close the list
					 * If we have a searchString, we check if it's a valid option
					 * If it's not, we revert to the last valid value or clear the searchString
					 */
					if (parm === 1) {
						if ($scope.showList == true || $scope.showList == "true") {
							$scope.validateAndRevertInput();
							$scope.showList = false;
						}
					}
					/*
					 * 2 = Click on input
					 * This will always open the list
					 */
					if (parm === 2) {
						if (!$scope.showList) {
							$scope.showList = true;
							$scope.trackOption(0);

							// Focus the input with timeout
							$timeout(() => {
								document.getElementById($scope.id).focus();
							}, 100);
						}
					}

					/**
					 * 3 = Blur with timeout
					 * This will close the list when it loses focus. Timeout to allow for storing of value when a list option is selected
					 */
					if (parm === 3) {
						if ($scope.showList == true || $scope.showList == "true") {
							$timeout(() => {
								$scope.validateAndRevertInput();
								$scope.showList = false;
							}, 100);
						}
					}
					/*
					 * All other toggle events
					 * This will toggle the list and focus the input
					 */
					if (parm != 1 && parm != 2 && parm != 3) {
						$scope.showList = !$scope.showList;
						// Select the first option when the list opens
						if ($scope.showList) {
							$scope.trackOption(0);
						}
						// Focus the input with timeout
						$timeout(() => {
							document.getElementById($scope.id).focus();
						}, 100);
					}

					// Manage the resultStatus for screen readers
					if (!$scope.showList) {
						$scope.resultStatus = "";
					} else {
						if ($scope.filteredOptions.length > 0) {
							$scope.resultStatus = $scope.filteredOptions.length + " results available";
						} else {
							$scope.resultStatus = "No results";
						}
					}
				};

				$scope.getListVisibility = () => {
					return $scope.showList ? true : false;
				};
				this.getListVisibility = () => {
					return $scope.getListVisibility();
				};

				// -- SET INPUT -- //
				// Listen for updates from parent
				$scope.$on("valueUpdated", function (event, data) {
					// Wait a 200ms for options to be available. The options are retrieved on a timeout of 100ms.
					$timeout(() => {
						// Elements exist, proceed with finding match
						var matchingOption = Array.from($scope.options).find((option) => option.value == data.value);
						$scope.searchString = matchingOption ? matchingOption.label : "";

						// Ensure list stays hidden when updating from parent
						$scope.showList = false;
					}, 200);
				});

				$scope.setInput = (value, title, toggleParm) => {
					$scope.searchString = title;
					$scope.lastValidValue = value; // Store the last valid value
					$scope.ctrl.setValue(value);
					// $scope.lastValidValue = value; // Store the last valid value
					$scope.toggleList(toggleParm);
				};

				this.setInput = (value, title) => {
					$scope.setInput(value, title);
				};

				// -- GET INPUT -- //
				$scope.getInput = () => {
					return $scope.searchString;
				};

				// -- CLEAR INPUT -- //
				$scope.searchString = "";
				$scope.showClear = () => {
					return $scope.searchString.length > 0;
				};
				$scope.clear = () => {
					$scope.searchString = "";
					$scope.selectedOption = -1;

					// Clear the value in the select directive
					$scope.setInput("", "", 1);
					$scope.lastValidValue = ""; // Reset last valid value

					// Add focus to the input
					document.getElementById($scope.id).focus();
				};

				// -- TRACK OPTIONS -- //
				$scope.selectedOption = -1;
				$scope.trackOption = (idx) => {
					$scope.selectedOption = idx;

					// Scroll to the selected option when it changes
					$timeout(() => {
						if (idx !== -1) {
							var element = document.getElementById($scope.id + "--option--" + idx);
							if (element) {
								element.scrollIntoView({
									block: "nearest",
									behavior: "smooth",
								});
							}
						}
					}, 100);
				};

				$scope.getTrackOption = () => {
					return $scope.selectedOption;
				};

				this.getTrackOption = () => {
					return $scope.getTrackOption();
				};

				$scope.getActiveDescendant = () => {
					if ($scope.getTrackOption() !== -1) {
						return $scope.id + "--option--" + $scope.getTrackOption();
					}
					return "";
				};

				$scope.getSelectionStatus = (optionValue) => {
					return optionValue === $scope.lastValidValue ? "selected" : "not selected";
				};

				$scope.isSelected = (optionValue) => {
					return optionValue === $scope.lastValidValue ? true : false;
				};

				// Function to check if the current index is the list item's index
				$scope.isCurrentIndex = (index) => {
					return $scope.selectedOption === index;
				};

				// Show our test selection div for now
				$scope.selected = (idx) => {
					if ($scope.getTrackOption() === parseInt(idx)) {
						return true;
					}
					return $scope.getTrackOption() === parseInt(idx);
				};

				// -- KEYDOWN -- //
				$scope.keydown = (event) => {
					switch (event.keyCode) {
						// Enter
						case 13:
							if ($scope.selectedOption !== -1) {
								$scope.setInput(
									$scope.filteredOptions[$scope.selectedOption].value,
									$scope.filteredOptions[$scope.selectedOption].label
								);
								$scope.selectedOption = -1;
							}
							break;
						// Tab
						case 9:
							/**
							 * Being handled by blur right now
							 */
							// if ($scope.showList) {
							// 	$scope.toggleList(1);
							// 	$scope.selectedOption = -1;
							// }
							// Check if the current input matches any option
							// $scope.validateAndRevertInput();

							break;
						// Escape
						case 27:
							if ($scope.showList) {
								$scope.toggleList(1);
								$scope.selectedOption = -1;

								// Remove focus from the input
								document.getElementById($scope.id).blur();
							}
							break;
						// Down
						case 40:
							// Prevent scrolldown with arrows
							event.preventDefault();
							event.stopPropagation();

							// List is not visible yet
							if (!$scope.getListVisibility()) {
								$scope.toggleList();
							}
							// List is visible already. Navigate through the list
							else {
								if ($scope.selectedOption < $scope.filteredOptions.length - 1) {
									$scope.trackOption($scope.selectedOption + 1);
								} else {
									// If the last option is selected, toggle the list
									// $scope.toggleList();
									// $scope.selectedOption = -1;
								}
							}
							break;
						// Up
						case 38:
							// Prevent scrolldown with arrows
							event.preventDefault();
							event.stopPropagation();

							// Toggle the list if the first option was last selected
							// || $scope.getTrackOption() === -1
							if ($scope.getTrackOption() === 0) {
								$scope.toggleList();

								// Reset the index
								$scope.trackOption(-1);

								// Focus the input
								document.getElementById($scope.id).focus();
							}
							if ($scope.selectedOption !== -1) {
								$scope.trackOption($scope.selectedOption - 1);
							}
							break;
					}
				};

				// Add function to prevent blur when clicking list items
				$scope.preventBlur = (event) => {
					event.preventDefault();
					event.stopPropagation();
					// Force focus back to input
					$timeout(() => {
						document.getElementById($scope.id).focus();
					});
				};

				// Listen for options updates from parent
				$scope.$on("optionsUpdated", function (event, data) {
					updateOptions();
				});
			},
			link: function (scope, element, attrs, ctrl) {
				// Capture the parent directive controller for use in this directive's controller
				scope.ctrl = ctrl;
				scope.id = ctrl.id;

				// Get the input element
				var input = element.find("input");

				// Add keydown handler before compile
				input.on("keydown", function (event) {
					scope.$apply(() => {
						scope.keydown(event);
					});
				});

				// List of attributes to exclude from dynamic function creation
				var excludedAttrs = [
					"id",
					"ng-keydown",
					"ng-model",
					"ng-click",
					"class",
					"type",
					"role",
					"aria-autocomplete",
					"aria-expanded",
					"aria-owns",
					"aria-controls",
					"aria-activedescendant",
					"usa-click-outside",
				];
				// Handle function attributes (like required, disabled, etc.)
				angular.forEach(attrs.$attr, function (value, key) {
					if (!excludedAttrs.includes(value)) {
						if (key.startsWith("ng")) {
							// Create a function on scope that evaluates the original attribute expression
							scope[key] = function () {
								return scope.$parent.$eval(attrs[key]);
							};
							// Set the attribute on the input using the normalized name
							input.attr(value, key + "()");
						} else {
							// For non-ng attributes, just set them directly
							input.attr(attrs.$attr[key], attrs[key]);
						}
						element.removeAttr(value);
					}
				});

				// Clean up event listener when scope is destroyed
				scope.$on("$destroy", function () {
					input.off("keydown");
				});

				// Recompile the input with the new attributes
				$compile(input)(scope);
			},
		};
	}).directive("usaComboBoxMultiple", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				id: "@",
			},
			template: '<div class="usa-combo-box" ng-transclude></div>',
			controller: function ($scope) {
				this.id = $scope.id;
				var array = [];

				this.publishValue = (value) => {
					if (!array.includes(value)) {
						array.push(value);
						$scope.$broadcast("valueUpdated", { value: array });
					}
				};

				this.setValue = (value) => {
					array = value;
					$scope.$broadcast("updateSelect", { value: array });
				};

				// Function to update options
				this.updateOptions = () => {
					// Broadcast the updated options to the input directive
					$scope.$broadcast("optionsUpdated");
				};
			},
			link: function (scope, element, attrs, ctrl) {
				element.attr("id", "");

				// Error handling for missing attributes
				if (!(attrs.id && attrs.id != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: id";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-combo-box-multiple></usa-combo-box-multiple>", temp);
				}
			},
		};
	})
	.directive("usaComboBoxSelectMultiple", function () {
		return {
			restrict: "E",
			require: "^usaComboBoxMultiple",
			replace: true,
			transclude: true,
			scope: {
				model: "=",
				watchModel: "=",
			},
			template:
				'<select class="usa-select usa-sr-only usa-combo-box__select" ng-model="model" name="{{ctrl.id}}--select--hidden" aria-hidden="true" tabindex="-1" multiple="array" ng-transclude></select>',
			controller: function ($scope) {
				var skipWatch = false;

				// If model contains values at load, push them to the parent usaComboBoxMultiple directive
				$scope.$watch("model", function (newValue) {
					if (skipWatch) {
						skipWatch = false;
						return;
					}
					if (newValue) {
						// Notify parent directive
						$scope.ctrl.publishValue(newValue);
					}
				});

				// Listen for updates from parent
				$scope.$on("updateSelect", function (event, data) {
					skipWatch = true;
					$scope.model = data.value;
				});

				// Watch for changes to the watchModel value
				if ($scope.watchModel !== undefined) {
					$scope.$watch("watchModel", function (newValue, oldValue) {
						if (newValue !== oldValue) {
							$scope.ctrl.updateOptions();
						}
					});
				}
			},
			link: function (scope, element, attrs, ctrl) {
				scope.ctrl = ctrl;

				// Error handling for missing attributes
				if (!(attrs.model && attrs.model != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: model";
					temp.element = element;
					temp.attributes = attrs;

					console.error(
						"USWDS Directive Level 0 Error: <usa-combo-box-select-multiple></usa-combo-box-select-multiple>",
						temp
					);
				}
			},
		};
	})
	.directive("usaComboBoxOptionMultiple", function () {
		return {
			restrict: "E",
			require: "^usaComboBoxMultiple",
			replace: true,
			transclude: true,
			scope: {
				label: "@",
				value: "@",
			},
			template: "<option ng-transclude></option>",
			controller: function ($scope, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs, ctrl) {
				element[0].title = ctrl.id + "--" + scope.label;

				// Error handling for missing attributes
				if (!(attrs.label && attrs.label != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: label";
					temp.element = element;
					temp.attributes = attrs;

					console.error(
						"USWDS Directive Level 0 Error: <usa-combo-box-option-multiple></usa-combo-box-option-multiple>",
						temp
					);
				}

				if (!(attrs.value && attrs.value != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: value";
					temp.element = element;
					temp.attributes = attrs;

					console.error(
						"USWDS Directive Level 0 Error: <usa-combo-box-option-multiple></usa-combo-box-option-multiple>",
						temp
					);
				}
			},
		};
	})
	.directive("usaComboBoxInputMultiple", function ($compile) {
		return {
			restrict: "E",
			require: "^usaComboBoxMultiple",
			replace: true,
			transclude: true,
			scope: {
				filterFunction: "&",
			},
			template: \`
			<div usa-click-outside="toggleList(1)">
				<div class="usa-combo-box__selected-items">
					<button ng-repeat="val in selectedValues track by $index" class="usa-button usa-button--outline usa-combo-box__selected-item mr-2 mt-2" ng-keydown="handleSelectedValueKeydown($event, $index)" ng-mousedown="removeValue($index, 1, $event)" aria-label="Remove {{getOptionLabel(val)}}">
						<span>{{getOptionLabel(val)}}</span>
							<i class="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
				<div class="usa-combo-box__input-wrapper">
					<input id="{{id}}" ng-model="searchString" ng-click="toggleList(2)" ng-blur="toggleList(3)" class="usa-combo-box__input" type="text" role="combobox" aria-autocomplete="list" autocomplete="false" aria-expanded="{{getListVisibility()}}" aria-owns="{{id}}--list" aria-controls="{{id}}--list" aria-activedescendant="{{getActiveDescendant()}}">
					<span class="usa-combo-box__clear-input__wrapper" tabindex="-1">
						<button ng-show="showClear()" ng-style="{{getClearButtonStyle()}}" ng-click="clear()" aria-label="Clear the select contents" type="button">
							<i class="fa fa-times" aria-hidden="true"></i>
						</button>
					</span>
					<span class="usa-combo-box__input-button-separator usa-combo-box__input-button-separator-multiple" tabindex="-1"></span>
					<span class="usa-combo-box__toggle-list__wrapper" tabindex="-1">
						<button class="usa-combo-box__toggle-list usa-combo-box__toggle-list-multiple" aria-label="Toggle the dropdown list" type="button" ng-click="toggleList()" tabindex="-1">
							<i class="fa fa-angle-down" aria-hidden="true"></i>
						</button>
					</span>
					<ul id="{{id}}--list" class="usa-combo-box__list usa-combo-box__list-multiple" role="listbox" tabindex="-1" ng-show="getListVisibility()">
						<li ng-repeat="option in filteredOptions track by $index" id="{{id}}--option--{{$index}}" name="{{id}}--option" aria-setsize="{{filteredOptions.length}}" aria-posinset="{{$index}}" aria-selected="{{selected($index)}}" class="usa-combo-box__list-option" tabindex="-1" role="option" title="{{isOptionSelected(option.value)}}" value="{{option.value}}" ng-mousedown="handleOptionSelect(option.value, option.label, $event)" ng-mouseenter="trackOption($index)" ng-mouseleave="trackOption(-1)" data-state="{{isCurrentIndex($index)}}" data-selected="{{selectedValues.includes(option.value)}}">
							<span ng-bind-html="option.html"></span>
						</li>
						<li ng-if="filteredOptions.length === 0" class="usa-combo-box__list-option--no-results" tabindex="-1" role="option">
							No options found
						</li>
					</ul>
				</div>
				<div class="usa-combo-box-status usa-sr-only" role="status" aria-atomic="true">{{getResultStatus()}}</div>
			</div>
			</div>\`,
			controller: function ($scope, $timeout, $sce) {
				this.id = $scope.id;

				// Monitor the results for the screen reader
				$scope.resultStatus = "";

				// Store the options
				$scope.options = [];

				// Store the filtered options
				$scope.filteredOptions = [];

				// Load complete
				$scope.loadComplete = false;

				$scope.selectedValues = [];

				// Listen for updates from parent and preload the input when a model value exists at load
				$scope.$on("valueUpdated", function (event, data) {
					$scope.selectedValues = data.value[0];
				});

				// Function to update options
				function updateOptions() {
					// Retrieve the options
					var optionElements = document.getElementsByTagName("option");

					$timeout(() => {
						$scope.options = Array.from(optionElements)
							.filter((el) => el.title.startsWith($scope.id))
							.map((el) => ({
								element: el,
								value: el.value,
								label: el.label,
								html: $sce.trustAsHtml(el.innerHTML),
							}));
						// Update filtered options
						$scope.searchString = "";
						$scope.filteredOptions = $scope.options;
					}, 100);
				}

				// -- INIT -- //
				$timeout(() => {
					updateOptions();

					// Load complete
					$scope.loadComplete = true;
				}, 100);

				$scope.getOptionLabel = (value) => {
					var option = $scope.options.find((opt) => opt.value === value);
					return option ? option.label : value;
				};

				$scope.removeValue = (index, parm, event) => {
					event.preventDefault(); // Prevent default behavior
					event.stopPropagation(); // Stop event bubbling

					$scope.selectedValues.splice(index, 1);
					$scope.searchString = "";
					$scope.ctrl.setValue($scope.selectedValues);
				};

				/**
				 * This will only run if the initial load is complete
				 * Watch for changes to searchString and show list when the user types
				 * If we automatically revert the value because the searchString is not a valid option, do not open the list
				 * Update the filteredOptions based on the searchString
				 */
				$scope.$watch("searchString", function (newValue, oldValue) {
					if ($scope.loadComplete) {
						if (!$scope.showList && newValue !== "") {
							var matchingOption = $scope.options.find((option) => option.label === $scope.searchString);
							if (!matchingOption) {
								$scope.showList = true;
							}
						}

						$scope.filteredOptions = $scope.options.filter($scope.getFilterFunction);

						// Manage the resultStatus for screen readers
						if (!$scope.showList) {
							$scope.resultStatus = "";
						} else {
							if ($scope.filteredOptions.length > 0) {
								$scope.resultStatus = $scope.filteredOptions.length + " results available";
								$scope.trackOption(0);
							} else {
								$scope.resultStatus = "No results";
							}
						}
					}
				});

				$scope.getResultStatus = () => {
					return $scope.resultStatus;
				};

				// -- STYLING -- //
				// Replacing "usa-combo-box__clear-input" with ng-style
				$scope.getClearButtonStyle = () => {
					var style =
						"{'right': 'calc(2.5em + 3px)', 'background-color': 'transparent', 'background-position': 'center', 'border': '0', 'bottom': '1px', 'cursor': 'pointer', 'margin-bottom': '0', 'opacity': '.6', 'padding-right': '1rem', 'position': 'absolute', 'top': '8px', 'z-index': '100'}";

					return style;
				};

				// -- FILTER LIST -- //
				$scope.getFilterFunction = (option) => {
					if ($scope.filterFunction()) return $scope.filterFunction();
					if (!$scope.searchString) return true;
					return option.label.toLowerCase().includes($scope.searchString.toLowerCase());
				};

				$scope.validateAndRevertInput = () => {
					try {
						var matchingOption = $scope.options.find((option) => option.label === $scope.searchString);
						if (!matchingOption) {
							$scope.searchString = "";
						}
						return matchingOption;
					} catch (error) {
						// If there is an error, revert to the last valid value
						$scope.searchString = "";
						return matchingOption;
					}
				};

				// -- LIST VISIBILITY -- //
				$scope.showList = false;

				$scope.toggleList = (parm) => {
					/**
					 * 1 = Click outside && Clear
					 * This will always close the list
					 * If we have a searchString, we check if it's a valid option
					 * If it's not, we revert to the last valid value or clear the searchString
					 */
					if (parm === 1) {
						if ($scope.showList == true || $scope.showList == "true") {
							$scope.validateAndRevertInput();
							$scope.showList = false;
						}
					}
					/*
					 * 2 = Click on input
					 * This will always open the list
					 */
					if (parm === 2) {
						if (!$scope.showList) {
							$scope.showList = true;
							$scope.trackOption(0);

							$timeout(() => {
								document.getElementById($scope.id).focus();
							}, 100);
						}
					}

					/**
					 * 3 = Blur with timeout
					 * This will close the list when it loses focus. Timeout to allow for storing of value when a list option is selected
					 */
					if (parm === 3) {
						if ($scope.showList == true || $scope.showList == "true") {
							$timeout(() => {
								$scope.validateAndRevertInput();
								$scope.showList = false;
							}, 100);
						}
					}

					/*
					 * All other toggle events
					 * This will toggle the list and focus the input
					 */
					if (parm != 1 && parm != 2 && parm != 3) {
						$scope.showList = !$scope.showList;
						if ($scope.showList) {
							$scope.trackOption(0);
						}
						$timeout(() => {
							document.getElementById($scope.id).focus();
						}, 100);
					}

					if (!$scope.showList) {
						$scope.resultStatus = "";
					} else {
						if ($scope.filteredOptions.length > 0) {
							$scope.resultStatus = $scope.filteredOptions.length + " results available";
						} else {
							$scope.resultStatus = "No results";
						}
					}
				};

				$scope.getListVisibility = () => {
					return $scope.showList ? true : false;
				};

				$scope.setInput = (value, title, toggleParm) => {
					if ($scope.selectedValues.includes(value)) {
						var index = $scope.selectedValues.indexOf(value);
						$scope.selectedValues.splice(index, 1);
					} else {
						$scope.selectedValues.push(value);
					}

					$scope.ctrl.setValue($scope.selectedValues);
				};

				$scope.handleOptionSelect = function (value, label, event) {
					event.preventDefault(); // Prevent default behavior
					event.stopPropagation(); // Stop event bubbling

					$scope.setInput(value, label);
				};

				// -- GET INPUT -- //
				$scope.getInput = () => {
					return $scope.searchString;
				};

				// -- CLEAR INPUT -- //
				$scope.searchString = "";
				$scope.showClear = () => {
					return $scope.searchString.length > 0;
				};

				// Modify clear:
				$scope.clear = () => {
					$scope.searchString = "";
					$scope.selectedOption = -1;
					// $scope.selectedValues = [];
					// $scope.setInput("", "", 1);
					document.getElementById($scope.id).focus();
				};

				// -- TRACK OPTIONS -- //
				$scope.selectedOption = -1;
				$scope.trackOption = (idx) => {
					$scope.selectedOption = idx;

					// Scroll to the selected option when it changes
					$timeout(() => {
						if (idx !== -1) {
							var element = document.getElementById($scope.id + "--option--" + idx);
							if (element) {
								element.scrollIntoView({
									block: "nearest",
									behavior: "smooth",
								});
							}
						}
					}, 100);
				};

				$scope.getTrackOption = () => {
					return $scope.selectedOption;
				};

				this.getTrackOption = () => {
					return $scope.getTrackOption();
				};

				$scope.getActiveDescendant = () => {
					if ($scope.getTrackOption() !== -1) {
						return $scope.id + "--option--" + $scope.getTrackOption();
					}
					return "";
				};

				$scope.isOptionSelected = (value) => {
					if ($scope.selectedValues.includes(value)) return "selected";
					else return "not selected";
				};

				// Function to check if the current index is the list item's index
				$scope.isCurrentIndex = (index) => {
					return $scope.selectedOption === index;
				};

				// Show our test selection div for now
				$scope.selected = (idx) => {
					if ($scope.getTrackOption() === parseInt(idx)) {
						return true;
					}
					return $scope.getTrackOption() === parseInt(idx);
				};

				// Handle keydown for selected values
				$scope.handleSelectedValueKeydown = (event, index) => {
					if (event.keyCode === 13) {
						// Enter key
						event.preventDefault();
						event.stopPropagation();
						$scope.removeValue(index, 1, event);
					}
				};

				// -- KEYDOWN -- //
				$scope.keydown = (event) => {
					switch (event.keyCode) {
						// Enter
						case 13:
							if ($scope.selectedOption !== -1) {
								$scope.setInput(
									$scope.filteredOptions[$scope.selectedOption].value,
									$scope.filteredOptions[$scope.selectedOption].label
								);
								// $scope.selectedOption = -1;
							}
							break;
						// Escape
						case 27:
							if ($scope.showList) {
								$scope.toggleList(1);
								$scope.selectedOption = -1;

								// Remove focus from the input
								document.getElementById($scope.id).blur();
							}
							break;
						// Down
						case 40:
							// Prevent scrolldown with arrows
							event.preventDefault();
							event.stopPropagation();

							// List is not visible yet
							if (!$scope.getListVisibility()) {
								$scope.toggleList();
							}
							// List is visible already. Navigate through the list
							else {
								if ($scope.selectedOption < $scope.filteredOptions.length - 1) {
									$scope.trackOption($scope.selectedOption + 1);
								}
							}
							break;
						// Up
						case 38:
							// Prevent scrolldown with arrows
							event.preventDefault();
							event.stopPropagation();

							// Toggle the list if the first option was last selected
							if ($scope.getTrackOption() === 0) {
								$scope.toggleList();

								// Reset the index
								$scope.trackOption(-1);

								// Focus the input
								document.getElementById($scope.id).focus();
							}
							if ($scope.selectedOption !== -1) {
								$scope.trackOption($scope.selectedOption - 1);
							}
							break;
					}
				};

				// Listen for options updates from parent
				$scope.$on("optionsUpdated", function (event, data) {
					updateOptions();
				});
			},
			link: function (scope, element, attrs, ctrl) {
				// Capture the parent directive controller for use in this directive's controller
				scope.ctrl = ctrl;
				scope.id = ctrl.id;

				// Get the input element
				var input = element.find("input");

				// Add keydown handler before compile
				input.on("keydown", function (event) {
					scope.$apply(() => {
						scope.keydown(event);
					});
				});

				// List of attributes to exclude from dynamic function creation
				var excludedAttrs = [
					"id",
					"ng-keydown",
					"ng-model",
					"ng-click",
					"class",
					"type",
					"role",
					"aria-autocomplete",
					"aria-expanded",
					"aria-owns",
					"aria-controls",
					"aria-activedescendant",
					"usa-click-outside",
				];
				// Handle function attributes (like required, disabled, etc.)
				angular.forEach(attrs.$attr, function (value, key) {
					if (!excludedAttrs.includes(value)) {
						if (key.startsWith("ng")) {
							// Create a function on scope that evaluates the original attribute expression
							scope[key] = function () {
								return scope.$parent.$eval(attrs[key]);
							};
							// Set the attribute on the input using the normalized name
							input.attr(value, key + "()");
						} else {
							// For non-ng attributes, just set them directly
							input.attr(attrs.$attr[key], attrs[key]);
						}
						element.removeAttr(value);
					}
				});

				// Clean up event listener when scope is destroyed
				scope.$on("$destroy", function () {
					input.off("keydown");
				});

				// Recompile the input with the new attributes
				$compile(input)(scope);
			},
		};
	}).directive("usaDatePicker", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {},
			template: \`
                <div class="usa-date-picker usa-date-picker--initialized">
                    <div class="usa-date-picker__wrapper" ng-transclude></div>
                </div>\`,
			controller: function () { },
		};
	})
	.directive("usaDatePickerInput", function ($compile) {
		return {
			restrict: "E",
			replace: true,
			require: "^usaDatePicker",
			scope: {
				type: "@",
			},
			template: \`<input class="usa-input usa-date-picker__external-input">\`,
			controller: function ($scope, $element, $window) {
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					if (scope.type && scope.type != "date" && scope.type != "datetime-local") {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attribute: type. Expected 'date' or 'datetime-local'. Defaulting to 'date'.";
						temp.element = element;
						temp.attributes = attrs;

						console.warn("USWDS Directive Level 1 Error: <usa-date-picker-input></usa-date-picker-input>", temp);
					}
				}

				if (scope.type != "date" && scope.type != "datetime-local") {
					element[0].type = "date";
					scope.type = "date";
				}

				const button = angular.element(\`<button
                        type="button" 
                        class="usa-date-picker__button" 
                        aria-haspopup="true" 
                        ng-click="toggleCalendar()">
                        <i class="fa fa-calendar px-3" aria-hidden="true"></i>
                </button>\`);

				element.after(button);

				function formatDateTime(dateString) {
					const date = new Date(dateString);
					return date.toLocaleString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
						hour: "numeric",
						minute: "numeric",
						second: "numeric",
						hour12: true,
					});
				}

				function formatDate(dateString) {
					const date = new Date(dateString);
					return date.toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					});
				}

				scope.toggleCalendar = function () {
					element[0].showPicker();
				};

				function updateAriaLabel() {
					let date = "";

					if (scope.type == "date" && element[0].value) {
						date = formatDate(element[0].value);
					}

					if (scope.type == "datetime-local" && element[0].value) {
						date = formatDateTime(element[0].value);
					}

					button.attr("aria-label", date ? "Change Date, " + date : "Change Date");
				}

				element[0].addEventListener("change", updateAriaLabel);

				$compile(button)(scope);

				updateAriaLabel();
			},
		};
	}).directive('usaCollection', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: \`<ul class="usa-collection" ng-transclude></ul>\`
		};
	}).directive('usaCollectionItem', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			require: '^usaCollection',
			template: \`<li class="usa-collection__item" ng-transclude></li>\`,
			controller: function () { }
		};
	}).directive('usaCollectionHeading', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			require: '^usaCollectionItem',
			template: \`<h4 class="usa-collection__heading" ng-transclude></h4>\`
		};
	}).directive('usaCollectionBody', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			require: '^usaCollectionItem',
			template: \`<div class="usa-collection__body" ng-transclude></div>\`
		};
	}).directive('usaCollectionDescription', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			require: '^usaCollectionItem',
			template: \`<p class="usa-collection__description" ng-transclude></p>\`
		};
	}).directive('usaCollectionImg', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			require: '^usaCollectionItem',
			template: \`<img class="usa-collection__img" ng-transclude></img>\`
		};
	}).directive('usaCollectionDate', function () {
		return {
			restrict: 'E',
			replace: true,
			require: '^usaCollectionItem',
			transclude: true,
			scope: {
				dateTime: '@'
			},
			template:
				\`<div class="usa-collection__calendar-date">
            <time datetime="{{dateTime}}" ng-transclude></time>
        </div>\`,
			controller: function ($scope, $element, $window) {
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					if (!attrs.dateTime || attrs.dateTime.trim() == '') {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attribute(s): date-time";
						temp.element = element;
						temp.attributes = attrs;
						console.warn("USWDS Directive Level 1 Error: <usa-collection-date></usa-collection-date>", temp);
					}
				}
			}
		};
	}).directive('usaCollectionMonth', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			require: '^usaCollectionDate',
			template: \`<span class="usa-collection__calendar-date-month" ng-transclude></span>\`,
		};
	}).directive('usaCollectionDay', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			require: '^usaCollectionDate',
			template: \`<span class="usa-collection__calendar-date-day" ng-transclude></span>\`,
		};
	}).directive('usaCollectionMeta', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			require: '^usaCollectionItem',
			template: \`<ul class="usa-collection__meta" ng-transclude></ul>\`,
			controller: function ($scope, $element, $window) { }
		};
	}).directive('usaCollectionMetaItem', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			require: '^usaCollectionMeta',
			scope: {
				tagType: '@?'
			},
			template: \`<li class="{{getCss()}}" ng-transclude></li>\`,
			controller: function ($scope, $element, $window) {
				$scope.debug = $window.uswdsDebug;

				$scope.getCss = function () {
					let classes = ['usa-collection__meta-item'];
					if ($scope.tagType == 'default') {
						classes.push('usa-tag');
					}
					if ($scope.tagType == 'new') {
						classes.push('usa-tag usa-tag--new');
					}
					return classes.join(' ');
				};
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					if (attrs.tagType && attrs.tagType.trim() != 'default' && attrs.tagType.trim() != 'new') {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attribute(s): tag-type";
						temp.element = element;
						temp.attributes = attrs;
						console.warn("USWDS Directive Level 1 Error: <usa-collection-meta-item></usa-collection-meta-item>", temp);
					}
				}
			}
		};
	}).directive("usaDateRangePickerWrapper", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<div class="usa-date-range-picker" ng-transclude></div>\`
		};
	})
	.directive("usaDateRangeWrapper", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<div class="usa-form-group" ng-transclude></div>\`,
		};
	}).directive("usaFocusOut", function ($parse, $timeout) {
		return {
			restrict: "A",
			link: function ($scope, elem, attr) {
				$timeout(function () {
					var fn;

					elem.on('focusout', function (e) {
						// Use setTimeout to ensure this runs after any potential new focus events
						setTimeout(function () {
							// Check if the new activeElement is a child of our element
							var activeEl = document.activeElement,
								isChild = elem[0].contains(activeEl);

							if (!isChild) {
								$timeout(function () {
									fn = $parse(attr["usaFocusOut"]);
									fn($scope, { event: e });
								});
							}
						}, 0);
					});

					// Clean up when scope is destroyed
					$scope.$on("$destroy", function () {
						elem.off('focusout');
					});
				});
			}
		};
	}).directive('usaFocusTrap', function ($document) {
		return {
			restrict: 'A',
			scope: {
			},
			link: function (scope, element, attrs) {
				$scope.isActive = false;
				if ($attrs.isActive) {
					$scope.isActive = true;
				}
				let focusableElements = [];
				let firstTabStop = null;
				let lastTabStop = null;

				// Initialize the focus trap
				function setupFocusTrap() {
					focusableElements = Array.from(
						element[0].querySelectorAll(
							'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'
						)
					);

					firstTabStop = focusableElements[0] || null;
					lastTabStop = focusableElements[focusableElements.length - 1] || null;

					if (firstTabStop) {
						firstTabStop.focus();
					}
				}

				// Teardown the focus trap
				function teardownFocusTrap() {
					focusableElements = [];
					firstTabStop = null;
					lastTabStop = null;
				}

				// Handle Tab key events
				function handleKeyDown(event) {
					if (!scope.isActive) return;

					if (event.key === 'Tab') {
						if (event.shiftKey) {
							handleShiftTab(event);
						} else {
							handleTab(event);
						}
					}
				}

				function handleTab(event) {
					if (document.activeElement === lastTabStop) {
						event.preventDefault();
						firstTabStop?.focus();
					}
				}

				function handleShiftTab(event) {
					if (document.activeElement === firstTabStop) {
						event.preventDefault();
						lastTabStop?.focus();
					} else if (!focusableElements.includes(document.activeElement)) {
						event.preventDefault();
						firstTabStop?.focus();
					}
				}

				// Watch for changes to the activation state
				scope.$watch('isActive', function (newValue) {
					if (newValue) {
						setupFocusTrap();
					} else {
						teardownFocusTrap();
					}
				});

				// Listen for keydown events
				$document.on('keydown', handleKeyDown);

				// Cleanup when the directive is destroyed
				scope.$on('$destroy', function () {
					$document.off('keydown', handleKeyDown);
					teardownFocusTrap();
				});
			},
		};
	}).directive('usaForm', function () {
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			scope: {},
			template: '<form class="usa-form" ng-transclude></form>',
		};
	}).directive('usaFormGroup', function () {
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			scope: {},
			template: '<div class="usa-form-group" ng-transclude></div>',
		};
	}).directive("usaIconList", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<ul class="usa-icon-list" ng-transclude></ul>\`,
		};
	})
	.directive("usaIconListItem", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				iconSrc: "@",
				iconAlt: "@",
			},
			template: \`
            <li class="usa-icon-list__item">
                <div class="usa-icon-list__icon">
                    <img src="{{iconSrc}}" alt="{{iconAlt}} icon">
                </div>
                <div class="usa-icon-list__content" ng-transclude></div>
            </li>
        	\`,
			link: function (scope, element, attrs) {
				// Error handling for missing attributes
				if (!(attrs.iconSrc && attrs.iconSrc != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: iconSrc";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-icon-list-item></usa-icon-list-item>", temp);
				}

				if (!(attrs.iconAlt && attrs.iconAlt != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: iconAlt";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-icon-list-item></usa-icon-list-item>", temp);
				}
			},
		};
	})
	.directive("usaIconListTitle", function () {
		return {
			restrict: "A",
			replace: true,
			link: function (scope, element, attrs) {
				element.addClass("usa-icon-list__title");
			},
		};
	}).directive("usaFooter", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`<footer class="usa-footer" ng-transclude></footer>\`,
		};
	})
	.directive("usaFooterSlim", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`<footer class="usa-footer usa-footer--slim" ng-transclude></footer>\`,
		};
	})
	.directive("usaFooterBig", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`<footer class="usa-footer usa-footer--big" ng-transclude></footer>\`,
		};
	})
	.directive("usaFooterReturnToTop", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			scope: {
				link: "@",
			},
			template: \`
                <div class="grid-container usa-footer__return-to-top">
                    <a href="{{link}}">Return to top</a>
                </div>
            \`,
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.link && attrs.link != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: link";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-return-to-top></usa-footer-return-to-top>", temp);
				}
			},
		};
	})
	.directive("usaFooterPrimary", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`
                <div class="usa-footer__primary-section">
                    <nav class="usa-footer__nav" aria-label="Footer navigation">
                        <ul class="grid-row grid-gap" ng-transclude></ul>
                    </nav>
                </div>
            \`,
		};
	})
	.directive("usaFooterPrimarySlim", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`
                <div class="usa-footer__primary-section">
                    <div class="usa-footer__primary-container grid-row" ng-transclude></div>
                </div>
            \`,
		};
	})
	.directive("usaFooterPrimaryBig", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`
                <div class="usa-footer__primary-section">
                    <div class="grid-container">
                        <div class="grid-row grid-gap" ng-transclude></div>
                    </div>
                </div>
            \`,
		};
	})
	.directive("usaFooterSlimNav", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`
                <div class="mobile-lg:grid-col-8">
                    <nav class="usa-footer__nav" aria-label="Footer navigation">
                        <ul class="grid-row grid-gap" ng-transclude></ul>
                    </nav>
                </div>
            \`,
		};
	})
	.directive("usaFooterBigLinkWrapper", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`
                <div class="tablet:grid-col-8">
                    <nav class="usa-footer__nav" aria-label="Footer navigation">
                        <div class="grid-row grid-gap-4" ng-transclude></div>
                    </nav>
                </div>
            \`,
		};
	})
	.directive("usaFooterPrimaryLink", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			scope: {
				title: "@",
				link: "@",
			},
			template: \`
                <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                    <a class="usa-footer__primary-link" href="{{link}}" ng-transclude>{{title}}</a>
                </li>
            \`,
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.title && attrs.title != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: title";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-primary-link></usa-footer-primary-link>", temp);
				}

				if (!(attrs.link && attrs.link != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: link";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-primary-link></usa-footer-primary-link>", temp);
				}
			},
		};
	})
	.directive("usaFooterBigLinkHeading", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			scope: {
				heading: "@",
			},
			template: \`
                <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
                    <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                        <h4 class="usa-footer__primary-link">{{heading}}</h4>
                        <ul class="usa-list usa-list--unstyled" ng-transclude></ul>
                    </section>
                </div>
            \`,
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.heading && attrs.heading != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: heading";
					temp.element = element;
					temp.attributes = attrs;

					console.error(
						"USWDS Directive Level 0 Error: <usa-footer-big-link-heading></usa-footer-big-link-heading>",
						temp
					);
				}
			},
		};
	})
	.directive("usaFooterBigLink", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			scope: {
				link: "@",
				title: "@",
			},
			template: \`
                <li class="usa-footer__secondary-link">
                    <a href="{{link}}">{{title}}</a>
                </li>
            \`,
			controller: function ($scope, $element, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.link && attrs.link != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: link";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-big-link></usa-footer-big-link>", temp);
				}

				if (!(attrs.title && attrs.title != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: title";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-big-link></usa-footer-big-link>", temp);
				}
			},
		};
	})
	.directive("usaFooterSlimAddressWrapper", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`
                <div class="mobile-lg:grid-col-4">
                    <address class="usa-footer__address">
                        <div class="grid-row grid-gap" ng-transclude></div>
                    </address>
                </div>
            \`,
		};
	})
	.directive("usaFooterSlimAddressItem", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			scope: {
				link: "@",
				title: "@",
			},
			template: \`
                <div class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                    <div class="usa-footer__contact-info">
                        <a href="{{link}}">{{title}}</a>
                    </div>
                </div>
            \`,
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.link && attrs.link != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: link";
					temp.element = element;
					temp.attributes = attrs;

					console.error(
						"USWDS Directive Level 0 Error: <usa-footer-slim-address-item></usa-footer-slim-address-item>",
						temp
					);
				}

				if (!(attrs.title && attrs.title != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: title";
					temp.element = element;
					temp.attributes = attrs;

					console.error(
						"USWDS Directive Level 0 Error: <usa-footer-slim-address-item></usa-footer-slim-address-item>",
						temp
					);
				}
			},
		};
	})
	.directive("usaFooterBigSignupForm", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			scope: {
				heading: "@",
				form: "@",
			},
			template: \`
                <div class="tablet:grid-col-4">
                    <div class="usa-sign-up">
                        <h3 class="usa-sign-up__heading">{{heading}}</h3>
                        <form class="usa-form" ng-transclude name="{{form}}" id="{{form}}__signup"></form>
                    </div>
                </div>
            \`,
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.heading && attrs.heading != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: heading";
					temp.element = element;
					temp.attributes = attrs;

					console.error(
						"USWDS Directive Level 0 Error: <usa-footer-big-signup-form></usa-footer-big-signup-form>",
						temp
					);
				}

				if (!(attrs.form && attrs.form != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: form";
					temp.element = element;
					temp.attributes = attrs;

					console.error(
						"USWDS Directive Level 0 Error: <usa-footer-big-signup-form></usa-footer-big-signup-form>",
						temp
					);
				}
			},
		};
	})
	.directive("usaFooterSignupLabel", function () {
		return {
			restrict: "E",
			replace: true,
			scope: {
				label: "@",
				inputId: "@",
			},
			template: \`<label class="usa-label" for="{{inputId}}">{{label}}</label>\`,
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.label && attrs.label != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: label";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-signup-label></usa-footer-signup-label>", temp);
				}

				if (!(attrs.inputId && attrs.inputId != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: input-id";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-signup-label></usa-footer-signup-label>", temp);
				}
			},
		};
	})
	.directive("usaFooterSignupInput", function () {
		return {
			restrict: "E",
			replace: true,
			template: \`<input class="usa-input" type="email" autocomplete="email" />\`,
		};
	})
	.directive("usaFooterSignupButton", function () {
		return {
			restrict: "E",
			replace: true,
			scope: {
				buttonText: "@",
			},
			template: \`<button class="usa-button" type="submit" aria-label="Email signup button">{{buttonText}}</button>\`,
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.buttonText && attrs.buttonText != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: buttonText";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-signup-button></usa-footer-signup-button>", temp);
				}
			},
		};
	})
	.directive("usaFooterSecondary", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`
                <div class="usa-footer__secondary-section">
                    <div class="grid-container">
                        <div class="grid-row grid-gap" ng-transclude></div>
                    </div>
                </div>
            \`,
		};
	})
	.directive("usaFooterSecondarySlim", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`
                <div class="usa-footer__secondary-section">
                    <div class="grid-container">
                        <div class="usa-footer__logo grid-row grid-gap-2" ng-transclude></div>
                    </div>
                </div>
            \`,
		};
	})
	.directive("usaFooterSlimLogo", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			scope: {
				src: "@",
				alt: "@",
			},
			template: \`
                <div class="grid-col-auto">
                    <img class="usa-footer__logo-img" src="{{src}}" alt="{{alt}}" />
                </div>
            \`,
			controller: function ($scope, $element, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.src && attrs.src != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: src";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-slim-logo></usa-footer-slim-logo>", temp);
				}

				if (scope.debug && scope.debug == true) {
					if (!(attrs.alt && attrs.alt != "")) {
						var temp = Object.create(null);
						temp.errorMessage = "Missing attribute: alt";
						temp.element = element;
						temp.attributes = attrs;

						console.warn("USWDS Directive Level 1 Warning: <usa-footer-slim-logo></usa-footer-slim-logo>", temp);
					}
				}
			},
		};
	})
	.directive("usaFooterSlimHeading", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			scope: {
				heading: "@",
			},
			template: \`
                <div class="grid-col-auto">
                    <p class="usa-footer__logo-heading">{{heading}}</p>
                </div>
            \`,
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.heading && attrs.heading != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: heading";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-slim-heading></usa-footer-slim-heading>", temp);
				}
			},
		};
	})
	.directive("usaFooterLogoWrapper", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`<div class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2" ng-transclude></div>\`,
		};
	})
	.directive("usaFooterLogoImg", function () {
		return {
			restrict: "E",
			replace: true,
			scope: {
				src: "@",
				alt: "@",
			},
			template: \`
                <div class="mobile-lg:grid-col-auto">
                    <img class="usa-footer__logo-img" src="{{src}}" alt="{{alt}}" />
                </div>
            \`,
			controller: function ($scope, $element, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.src && attrs.src != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: src";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-logo-img></usa-footer-logo-img>", temp);
				}

				if (scope.debug && scope.debug == true) {
					if (!(attrs.alt && attrs.alt != "")) {
						var temp = Object.create(null);
						temp.errorMessage = "Missing attribute: alt";
						temp.element = element;
						temp.attributes = attrs;

						console.warn("USWDS Directive Level 1 Warning: <usa-footer-logo-img></usa-footer-logo-img>", temp);
					}
				}
			},
		};
	})
	.directive("usaFooterLogoHeading", function () {
		return {
			restrict: "E",
			replace: true,
			scope: {
				heading: "@",
			},
			template: \`
                <div class="mobile-lg:grid-col-auto">
                    <p class="usa-footer__logo-heading">{{heading}}</p>
                </div>
            \`,
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.heading && attrs.heading != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: heading";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-logo-heading></usa-footer-logo-heading>", temp);
				}
			},
		};
	})
	.directive("usaFooterMediaWrapper", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`<div class="usa-footer__contact-links mobile-lg:grid-col-6" ng-transclude></div>\`,
		};
	})
	.directive("usaFooterMediaLinkWrapper", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`<div class="usa-footer__social-links grid-row grid-gap-1" ng-transclude></div>\`,
		};
	})
	.directive("usaFooterMediaLink", function () {
		return {
			restrict: "E",
			replace: true,
			scope: {
				src: "@",
				alt: "@",
				link: "@",
			},
			template: \`
                <div class="grid-col-auto">
                    <a class="usa-social-link" href="{{link}}">
                        <img class="usa-social-link__icon" src="{{src}}" alt="{{alt}}" />
                    </a>
                </div>
            \`,
			controller: function ($scope, $element, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.src && attrs.src != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: src";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-media-link></usa-footer-media-link>", temp);
				}

				if (!(attrs.link && attrs.link != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: link";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-footer-media-link></usa-footer-media-link>", temp);
				}

				if (scope.debug && scope.debug == true) {
					if (!(attrs.alt && attrs.alt != "")) {
						var temp = Object.create(null);
						temp.errorMessage = "Missing attribute: alt";
						temp.element = element;
						temp.attributes = attrs;

						console.warn("USWDS Directive Level 1 Warning: <usa-footer-media-link></usa-footer-media-link>", temp);
					}
				}
			},
		};
	})
	.directive("usaFooterContactHeading", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			scope: {
				heading: "@",
			},
			template: \`<p class="usa-footer__contact-heading">{{heading}}</p>\`,
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.heading && attrs.heading != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: heading";
					temp.element = element;
					temp.attributes = attrs;

					console.error(
						"USWDS Directive Level 0 Error: <usa-footer-contact-heading></usa-footer-contact-heading>",
						temp
					);
				}
			},
		};
	})
	.directive("usaFooterContactInfo", function () {
		return {
			restrict: "E",
			transclude: true,
			replace: true,
			template: \`
            <address class="usa-footer__address">
                <div class="usa-footer__contact-info grid-row grid-gap" ng-transclude></div>
            </address>\`,
		};
	})
	.directive("usaFooterContactInfoItem", function () {
		return {
			restrict: "E",
			replace: true,
			scope: {
				link: "@",
				title: "@",
			},
			template: \`
                <div class="grid-col-auto">
                    <a href="{{link}}">{{title}}</a>
                </div>\`,
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.link && attrs.link != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: link";
					temp.element = element;
					temp.attributes = attrs;

					console.error(
						"USWDS Directive Level 0 Error: <usa-footer-contact-info-item></usa-footer-contact-info-item>",
						temp
					);
				}

				if (!(attrs.title && attrs.title != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: title";
					temp.element = element;
					temp.attributes = attrs;

					console.error(
						"USWDS Directive Level 0 Error: <usa-footer-contact-info-item></usa-footer-contact-info-item>",
						temp
					);
				}
			},
		};
	}).directive("usaFieldset", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: '<fieldset class="usa-fieldset" ng-transclude></fieldset>'
		};
	}).directive("usaHeaderBasic", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`
                <div>
                    <div class="usa-overlay" ng-class="{'is-visible': isMenuVisible}"></div>
                    <header class="usa-header usa-header--basic">
                        <div class="usa-nav-container" ng-transclude></div>
                    </header>
                </div>\`,
			controller: function ($scope, $window) {
				this.isMenuVisible = false;
				$scope.isMenuVisible = false;

				// Add resize handler
				angular.element($window).on(
					"resize",
					function () {
						if ($window.innerWidth >= 1023 && $scope.isMenuVisible) {
							// 1023px is USWDS's default desktop breakpoint
							$scope.isMenuVisible = false;
							this.isMenuVisible = false;
							$scope.$apply(); // Trigger digest cycle since we're outside Angular
						}
					}.bind(this)
				);

				this.toggleMenu = function () {
					this.isMenuVisible = !this.isMenuVisible;
					$scope.isMenuVisible = this.isMenuVisible;
				};
			},
		};
	})
	.directive("usaHeaderLogoWrapper", function () {
		return {
			restrict: "E",
			require: "^usaHeaderBasic",
			replace: true,
			transclude: true,
			template: \`
				<div class="usa-navbar">
					<div class="usa-logo" id="basic-logo" ng-transclude></div>
                    <button type="button" 
                        class="usa-menu-btn" 
                        ng-click="showMenu()"
                        aria-label="Menu"
                        aria-controls="basic-nav"
                        aria-expanded="{{isMenuVisible}}">Menu</button>
				</div>\`,
			link: function (scope, element, attrs, headerCtrl) {
				scope.showMenu = function () {
					headerCtrl.toggleMenu();
				};
			},
		};
	})
	.directive("usaHeaderLogoImg", function () {
		return {
			restrict: "E",
			replace: true,
			template: \`<img class="usa-logo-img"/>\`,
		};
	})
	.directive("usaHeaderLogoText", function () {
		return {
			restrict: "A",
			link: function (scope, element, attrs) {
				element.addClass("usa-logo__text");
			},
		};
	})
	.directive("usaHeaderNav", function () {
		return {
			restrict: "E",
			require: "^usaHeaderBasic",
			replace: true,
			transclude: {
				navContent: "?usaHeaderNavParent",
				search: "?usaHeaderSearchWrapper",
			},
			scope: {},
			template: \`
            <nav id="basic-nav" 
                aria-label="Primary navigation" 
                ng-class="getClass()" 
                usa-focus-out="focusClose()"
                role="navigation">
                <button id="uswds__nav-close-menu-button"
                    type="button" 
                    class="usa-nav__close" 
                    ng-click="hideMenu()"
                    aria-label="Close navigation menu">
                    <img src="close.svg" role="img" alt="Close" />
                </button>
                <ul ng-if="hasNavContent" 
                    class="usa-nav__primary usa-accordion" 
                    ng-transclude="navContent"
                    role="menubar"></ul>
                <section ng-if="hasSearch" 
                    aria-label="Search component" 
                    ng-transclude="search"></section>
            </nav> 
            \`,
			controller: function ($scope) {
				this.menuItemCount = 0;

				this.incrementCount = function () {
					this.menuItemCount++;
					return this.menuItemCount;
				};
			},
			link: function (scope, element, attrs, ctrl, $transclude) {
				scope.getClass = function () {
					return ctrl.isMenuVisible ? "usa-nav is-visible" : "usa-nav";
				};

				scope.hideMenu = function () {
					ctrl.toggleMenu();
				};

				scope.focusClose = function () {
					document.getElementById("uswds__nav-close-menu-button").focus();
				};

				scope.hasNavContent = $transclude.isSlotFilled("navContent");
				scope.hasSearch = $transclude.isSlotFilled("search");

				if (scope.hasNavContent) {
					// Count the nav parent items
					$transclude(
						function (clone) {
							scope.menuItemCount = clone.length;
						},
						null,
						"navContent"
					);
				}
			},
		};
	})
	.directive("usaHeaderNavParent", function () {
		// Closure variable for ID counter
		var menuItemCount = 0;

		return {
			restrict: "E",
			replace: true,
			transclude: {
				child: "?usaHeaderNavChild",
				megaMenu: "?usaHeaderMegaMenu",
			},
			scope: {
				title: "@",
				link: "@",
			},
			template: \`
            <li class="usa-nav__primary-item" 
                usa-focus-out="hideList()" 
                role="menuitem"> 
                <button ng-if="hasChildContent || hasMegaMenu" 
                    ng-click="showList()" 
                    aria-expanded="{{listVis}}" 
                    aria-controls="{{navId}}" 
                    type="button" 
                    class="usa-accordion__button usa-nav__link"
                    role="menubutton"
                    aria-haspopup="true">
                    <span>{{title}}</span>
                </button>
                <ul ng-if="hasChildContent" 
                    ng-show="listVis" 
                    id="{{navId}}" 
                    class="usa-nav__submenu" 
                    ng-transclude="child"
                    role="menu"
                    aria-label="{{title}} submenu"></ul>
                <ul ng-if="hasMegaMenu" 
                    ng-show="listVis" 
                    id="{{navId}}" 
                    class="usa-nav__submenu" 
                    ng-transclude="megaMenu"
                    role="menu"
                    aria-label="{{title}} mega menu"></ul>
                <a ng-if="!hasChildContent && !hasMegaMenu" 
                    href="{{link}}" 
                    class="usa-nav-link"
                    role="menuitem">{{title}}</a>
            </li>
			\`,
			controller: function ($scope, $element, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs, ctrls, $transclude) {
				// Generate unique ID
				menuItemCount++;
				scope.navId = "nav-" + menuItemCount;

				scope.listVis = false;
				scope.showList = function () {
					scope.listVis = !scope.listVis;
				};

				scope.hideList = function () {
					scope.listVis = false;
				};

				scope.hasChildContent = $transclude.isSlotFilled("child");
				scope.hasMegaMenu = $transclude.isSlotFilled("megaMenu");

				// Error handling for missing attributes
				if (!(attrs.title && attrs.title != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: title";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-header-nav-parent></usa-header-nav-parent>", temp);
				}

				if (attrs.link && (scope.hasChildContent || scope.hasMegaMenu)) {
					var temp = Object.create(null);
					temp.errorMessage =
						"You have set a link attribute on a <usa-header-nav-parent> that has child content or a mega menu. This is not allowed.";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-header-nav-parent></usa-header-nav-parent>", temp);
				}
			},
		};
	})
	.directive("usaHeaderMegaMenu", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: {
				col: "?usaHeaderMegaMenuCol",
			},
			template: \`
				<div class="usa-nav__submenu usa-megamenu">
					<div ng-transclude="col" class="grid-row grid-row-gap-4"></div>
				</div>
			\`,
		};
	})
	.directive("usaHeaderMegaMenuCol", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`
				<div class="grid-col-auto">
					<ul class="usa-nav__submenu-list" ng-transclude></ul>
				</div>
			\`,
		};
	})
	.directive("usaHeaderNavChild", function () {
		// Create a Map to track validation counts
		var validationCounts = new Map();

		return {
			restrict: "E",
			replace: true,
			scope: {
				link: "@",
				title: "@",
			},
			template: \`
				<li class="usa-nav__submenu-item">
					<a href="{{link}}">{{title}}</a>
				</li>\`,
			link: function (scope, element, attrs, ctrl) {
				// Generate a unique identifier for this element
				var elementId = element[0].outerHTML;

				// Initialize or increment the validation count
				var count = validationCounts.get(elementId) || 0;
				validationCounts.set(elementId, count + 1);

				// Only validate on the second pass
				if (validationCounts.get(elementId) !== 2) {
					return;
				}

				// Error handling for missing attributes
				if (!attrs.link) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: link";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-header-nav-child></usa-header-nav-child>", temp);
				}
				if (!attrs.title) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: title";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-header-nav-child></usa-header-nav-child>", temp);
				}
			}
		};
	})
	.directive("usaHeaderSearchWrapper", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<form class="usa-search usa-search--small" role="search" ng-transclude></form>\`,
		};
	})
	.directive("usaHeaderSearchInput", function () {
		return {
			restrict: "E",
			replace: true,
			template: \`<input class="usa-input" id="search-field" type="search" name="search" />\`,
		};
	})
	.directive("usaHeaderSearchButton", function () {
		return {
			restrict: "E",
			replace: true,
			template: \`
				<button class="usa-button" type="submit">
					<img src="search--white.svg" class="usa-search__submit-icon" alt="Search" />
				</button>
			\`,
		};
	}).directive("usaIdentifierWrapper", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<div class="usa-identifier" ng-transclude></div>\`,
		};
	})
	.directive("usaIdentifierMasthead", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`
            <section class="usa-identifier__section usa-identifier__section--masthead" aria-label="Agency identifier,">
                <div class="usa-identifier__container" ng-transclude></div>
            </section>
        \`,
		};
	})
	.directive("usaIdentifierLogoWrapper", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<div class="usa-identifier__logos" ng-transclude></div>\`,
		};
	})
	.directive("usaIdentifierLogo", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				link: "@",
				src: "@",
				alt: "@",
			},
			template: \`
            <a href="{{link}}" class="usa-identifier__logo">
                <img class="usa-identifier__logo-img" src="{{src}}" alt="{{alt}}" role="img" />
            </a>
            \`,
			controller: function ($scope, $element, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.link && attrs.link != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: link";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-identifier-logo></usa-identifier-logo>", temp);
				}
				if (!(attrs.src && attrs.src != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: src";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-identifier-logo></usa-identifier-logo>", temp);
				}
				// Warning handling for missing attributes
				if (scope.debug && scope.debug == true) {
					if (!(attrs.alt && attrs.alt != "")) {
						var temp = Object.create(null);
						temp.errorMessage = "Missing attribute: alt";
						temp.element = element;
						temp.attributes = attrs;

						console.warn("USWDS Directive Level 1 Warning: <usa-identifier-logo></usa-identifier-logo>", temp);
					}
				}
			},
		};
	})
	.directive("usaIdentifierIdentity", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				domain: "@",
			},
			template: \`
            <section class="usa-identifier__identity" aria-label="Agency description,">
                <p class="usa-identifier__identity-domain">{{domain}}</p>
                <p class="usa-identifier__identity-disclaimer" ng-transclude></p>
            </section>
        	\`,
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.domain && attrs.domain != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: domain";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-identifier-identity></usa-identifier-identity>", temp);
				}
			},
		};
	})
	.directive("usaIdentifierLinksWrapper", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`
            <nav class="usa-identifier__section usa-identifier__section--required-links" aria-label="Important links,">
                <div class="usa-identifier__container">
                    <ul class="usa-identifier__required-links-list" ng-transclude></ul>
                </div>
            </nav>
        \`,
		};
	})
	.directive("usaIdentifierLink", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				link: "@",
				title: "@",
			},
			template: \`
            <li class="usa-identifier__required-links-item">
                <a href="{{link}}" class="usa-identifier__required-link usa-link">{{title}}</a>
            </li>\`,
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.link && attrs.link != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: link";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-identifier-link></usa-identifier-link>", temp);
				}
				if (!(attrs.title && attrs.title != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: title";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-identifier-link></usa-identifier-link>", temp);
				}
			},
		};
	})
	.directive("usaIdentifierParent", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				ariaLabel: "@",
			},
			template: \`
            <section class="usa-identifier__section usa-identifier__section--usagov">
                <div class="usa-identifier__container" ng-transclude></div>
            </section>\`,
			controller: function ($scope, $element, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs) {
				// Warning handling for missing attributes
				if (scope.debug && scope.debug == true) {
					if (!(attrs.ariaLabel && attrs.ariaLabel != "")) {
						var temp = Object.create(null);
						temp.errorMessage = "Missing attribute: aria-label";
						temp.element = element;
						temp.attributes = attrs;

						console.warn("USWDS Directive Level 1 Warning: <usa-identifier-parent></usa-identifier-parent>", temp);
					}
				}
			},
		};
	})
	.directive("usaIdentifierParentDescription", function () {
		return {
			restrict: "A",
			replace: true,
			link: function (scope, element, attrs) {
				element.addClass("usa-identifier__usagov-description");
			},
		};
	}).factory("usaInViewPort", function ($document) {
		return {
			setup: function (
				el,
				win = window,
				docEl = document.documentElement,
			) {
				const rect = el.getBoundingClientRect();

				return (
					rect.top >= 0 &&
					rect.left >= 0 &&
					rect.bottom <= (win.innerHeight || docEl.clientHeight) &&
					rect.right <= (win.innerWidth || docEl.clientWidth)
				);
			}
		}
	}).directive("usaInputGroup", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<div class="usa-input-group" ng-transclude></div>\`,
		};
	})
	.directive("usaInputPrefix", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<div class="usa-input-prefix" aria-hidden="true" ng-transclude></div>\`,
		};
	})
	.directive("usaInputSuffix", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<div class="usa-input-suffix" aria-hidden="true" ng-transclude></div>\`,
		};
	}).directive("usaInPageNavWrapper", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				stickyHeader: "@",
				stickyHeaderOffset: "&",
			},
			template: "<div class='usa-in-page-nav-container' ng-transclude></div>",
			controller: function ($scope, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;
				if ($scope.stickyHeader) {
					this.stickyHeader = $scope.stickyHeader;
					this.stickyHeaderOffset = function () {
						return $scope.stickyHeaderOffset();
					};
				}
			},
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (scope.debug) {
					if (attrs.stickyHeader) {
						if (!(attrs.stickyHeaderOffset && attrs.stickyHeaderOffset != "")) {
							var temp = Object.create(null);
							temp.errorMessage =
								"You have selected sticky-header, but you have not provided a value for: sticky-header-offset";
							temp.element = element;
							temp.attributes = attrs;

							console.warn(
								"USWDS Directive Level 1 Warning: <usa-in-page-nav-wrapper></usa-in-page-nav-wrapper>",
								temp
							);
						}
					}
				}
			},
		};
	})
	.directive("usaInPageNavMenu", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				headingLevel: "@",
				title: "@",
			},
			template:
				"<aside class='usa-in-page-nav'>" +
				"<nav class='usa-in-page-nav__nav' aria-label='{{title}}'>" +
				"<div ng-bind-html='headingHtml'></div>" +
				"<ul class='usa-in-page-nav__list' ng-transclude></ul>" +
				"</nav>" +
				"</aside>",
			controller: function ($scope, $window, $sce) {
				// Create heading element based on headingLevel
				$scope.$watch("headingLevel", function (level) {
					level = level || "4"; // default to h4 if not specified
					$scope.headingHtml = $sce.trustAsHtml(
						\`<h\${level} class='usa-in-page-nav__heading'>\${$scope.title}</h\${level}>\`
					);
				});
			},
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.title && attrs.title != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: title";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-in-page-nav-menu></usa-in-page-nav-menu>", temp);
				}
			},
		};
	})
	.directive("usaInPageNavItem", function () {
		// Shared state between directive instances
		var activeId = null;
		var navItems = []; // Array to keep track of nav items in order

		return {
			restrict: "E",
			require: "^usaInPageNavWrapper",
			replace: true,
			transclude: true,
			scope: {
				link: "@",
				primary: "@",
			},
			template:
				'<li ng-class="getClass()">' +
				"<a href='{{link}}' class='usa-in-page-nav__link' ng-click='scrollTo($event)' ng-transclude></a>" +
				"</li>",
			controller: function ($scope, $timeout, $window) {
				try {
					var elementId = $scope.link.replace("#", "");
				} catch (error) {
					// Link error will fire when the directive is compiled to notify the developer
				}

				// Add this nav item to the array
				navItems.push({
					id: elementId,
					element: document.getElementById(elementId),
				});

				$scope.getClass = function () {
					var output = "usa-in-page-nav__item";
					if ($scope.primary == "true") {
						output += " usa-in-page-nav__item__primary";
					}
					if (activeId === elementId) {
						output += " usa-in-page-nav__item--active";
					}
					return output;
				};

				$scope.scrollTo = function (event) {
					event.preventDefault();
					var element = document.getElementById(elementId);
					if (element) {
						$timeout(function () {
							element.scrollIntoView({
								behavior: "smooth",
								block: "start",
							});
						}, 100);
					}
				};

				// Set up intersection observer
				var element = document.getElementById(elementId);

				if (element) {
					var observer = new IntersectionObserver(
						function (entries) {
							entries.forEach(function (entry) {
								if (entry.isIntersecting) {
									$scope.$apply(function () {
										activeId = elementId;
									});
								} else if (!entry.isIntersecting && activeId === elementId) {
									// When scrolling up, find the previous section that contains the current scroll position
									$scope.$apply(function () {
										var currentIndex = navItems.findIndex((item) => item.id === elementId);
										for (var i = currentIndex - 1; i >= 0; i--) {
											var rect = navItems[i].element.getBoundingClientRect();
											var nextRect = i < navItems.length - 1 ? navItems[i + 1].element.getBoundingClientRect() : null;

											if ($scope.stickyHeader == "true") {
												var offset = $scope.stickyHeaderOffset();
												// Check if we're between this section's top and the next section's top
												if (rect.top - offset <= 0 && (!nextRect || nextRect.top - offset > 0)) {
													activeId = navItems[i].id;
													break;
												}
											} else {
												// Check if we're between this section's top and the next section's top
												if (rect.top <= 0 && (!nextRect || nextRect.top > 0)) {
													activeId = navItems[i].id;
													break;
												}
											}
										}
									});
								}
							});
						},
						{
							threshold: 0.5,
						}
					);

					observer.observe(element);

					// Clean up observer when scope is destroyed
					$scope.$on("$destroy", function () {
						observer.disconnect();
						// Remove this item from navItems array
						navItems = navItems.filter((item) => item.id !== elementId);
					});
				}

				// Watch for active ID changes
				$scope.$watch(
					function () {
						return activeId;
					},
					function () {
						// No need to call $digest here
						// Angular will handle the update automatically
					}
				);
			},
			link: function ($scope, $element, $attrs, $ctrl) {
				// Error handling for missing attributes
				if (!($attrs.link && $attrs.link != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: link";
					temp.element = $element;
					temp.attributes = $attrs;

					console.error("USWDS Directive Level 0 Error: <usa-in-page-nav-item></usa-in-page-nav-item>", temp);
				}

				if ($ctrl.stickyHeader) {
					$scope.stickyHeader = $ctrl.stickyHeader;
					$scope.stickyHeaderOffset = function () {
						return $ctrl.stickyHeaderOffset();
					};
				}
			},
		};
	})
	.directive("usaInPageNavLink", function () {
		return {
			restrict: "A",
			replace: true,
			transclude: true,
			link: function (scope, element, attrs) {
				element.addClass("usa-in-page-nav__link");
			},
		};
	}).directive("usaLabel", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: '<label class="usa-label" ng-transclude></label>',
		};
	})
	.directive("usaHint", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: '<div class="usa-hint" ng-transclude></div>',
		};
	}).directive('usaInputMask', function ($timeout) {
		return {
			restrict: 'A',
			scope: {
				mask: '@usaInputMask'
			},
			controller: function ($scope, $element, $window) {
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs) {

				let requiredAttributes = [];

				if (!scope.mask || !/^[_()\\- ]+$/.test(scope.mask)) requiredAttributes.push("mask (must contain '_', '(', ')', '-', or ' ')");
				if (!element.attr('id') || element.attr('id').trim() == '') requiredAttributes.push("id - required");
				if (element.attr('inputmode') === 'numeric' && element.attr('charset')) requiredAttributes.push("inputmode cannot be paired with charset");

				if (requiredAttributes.length > 0) {
					const temp = Object.create(null);
					temp.errorMessage = "Invalid attribute(s): " + requiredAttributes.join(", ");
					temp.element = element;
					temp.attributes = attrs;
					console.error("USWDS Directive Level 0 Error: <usa-input-mask></usa-input-mask>", temp);
				}

				element.addClass('usa-masked');
				element.attr('placeholder', scope.mask);
				element.attr('maxlength', scope.mask.length);

				var wrapper = angular.element('<span class="usa-input-mask"></span>');
				element.wrap(wrapper);

				var maskContent = angular.element('<span class="usa-input-mask--content" aria-hidden="true" id="' + attrs.id + '-mask"></span>');
				element.parent().prepend(maskContent);

				function applyMask(value) {
					let result = {
						currentValue: '',
						currentMask: '',
					};

					if (!value) {
						return result;
					}

					let formatted = scope.mask.split("");
					let index = 0;

					for (let char of value) {
						while (index < formatted.length && formatted[index] !== "_") {
							index++;
						}
						if (index < formatted.length && formatted[index] === "_") {
							formatted[index] = char;
							index++;
						}
					}

					result.currentValue = formatted.slice(0, index).join("").replace(/_/g, "");
					result.currentMask = formatted.slice(index).join("");

					return result;
				}

				element.on('input', function () {
					var value = element.val().replace(/[ \\-\\/()]/g, "");

					if (element.attr('inputmode') === 'numeric' && isNaN(value.slice(-1))) {
						value = value.slice(0, -1);
					} else if (element.attr('charset')) {
						const charset = element.attr('charset').replace(/[ \\-\\/()]/g, "");
						let lastChar = value.slice(-1);
						let lastIndex = value.length - 1;

						if (charset[lastIndex] === "A" && !/^[a-zA-Z]$/.test(lastChar)) {
							value = value.slice(0, -1);
						}

						if (charset[lastIndex] === "#" && isNaN(lastChar)) {
							value = value.slice(0, -1);
						}
					}

					var maskedValue = applyMask(value);
					maskContent[0].innerHTML = '<i>' + maskedValue.currentValue + '</i>' + maskedValue.currentMask;
					element.val(maskedValue.currentValue);
				});
			}
		}
	}).directive("usaUnorderedList", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<ul class="usa-list" ng-transclude></ul>\`,
		};
	})
	.directive("usaOrderedList", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<ol class="usa-list" ng-transclude></ol>\`,
		};
	})
	.directive("usaUnstyledList", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<ul class="usa-list usa-list--unstyled" ng-transclude></ul>\`,
		};
	}).directive("usaHeaderExtended", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`
                <div>
                    <div class="usa-overlay" ng-class="{'is-visible': isMenuVisible}"></div>
                    <header class="usa-header usa-header--extended">
                        <div class="usa-nav-container" ng-transclude></div>
                    </header>
                </div>\`,
			controller: function ($scope, $window) {
				this.isMenuVisible = false;
				$scope.isMenuVisible = false;

				// Add resize handler
				angular.element($window).on(
					"resize",
					function () {
						if ($window.innerWidth >= 1023 && $scope.isMenuVisible) {
							// 1023px is USWDS's default desktop breakpoint
							$scope.isMenuVisible = false;
							this.isMenuVisible = false;
							$scope.$apply(); // Trigger digest cycle since we're outside Angular
						}
					}.bind(this)
				);

				this.toggleMenu = function () {
					this.isMenuVisible = !this.isMenuVisible;
					$scope.isMenuVisible = this.isMenuVisible;
				};
			},
		};
	})
	.directive("usaHeaderExtendedLogoWrapper", function () {
		return {
			restrict: "E",
			require: "^usaHeaderExtended",
			replace: true,
			transclude: true,
			template: \`
				<div class="usa-navbar">
					<div class="usa-logo" id="basic-logo" ng-transclude></div>
                    <button type="button" 
                        class="usa-menu-btn" 
                        ng-click="showMenu()"
                        aria-label="Menu"
                        aria-controls="basic-nav"
                        aria-expanded="{{isMenuVisible}}">Menu</button>
				</div>\`,
			link: function (scope, element, attrs, headerCtrl) {
				scope.showMenu = function () {
					headerCtrl.toggleMenu();
				};
			},
		};
	})
	.directive("usaHeaderExtendedLogoImg", function () {
		return {
			restrict: "E",
			replace: true,
			template: \`<img class="usa-logo-img"/>\`,
		};
	})
	.directive("usaHeaderExtendedLogoText", function () {
		return {
			restrict: "A",
			link: function (scope, element, attrs) {
				element.addClass("usa-logo__text");
			},
		};
	})
	.directive("usaHeaderExtendedNav", function () {
		return {
			restrict: "E",
			require: "^usaHeaderExtended",
			replace: true,
			transclude: {
				navContent: "?usaHeaderExtendedNavParent",
				search: "?usaHeaderExtendedSearchWrapper",
			},
			scope: {},
			template: \`
            <nav id="basic-nav" 
                aria-label="Primary navigation" 
                ng-class="getClass()" 
                usa-focus-out="focusClose()"
                role="navigation">
                <button id="uswds__nav-close-menu-button" 
                    type="button" 
                    class="usa-nav__close" 
                    ng-click="hideMenu()"
                    aria-label="Close navigation menu">
                    <img src="close.svg" role="img" alt="Close" />
                </button>
                <ul ng-if="hasNavContent" 
                    class="usa-nav__primary usa-accordion" 
                    ng-transclude="navContent"
                    role="menubar"></ul>
                <div ng-if="hasSearch" class="usa-nav__secondary">
                    <ul class="usa-nav__secondary-links"></ul>
                    <section  
                        aria-label="Search component" 
                        ng-transclude="search"></section>
                </div>
            </nav> 
            \`,
			controller: function ($scope) {
				this.menuItemCount = 0;

				this.incrementCount = function () {
					this.menuItemCount++;
					return this.menuItemCount;
				};
			},
			link: function (scope, element, attrs, ctrl, $transclude) {
				scope.getClass = function () {
					return ctrl.isMenuVisible ? "usa-nav is-visible" : "usa-nav";
				};

				scope.hideMenu = function () {
					ctrl.toggleMenu();
				};

				scope.focusClose = function () {
					document.getElementById("uswds__nav-close-menu-button").focus();
				};

				scope.hasNavContent = $transclude.isSlotFilled("navContent");
				scope.hasSearch = $transclude.isSlotFilled("search");

				if (scope.hasNavContent) {
					// Count the nav parent items
					$transclude(
						function (clone) {
							scope.menuItemCount = clone.length;
						},
						null,
						"navContent"
					);
				}
			},
		};
	})
	.directive("usaHeaderExtendedNavParent", function () {
		// Closure variable for ID counter
		var menuItemCount = 0;

		return {
			restrict: "E",
			require: "^?usaHeaderExtendedNav",
			replace: true,
			transclude: {
				child: "?usaHeaderExtendedNavChild",
				megaMenu: "?usaHeaderExtendedMegaMenu",
			},
			scope: {
				title: "@",
				link: "@",
			},
			template: \`
            <li class="usa-nav__primary-item" 
                usa-focus-out="hideList()" 
                role="menuitem"> 
                <button ng-if="hasChildContent || hasMegaMenu" 
                    ng-click="showList()" 
                    aria-expanded="{{listVis}}" 
                    aria-controls="{{navId}}" 
                    type="button" 
                    class="usa-accordion__button usa-nav__link"
                    role="menubutton"
                    aria-haspopup="true">
                    <span>{{title}}</span>
                </button>
                <ul ng-if="hasChildContent" 
                    ng-show="listVis" 
                    id="{{navId}}" 
                    class="usa-nav__submenu" 
                    ng-transclude="child"
                    role="menu"
                    aria-label="{{title}} submenu"></ul>
                <ul ng-if="hasMegaMenu" 
                    ng-show="listVis" 
                    id="{{navId}}" 
                    class="usa-nav__submenu" 
                    ng-transclude="megaMenu"
                    role="menu"
                    aria-label="{{title}} mega menu"></ul>
                <a ng-if="!hasChildContent && !hasMegaMenu" 
                    href="{{link}}" 
                    class="usa-nav-link"
                    role="menuitem">{{title}}</a>
            </li>
			\`,
			controller: function ($scope, $element, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs, ctrls, $transclude) {
				// Error handling for missing attributes
				if (scope.debug && scope.debug == true) {
					scope.$watch(attrs, function () {
						try {
							if (!(attrs.title && attrs.title != "")) throw "title";
							if (!(attrs.link && attrs.link != "")) throw "link";
						} catch (ex) {
							console.log("%element", element);
							console.log("Missing attribute: " + ex);
							console.log("%attributes", attrs);
						}
					});
				}

				menuItemCount++;
				scope.navId = "nav-" + menuItemCount;

				scope.listVis = false;
				scope.showList = function () {
					scope.listVis = !scope.listVis;
				};

				scope.hideList = function () {
					scope.listVis = false;
				};

				scope.hasChildContent = $transclude.isSlotFilled("child");
				scope.hasMegaMenu = $transclude.isSlotFilled("megaMenu");
			},
		};
	})
	.directive("usaHeaderExtendedMegaMenu", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`
				<div id="basic-mega-nav-section-two" class="usa-nav__submenu usa-megamenu">
					<div class="grid-row grid-row-gap-4" ng-transclude></div>
				</div>
			\`,
		};
	})
	.directive("usaHeaderExtendedMegaMenuCol", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`
				<div class="grid-col-auto">
					<ul class="usa-nav__submenu-list" ng-transclude></ul>
				</div>
			\`,
		};
	})
	.directive("usaHeaderExtendedNavChild", function () {
		return {
			restrict: "E",
			replace: true,
			scope: {
				link: "@",
				title: "@",
			},
			template: \`
                <li class="usa-nav__submenu-item">
                    <a href="{{link}}">{{title}}</a>
                </li>\`,
			controller: function ($scope, $element, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attr, ctrl) {
				// Error handling for missing attributes
				if (scope.debug && scope.debug == true) {
					scope.$watch(attrs, function () {
						try {
							if (!(attrs.link && attrs.link != "")) throw "link";
							if (!(attrs.title && attrs.title != "")) throw "title";
						} catch (ex) {
							console.log("%element", element);
							console.log("Missing attribute: " + ex);
							console.log("%attributes", attrs);
						}
					});
				}
			},
		};
	})
	.directive("usaHeaderExtendedSearchWrapper", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<form class="usa-search usa-search--small" role="search" ng-transclude></form>\`,
		};
	})
	.directive("usaHeaderExtendedSearchInput", function () {
		return {
			restrict: "E",
			replace: true,
			template: \`<input class="usa-input" id="search-field" type="search" name="search" />\`,
		};
	})
	.directive("usaHeaderExtendedSearchButton", function () {
		return {
			restrict: "E",
			replace: true,
			template: \`
				<button class="usa-button" type="submit">
					<img src="search--white.svg" class="usa-search__submit-icon" alt="Search" />
				</button>
			\`,
		};
	}).directive("usaLegend", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: '<legend class="usa-legend" ng-transclude></legend>'
		};
	}).directive('usaLanguageSelector', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			scope: {
				lang: '@',
				xmlLang: '@',
				displayText: '@',
				variant: '@?',
			},
			template:
				\`<div>
                <button type="button" class="{{getButtonVariant()}}" role="button">
                    <span lang="{{lang}}" xml:lang="{{xmlLang}}">{{displayText}}</span>
                </button>
            </div>\`,
			controller: function ($scope) {
				$scope.getButtonVariant = function () {
					var classes = ['usa-button'];
					switch ($scope.variant) {
						case "primary":
							classes.push('usa-button--primary');
							break;
						case "secondary":
							classes.push('usa-button--secondary');
							break;
						case "accent-cool":
							classes.push('usa-button--accent-cool');
							break;
						case "accent-warm":
							classes.push('usa-button--accent-warm');
							break;
						case "outline":
							classes.push('usa-button--outline');
							break;
						case "base":
							classes.push('usa-button--base');
							break;
						default:
					}

					return classes.join(' ');
				};
			},
			link: function (scope, element, attrs) {
				Array.from(element[0].attributes).forEach(attr => element.removeAttr(attr.name));
				element.addClass('usa-language-container');
			}
		};
	}).directive('usaLanguageSelectorList', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			scope: {
				languages: '=',
				variant: '@?',
				id: '@'
			},
			template:
				\`<div>
                <ul class="usa-language__primary usa-accordion">
                    <li class="usa-language__primary-item">
                        <button
                            type="button"
                            class="{{getButtonVariant()}}"
                            role="button"
                            ng-click="toggleSubmenu()"
                            aria-expanded="{{isSubmenuVisible}}"
                            aria-controls="{{id}}">Languages
                        </button>
                        <ul id="{{id}}" class="usa-language__submenu" ng-show="isSubmenuVisible">
                            <li class="usa-language__submenu-item" ng-repeat="language in languages">
                                <a href="javascript:void()">
                                    <span lang="{{language.lang}}" xml:lang="{{language.xmlLang}}">
                                        <strong>{{language.translated}}</strong> {{language.display}}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>\`,
			controller: function ($scope) {
				$scope.isSubmenuVisible = false;

				$scope.toggleSubmenu = function () {
					$scope.isSubmenuVisible = !$scope.isSubmenuVisible;
				};

				$scope.getButtonVariant = function () {
					var classes = ['usa-button'];
					switch ($scope.variant) {
						case 'unstyled':
							classes.push('usa-button--unstyled');
							break;
						case "primary":
							classes.push('usa-button--primary');
							break;
						case "secondary":
							classes.push('usa-button--secondary');
							break;
						case "accent-cool":
							classes.push('usa-button--accent-cool');
							break;
						case "accent-warm":
							classes.push('usa-button--accent-warm');
							break;
						case "outline":
							classes.push('usa-button--outline');
							break;
						case "base":
							classes.push('usa-button--base');
							break;
						default:
					}

					classes.push('usa-language__link');
					return classes.join(' ');
				};
			},
			link: function (scope, element, attrs) {
				if (scope.id === undefined) {
					console.warn(element[0], 'usa-language-selector-list: id is required');
				}


				Array.from(element[0].attributes).forEach(attr => element.removeAttr(attr.name));
				element.addClass('usa-language-container');

				if (attrs.hasOwnProperty('slim')) {
					element.addClass('usa-language--small');
				}
			}
		};
	}).directive("usaLink", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				variant: "@?"
			},
			template: '<a class="{{getCss()}}" ng-transclude></a>',
			controller: function ($scope, $element, $window) {
				$scope.debug = $window.uswdsDebug;

				$scope.getCss = function () {
					let classes = ["usa-link"];
					if ($scope.variant == "external") {
						classes.push("usa-link--external");
					}
					return classes.join(" ");
				};
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					if (attrs.variant && attrs.variant != "external") {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attribute: variant";
						temp.element = element;
						temp.attributes = attrs;
						console.warn("USWDS Directive Level 1 Warning: <usa-link></usa-link>", temp);
					}
				}
			}
		};
	}).directive("usaModal", function (usaTrapFactory) {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				id: "@",
				isVisible: "=",
				variant: "@?",
				forceAction: "@?",
			},
			template:
				\`<div class="{{isModalVisible()}}" role="dialog">
                    <div class="usa-modal-overlay" aria-controls="{{id}}" ng-click="overlayClick($event)">
                        <div class="{{getVariant()}}" tabindex="-1">
                            <div class="usa-modal__content">
                                <div class="usa-modal__main" ng-transclude></div>
                                <button ng-if="forceAction != 'true'" type="button" class="usa-button usa-modal__close" aria-label="Close this window" ng-click="closeModal()">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>\`,
			controller: function ($scope, $element, $timeout, $window) {
				$scope.debug = $window.uswdsDebug;

				let teardownFocusTrap;

				$scope.$watch("isVisible", function (newValue) {
					if (newValue) {
						$timeout(function () {
							$element[0].querySelector('.usa-modal').focus();
							teardownFocusTrap = usaTrapFactory.setup($element[0]);
						});
					} else if (teardownFocusTrap) {
						teardownFocusTrap();
					}
				});

				$scope.$on("$destroy", function () {
					if (teardownFocusTrap) {
						teardownFocusTrap()
					}
				})

				$scope.closeModal = function () {
					$scope.isVisible = false;
				}

				$scope.isModalVisible = function () {
					let classes = ["usa-modal-wrapper"];
					if ($scope.isVisible) {
						classes.push("is-visible");
					} else {
						classes.push("is-hidden");
					}
					return classes.join(" ");
				};

				$scope.getVariant = function () {
					let classes = ['usa-modal'];
					if ($scope.variant == "large") {
						classes.push('usa-modal--lg');
					}
					return classes.join(' ');
				}

				$scope.overlayClick = function (event) {
					if (event.target.classList.contains('usa-modal-overlay') && $scope.forceAction != 'true') {
						$scope.closeModal();
					}
				};
			},
			link: function (scope, element, attrs) {
				let reqAttributes = [];
				if (attrs.isVisible == undefined || attrs.isVisible == '') reqAttributes.push("is-visible");
				if (!attrs.id || attrs.id.trim() == '') reqAttributes.push("id");

				if (reqAttributes.length > 0) {
					const temp = Object.create(null);
					temp.errorMessage = "Required attribute(s): " + reqAttributes.join(", ");
					temp.element = element;
					temp.attributes = attrs;
					console.error("USWDS Directive Level 0 Error: <usa-modal></usa-modal>", temp);
				}

				if (scope.debug && scope.debug == true) {
					let invalidAttributes = [];
					if (attrs.variant && attrs.variant != 'large') invalidAttributes.push("variant");
					if (attrs.forceAction && (attrs.forceAction != 'true' && attrs.forceAction != 'false')) invalidAttributes.push("force-action");
					if (invalidAttributes.length > 0) {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attribute(s): " + invalidAttributes.join(", ");
						temp.element = element;
						temp.attributes = attrs;
						console.warn("USWDS Directive Level 1 Error: <usa-modal></usa-modal>", temp);
					}
				}
			}
		}
	}).directive('usaModalHeader', function () {
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			require: '^usaModal',
			template: '<h2 class="usa-modal__heading" ng-transclude></h2>'
		};
	}).directive('usaModalBody', function () {
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			require: '^usaModal',
			template: '<div ng-transclude></div>'
		};
	}).directive('usaModalFooter', function () {
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			require: '^usaModal',
			template: '<div ng-transclude></div>'
		};
	}).directive("usaMemorableDate", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: {
				month: "?month",
				day: "?day",
				year: "?year",
			},
			scope: {},
			template:
				\`<div class="usa-memorable-date">
            <div class="usa-form-group usa-form-group--month usa-form-group--select" ng-transclude="month"></div>
            <div class="usa-form-group usa-form-group--day" ng-transclude="day"></div>
            <div class="usa-form-group usa-form-group--year" ng-transclude="year"></div>
          </div>\`,
			controller: function () { },
			link: function (scope, element, attrs) {
				let elements = {
					month: element[0].querySelector("month"),
					day: element[0].querySelector("day"),
					year: element[0].querySelector("year")
				}

				for (let el in elements) {
					if (elements[el]) {
						elements[el].replaceWith(...element[0].querySelector(el).childNodes);
					}
				}
			}

		};
	}).directive("usaMemorableMonth", function () {
		return {
			restrict: "E",
			replace: true,
			require: "^usaMemorableDate",
			transclude: true,
			template: \`<select class="usa-select" ng-transclude></select>\`,
		}
	}).directive("usaMemorableDay", function () {
		return {
			restrict: "E",
			replace: true,
			require: "^usaMemorableDate",
			template: \`<input class="usa-input" min="1" max="31" maxlength="2" pattern="[0-9]*" inputmode="numeric"></input>\`,
		}
	}).directive("usaMemorableYear", function () {
		return {
			restrict: "E",
			replace: true,
			require: "^usaMemorableDate",
			template: \`<input class="usa-input" min="0" maxlength="4" pattern="[0-9]*" inputmode="numeric"></input>\`,
		}
	}).directive("usaPaginationWrapper", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				page: "=",
			},
			template: \`
                <nav aria-label="Pagination" class="usa-pagination">
                    <ul class="usa-pagination__list" ng-transclude></ul>
                </nav>
            \`,
			controller: function ($scope, $window) {
				this.getPage = function () {
					return $scope.page;
				};
			},
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.page && attrs.page != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: page";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-pagination-wrapper></usa-pagination-wrapper>", temp);
				}
			},
		};
	})
	.directive("usaPaginationPrevious", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				imgSrc: "@",
				text: "@",
				disabled: "=",
				link: "@",
				click: "&"
			},
			template: \`
                <li class="usa-pagination__item usa-pagination__arrow">
					<a href="{{link}}" ng-click="callback()" class="usa-pagination__link usa-pagination__previous-page" aria-label="Previous page" ng-disabled="disabled" aria-disabled="{{disabled}}">
                        <img src="{{imgSrc}}" alt="Previous page">
					    <span class="usa-pagination__link-text">{{text}}</span>
                    </a>
				</li>
            \`,
			controller: function ($scope, $window) {
				if (!$scope.disabled) {
					$scope.disabled = false;
				}

				$scope.callback = function () {
					if (angular.isFunction($scope.click)) {
						event.preventDefault();
						$scope.click();
					} else {
						// Do nothing
					}
				}
			},
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.imgSrc && attrs.imgSrc != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: img-src";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-pagination-previous></usa-pagination-previous>", temp);
				}
				if (!(attrs.text && attrs.text != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: text";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-pagination-previous></usa-pagination-previous>", temp);
				}
			},
		};
	})
	.directive("usaPaginationItem", function () {
		return {
			restrict: "E",
			require: "^usaPaginationWrapper",
			replace: true,
			transclude: true,
			scope: {
				link: "@",
				pageNumber: "@",
				click: "&"
			},
			template: \`
                <li class="usa-pagination__item usa-pagination__page-no">
					<a href="{{link}}" ng-click="callback()" ng-class="getClass()" aria-label="Go to page {{pageNumber}}">{{pageNumber}}</a>
				</li>
            \`,
			controller: function ($scope) {
				$scope.callback = function () {
					if (angular.isFunction($scope.click)) {
						event.preventDefault();
						$scope.click();
					} else {
						// Do nothing
					}
				}
			},
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.link && attrs.link != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: link";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-pagination-item></usa-pagination-item>", temp);
				}
				if (!(attrs.pageNumber && attrs.pageNumber != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: page-number";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-pagination-item></usa-pagination-item>", temp);
				}

				scope.getClass = () => {
					var baseClass = "usa-pagination__button";
					if (ctrl.getPage() == scope.pageNumber) {
						baseClass += " usa-current";
					}
					return baseClass;
				};
			},
		};
	})
	.directive("usaPaginationOverflow", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`
            <li class="usa-pagination__item usa-pagination__overflow" aria-label="ellipsis indicating non-visible pages">
				<span>…</span>
			</li>
            \`,
		};
	})
	.directive("usaPaginationNext", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				imgSrc: "@",
				text: "@",
				disabled: "=",
				link: "@",
				click: "&"
			},
			template: \`
            <li class="usa-pagination__item usa-pagination__arrow">
				<a href="{{link}}" ng-click="callback()" class="usa-pagination__link usa-pagination__next-page" aria-label="Next page" ng-disabled="disabled" aria-disabled="{{disabled}}">
                    <span class="usa-pagination__link-text">{{text}}</span>
                    <img src="{{imgSrc}}" alt="Next page">
                </a>
			</li>
            \`,
			controller: function ($scope) {
				if (!$scope.disabled) {
					$scope.disabled = false;
				}

				$scope.callback = function () {
					if (angular.isFunction($scope.click)) {
						event.preventDefault();
						$scope.click();
					} else {
						// Do nothing
					}
				}
			},
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.imgSrc && attrs.imgSrc != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: img-src";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-pagination-next></usa-pagination-next>", temp);
				}
				if (!(attrs.text && attrs.text != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: text";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-pagination-next></usa-pagination-next>", temp);
				}
			},
		};
	}).directive("usaProcessList", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<ol class="usa-process-list" ng-transclude></ol>\`,
		};
	})
	.directive("usaProcessListHeading", function () {
		return {
			restrict: "A",
			replace: true,
			link: function (scope, element, attrs) {
				element.addClass("usa-process-list__heading");
			},
		};
	})
	.directive("usaProcessListItem", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`<li class="usa-process-list__item" ng-transclude></li>\`,
		};
	}).directive("usaRadio", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: '<div class="usa-radio" ng-transclude></div>',
			controller: function ($scope, $element, $window) { },
		};
	}).directive("usaRadioInput", function () {
		return {
			restrict: "E",
			replace: true,
			require: '^usaRadio',
			scope: {
				variant: '@?'
			},
			template: '<input class="{{getCss()}}" type="radio"></input>',
			controller: function ($scope, $element, $window) {
				$scope.debug = $window.uswdsDebug;

				$scope.getCss = function () {
					let classes = ['usa-radio__input'];

					if ($scope.variant === 'tile') {
						classes.push('usa-radio__input--tile');
					}
					return classes.join(' ');
				};
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					if (attrs.variant && attrs.variant != 'tile') {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attribute(s): variant (expected 'tile')";
						temp.element = element;
						temp.attributes = attrs;
						console.warn("USWDS Directive Level 1 Error: <usa-radio-input></usa-radio-input>", temp);
					}
				}
			}
		};
	}).directive("usaRadioLabel", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			require: '^usaRadio',
			template: '<label class="usa-radio__label" ng-transclude></label>',
			controller: function () {
			}
		};
	}).directive("usaRadioLabelDescription", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			require: '^usaRadioLabel',
			template: '<span class="usa-radio__label-description" ng-transclude></span>',
		};
	}).directive("usaRangeSlider", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`
            <input class="usa-range" type="range"/> 
        \`,
		};
	}).directive('usaProse', function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				element.addClass('usa-prose');
			}
		};
	}).directive("usaSelect", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {},
			template: '<select class="usa-select" ng-transclude></select>',
		};
	}).directive("usaSearch", function ($compile) {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				searchId: "@",
				type: "@",
			},
			template: \`
            <section aria-label="Search component">
                <form ng-class="getClasses()" role="search" ng-transclude></form>
            </section>
            \`,
			controller: function ($scope, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;

				this.searchId = $scope.searchId;
				this.type = $scope.type;

				this.getType = function () {
					return $scope.type;
				}

				$scope.getClasses = function () {
					var baseClass = "usa-search";
					switch ($scope.type) {
						case "big":
							baseClass += " usa-search--big";
							break;
						case "small":
							baseClass += " usa-search--small";
							break;
						default:
							break;
					}
					return baseClass;
				};
			},
			link: function (scope, element, attrs, ctrl) {
				// Error handling for missing attributes
				if (!(attrs.searchId && attrs.searchId != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: searchId";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-search></usa-search>", temp);
				}

				if (scope.debug && scope.debug == true) {
					if (scope.type && (scope.type != "big" && scope.type != "small")) {
						var temp = Object.create(null);
						temp.errorMessage = "Invalid attribute: type";
						temp.acceptedValues = ["big", "small"];
						temp.element = element;
						temp.attributes = attrs;

						console.warn("USWDS Directive Level 1 Warning: <usa-search></usa-search>", temp);
					}
				}

				// Create the label element
				var label = angular.element('<label class="usa-sr-only" for="{{searchId}}">Search</label>');

				// Find the form element
				var form = element.find("form");

				// Option 1: Using prepend (simplest)
				form.prepend(label);

				// Compile the label
				$compile(label)(scope);
			},
		};
	}).directive("usaSearchInput", function () {
		return {
			restrict: "E",
			require: "^usaSearch",
			replace: true,
			template: \`<input class="usa-input" id="{{searchId}}" type="search" name="search" />\`,
			link: function (scope, element, attrs, ctrl) {
				scope.searchId = ctrl.searchId;
			},
		};
	})
	.directive("usaSearchButton", function () {
		return {
			restrict: "E",
			require: "^usaSearch",
			replace: true,
			scope: {
				buttonText: "@",
				imgSrc: "@",
			},
			template: \`
            <button class="usa-button" type="submit">
                <span ng-if="getType() != 'small'" class="usa-search__submit-text">{{buttonText}}</span>
                <img
                    src="{{imgSrc}}" class="usa-search__submit-icon"
                    alt="Search" />
            </button>
            \`,
			link: function (scope, element, attrs, ctrl) {
				scope.getType = function () {
					return ctrl.getType();
				}

				// Error handling for missing attributes as long as type is not small
				if (!(attrs.buttonText && attrs.buttonText != "") && scope.getType() != "small") {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: buttonText";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-search-button></usa-search-button>", temp);
				}
				// Error handling for missing attributes
				if (!(attrs.imgSrc && attrs.imgSrc != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: imgSrc";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-search-button></usa-search-button>", temp);
				}
			},
		};
	}).directive("usaSideNavigation", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {},
			template: \`<nav><ul class="usa-sidenav" ng-transclude></ul></nav>\`,
			controller: function () { }
		};
	}).directive("usaNavItem", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				current: '@?'
			},
			require: "^usaSideNavigation",
			template: \`<li class="{{getIsCurrent()}}" ng-transclude></li>\`,
			controller: function ($scope, $attrs, $element, $window) {
				$scope.debug = $window.uswdsDebug;

				$scope.getIsCurrent = function () {
					return $scope.current == 'true' ? 'usa-sidenav__item usa-current' : 'usa-sidenav__item';
				};
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					if (attrs.current && attrs.current != 'true' && attrs.current != 'false') {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attributes: current";
						temp.element = element;
						temp.attributes = attrs;

						console.warn("USWDS Directive Level 1 Error: <usa-nav-item></usa-nav-item>", temp);
					}
				}
				element.on('click', function (event) {
					event.stopPropagation();
				});
			}
		};
	}).directive("usaNavSublist", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {},
			require: "^usaNavItem",
			template: \`<ul class="usa-sidenav__sublist" ng-transclude></ul>\`,
		};
	}).directive("usaNavItemLink", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				current: '@?',
			},
			require: "^usaNavItem",
			template: \`<a class="{{getIsCurrent()}}" ng-transclude></a>\`,
			controller: function ($scope, $attrs, $element, $window) {
				$scope.debug = $window.uswdsDebug;

				$scope.getIsCurrent = function () {
					return $scope.current === 'true' ? 'usa-current' : '';
				};
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					if (attrs.current && attrs.current != 'true' && attrs.current != 'false') {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attributes: current";
						temp.element = element;
						temp.attributes = attrs;

						console.warn("USWDS Directive Level 1 Error: <usa-nav-item-link></usa-nav-item-link>", temp);
					}
				}
			}
		};
	}).directive('usaSiteAlert', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			scope: {
				variant: '@?',
				slim: '@?',
				noIcon: '@?',
				noHeading: '@?'
			},
			template: \`<section class="{{getAlertClass()}}" ng-transclude></section>\`,
			controller: function ($scope, $element, $window) {
				$scope.debug = $window.uswdsDebug;

				$scope.getAlertClass = function () {
					var classes = ['usa-site-alert'];

					if ($scope.slim == "true") {
						classes.push('usa-site-alert--slim');
					}

					if ($scope.noIcon == "true") {
						classes.push('usa-site-alert--no-icon');
					}

					if ($scope.noHeading == "true") {
						classes.push('usa-site-alert--no-heading');
					}

					switch ($scope.variant) {
						case "emergency":
							classes.push('usa-site-alert--emergency');
							break;
						case "info":
						default:
							classes.push('usa-site-alert--info');
							break;
					}

					return classes.join(' ');
				}
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					let invalidAttributes = [];
					const validVariants = ["emergency", "info"];
					if (attrs.variant && !validVariants.includes(attrs.variant)) invalidAttributes.push("variant");
					if (attrs.slim && (attrs.slim != "true" && attrs.slim != "false")) invalidAttributes.push("slim");
					if (attrs.noicon && (attrs.noicon != "true" && attrs.noicon != "false")) invalidAttributes.push("no-icon");
					if (attrs.noheading && (attrs.noheading != "true" && attrs.noheading != "false")) invalidAttributes.push("no-heading");

					if (invalidAttributes.length > 0) {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attributes: " + invalidAttributes.join(", ");
						temp.element = element;
						temp.attributes = attrs;

						console.warn("USWDS Directive Level 1 Error: <usa-site-alert></usa-site-alert>", temp);
					}
				}
			}
		};
	}).directive("usaSummaryBox", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`
            <div class="usa-summary-box" role="region">
                <div class="usa-summary-box__body" ng-transclude></div>
            </div>
        \`,
		};
	})
	.directive("usaSummaryBoxHeading", function () {
		return {
			restrict: "A",
			replace: true,
			link: function (scope, element, attrs) {
				element.addClass("usa-summary-box__heading");
			},
		};
	})
	.directive("usaSummaryBoxText", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: \`
                <div class="usa-summary-box__text" ng-transclude></div>
            \`,
		};
	})
	.directive("usaSummaryBoxLink", function () {
		return {
			restrict: "A",
			replace: true,
			link: function (scope, element, attrs) {
				element.addClass("usa-summary-box__link");
			},
		};
	}).directive("usaStepCounter", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				type: "@",
			},
			template: '<div class="{{getCSSClass()}}" aria-label="progress" ng-transclude></div>',
			controller: function ($scope, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;

				$scope.getCSSClass = function () {
					var baseClass = "usa-step-indicator usa-step-indicator--center";
					if ($scope.type) {
						switch ($scope.type) {
							case "counter":
								baseClass += " usa-step-indicator--counters";
								break;
							case "smallCounter":
								baseClass += " usa-step-indicator--counters-sm";
								break;
							case "noLabel":
								baseClass = "usa-step-indicator usa-step-indicator--no-labels";
								break;
						}
					}
					return baseClass;
				};
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					if (attrs.type && attrs.type != "counter" && attrs.type != "smallCounter" && attrs.type != "noLabel") {
						var temp = Object.create(null);
						temp.errorMessage = "Invalid attribute: type";
						temp.acceptedValues = ["counter", "smallCounter", "noLabel"];
						temp.element = element;
						temp.attributes = attrs;

						console.warn("USWDS Directive Level 1 Warning: <usa-step-counter></usa-step-counter>", temp);
					}
				}
			},
		};
	})
	.directive("usaStepIndicatorList", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			template: '<ol class="usa-step-indicator__segments" ng-transclude></ol>',
		};
	})
	.directive("usaStepIndicatorListItem", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				state: "@",
			},
			template:
				'<li class="{{getCSS()}}"><span class="usa-step-indicator__segment-label" ng-transclude></span><span class="usa-sr-only">{{state}}</span></li>',
			controller: function ($scope, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;

				$scope.getCSS = function () {
					var baseClass = "usa-step-indicator__segment";
					if ($scope.state) {
						switch ($scope.state) {
							case "current":
								baseClass += " usa-step-indicator__segment--current";
								break;
							case "complete":
								baseClass += " usa-step-indicator__segment--complete";
								break;
						}
					}
					return baseClass;
				};
			},
			link: function (scope, element, attrs, ctrl) {
				if (scope.debug && scope.debug == true) {
					// Error handling for invalid attributes
					if (attrs.state && attrs.state != "current" && attrs.state != "complete") {
						var temp = Object.create(null);
						temp.errorMessage = "Invalid attribute: state";
						temp.acceptedValues = ["current", "complete"];
						temp.element = element;
						temp.attributes = attrs;

						console.warn(
							"USWDS Directive Level 1 Warning: <usa-step-indicator-list-item></usa-step-indicator-list-item>",
							temp
						);
					}
				}
			},
		};
	})
	.directive("usaStepIndicatorHeader", function () {
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			scope: {
				current: "@",
				total: "@",
			},
			template:
				'<div class="usa-step-indicator__header"><h4 class="usa-step-indicator__heading"><span class="usa-step-indicator__heading-counter"><span class="usa-sr-only">Step</span> <span class="usa-step-indicator__current-step">{{current}}</span> <span class="usa-step-indicator__total-steps">of {{total}}</span> </span><span class="usa-step-indicator__heading-text" ng-transclude></span></h4></div>',
			link: function (scope, element, attrs) {
				// Error handling for missing attributes
				if (!(attrs.current && attrs.current != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: current";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-step-indicator-header></usa-step-indicator-header>", temp);
				}
				if (!(attrs.total && attrs.total != "")) {
					var temp = Object.create(null);
					temp.errorMessage = "Missing attribute: total";
					temp.element = element;
					temp.attributes = attrs;

					console.error("USWDS Directive Level 0 Error: <usa-step-indicator-header></usa-step-indicator-header>", temp);
				}
			},
		};
	}).directive("usaTable", function () {
		return {
			restrict: "A",
			scope: true,
			controllerAs: 'tableCtrl',
			bindToController: true,
			controller: function () {
				var ctrl = this;
				ctrl.currentSortedHeader = null;
				ctrl.currentSortDirection = 1;
				ctrl.currentSortColumn = null;

				ctrl.resetSort = function () {
					if (ctrl.currentSortedHeader) {
						ctrl.currentSortedHeader.find('i')
							.removeClass('fa-sort-up fa-sort-down')
							.addClass('fa-sort');
						ctrl.currentSortedHeader
							.removeClass('usa-table__header--sorted usa-table__header--sorted-reverse')
							.removeAttr('aria-sort');
						ctrl.currentSortColumn = null;
					}
				};

				ctrl.isColumnSorted = function (columnKey) {
					return ctrl.currentSortColumn === columnKey;
				};
			},
			link: function (scope, element, attrs) {
				function updateClass() {
					var baseClass = "usa-table";
					// Split the input string by commas or spaces
					var types = attrs.usaTable.split(/[\\s,]+/).filter(Boolean);

					//Remove classes so if dynamically being changed it doesnt incorrectly stack
					element.removeClass('usa-table--borderless');
					element.removeClass('usa-table--striped');
					element.removeClass('usa-table--stacked');
					element.removeClass('usa-table--stacked-header');
					element.removeClass('usa-table--sticky-header');
					element.removeClass('usa-table');

					types.forEach(function (type) {
						switch (type.trim()) {
							case "borderless":
								baseClass += " usa-table--borderless";
								break;
							case "striped":
								baseClass += " usa-table--striped";
								break;
							case "stacked":
								baseClass += " usa-table--stacked";
								break;
							case "stackedHeader":
								baseClass += " usa-table--stacked-header";
								break;
							case "stickyHeader":
								baseClass += " usa-table--sticky-header";
								break;
						}
					});
					element.addClass(baseClass);
				}

				updateClass();
				attrs.$observe("usaTable", updateClass);
			}
		};
	})
	.directive("usaTableSort", function () {
		return {
			restrict: "A",
			scope: {
				sortKey: "@usaTableSort",
				sortData: "=",
				dataType: "@?"
			},
			require: "?^usaTable",
			controller: function ($scope, $window) {
				// Debug
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs, tableCtrl) {
				// Error handling for missing attributes
				if (scope.debug && scope.debug == true) {
					scope.$watch(attrs, function () {
						try {
							if (!(attrs.sortKey && attrs.sortKey != "")) throw "sortKey";
							if (!(attrs.sortData && attrs.sortData != "")) throw "sortData";
						} catch (ex) {
							console.log("%element", element);
							console.log("Missing attribute: " + ex);
							console.log("%attributes", attrs);
						}
					});
				}

				if (!tableCtrl) return;

				// Add tabindex and role attributes
				element.attr('tabindex', '0');
				element.attr('role', 'button');
				element.addClass("usa-table__header--sortable");
				element.append('<i class="fa fa-sort usa-sort-icon"></i>');

				// Function to handle sort
				function handleSort() {
					scope.$apply(function () {
						if (tableCtrl.currentSortedHeader === element) {
							tableCtrl.currentSortDirection *= -1;
						} else {
							tableCtrl.resetSort();
							tableCtrl.currentSortedHeader = element;
							tableCtrl.currentSortDirection = 1;
							tableCtrl.currentSortColumn = scope.sortKey;
						}

						var icon = element.find("i");
						icon.removeClass("fa-sort fa-sort-up fa-sort-down");
						if (tableCtrl.currentSortDirection === 1) {
							icon.addClass("fa-sort-up");
							element.attr("aria-sort", "ascending");
						} else {
							icon.addClass("fa-sort-down");
							element.attr("aria-sort", "descending");
						}

						// Sort the data
						scope.sortData.sort(function (a, b) {
							var valueA = a[scope.sortKey];
							var valueB = b[scope.sortKey];

							// Handle dates when dataType is specified as 'date'
							if (scope.dataType === "date") {
								var dateA = new Date(valueA);
								var dateB = new Date(valueB);
								return (dateA - dateB) * tableCtrl.currentSortDirection;
							}

							// Handle numbers
							if (!isNaN(valueA) && !isNaN(valueB)) {
								return (valueA - valueB) * tableCtrl.currentSortDirection;
							}

							// Handle strings
							valueA = String(valueA).toLowerCase();
							valueB = String(valueB).toLowerCase();

							if (valueA < valueB) return -1 * tableCtrl.currentSortDirection;
							if (valueA > valueB) return 1 * tableCtrl.currentSortDirection;
							return 0;
						});

						// Update sort indicators
						element.toggleClass("usa-table__header--sorted", tableCtrl.currentSortDirection === 1);
						element.toggleClass("usa-table__header--sorted-reverse", tableCtrl.currentSortDirection === -1);
					});
				}

				// Handle click events
				element.on("click", handleSort);

				// Handle keyboard events
				element.on("keydown", function (e) {
					// Trigger on Enter or Space
					if (e.keyCode === 13 || e.keyCode === 32) {
						e.preventDefault(); // Prevent page scroll on space
						handleSort();
					}
				});
			},
		};
	})
	.directive("usaTableCell", function () {
		return {
			restrict: "A",
			require: "^usaTable",
			link: function (scope, element, attrs, tableCtrl) {
				var columnKey = attrs.usaTableCell;

				scope.$watch(
					function () {
						return tableCtrl.isColumnSorted(columnKey);
					},
					function (isSorted) {
						if (isSorted) {
							element.attr('data-sort-active', 'true');
						} else {
							element.removeAttr('data-sort-active');
						}
					}
				);
			}
		};
	}).directive("usaTextarea", function () {
		return {
			restrict: "E",
			replace: true,
			template: '<textarea class="usa-textarea"></textarea>',
		};
	}).directive("usaTextInput", function () {
		return {
			restrict: "E",
			replace: true,
			template: '<input class="usa-input"></input>',
		};
	}).directive('usaTag', function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			scope: {
				variant: '@?'
			},
			template: \`<span class="{{getCss()}}" ng-transclude></span>\`,
			controller: function ($scope, $element, $window) {
				$scope.debug = $window.uswdsDebug;

				$scope.getCss = function () {
					var classes = ['usa-tag'];

					if ($scope.variant === 'big') {
						classes.push('usa-tag--big');
					}
					return classes.join(' ');
				};
			},
			link: function (scope, element, attrs) {
				if (scope.debug && scope.debug == true) {
					if (attrs.variant && attrs.variant != "big") {
						const temp = Object.create(null);
						temp.errorMessage = "Unexpected attribute: variant";
						temp.element = element;
						temp.attributes = attrs;
						console.warn("USWDS Directive Level 1 Error: <usa-tag></usa-tag>", temp);
					}
				}
			}
		};
	}).factory("usaTrapFactory", function ($document, $timeout) {
		return {
			setup: function (element) {
				const focusableElements = Array.from(
					element.querySelectorAll(
						'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
					),
				)

				const firstTabStop = focusableElements[0]
				const lastTabStop = focusableElements[focusableElements.length - 1]

				/* Focus the first element initially
				if (firstTabStop) {
					$timeout(function () {
						firstTabStop.focus()
					}, 0);
				}*/

				function handleKeyDown(event) {
					if (event.key === "Tab") {
						if (event.shiftKey) {
							if (document.activeElement === firstTabStop) {
								event.preventDefault()
								lastTabStop.focus()
							}
						} else {
							if (document.activeElement === lastTabStop) {
								event.preventDefault()
								firstTabStop.focus()
							}
						}
					}
				}
				// Add event listener
				$document.on("keydown", handleKeyDown)

				// Return a cleanup function
				return function teardown() {
					$document.off("keydown", handleKeyDown)
				}
			},
		}
	}).directive('usaValidation', function ($timeout) {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<div class="usa-alert--validation" ng-transclude></div>',
			scope: {
				validations: '='
			},
			controller: function ($scope, $window) {
				$scope.debug = $window.uswdsDebug;

				$scope.validationListElement = null;
				$scope.validationElements = {};
				$scope.validationInputElement = null;
				$scope.screenReaderElement = null;

				this.setValidationListElement = function (element) {
					$scope.validationListElement = element;
				};

				this.addValidationItem = function (key, item) {
					$scope.validationElements[key] = item;
				};

				this.getValidationListElement = function () {
					return $scope.validationListElement;
				};

				this.getValidationItems = function () {
					return $scope.validationElements;
				};

				this.setValidationInputElement = function (element) {
					$scope.validationInputElement = element;
				};

				this.getValidationInputElement = function () {
					return $scope.validationInputElement;
				};

				this.setScreenReaderElement = function (element) {
					$scope.screenReaderElement = element;
				};

				this.getScreenReaderElement = function () {
					return $scope.screenReaderElement;
				};
			},
			link: function (scope, element, attrs, ctrl) {
				if (!scope.validations || scope.validations.length === 0) {
					const temp = Object.create(null);
					temp.errorMessage = "Missing attribute: validations";
					temp.element = element;
					temp.attributes = attrs;
					console.error("USWDS Directive Attribute Level 0 Error: <usa-validation>", temp);
					return;
				}

				var inputElement = ctrl.getValidationInputElement();

				if (!inputElement) {
					const temp = Object.create(null);
					temp.errorMessage = "Missing element: input or textarea with attribute usa-validation-input";
					temp.element = element;
					temp.attributes = attrs;
					console.error("USWDS Directive Attribute Level 0 Error: <usa-validation>", temp);
					return;
				}

				var ulElement = ctrl.getValidationListElement();
				if (!ulElement) {
					const temp = Object.create(null);
					temp.errorMessage = "Missing element: <usa-validation-list> not found."
					temp.element = element;
					temp.attributes = attrs;
					console.error("USWDS Directive Attribute Level 0 Error: <usa-validation>", temp);
					return;
				}

				var validationList = ctrl.getValidationItems();
				if (Object.keys(validationList).length != Object.keys(scope.validations).length && scope.debug) {
					const temp = Object.create(null);
					temp.errorMessage = "Mismatched counts of validations and <usa-validation-list-item>";
					temp.element = [element, ulElement];
					temp.attributes = attrs;
					console.warn("USWDS Directive Attribute Level 1 Error: <usa-validation> ", temp);
				}

				var updateTimeout;

				function validateInput(inputValue) {
					var ariaLabels = [];

					for (var v in scope.validations) {
						var liElement = validationList[v];

						if (liElement === undefined) {
							continue;
						}
						var isValid = new RegExp(scope.validations[v]).test(inputValue);

						if (isValid) {
							liElement.classList.add('usa-checklist__item--checked');
							liElement.setAttribute('aria-label', liElement.innerText.trim() + ' status complete');
						} else {
							liElement.classList.remove('usa-checklist__item--checked');
							liElement.setAttribute('aria-label', liElement.innerText.trim() + ' status incomplete');
						}
						ariaLabels.push(liElement.getAttribute('aria-label'));
					}

					if (updateTimeout) {
						clearTimeout(updateTimeout);
					}

					updateTimeout = setTimeout(function () {
						updateSpanText(ariaLabels.join('. ') + '.');
					}, 1000);
				}

				function updateSpanText(text) {
					ctrl.getScreenReaderElement().textContent = text;
				}

				inputElement.addEventListener('input', function () {
					validateInput(inputElement.value);
				});

				$timeout(function () {
					validateInput(inputElement.value);
				}, 0);

				$timeout(function () {
					ctrl.getScreenReaderElement().setAttribute('aria-busy', 'false');
				}, 2000);
			}
		};
	}).directive('usaValidationList', function () {
		return {
			restrict: 'E',
			require: '^usaValidation',
			replace: true,
			transclude: true,
			template: '<ul class="usa-checklist" ng-transclude></ul>',
			link: function (scope, element, attrs, usaValidationCtrl) {
				usaValidationCtrl.setValidationListElement(element[0]);
			}
		};
	}).directive('usaValidationListItem', function () {
		return {
			restrict: 'E',
			require: '^usaValidation',
			replace: true,
			transclude: true,
			scope: {
				validator: '@',
			},
			template: '<li class="usa-checklist__item" ng-transclude></li>',
			link: function (scope, element, attrs, usaValidationCtrl) {
				if (!attrs.validator || attrs.validator.trim() == '') {
					const temp = Object.create(null);
					temp.errorMessage = "Missing attribute: validator";
					temp.element = element;
					temp.attributes = attrs;
					console.error("USWDS Directive Level 0 Error: <usa-validation-list-item validator=[name]></usa-validation-list-item>", temp);
					return;
				}
				usaValidationCtrl.addValidationItem(scope.validator, element[0]);
			}
		};
	}).directive('usaValidationInput', function ($timeout) {
		return {
			restrict: 'A',
			require: '^usaValidation',
			link: function (scope, element, attrs, usaValidationCtrl) {

				if (!attrs.id || attrs.id.trim() == '') {
					const temp = Object.create(null);
					temp.errorMessage = "Missing input attribute: id";
					temp.element = element[0];
					temp.attributes = attrs;
					console.error("USWDS Directive Attribute Level 0 Error: usa-validation-inpput", temp);
					return;
				}

				element[0].insertAdjacentHTML('afterend',
					'<span class="usa-sr-only" aria-live="polite" aria-busy="true" aria-atomic="true" id="' + attrs.id + '-sr-summary"></span>');
				var spanElement = element[0].nextElementSibling;

				if (element[0].hasAttribute('aria-describedby')) {
					element[0].setAttribute('aria-describedby', element[0].getAttribute('aria-describedby') + ' ' + spanElement.id);
				} else {
					element[0].setAttribute('aria-describedby', spanElement.id);
				}

				usaValidationCtrl.setValidationInputElement(element[0]);
				usaValidationCtrl.setScreenReaderElement(spanElement);
			}
		};
	}).directive("usaTooltip", function ($window, usaInViewPort) {

		var TOOLTIP_TRIGGER_CLASS = "usa-tooltip__trigger";
		var TOOLTIP_CLASS = "usa-tooltip";
		var TOOLTIP_BODY_CLASS = "usa-tooltip__body";
		var SET_CLASS = "is-set";
		var VISIBLE_CLASS = "is-visible";
		var TRIANGLE_SIZE = 5;
		var ADJUST_WIDTH_CLASS = "usa-tooltip__body--wrap";

		/**
		 * Shows the tooltip
		 * @param {HTMLElement} tooltipTrigger - the element that initializes the tooltip
		 */
		var showToolTip = function (tooltipBody, tooltipTrigger, position) {
			tooltipBody.setAttribute("aria-hidden", "false");

			// This sets up the tooltip body. The opacity is 0, but
			// we can begin running the calculations below.
			tooltipBody.classList.add(SET_CLASS);

			var setPositionClass = function (setPos) {
				tooltipBody.classList.remove(TOOLTIP_BODY_CLASS + "--top");
				tooltipBody.classList.remove(TOOLTIP_BODY_CLASS + "--bottom");
				tooltipBody.classList.remove(TOOLTIP_BODY_CLASS + "--right");
				tooltipBody.classList.remove(TOOLTIP_BODY_CLASS + "--left");
				tooltipBody.classList.add(TOOLTIP_BODY_CLASS + "--" + setPos);
			};

			var resetPositionStyles = function (e) {
				e.style.top = null;
				e.style.bottom = null;
				e.style.right = null;
				e.style.left = null;
				e.style.margin = null;
			};

			var offsetMargin = function (target, propertyValue) {
				return parseInt(
					window.getComputedStyle(target).getPropertyValue(propertyValue),
					10
				);
			};

			var calculateMarginOffset = function (
				marginPosition,
				tooltipBodyOffset,
				trigger
			) {
				var offset =
					offsetMargin(trigger, "margin-" + marginPosition) > 0
						? tooltipBodyOffset -
						offsetMargin(trigger, "margin-" + marginPosition)
						: tooltipBodyOffset;

				return offset;
			};

			var positionTop = function (e) {
				resetPositionStyles(e);

				var topMargin = calculateMarginOffset(
					"top",
					e.offsetHeight,
					tooltipTrigger
				);

				var leftMargin = calculateMarginOffset(
					"left",
					e.offsetWidth,
					tooltipTrigger
				);

				setPositionClass("top");
				e.style.left = "50%";
				e.style.top = "-" + TRIANGLE_SIZE + "px";
				e.style.margin = "-" + topMargin + "px 0 0 -" + leftMargin / 2 + "px";
			};

			var positionBottom = function (e) {
				resetPositionStyles(e);

				var leftMargin = calculateMarginOffset(
					"left",
					e.offsetWidth,
					tooltipTrigger
				);

				setPositionClass("bottom");
				e.style.left = "50%";
				e.style.margin = TRIANGLE_SIZE + "px 0 0 -" + leftMargin / 2 + "px";
			};

			var positionRight = function (e) {
				resetPositionStyles(e);

				var topMargin = calculateMarginOffset(
					"top",
					e.offsetHeight,
					tooltipTrigger
				);

				setPositionClass("right");
				e.style.top = "50%";
				e.style.left =
					tooltipTrigger.offsetLeft + tooltipTrigger.offsetWidth + TRIANGLE_SIZE + "px";
				e.style.margin = "-" + topMargin / 2 + "px 0 0 0";
			};

			var positionLeft = function (e) {
				resetPositionStyles(e);

				var topMargin = calculateMarginOffset(
					"top",
					e.offsetHeight,
					tooltipTrigger
				);

				var leftMargin = calculateMarginOffset(
					"left",
					tooltipTrigger.offsetLeft > e.offsetWidth
						? tooltipTrigger.offsetLeft - e.offsetWidth
						: e.offsetWidth,
					tooltipTrigger
				);

				setPositionClass("left");
				e.style.top = "50%";
				e.style.left = "-" + TRIANGLE_SIZE + "px";
				e.style.margin =
					"-" +
					topMargin / 2 +
					"px 0 0 " +
					(tooltipTrigger.offsetLeft > e.offsetWidth ? leftMargin : -leftMargin) +
					"px";
			};

			var maxAttempts = 2;

			function findBestPosition(element, attempt) {
				attempt = attempt || 1;

				var positions = [positionTop, positionBottom, positionRight, positionLeft];
				var hasVisiblePosition = false;

				function tryPositions(i) {
					if (i < positions.length) {
						var pos = positions[i];
						pos(element);

						if (!usaInViewPort.setup(element)) {
							tryPositions((i += 1));
						} else {
							hasVisiblePosition = true;
						}
					}
				}

				tryPositions(0);

				if (!hasVisiblePosition) {
					element.classList.add(ADJUST_WIDTH_CLASS);
					if (attempt <= maxAttempts) {
						findBestPosition(element, (attempt += 1));
					}
				}
			}

			switch (position) {
				case "top":
					positionTop(tooltipBody);
					if (!usaInViewPort.setup(tooltipBody)) {
						findBestPosition(tooltipBody);
					}
					break;
				case "bottom":
					positionBottom(tooltipBody);
					if (!usaInViewPort.setup(tooltipBody)) {
						findBestPosition(tooltipBody);
					}
					break;
				case "right":
					positionRight(tooltipBody);
					if (!usaInViewPort.setup(tooltipBody)) {
						findBestPosition(tooltipBody);
					}
					break;
				case "left":
					positionLeft(tooltipBody);
					if (!usaInViewPort.setup(tooltipBody)) {
						findBestPosition(tooltipBody);
					}
					break;

				default:
					break;
			}

			setTimeout(function () {
				tooltipBody.classList.add(VISIBLE_CLASS);
			}, 20);
		};

		var hideToolTip = function (tooltipBody) {
			tooltipBody.classList.remove(VISIBLE_CLASS);
			tooltipBody.classList.remove(SET_CLASS);
			tooltipBody.classList.remove(ADJUST_WIDTH_CLASS);
			tooltipBody.setAttribute("aria-hidden", "true");
		};

		var setUpAttributes = function (tooltipTrigger) {
			var tooltipID = "tooltip-" + (Math.floor(Math.random() * 900000) + 100000);
			var tooltipContent = tooltipTrigger.getAttribute("title");
			var wrapper = document.createElement("span");
			var tooltipBody = document.createElement("span");
			var additionalClasses = tooltipTrigger.getAttribute("data-classes");
			var position = tooltipTrigger.getAttribute("data-position");

			if (!position) {
				position = "top";
				tooltipTrigger.setAttribute("data-position", position);
			}

			tooltipTrigger.setAttribute("aria-describedby", tooltipID);
			tooltipTrigger.setAttribute("tabindex", "0");
			tooltipTrigger.removeAttribute("title");
			tooltipTrigger.classList.remove(TOOLTIP_CLASS);
			tooltipTrigger.classList.add(TOOLTIP_TRIGGER_CLASS);

			tooltipTrigger.parentNode.insertBefore(wrapper, tooltipTrigger);

			wrapper.appendChild(tooltipTrigger);
			wrapper.classList.add(TOOLTIP_CLASS);
			wrapper.appendChild(tooltipBody);

			if (additionalClasses) {
				var classesArray = additionalClasses.split(" ");
				classesArray.forEach(function (classname) {
					wrapper.classList.add(classname);
				});
			}

			tooltipBody.classList.add(TOOLTIP_BODY_CLASS);
			tooltipBody.setAttribute("id", tooltipID);
			tooltipBody.setAttribute("role", "tooltip");
			tooltipBody.setAttribute("aria-hidden", "true");

			tooltipBody.textContent = tooltipContent;

			return { tooltipBody: tooltipBody, position: position, tooltipContent: tooltipContent, wrapper: wrapper };
		};

		return {
			restrict: "A",
			controller: function ($scope, $element, $attrs, $window) {
				$scope.debug = $window.uswdsDebug;
			},
			link: function (scope, element, attrs) {

				if (scope.debug && scope.debug == true) {
					let invalidAttributes = [];
					const validPositions = ["top", "bottom", "right", "left"];
					if (attrs.position && !validPositions.includes(attrs.position)) invalidAttributes.push("position");
					if (!attrs.title || attrs.title.trim() === "") invalidAttributes.push("title");
					if (invalidAttributes.length > 0) {
						const temp = Object.create(null);
						temp.errorMessage = "Invalid attribute: " + invalidAttributes.join(", ");
						temp.element = element;
						temp.attributes = attrs;
						console.warn("USWDS Directive Level 1 Error: usa-tooltip", temp);
					}
				}

				var tooltipTrigger = element[0];
				var tooltipElements = setUpAttributes(tooltipTrigger);
				var tooltipBody = tooltipElements.tooltipBody;

				function showTooltipHandler() {
					showToolTip(tooltipBody, tooltipTrigger, attrs.position);
				}

				function hideTooltipHandler() {
					hideToolTip(tooltipBody);
				}

				tooltipTrigger.addEventListener("mouseenter", showTooltipHandler);
				tooltipTrigger.addEventListener("mouseleave", hideTooltipHandler);

				tooltipTrigger.addEventListener("focus", showTooltipHandler);
				tooltipTrigger.addEventListener("blur", hideTooltipHandler);

				scope.$on("$destroy", function () {
					tooltipTrigger.removeEventListener("mouseenter", showTooltipHandler);
					tooltipTrigger.removeEventListener("mouseleave", hideTooltipHandler);
					tooltipTrigger.removeEventListener("focus", showTooltipHandler);
					tooltipTrigger.removeEventListener("blur", hideTooltipHandler);
				});
			}
		};
	})`,
        script_name: 'uswdsLibraryRSC',
        ui_type: '10',
        use_scoped_format: 'false',
    },
})

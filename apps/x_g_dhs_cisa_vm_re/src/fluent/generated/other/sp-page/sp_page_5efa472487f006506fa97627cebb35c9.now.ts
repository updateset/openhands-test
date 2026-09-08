import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'RSC Welcome',
    category: 'custom',
    pageId: 'rsc_welcome',
    css: `.static-background-image {\r
  background-image: url("x_g_dhs_cisa_vm_re.rsc_bg_image.jpg");\r
  height: 25rem;\r
  background-size: cover;\r
}\r
\r
.body{\r
	padding-top: 0px;\r
}`,
    containers: [
        {
            $id: '71c4c178877806506fa97627cebb358d',
            order: 1,
            name: 'RSC Welcome - Container 1',
            width: 'container-fluid',
            rows: [
                {
                    $id: '87c44178877806506fa97627cebb356d',
                    cssClass: 'static-background-image',
                    order: 1,
                    columns: [
                        {
                            $id: '43c44178877806506fa97627cebb3570',
                            cssClass: 'irf-pt-15',
                            order: 1,
                        },
                    ],
                },
            ],
        },
        {
            $id: 'd2f6be37474d2a108d277d88c26d434c',
            order: 2,
            name: 'RSC Welcome - Container 2',
            parentClass: 'pull-up-200',
            rows: [
                {
                    $id: 'a7f63e37474d2a108d277d88c26d43b1',
                    order: 1,
                    columns: [
                        {
                            $id: 'e3f63e37474d2a108d277d88c26d43b4',
                            order: 1,
                            instances: [
                                {
                                    $id: '1d073637474d2a108d277d88c26d4343',
                                    widget: '6de5baf3474d2a108d277d88c26d4302',
                                    order: 1,
                                    placeholderDimensions: {
                                        mobile: {
                                            height: '250px',
                                            width: '100%',
                                        },
                                        desktop: {
                                            height: '250px',
                                            width: '100%',
                                        },
                                        tablet: {
                                            height: '250px',
                                            width: '100%',
                                        },
                                    },
                                    placeholderConfigurationScript:
                                        'function evaluateConfig(options) { return {	"mobile": {		"height": "250px",		"width": "100%"	},	"desktop": {		"height": "250px",		"width": "100%"	},	"tablet": {		"height": "250px",		"width": "100%"	}}; }',
                                    placeholderTemplate: `<!-- 
	AngularJS template with configurable options.
	Use the \`options\` object to control dynamic behavior.
	Example: Display an element when max row count is 10:
	<div ng-if="options.maxRowCount === 10"></div>
	The \`skeleton-container\` class is used for loading placeholders.
-->
	<div class="skeleton-container">
	<!-- Header Skeleton -->
	<div class="skeleton-box skeleton-header"></div>
	<!-- Body Skeleton -->
	<div class="skeleton-box skeleton-line"></div>
	<div class="skeleton-box skeleton-line small"></div>
	<div class="skeleton-box skeleton-line medium"></div>
</div>`,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'RSC CYHY Vuln Scan',
    category: 'custom',
    pageId: 'rsc_cyhy_enrollment',
    css: `.static-background-image {
  background-image: url("x_g_dhs_cisa_vm_re.rsc_bg_image.jpg");
  height: 25rem;
  background-size: cover;
}

.body{
	padding-top: 0px;
}`,
    roles: ['snc_external'],
    containers: [
        {
            $id: 'd790f746477166108d277d88c26d43f0',
            order: 1,
            name: 'RSC CYHY Vuln Scan - Container 1',
            width: 'container-fluid',
            rows: [
                {
                    $id: '0ba07b46477166108d277d88c26d4311',
                    cssClass: 'static-background-image',
                    order: 1,
                    columns: [
                        {
                            $id: 'cfa07b46477166108d277d88c26d4313',
                            order: 1,
                        },
                    ],
                },
            ],
        },
        {
            $id: 'd040fbc2477166108d277d88c26d4316',
            order: 2,
            name: 'RSC CYHY Vuln Scan - Container 2',
            parentClass: 'pull-up-160 mb-8',
            rows: [
                {
                    $id: '4d40b702477166108d277d88c26d43b8',
                    order: 1,
                    columns: [
                        {
                            $id: '8d40b702477166108d277d88c26d43bb',
                            order: 1,
                            instances: [
                                {
                                    $id: 'a2407342477166108d277d88c26d439b',
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
                                {
                                    $id: '13631fa98736a210ee0cb848cebb351d',
                                    widget: 'eedfab06477166108d277d88c26d433b',
                                    order: 2,
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

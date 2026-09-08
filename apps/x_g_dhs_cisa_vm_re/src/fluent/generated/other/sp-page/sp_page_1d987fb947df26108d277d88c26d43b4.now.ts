import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'CYHY Enrollment Landing',
    category: 'custom',
    pageId: 'rsc_cyhy_enrollment_landing',
    css: `.static-background-image {
  background-image: url("x_g_dhs_cisa_vm_re.rsc_bg_image.jpg");
  height: 25rem;
  background-size: cover;
}

.body{
	padding-top: 0px;
}`,
    containers: [
        {
            $id: 'ad49bff947df26108d277d88c26d4344',
            order: 1,
            name: 'CYHY Enrollment Landing - Container 1',
            width: 'container-fluid',
            rows: [
                {
                    $id: '7d49333d47df26108d277d88c26d4328',
                    cssClass: 'static-background-image',
                    order: 1,
                    columns: [
                        {
                            $id: '3549333d47df26108d277d88c26d432b',
                            order: 1,
                        },
                    ],
                },
            ],
        },
        {
            $id: 'b3e837f947df26108d277d88c26d43d0',
            order: 2,
            name: 'CYHY Enrollment Landing - Container 2',
            parentClass: 'pull-up-160 mb-8',
            rows: [
                {
                    $id: '1df8f7f947df26108d277d88c26d43a8',
                    order: 1,
                    columns: [
                        {
                            $id: '59f8f7f947df26108d277d88c26d43ab',
                            order: 1,
                            instances: [
                                {
                                    $id: 'f2f83bf947df26108d277d88c26d4364',
                                    widget: 'a7c8f3f947df26108d277d88c26d431c',
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

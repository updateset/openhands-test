import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'RSC Request Account',
    category: 'custom',
    pageId: 'rsc_request_account',
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
            $id: 'bdb83a9f47b8e6108d277d88c26d4353',
            order: 1,
            name: 'RSC Request Account - Container 1',
            width: 'container-fluid',
            rows: [
                {
                    $id: '7bb87a9f47b8e6108d277d88c26d437c',
                    cssClass: 'static-background-image',
                    order: 1,
                    columns: [
                        {
                            $id: '3bb87a9f47b8e6108d277d88c26d437f',
                            cssClass: 'irf-pt-15',
                            order: 1,
                        },
                    ],
                },
            ],
        },
        {
            $id: 'ee697adf47b8e6108d277d88c26d4309',
            order: 2,
            name: 'RSC Request Account - Container 2',
            parentClass: 'pull-up-160 mb-8',
            rows: [
                {
                    $id: 'bcf97adf47b8e6108d277d88c26d430e',
                    order: 1,
                    columns: [
                        {
                            $id: '0df93a1347f8e6108d277d88c26d4314',
                            order: 1,
                            instances: [
                                {
                                    $id: 'ad1c32d347f8e6108d277d88c26d4328',
                                    widget: 'b41a321347f8e6108d277d88c26d4339',
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

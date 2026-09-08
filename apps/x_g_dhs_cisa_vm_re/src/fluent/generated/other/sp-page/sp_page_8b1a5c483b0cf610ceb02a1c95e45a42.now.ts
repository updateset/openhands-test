import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'RSC Intake',
    category: 'custom',
    pageId: 'rsc_intake_wrapper',
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
            $id: '4a8551743b8cba10ceb02a1c95e45a53',
            order: 1,
            name: 'RSC Intake - Container 1',
            rows: [
                {
                    $id: 'cb85d5343b8cba10ceb02a1c95e45a71',
                    order: 1,
                    columns: [
                        {
                            $id: '0f8519743b8cba10ceb02a1c95e45a11',
                            order: 1,
                        },
                    ],
                },
            ],
        },
        {
            $id: '8b1a500c3b0cf610ceb02a1c95e45add',
            order: 2,
            name: 'RSC Intake - Container 2',
            width: 'container-fluid',
            rows: [
                {
                    $id: '871a500c3b0cf610ceb02a1c95e45ae1',
                    cssClass: 'static-background-image',
                    order: 1,
                    columns: [
                        {
                            $id: '8b1a500c3b0cf610ceb02a1c95e45ae4',
                            order: 1,
                            instances: [
                                {
                                    $id: 'a675d5343b8cba10ceb02a1c95e45a6c',
                                    widget: '386019fc3b4cba10ceb02a1c95e45a51',
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
        {
            $id: '08eadc0c3b0cf610ceb02a1c95e45a20',
            order: 3,
            name: 'RSC Intake - Container 3',
            rows: [
                {
                    $id: '42f4d5343b8cba10ceb02a1c95e45a90',
                    order: 1,
                    columns: [
                        {
                            $id: '0af4d5343b8cba10ceb02a1c95e45a92',
                            order: 1,
                        },
                    ],
                },
            ],
        },
    ],
})

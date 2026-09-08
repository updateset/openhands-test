import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'RSC Questionnaires',
    category: 'custom',
    pageId: 'rsc_my_questionnaires',
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
            $id: '074411878715e650ee0cb848cebb35cc',
            order: 1,
            name: 'RSC Questionnaires - Container 1',
            width: 'container-fluid',
            rows: [
                {
                    $id: '08649d478715e650ee0cb848cebb35fc',
                    cssClass: 'static-background-image',
                    order: 1,
                    columns: [
                        {
                            $id: 'c0649d478715e650ee0cb848cebb35ff',
                            order: 1,
                        },
                    ],
                },
            ],
        },
        {
            $id: '12a415878715e650ee0cb848cebb3557',
            order: 2,
            name: 'RSC Questionnaires - Container 2',
            parentClass: 'pull-up-200',
            rows: [
                {
                    $id: '6cb4dd478715e650ee0cb848cebb35c8',
                    order: 1,
                    columns: [
                        {
                            $id: 'e0b4dd478715e650ee0cb848cebb35cb',
                            order: 1,
                            instances: [
                                {
                                    $id: 'aa67594b8715e650ee0cb848cebb357c',
                                    widget: 'd40715c78715e650ee0cb848cebb357a',
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

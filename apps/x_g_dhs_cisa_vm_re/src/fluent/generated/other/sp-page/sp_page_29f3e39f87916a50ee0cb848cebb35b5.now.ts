import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'RSC Questionnaire Summary',
    category: 'custom',
    pageId: 'rsc_questionnaire_summary',
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
            $id: '6f06671387916a50ee0cb848cebb35f6',
            order: 1,
            name: 'RSC Questionnaire Summary - Container 1',
            width: 'container-fluid',
            rows: [
                {
                    $id: '6916eb1387d16a50ee0cb848cebb3579',
                    cssClass: 'static-background-image',
                    order: 1,
                    columns: [
                        {
                            $id: '6516eb1387d16a50ee0cb848cebb357c',
                            order: 1,
                        },
                    ],
                },
            ],
        },
        {
            $id: 'da16eb1387d16a50ee0cb848cebb3520',
            order: 2,
            name: 'RSC Questionnaire Summary - Container 2',
            parentClass: 'pull-up-200',
            rows: [
                {
                    $id: '0e56af1387d16a50ee0cb848cebb3529',
                    order: 1,
                    columns: [
                        {
                            $id: '8256af1387d16a50ee0cb848cebb352c',
                            order: 1,
                            instances: [
                                {
                                    $id: '1ce37bdf87d16a50ee0cb848cebb3538',
                                    widget: '62e6675387d16a50ee0cb848cebb3524',
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

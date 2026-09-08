import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'RSC Index',
    category: 'custom',
    pageId: 'rsc_index',
    draft: true,
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
            $id: '4e0a506c87d5ea10ee0cb848cebb3524',
            order: 1,
            name: 'RSC Index - Container 1',
            width: 'container-fluid',
            rows: [
                {
                    $id: 'bb0a506c87d5ea10ee0cb848cebb3533',
                    cssClass: 'static-background-image',
                    order: 1,
                    columns: [
                        {
                            $id: '7b0a506c87d5ea10ee0cb848cebb3536',
                            order: 1,
                            instances: [
                                {
                                    $id: 'f35d90208719ea10ee0cb848cebb350c',
                                    widget: '8679ef89cb21120000f8d856634c9c4f',
                                    widgetParameters: `{
	"html": {
		"value": "<div style=\\"padding: 2rem 2rem 2rem 6rem;\\">\\r\\n<h1 style=\\"color: #ffffff; font-size: 3.4rem;\\">Ready Set Cyber</h1>\\r\\n<p style=\\"color: #ffffff;\\">In the fast-paced world of cybersecurity, staying ahead of threats is essential. Visit Ready Set Cyber to understand your cyber risk and build your customized roadmap of all CISA's available resources to achieve your cybersecurity goals.</p>\\r\\n</div>",
		"displayValue": "<div style=\\"padding: 2rem 2rem 2rem 6rem;\\">\\n<h1 style=\\"color: #ffffff; font-size: 3.4rem;\\">Ready Set Cyber</h1>\\n<p style=\\"color: #ffffff;\\">In the fast-paced world of cybersecurity, staying ahead of threats is essential. Visit Ready Set Cyber to understand your cyber risk and build your customized roadmap of all CISA's available resources to achieve your cybersecurity goals.</p>\\n</div>"
	}
}`,
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
            $id: '690a906c87d5ea10ee0cb848cebb3505',
            order: 2,
            name: 'RSC Index - Container 2',
            parentClass: 'pull-up-60',
            rows: [
                {
                    $id: '9c1a906c87d5ea10ee0cb848cebb350c',
                    order: 1,
                    columns: [
                        {
                            $id: '581a586c87d5ea10ee0cb848cebb3533',
                            order: 1,
                            instances: [
                                {
                                    $id: '35cd50608719ea10ee0cb848cebb353b',
                                    widget: '007858e887d5ea10ee0cb848cebb35e5',
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

import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'RSC Login',
    category: 'custom',
    pageId: 'rsc_login_page',
    draft: true,
    containers: [
        {
            $id: '645a19f98731a210ee0cb848cebb35bc',
            order: 1,
            name: 'RSC Login - Container 1',
            rows: [
                {
                    $id: '525a913d8731a210ee0cb848cebb35b8',
                    order: 1,
                    columns: [
                        {
                            $id: '125a913d8731a210ee0cb848cebb35bb',
                            order: 1,
                            instances: [
                                {
                                    $id: 'cb5a553d8731a210ee0cb848cebb3500',
                                    widget: '91e795798731a210ee0cb848cebb3591',
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

import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'RSC Intake',
    category: 'custom',
    pageId: 'rsc_intake',
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
            $id: '36bf288687f08a50147ec9550cbb35e4',
            order: 1,
            name: 'RSC Intake - Container 1',
            width: 'container-fluid',
            parentClass: 'noPrint',
            rows: [
                {
                    $id: '4db5014c870ca250ee0cb848cebb35c0',
                    cssClass: 'static-background-image',
                    order: 1,
                    columns: [
                        {
                            $id: '81b5014c870ca250ee0cb848cebb35c4',
                            order: 1,
                        },
                    ],
                },
            ],
        },
        {
            $id: 'a99bacdb8773b5106fa97627cebb3572',
            order: 2,
            name: 'RSC Intake - Container 2',
            width: 'container-fluid',
            parentClass: 'pull-up-230',
            rows: [
                {
                    $id: '539b241f8773b5106fa97627cebb355b',
                    order: 1,
                    columns: [
                        {
                            $id: '1f9b241f8773b5106fa97627cebb355d',
                            size: 3,
                            sizeXs: 12,
                            cssClass: 'noPrint',
                            order: 1,
                            instances: [
                                {
                                    $id: '93abe01f8773b5106fa97627cebb35a6',
                                    widget: '3944a8178773b5106fa97627cebb3575',
                                    widgetParameters: `{
	"section": {
		"value": "[     {         \\"name\\": \\"Fundamental Cybersecurity Practices\\",         \\"template\\": \\"rsc_question_introduction\\",         \\"org_size\\": \\"large\\",         \\"selected\\": false,         \\"childSelected\\": true,         \\"children\\": [             {                 \\"name\\": \\"Identity Access Management (IAM)\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_iam\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 7             },             {                 \\"name\\": \\"Device Configuration & Security\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_device_configuration_security\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 6             },             {                 \\"name\\": \\"Data Security\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_data_security\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 7             },             {                 \\"name\\": \\"Governance & Training\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_governance_training\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 3             },             {                 \\"name\\": \\"Vulnerability Management\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_vulnerability_management\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 5             },             {                 \\"name\\": \\"Supply Chain Risk Management\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_supply_chain_risk_management\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 3             },             {                 \\"name\\": \\"Incident Response\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_incident_response\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 4             }         ]     },     {         \\"name\\": \\"Regional Information\\",         \\"template\\": \\"rsc_general_org_info\\",         \\"org_size\\": \\"large\\",         \\"selected\\": false,         \\"childSelected\\": true,         \\"completedPoints\\": 0,         \\"totalPoints\\": 1,         \\"children\\": []     },     {         \\"name\\": \\"Summary and Resources\\",         \\"template\\": \\"rsc_intake_summary\\",         \\"org_size\\": \\"large\\",         \\"selected\\": false,         \\"childSelected\\": false,         \\"children\\": []     },     {         \\"name\\": \\"Fundamental Cybersecurity Practices\\",         \\"template\\": \\"rsc_question_introduction\\",         \\"org_size\\": \\"medium\\",         \\"selected\\": false,         \\"childSelected\\": true,         \\"children\\": [             {                 \\"name\\": \\"Identity Access Management (IAM)\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_iam\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 8             },             {                 \\"name\\": \\"Device Configuration & Security\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_device_configuration_security\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 7             },             {                 \\"name\\": \\"Data Security\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_data_security\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 8             },             {                 \\"name\\": \\"Governance & Training\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_governance_training\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 4             },             {                 \\"name\\": \\"Vulnerability Management\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_vulnerability_management\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 6             },             {                 \\"name\\": \\"Supply Chain Risk Management\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_supply_chain_risk_management\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 4             },             {                 \\"name\\": \\"Incident Response\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_incident_response\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 5             }         ]     },     {         \\"name\\": \\"Regional Information\\",         \\"template\\": \\"rsc_general_org_info\\",         \\"org_size\\": \\"medium\\",         \\"selected\\": false,         \\"completedPoints\\": 0,         \\"totalPoints\\": 1,         \\"childSelected\\": true,         \\"children\\": []     },     {         \\"name\\": \\"Summary and Resources\\",         \\"template\\": \\"rsc_intake_summary\\",         \\"org_size\\": \\"medium\\",         \\"selected\\": false,         \\"childSelected\\": false,         \\"children\\": []     },     {         \\"name\\": \\"Security Best Practices\\",         \\"template\\": \\"rsc_security_best_practices\\",         \\"org_size\\": \\"small\\",         \\"selected\\": false,         \\"completedPoints\\": 0,         \\"totalPoints\\": 12,         \\"childSelected\\": true,         \\"children\\": []     },     {         \\"name\\": \\"Regional Information\\",         \\"template\\": \\"rsc_general_org_info\\",         \\"org_size\\": \\"small\\",         \\"selected\\": false,         \\"completedPoints\\": 0,         \\"totalPoints\\": 1,         \\"childSelected\\": true,         \\"children\\": []     },     {         \\"name\\": \\"Summary and Resources\\",         \\"template\\": \\"rsc_intake_summary\\",         \\"org_size\\": \\"small\\",         \\"selected\\": false,         \\"childSelected\\": false,         \\"children\\":[]     } ]",
		"displayValue": "[     {         \\"name\\": \\"Fundamental Cybersecurity Practices\\",         \\"template\\": \\"rsc_question_introduction\\",         \\"org_size\\": \\"large\\",         \\"selected\\": false,         \\"childSelected\\": true,         \\"children\\": [             {                 \\"name\\": \\"Identity Access Management (IAM)\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_iam\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 7             },             {                 \\"name\\": \\"Device Configuration & Security\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_device_configuration_security\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 6             },             {                 \\"name\\": \\"Data Security\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_data_security\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 7             },             {                 \\"name\\": \\"Governance & Training\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_governance_training\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 3             },             {                 \\"name\\": \\"Vulnerability Management\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_vulnerability_management\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 5             },             {                 \\"name\\": \\"Supply Chain Risk Management\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_supply_chain_risk_management\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 3             },             {                 \\"name\\": \\"Incident Response\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_incident_response\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 4             }         ]     },     {         \\"name\\": \\"Regional Information\\",         \\"template\\": \\"rsc_general_org_info\\",         \\"org_size\\": \\"large\\",         \\"selected\\": false,         \\"childSelected\\": true,         \\"completedPoints\\": 0,         \\"totalPoints\\": 1,         \\"children\\": []     },     {         \\"name\\": \\"Summary and Resources\\",         \\"template\\": \\"rsc_intake_summary\\",         \\"org_size\\": \\"large\\",         \\"selected\\": false,         \\"childSelected\\": false,         \\"children\\": []     },     {         \\"name\\": \\"Fundamental Cybersecurity Practices\\",         \\"template\\": \\"rsc_question_introduction\\",         \\"org_size\\": \\"medium\\",         \\"selected\\": false,         \\"childSelected\\": true,         \\"children\\": [             {                 \\"name\\": \\"Identity Access Management (IAM)\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_iam\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 8             },             {                 \\"name\\": \\"Device Configuration & Security\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_device_configuration_security\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 7             },             {                 \\"name\\": \\"Data Security\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_data_security\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 8             },             {                 \\"name\\": \\"Governance & Training\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_governance_training\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 4             },             {                 \\"name\\": \\"Vulnerability Management\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_vulnerability_management\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 6             },             {                 \\"name\\": \\"Supply Chain Risk Management\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_supply_chain_risk_management\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 4             },             {                 \\"name\\": \\"Incident Response\\",                 \\"selected\\": false,                 \\"template\\": \\"rsc_incident_response\\",                 \\"completedPoints\\": 0,                 \\"totalPoints\\": 5             }         ]     },     {         \\"name\\": \\"Regional Information\\",         \\"template\\": \\"rsc_general_org_info\\",         \\"org_size\\": \\"medium\\",         \\"selected\\": false,         \\"completedPoints\\": 0,         \\"totalPoints\\": 1,         \\"childSelected\\": true,         \\"children\\": []     },     {         \\"name\\": \\"Summary and Resources\\",         \\"template\\": \\"rsc_intake_summary\\",         \\"org_size\\": \\"medium\\",         \\"selected\\": false,         \\"childSelected\\": false,         \\"children\\": []     },     {         \\"name\\": \\"Security Best Practices\\",         \\"template\\": \\"rsc_security_best_practices\\",         \\"org_size\\": \\"small\\",         \\"selected\\": false,         \\"completedPoints\\": 0,         \\"totalPoints\\": 12,         \\"childSelected\\": true,         \\"children\\": []     },     {         \\"name\\": \\"Regional Information\\",         \\"template\\": \\"rsc_general_org_info\\",         \\"org_size\\": \\"small\\",         \\"selected\\": false,         \\"completedPoints\\": 0,         \\"totalPoints\\": 1,         \\"childSelected\\": true,         \\"children\\": []     },     {         \\"name\\": \\"Summary and Resources\\",         \\"template\\": \\"rsc_intake_summary\\",         \\"org_size\\": \\"small\\",         \\"selected\\": false,         \\"childSelected\\": false,         \\"children\\":[]     } ]"
	}
}`,
                                    glyph: 'empty',
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
                        {
                            $id: '579b241f8773b5106fa97627cebb3560',
                            size: 9,
                            sizeXs: 12,
                            order: 2,
                            instances: [
                                {
                                    $id: 'c0bb241f8773b5106fa97627cebb357d',
                                    widget: 'f264ac178773b5106fa97627cebb3510',
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

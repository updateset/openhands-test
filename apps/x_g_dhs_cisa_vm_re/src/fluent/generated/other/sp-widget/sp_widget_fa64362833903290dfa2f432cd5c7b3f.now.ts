import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['fa64362833903290dfa2f432cd5c7b3f'],
    name: 'RSC Intake With Status Modal V2',
    clientScript: Now.include('./sp_widget_rsc_intake_with_status_modal_v2/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_intake_with_status_modal_v2/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_intake_with_status_modal_v2/template.html'),
    customCss: Now.include('./sp_widget_rsc_intake_with_status_modal_v2/style.scss'),
    hasPreview: true,
    id: 'rsc_intake_with_status_modal_v2',
    linkScript: Now.include('./sp_widget_rsc_intake_with_status_modal_v2/link-script.js'),
    optionSchema: [
        {
            name: 'intake_section',
            section: 'Data',
            defaultValue: 'irf_intake_contact_information',
            label: 'Default Intake Section',
            type: 'string',
        },
    ],
    public: true,
})

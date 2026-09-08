import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['3944a8178773b5106fa97627cebb3575'],
    name: 'RSC Status Modal',
    clientScript: Now.include('./sp_widget_rsc_status_modal/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_status_modal/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_status_modal/template.html'),
    customCss: Now.include('./sp_widget_rsc_status_modal/style.scss'),
    id: 'rsc_status_modal',
    linkScript: Now.include('./sp_widget_rsc_status_modal/link-script.js'),
    optionSchema: [
        {
            name: 'section',
            section: 'Data',
            label: 'Section',
            type: 'string',
        },
    ],
    public: true,
    angularProviders: [
        'aa58900687b08a50147ec9550cbb3590',
        '7294a0988709ce506fa97627cebb3583',
        'b6fd93ba87b44e50147ec9550cbb3581',
    ],
})

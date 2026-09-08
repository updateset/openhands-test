import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['386019fc3b4cba10ceb02a1c95e45a51'],
    name: 'RSC Intake Wrapper',
    clientScript: Now.include('./sp_widget_rsc_intake_wrapper/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_intake_wrapper/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_intake_wrapper/template.html'),
    id: 'rsc_intake_wrapper',
    linkScript: Now.include('./sp_widget_rsc_intake_wrapper/link-script.js'),
})

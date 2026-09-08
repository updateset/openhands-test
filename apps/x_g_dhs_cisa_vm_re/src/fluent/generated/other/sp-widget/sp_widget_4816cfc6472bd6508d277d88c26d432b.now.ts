import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['4816cfc6472bd6508d277d88c26d432b'],
    name: 'RSC Alert',
    clientScript: Now.include('./sp_widget_rsc_alert/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_alert/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_alert/template.html'),
    customCss: Now.include('./sp_widget_rsc_alert/style.scss'),
    id: 'rsc_alert',
    linkScript: Now.include('./sp_widget_rsc_alert/link-script.js'),
    public: true,
})

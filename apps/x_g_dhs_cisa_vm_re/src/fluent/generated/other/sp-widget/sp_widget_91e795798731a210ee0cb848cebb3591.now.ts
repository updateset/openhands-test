import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['91e795798731a210ee0cb848cebb3591'],
    name: 'RSC - Login',
    clientScript: Now.include('./sp_widget_rsc_login/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_login/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_login/template.html'),
    id: 'rsc_login',
    linkScript: Now.include('./sp_widget_rsc_login/link-script.js'),
})

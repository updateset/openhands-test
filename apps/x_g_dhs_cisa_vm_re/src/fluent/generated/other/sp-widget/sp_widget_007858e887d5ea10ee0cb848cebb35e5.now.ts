import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['007858e887d5ea10ee0cb848cebb35e5'],
    name: 'RSC - Index',
    clientScript: Now.include('./sp_widget_rsc_index/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_index/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_index/template.html'),
    customCss: Now.include('./sp_widget_rsc_index/style.scss'),
    id: 'rsc_index',
    linkScript: Now.include('./sp_widget_rsc_index/link-script.js'),
})

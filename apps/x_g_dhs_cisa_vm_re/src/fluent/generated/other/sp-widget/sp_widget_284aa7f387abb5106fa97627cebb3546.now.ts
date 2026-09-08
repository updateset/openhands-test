import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['284aa7f387abb5106fa97627cebb3546'],
    name: 'RSC Related KB',
    clientScript: Now.include('./sp_widget_rsc_related_kb/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_related_kb/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_related_kb/template.html'),
    customCss: Now.include('./sp_widget_rsc_related_kb/style.scss'),
    id: 'rsc_related_kb',
    linkScript: Now.include('./sp_widget_rsc_related_kb/link-script.js'),
    public: true,
})

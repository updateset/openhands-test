import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['ca102eb5870d0210147ec9550cbb3549'],
    name: 'RSC View Past Submissions',
    clientScript: Now.include('./sp_widget_rsc_view_past_submissions/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_view_past_submissions/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_view_past_submissions/template.html'),
    customCss: Now.include('./sp_widget_rsc_view_past_submissions/style.scss'),
    id: 'rsc_view_past_submissions',
    linkScript: Now.include('./sp_widget_rsc_view_past_submissions/link-script.js'),
    public: true,
})

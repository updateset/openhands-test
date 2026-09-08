import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['6187627a87f04e50147ec9550cbb35de'],
    name: 'RSC Dynamic Heading',
    clientScript: Now.include('./sp_widget_rsc_dynamic_heading/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_dynamic_heading/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_dynamic_heading/template.html'),
    customCss: Now.include('./sp_widget_rsc_dynamic_heading/style.scss'),
    id: 'rsc_dynamic_heading',
    linkScript: Now.include('./sp_widget_rsc_dynamic_heading/link-script.js'),
    public: true,
})

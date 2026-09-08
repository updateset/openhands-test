import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['cc08a470873806506fa97627cebb35f5'],
    name: 'RSC Link Footer',
    clientScript: Now.include('./sp_widget_rsc_link_footer/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_link_footer/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_link_footer/template.html'),
    customCss: Now.include('./sp_widget_rsc_link_footer/style.scss'),
    id: 'rsc_link_footer',
    linkScript: Now.include('./sp_widget_rsc_link_footer/link-script.js'),
    public: true,
})

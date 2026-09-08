import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['f404a8bc87f406506fa97627cebb35b3'],
    name: 'RSC USA Banner',
    clientScript: Now.include('./sp_widget_rsc_usa_banner/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_usa_banner/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_usa_banner/template.html'),
    customCss: Now.include('./sp_widget_rsc_usa_banner/style.scss'),
    id: 'rsc_usa_banner',
    linkScript: Now.include('./sp_widget_rsc_usa_banner/link-script.js'),
    public: true,
})

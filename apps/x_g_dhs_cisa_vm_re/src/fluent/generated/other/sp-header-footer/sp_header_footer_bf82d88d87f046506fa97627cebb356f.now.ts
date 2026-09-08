import { SPHeaderFooter } from '@servicenow/sdk/core'

SPHeaderFooter({
    $id: Now.ID['bf82d88d87f046506fa97627cebb356f'],
    name: 'RSC Footer',
    clientScript: Now.include('./sp_header_footer_rsc_footer/client_script.js'),
    serverScript: Now.include('./sp_header_footer_rsc_footer/server_script.js'),
    htmlTemplate: Now.include('./sp_header_footer_rsc_footer/template.html'),
    id: 'rsc_footer',
    linkScript: Now.include('./sp_header_footer_rsc_footer/link-script.js'),
    public: true,
})

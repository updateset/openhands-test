import { SPHeaderFooter } from '@servicenow/sdk/core'

SPHeaderFooter({
    $id: Now.ID['0f6989c987b446506fa97627cebb35ad'],
    name: 'RSC Header',
    clientScript: Now.include('./sp_header_footer_rsc_header/client_script.js'),
    serverScript: Now.include('./sp_header_footer_rsc_header/server_script.js'),
    htmlTemplate: Now.include('./sp_header_footer_rsc_header/template.html'),
    id: 'rsc_header',
    linkScript: Now.include('./sp_header_footer_rsc_header/link-script.js'),
    public: true,
    angularProviders: ['26da2ac147d5ae108d277d88c26d43c9'],
})

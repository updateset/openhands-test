import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['94131455870d82106fa97627cebb3567'],
    name: 'RSC Region Info Modal',
    clientScript: Now.include('./sp_widget_rsc_region_info_modal/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_region_info_modal/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_region_info_modal/template.html'),
    customCss: Now.include('./sp_widget_rsc_region_info_modal/style.scss'),
    id: 'rsc_region_info_modal',
    linkScript: Now.include('./sp_widget_rsc_region_info_modal/link-script.js'),
    public: true,
    angularProviders: ['bc1158218749c2106fa97627cebb35f0'],
})

import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['68c35705874982106fa97627cebb3569'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: false,
        view: default_view,
    },
})
Record({
    $id: Now.ID['20c35705874982106fa97627cebb356b'],
    table: 'sys_ui_element',
    data: {
        element: 'u_name',
        position: 0,
        sys_ui_section: '68c35705874982106fa97627cebb3569',
    },
})
Record({
    $id: Now.ID['28c35705874982106fa97627cebb356b'],
    table: 'sys_ui_element',
    data: {
        element: 'template_import_log.message',
        position: 1,
        sys_ui_section: '68c35705874982106fa97627cebb3569',
    },
})

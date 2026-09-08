import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d79652a3877cce50147ec9550cbb353d'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: false,
        view: default_view,
    },
})
Record({
    $id: Now.ID['df9652a3877cce50147ec9550cbb353e'],
    table: 'sys_ui_element',
    data: {
        element: 'u_parent',
        position: 0,
        sys_ui_section: 'd79652a3877cce50147ec9550cbb353d',
    },
})
Record({
    $id: Now.ID['1b9652a3877cce50147ec9550cbb353f'],
    table: 'sys_ui_element',
    data: {
        element: 'u_sector',
        position: 1,
        sys_ui_section: 'd79652a3877cce50147ec9550cbb353d',
    },
})
Record({
    $id: Now.ID['1f9652a3877cce50147ec9550cbb353f'],
    table: 'sys_ui_element',
    data: {
        element: 'template_import_log.message',
        position: 2,
        sys_ui_section: 'd79652a3877cce50147ec9550cbb353d',
    },
})

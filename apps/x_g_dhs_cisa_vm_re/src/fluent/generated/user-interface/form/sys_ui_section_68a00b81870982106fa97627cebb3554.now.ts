import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['68a00b81870982106fa97627cebb3554'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_g_dhs_cisa_vm_re_rsc_sectors',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['e8a00b81870982106fa97627cebb355b'],
    table: 'sys_ui_element',
    data: {
        element: 'sector',
        position: 0,
        sys_ui_section: '68a00b81870982106fa97627cebb3554',
    },
})
Record({
    $id: Now.ID['e0a00b81870982106fa97627cebb355c'],
    table: 'sys_ui_element',
    data: {
        element: 'parent',
        position: 1,
        sys_ui_section: '68a00b81870982106fa97627cebb3554',
    },
})

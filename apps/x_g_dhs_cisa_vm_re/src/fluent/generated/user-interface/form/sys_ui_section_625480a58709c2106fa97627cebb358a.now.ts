import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['625480a58709c2106fa97627cebb358a'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_g_dhs_cisa_vm_re_rsc_us_states',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['2e5480298709c2106fa97627cebb3531'],
    table: 'sys_ui_element',
    data: {
        element: 'name',
        position: 0,
        sys_ui_section: '625480a58709c2106fa97627cebb358a',
    },
})
Record({
    $id: Now.ID['265480298709c2106fa97627cebb3532'],
    table: 'sys_ui_element',
    data: {
        element: 'region',
        position: 1,
        sys_ui_section: '625480a58709c2106fa97627cebb358a',
    },
})

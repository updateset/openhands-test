import { List } from '@servicenow/sdk/core'

List({
    table: 'x_g_dhs_cisa_vm_re_rsc_portal_questions',
    view: 'sys_ref_list',
    columns: ['column_name'],
})

import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_g_dhs_cisa_vm_re_rsc_sectors',
    view: default_view,
    columns: ['parent', 'sector'],
})

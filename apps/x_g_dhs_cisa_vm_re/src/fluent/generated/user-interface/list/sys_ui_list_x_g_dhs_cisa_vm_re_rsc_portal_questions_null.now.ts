import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_g_dhs_cisa_vm_re_rsc_portal_questions',
    view: default_view,
    columns: ['column_name', 'question', 'resource_no_url', 'resource_url', 'tooltip', 'tooltip_body'],
})

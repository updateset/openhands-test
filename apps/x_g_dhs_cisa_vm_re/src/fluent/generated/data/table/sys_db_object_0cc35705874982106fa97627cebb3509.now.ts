import { Table, StringColumn } from '@servicenow/sdk/core'

export const u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    extends: 'sys_import_set_row',
    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states',
    schema: {
        u_name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Name',
            },
            maxLength: 200,
        }),
    },
})

import { Table, StringColumn } from '@servicenow/sdk/core'

export const u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions = Table({
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
    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions',
    schema: {
        u_column_name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'column_name',
            },
            label: 'column_name',
            maxLength: 40,
        }),
        u_tooltip_body: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'tooltip_body',
            },
            label: 'tooltip_body',
            maxLength: 1768,
        }),
        u_tooltip: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'tooltip',
            },
            label: 'tooltip',
            maxLength: 40,
        }),
        u_question: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'question',
            },
            label: 'question',
            maxLength: 231,
        }),
    },
})

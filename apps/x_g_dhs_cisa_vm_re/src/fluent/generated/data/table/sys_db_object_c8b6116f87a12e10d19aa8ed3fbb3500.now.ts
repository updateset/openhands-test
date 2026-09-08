import { Table, StringColumn, EmailColumn } from '@servicenow/sdk/core'

export const u_imp_saml_user_a1kn5tdmak = Table({
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
    label: 'Imp Saml User A1kn5tdmak',
    name: 'u_imp_saml_user_a1kn5tdmak',
    schema: {
        user_name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'user_name',
            },
            label: 'User name',
            maxLength: 40,
        }),
        sso_source: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'sso_source',
            },
            label: 'Sso source',
            maxLength: 40,
        }),
        email: EmailColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'email',
            },
            maxLength: 40,
        }),
        first_name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'first_name',
            },
            label: 'First name',
            maxLength: 40,
        }),
    },
})

import { Table, StringColumn, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_g_dhs_cisa_vm_re_cisa_vm_questionnaire = Table({
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
    index: [
        {
            name: 'index',
            unique: false,
            element: 'account',
        },
        {
            name: 'index2',
            unique: false,
            element: 'contact',
        },
        {
            name: 'index3',
            unique: false,
            element: 'region',
        },
    ],
    label: 'CISA VM Questionnaire',
    name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire',
    schema: {
        number: StringColumn({
            maxLength: 20,
        }),
        account: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'provider_user_map',
            referenceQual: 'active=true^EQ',
            useReferenceQualifier: 'simple',
        }),
        email: StringColumn({
            maxLength: 50,
        }),
        contact: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'sys_user',
            referenceQual: 'active=true^EQ',
            useReferenceQualifier: 'simple',
        }),
        organization_size: ChoiceColumn({
            choices: {
                small: {
                    label: 'Small',
                    sequence: 1,
                },
                medium: {
                    label: 'Medium',
                    sequence: 2,
                },
                large: {
                    label: 'Large',
                    sequence: 3,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Organization size',
            maxLength: 40,
        }),
        version: StringColumn({
            maxLength: 20,
        }),
        region: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'cmn_location',
        }),
    },
    createAccessControls: true,
})

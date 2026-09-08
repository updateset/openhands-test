import { Table, ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const x_g_dhs_cisa_vm_re_rsc_sectors = Table({
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
    display: 'sector',
    index: [
        {
            name: 'index',
            unique: false,
            element: 'parent',
        },
        {
            name: 'index2',
            unique: false,
            element: 'sector',
        },
    ],
    label: 'RSC Sectors',
    name: 'x_g_dhs_cisa_vm_re_rsc_sectors',
    schema: {
        parent: ReferenceColumn({
            attributes: {
                edge_encryption_enabled: true,
                encode_utf8: false,
            },
            maxLength: 32,
            referenceTable: 'x_g_dhs_cisa_vm_re_rsc_sectors',
        }),
        sector: StringColumn({
            maxLength: 120,
        }),
    },
    createAccessControls: true,
})

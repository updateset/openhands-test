import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_g_dhs_cisa_vm_re_rsc_us_states = Table({
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
    label: 'RSC US States',
    name: 'x_g_dhs_cisa_vm_re_rsc_us_states',
    schema: {
        name: StringColumn({
            maxLength: 200,
        }),
        region: StringColumn({
            choices: {
                1: {
                    label: '1',
                    sequence: 100,
                },
                2: {
                    label: '2',
                    sequence: 200,
                },
                3: {
                    label: '3',
                    sequence: 300,
                },
                4: {
                    label: '4',
                    sequence: 400,
                },
                5: {
                    label: '5',
                    sequence: 500,
                },
                6: {
                    label: '6',
                    sequence: 600,
                },
                7: {
                    label: '7',
                    sequence: 700,
                },
                8: {
                    label: '8',
                    sequence: 800,
                },
                9: {
                    label: '9',
                    sequence: 900,
                },
                10: {
                    label: '10',
                    sequence: 1000,
                },
            },
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})

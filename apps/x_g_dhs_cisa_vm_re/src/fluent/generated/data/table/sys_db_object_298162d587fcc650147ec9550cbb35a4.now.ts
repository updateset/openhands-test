import {
    Table,
    ChoiceColumn,
    HtmlColumn,
    StringColumn,
    IntegerColumn,
    BooleanColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core'

export const x_g_dhs_cisa_vm_re_rsc_portal_questions = Table({
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
    display: 'column_name',
    index: [
        {
            name: 'index',
            unique: false,
            element: 'angular_template',
        },
        {
            name: 'index2',
            unique: false,
            element: 'column_name',
        },
        {
            name: 'index3',
            unique: false,
            element: 'parent',
        },
        {
            name: 'index4',
            unique: false,
            element: 'questionnaire_template',
        },
    ],
    label: 'RSC Portal Questions',
    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions',
    schema: {
        question_type: ChoiceColumn({
            choices: {
                boolean: {
                    label: 'Boolean',
                    sequence: 1,
                },
                state: {
                    label: 'State',
                    sequence: 2,
                },
            },
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        description: HtmlColumn({
            maxLength: 8000,
        }),
        title: StringColumn({
            maxLength: 400,
        }),
        resource_no_url: HtmlColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 8000,
        }),
        questionnaire_size: ChoiceColumn({
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
            maxLength: 40,
        }),
        order: IntegerColumn({
            maxLength: 40,
        }),
        template: StringColumn({
            maxLength: 100,
        }),
        version: IntegerColumn({
            mandatory: true,
            maxLength: 40,
        }),
        show_resource: BooleanColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: true,
            maxLength: 40,
        }),
        tooltip_body: HtmlColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 8000,
        }),
        tooltip: BooleanColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 40,
        }),
        parent: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_g_dhs_cisa_vm_re_rsc_portal_questions',
        }),
        points: IntegerColumn({
            maxLength: 40,
        }),
        question: HtmlColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 8000,
        }),
        questionnaire_template: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'sp_ng_template',
            referenceQual: 'sp_widget=afdd10003b4cf610ceb02a1c95e45ac4^EQ',
            useReferenceQualifier: 'simple',
        }),
        level: ChoiceColumn({
            choices: {
                section: {
                    label: 'Section',
                    sequence: 10,
                },
                'sub-section': {
                    label: 'Sub Section',
                    sequence: 20,
                },
                question: {
                    label: 'Question',
                    sequence: 30,
                },
            },
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        angular_template: ReferenceColumn({
            attributes: {
                edge_encryption_enabled: true,
                encode_utf8: false,
            },
            maxLength: 32,
            referenceTable: 'sp_ng_template',
            referenceQual: 'sys_scope=7cff490f87ebf1106fa97627cebb3585^EQ',
            useReferenceQualifier: 'simple',
        }),
        resource_url: HtmlColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 8000,
        }),
        column_name: StringColumn({
            mandatory: true,
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})

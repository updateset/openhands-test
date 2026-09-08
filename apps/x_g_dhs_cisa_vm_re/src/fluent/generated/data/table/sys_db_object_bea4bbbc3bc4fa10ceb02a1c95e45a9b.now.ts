import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_g_dhs_cisa_vm_re_questionnaire_answers = Table({
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
    label: 'Questionnaire Answers',
    name: 'x_g_dhs_cisa_vm_re_questionnaire_answers',
    schema: {
        u_type: StringColumn({
            maxLength: 40,
        }),
        question_answer: StringColumn({
            maxLength: 40,
        }),
        u_question_text: StringColumn({
            maxLength: 40,
        }),
        version: StringColumn({
            maxLength: 40,
        }),
        questionnaire: StringColumn({
            maxLength: 40,
        }),
        contact: StringColumn({
            maxLength: 40,
        }),
        account: StringColumn({
            maxLength: 40,
        }),
        u_question_answer_1: StringColumn({
            maxLength: 40,
        }),
        qid: StringColumn({
            label: 'QID',
            maxLength: 40,
        }),
        email: StringColumn({
            maxLength: 50,
        }),
        u_question_answer_text: StringColumn({
            maxLength: 40,
        }),
        u_policy: StringColumn({
            maxLength: 40,
        }),
        u_question_answer_2: StringColumn({
            maxLength: 40,
        }),
        organization_size: StringColumn({
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})

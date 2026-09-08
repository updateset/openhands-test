import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5fb43fbc3bc4fa10ceb02a1c95e45a01'],
    description: 'Default access control on x_g_dhs_cisa_vm_re_questionnaire_answers',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_g_dhs_cisa_vm_re.questionnaire_answers_user'],
    table: 'x_g_dhs_cisa_vm_re_questionnaire_answers',
})

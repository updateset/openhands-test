import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['97b43fbc3bc4fa10ceb02a1c95e45a0c'],
    description: 'Default access control on x_g_dhs_cisa_vm_re_questionnaire_answers',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_g_dhs_cisa_vm_re.questionnaire_answers_user'],
    table: 'x_g_dhs_cisa_vm_re_questionnaire_answers',
})

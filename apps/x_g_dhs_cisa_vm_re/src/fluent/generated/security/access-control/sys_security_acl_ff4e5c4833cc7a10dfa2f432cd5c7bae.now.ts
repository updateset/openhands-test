import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ff4e5c4833cc7a10dfa2f432cd5c7bae'],
    description: 'Default access control on x_g_dhs_cisa_vm_re_cisa_vm_questionnaire',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_g_dhs_cisa_vm_re.cisa_vm_questionnaire_user'],
    table: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire',
})

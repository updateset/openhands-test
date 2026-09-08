import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['51436a1987fcc650147ec9550cbb3543'],
    description: 'Default access control on x_g_dhs_cisa_vm_re_rsc_portal_questions',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_g_dhs_cisa_vm_re.rsc_portal_questions_user'],
    table: 'x_g_dhs_cisa_vm_re_rsc_portal_questions',
})

import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f5031bc1874982106fa97627cebb35af'],
    description: 'Default access control on x_g_dhs_cisa_vm_re_rsc_us_states',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_g_dhs_cisa_vm_re.rsc_us_states_user'],
    table: 'x_g_dhs_cisa_vm_re_rsc_us_states',
})

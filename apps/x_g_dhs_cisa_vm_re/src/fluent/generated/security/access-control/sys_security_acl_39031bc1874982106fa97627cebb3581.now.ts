import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['39031bc1874982106fa97627cebb3581'],
    description: 'Default access control on x_g_dhs_cisa_vm_re_rsc_us_states',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_g_dhs_cisa_vm_re.rsc_us_states_user'],
    table: 'x_g_dhs_cisa_vm_re_rsc_us_states',
})

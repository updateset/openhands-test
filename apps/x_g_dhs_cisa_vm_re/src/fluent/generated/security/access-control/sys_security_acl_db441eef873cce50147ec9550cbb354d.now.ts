import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['db441eef873cce50147ec9550cbb354d'],
    description: 'Default access control on x_g_dhs_cisa_vm_re_rsc_sectors',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_g_dhs_cisa_vm_re.rsc_sectors_user'],
    table: 'x_g_dhs_cisa_vm_re_rsc_sectors',
})

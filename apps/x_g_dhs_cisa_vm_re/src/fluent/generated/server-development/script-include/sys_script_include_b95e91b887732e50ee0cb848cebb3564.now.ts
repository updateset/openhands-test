import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['b95e91b887732e50ee0cb848cebb3564'],
    name: 'rscUSGS',
    script: Now.include('./sys_script_include_b95e91b887732e50ee0cb848cebb3564.server.js'),
    apiName: 'x_g_dhs_cisa_vm_re.rscUSGS',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'read',
})

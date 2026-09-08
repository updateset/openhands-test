import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['93a99c438778ca506fa97627cebb3556'],
    name: 'RSCSyncUtil',
    script: Now.include('./sys_script_include_93a99c438778ca506fa97627cebb3556.server.js'),
    apiName: 'x_g_dhs_cisa_vm_re.RSCSyncUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'read',
})

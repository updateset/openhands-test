import { Property } from '@servicenow/sdk/core'

Property({
    $id: Now.ID['759a54838778ca506fa97627cebb357c'],
    name: 'x_g_dhs_cisa_vm_re.rsc_sync_log_level',
    value: 'debug',
    description: 'Defined log level for RSC rest api calls',
    choices: [
        'fatal: 0',
        'emerg: 1',
        'alert: 2',
        'crit: 3',
        'err: 4',
        'warning: 5',
        'notice: 6',
        'info: 7',
        'debug: 8',
        'trace: 9',
    ],
    ignoreCache: true,
})

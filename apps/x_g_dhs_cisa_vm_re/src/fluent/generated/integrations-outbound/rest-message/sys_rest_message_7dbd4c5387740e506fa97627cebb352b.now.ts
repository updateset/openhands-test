import { RestMessage } from '@servicenow/sdk/core'

RestMessage({
    $id: Now.ID['7dbd4c5387740e506fa97627cebb352b'],
    name: 'CISA RSC Case',
    endpoint: 'https://${endpoint}/',
    authenticationType: 'basic',
    basicAuthProfile: 'bc6d273387304290147ec9550cbb357e',
    functions: [
        {
            name: 'Create/Update Case',
            httpMethod: 'POST',
            endpoint: 'https://${endpoint}/api/now/import/x_g_dhs_rsc_rsc_import',
            headers: [
                {
                    $id: Now.ID['370e009387740e506fa97627cebb3535'],
                    name: 'Accept',
                    value: 'application/json',
                },
                {
                    $id: Now.ID['cf2ecc1387740e506fa97627cebb350f'],
                    name: 'Content-Type',
                    value: 'application/json',
                },
                {
                    $id: Now.ID['dd2ec09387740e506fa97627cebb3521'],
                    name: 'Connection',
                    value: 'Keep-Alive',
                },
            ],
        },
    ],
})

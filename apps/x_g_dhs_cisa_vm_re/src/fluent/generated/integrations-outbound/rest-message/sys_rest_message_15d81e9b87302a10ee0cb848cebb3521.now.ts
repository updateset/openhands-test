import { RestMessage } from '@servicenow/sdk/core'

RestMessage({
    $id: Now.ID['15d81e9b87302a10ee0cb848cebb3521'],
    name: 'CSD - Ready Set Cyber Integration',
    endpoint: 'https://${endpoint}/',
    authenticationType: 'oauth2',
    oauthProfile: '60da965f87302a10ee0cb848cebb3583',
    functions: [
        {
            name: 'SUBMIT PRODUCER',
            httpMethod: 'POST',
            endpoint: 'https://${instance}/api/sn_sc/servicecatalog/items/${sys_id}/submit_producer',
            content: '${body}',
            authenticationType: 'noAuthentication',
            headers: [
                {
                    $id: Now.ID['1bf3bd7c47116e108d277d88c26d439c'],
                    name: 'Authorization',
                    value: 'Bearer ${token}',
                },
            ],
            variables: [
                {
                    $id: Now.ID['136cc72387b46a10ee0cb848cebb35a7'],
                    name: 'sys_id',
                },
                {
                    $id: Now.ID['1b6cc72387b46a10ee0cb848cebb35a9'],
                    name: 'instance',
                },
                {
                    $id: Now.ID['a88c43e787b46a10ee0cb848cebb3503'],
                    name: 'body',
                },
            ],
        },
        {
            name: 'RSC GET',
            httpMethod: 'GET',
            endpoint: 'https://${endpoint}/',
            authenticationType: 'noAuthentication',
            headers: [
                {
                    $id: Now.ID['47f3bd7c47116e108d277d88c26d4328'],
                    name: 'Authorization',
                    value: 'Bearer ${token}',
                },
            ],
        },
        {
            name: 'TABLE API',
            httpMethod: 'GET',
            endpoint: 'https://${instance}/api/now/table/${table}?sysparm_query=${query}&sysparm_fields=${fields}',
            authenticationType: 'noAuthentication',
            headers: [
                {
                    $id: Now.ID['3c9fa93847116e108d277d88c26d43dd'],
                    name: 'Authorization',
                    value: 'Bearer ${token}',
                },
            ],
            variables: [
                {
                    $id: Now.ID['174cc92847d9ea108d277d88c26d43c7'],
                    name: 'fields',
                },
                {
                    $id: Now.ID['174cc92847d9ea108d277d88c26d43c9'],
                    name: 'table',
                },
                {
                    $id: Now.ID['174cc92847d9ea108d277d88c26d43cb'],
                    name: 'token',
                },
                {
                    $id: Now.ID['1f4cc92847d9ea108d277d88c26d43c4'],
                    name: 'query',
                },
                {
                    $id: Now.ID['a5508b5787f02a10ee0cb848cebb3584'],
                    name: 'instance',
                },
            ],
        },
        {
            name: 'RSC SERVICE ENROLLMENT',
            httpMethod: 'POST',
            endpoint: 'https://${instance}/api/now/import/x_aver_cisa_vm_cyhy_enrollment_import',
            content: '${body}',
            authenticationType: 'noAuthentication',
            headers: [
                {
                    $id: Now.ID['7b76da034771aa108d277d88c26d43d3'],
                    name: 'Content-Type',
                    value: 'application/json',
                },
                {
                    $id: Now.ID['ed49970b47b5aa108d277d88c26d4311'],
                    name: 'Authorization',
                    value: 'Bearer ${token}',
                },
                {
                    $id: Now.ID['f9661ecf4731aa108d277d88c26d43d1'],
                    name: 'Accept',
                    value: 'application/json',
                },
            ],
            variables: [
                {
                    $id: Now.ID['1d245e4f4731aa108d277d88c26d4304'],
                    name: 'body',
                },
                {
                    $id: Now.ID['9d245e4f4731aa108d277d88c26d4301'],
                    name: 'instance',
                },
            ],
        },
        {
            name: 'RSC CREATE',
            httpMethod: 'POST',
            endpoint: 'https://${instance}/api/now/import/x_aver_cisa_vm_questionare_answers/insertMultiple',
            content: '${body}',
            authenticationType: 'noAuthentication',
            headers: [
                {
                    $id: Now.ID['1753334047d1aa108d277d88c26d4339'],
                    name: 'Accept',
                    value: 'application/json',
                },
                {
                    $id: Now.ID['aa63b38847d1aa108d277d88c26d4311'],
                    name: 'Content-Type',
                    value: 'application/json',
                },
                {
                    $id: Now.ID['b6f3bd7c47116e108d277d88c26d4327'],
                    name: 'Authorization',
                    value: 'Bearer ${token}',
                },
            ],
            variables: [
                {
                    $id: Now.ID['7c5b234047d1aa108d277d88c26d434a'],
                    name: 'body',
                },
                {
                    $id: Now.ID['f45b67c84791aa108d277d88c26d43b8'],
                    name: 'instance',
                },
            ],
        },
    ],
})

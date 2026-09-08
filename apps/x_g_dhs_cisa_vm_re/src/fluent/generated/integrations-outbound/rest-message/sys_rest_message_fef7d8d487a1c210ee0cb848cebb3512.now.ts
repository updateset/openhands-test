import { RestMessage } from '@servicenow/sdk/core'

RestMessage({
    $id: Now.ID['fef7d8d487a1c210ee0cb848cebb3512'],
    name: 'RSC Google ReCaptch',
    endpoint: 'https://recaptchaenterprise.googleapis.com/v1/projects/${PROJECT_ID}/assessments?key=${API_KEY}',
    functions: [
        {
            name: 'Validate',
            httpMethod: 'POST',
            endpoint: 'https://recaptchaenterprise.googleapis.com/v1/projects/${PROJECT_ID}/assessments?key=${API_KEY}',
            variables: [
                {
                    $id: Now.ID['0b38149487a1c210ee0cb848cebb3534'],
                    name: 'PROJECT_ID',
                },
                {
                    $id: Now.ID['d3289cd487a1c210ee0cb848cebb35e5'],
                    name: 'API_KEY',
                },
            ],
        },
    ],
})

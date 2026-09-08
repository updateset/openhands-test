import { RestMessage } from '@servicenow/sdk/core'

RestMessage({
    $id: Now.ID['13129ba54729aa108d277d88c26d433c'],
    name: 'Google Recaptcha - Ready Set Cyber',
    endpoint: '${endpoint}',
    functions: [
        {
            name: 'Validate',
            httpMethod: 'POST',
            endpoint: 'https://recaptchaenterprise.googleapis.com/v1/projects/${PROJECT_ID}/assessments?key=${API_KEY}',
            variables: [
                {
                    $id: Now.ID['2f925be94729aa108d277d88c26d43bd'],
                    name: 'PROJECT_ID',
                },
                {
                    $id: Now.ID['ef9297e94729aa108d277d88c26d4347'],
                    name: 'API_KEY',
                },
            ],
        },
    ],
})

import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c519080c472f6a108d277d88c26d4390'],
    table: 'sp_css',
    data: {
        css: `/* Broad font sizing */\r
body {\r
    font-size: 1.5rem;\r
}`,
        name: 'RSC Fonts',
        turn_off_scss_compilation: 'true',
    },
})

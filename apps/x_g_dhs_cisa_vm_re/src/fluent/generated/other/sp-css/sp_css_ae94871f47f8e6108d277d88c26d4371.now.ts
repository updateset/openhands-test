import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ae94871f47f8e6108d277d88c26d4371'],
    table: 'sp_css',
    data: {
        css: `@media print {\r
\r
    /* Accordion */\r
    .usa-accordion--bordered .usa-accordion__button {\r
        border: 0.25rem solid #f0f0f0;\r
    }\r
\r
    /* Alert */\r
    .usa-alert {\r
        border: 1px solid #565c65;\r
    }\r
\r
    /* Button */\r
    .usa-button {\r
        border: 1px solid #565c65;\r
    }\r
\r
    .usa-button:hover {\r
        border: 1px solid #565c65;\r
    }\r
\r
    /* Process List */\r
    .usa-process-list__item::before {\r
        background-color: #fff !important;\r
    }\r
\r
    /* Radio */\r
    .usa-radio__input:checked+[class*="__label"]::before {\r
        font-size: 24px;\r
        content: "\\25c9";\r
        top: 5px;\r
        color: #005ea2 !important;\r
    }\r
\r
    /* Step Counter */\r
    .usa-step-indicator--center .usa-step-indicator__segment:before {\r
        top: -2rem;\r
    }\r
\r
    .usa-step-indicator__segment:after {\r
        border-top: 0.5rem solid #919191;\r
        content: "";\r
        display: block;\r
        height: 0;\r
        left: 0;\r
        position: absolute;\r
        right: 0;\r
        top: 0;\r
    }\r
\r
    .usa-step-indicator__segment--complete::after {\r
        border-top-color: #162e51;\r
    }\r
\r
    .usa-step-indicator__segment--current::after {\r
        border-top-color: #005ea2;\r
    }\r
\r
    /* Table */\r
    .usa-table thead th {\r
        background-color: #fff !important;\r
    }\r
}\r
\r
@media print and (max-width:63.99em) {\r
    .usa-nav {\r
        background-color: #fff !important;\r
    }\r
}`,
        name: 'rsc-uwsds-print.css',
        turn_off_scss_compilation: 'true',
    },
})

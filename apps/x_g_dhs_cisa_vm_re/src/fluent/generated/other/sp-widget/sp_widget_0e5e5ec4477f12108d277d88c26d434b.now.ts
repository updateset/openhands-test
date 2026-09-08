import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['0e5e5ec4477f12108d277d88c26d434b'],
    name: 'RSC Card Widget USWDS',
    clientScript: Now.include('./sp_widget_rsc_card_widget_uwsds/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_card_widget_uwsds/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_card_widget_uwsds/template.html'),
    customCss: Now.include('./sp_widget_rsc_card_widget_uwsds/style.scss'),
    hasPreview: true,
    id: 'rsc_card_widget_uwsds',
    linkScript: Now.include('./sp_widget_rsc_card_widget_uwsds/link-script.js'),
    optionSchema: [
        {
            name: 'title',
            section: 'Data',
            label: 'Title',
            type: 'string',
        },
        {
            hint: 'Supports HTML',
            name: 'content',
            section: 'Data',
            label: 'Content',
            type: 'string',
        },
        {
            hint: 'url that the button will take you.',
            name: 'link',
            section: 'Data',
            label: 'Link',
            type: 'string',
        },
        {
            name: 'target',
            section: 'Data',
            label: 'Target',
            type: 'choice',
            choices: [
                {
                    label: '_blank',
                    value: '_blank',
                },
                {
                    label: '_self',
                    value: '_self',
                },
                {
                    label: '_parent',
                    value: '_parent',
                },
                {
                    label: '_top',
                    value: '_top',
                },
            ],
        },
        {
            hint: 'URL of the logo',
            name: 'logo',
            section: 'Data',
            label: 'Logo',
            type: 'string',
        },
        {
            hint: 'Text of the button',
            name: 'button',
            section: 'Data',
            label: 'Button',
            type: 'string',
        },
        {
            hint: 'logo width',
            name: 'width',
            section: 'Data',
            label: 'width',
            type: 'string',
        },
        {
            hint: 'logo height',
            name: 'height',
            section: 'Data',
            label: 'Height',
            type: 'string',
        },
        {
            hint: 'Logo Position',
            name: 'position',
            section: 'other',
            label: 'Position',
            type: 'choice',
            choices: [
                {
                    label: 'left',
                    value: 'left',
                },
                {
                    label: 'right',
                    value: 'right',
                },
            ],
        },
        {
            name: 'variant',
            section: 'Data',
            defaultValue: 'white',
            label: 'Variant',
            type: 'choice',
            choices: [
                {
                    label: 'white',
                    value: 'white',
                },
                {
                    label: 'blue',
                    value: 'blue',
                },
            ],
        },
        {
            name: 'card_height',
            section: 'Data',
            defaultValue: '340px',
            label: 'Card Height',
            type: 'string',
        },
        {
            name: 'card_content_height',
            section: 'Data',
            defaultValue: '190px',
            label: 'Card Content Height',
            type: 'string',
        },
        {
            name: 'alt_text',
            section: 'other',
            label: 'ALT TEXT',
            type: 'string',
        },
        {
            name: 'button_aria_label',
            section: 'other',
            label: 'Button Aria Label',
            type: 'string',
        },
    ],
    public: true,
})

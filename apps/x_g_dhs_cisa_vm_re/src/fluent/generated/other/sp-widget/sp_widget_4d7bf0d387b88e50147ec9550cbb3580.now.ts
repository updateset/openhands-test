import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['4d7bf0d387b88e50147ec9550cbb3580'],
    name: 'RSC PRA Statement',
    clientScript: Now.include('./sp_widget_rsc_pra_statement/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_pra_statement/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_pra_statement/template.html'),
    customCss: Now.include('./sp_widget_rsc_pra_statement/style.scss'),
    id: 'rsc_pra_statement',
    linkScript: Now.include('./sp_widget_rsc_pra_statement/link-script.js'),
    public: true,
    templates: [
        {
            $id: 'f45d660847aa22908d277d88c26d4316',
            id: 'rsc_questionnaire_privacy_act_statement',
            htmlTemplate: `<p class="statement">
    <strong>ReadySetCyber Initiative Questionnaire Privacy Act Statement Authority:</strong> Collection of the information solicited for the ReadySetCyber Initiative Questionnaire is authorized by 6 U.S.C. §§ 652(c)(5), 652(e)(1)(B), 659(c)(6), and 659(c)(7). Purpose: The purpose of collecting this information is to create a ReadySetCyber Initiative Questionnaire account to allow enrollment into matched services, review and update user and organization information and request additional information from CISA. Routine Uses: The information collected may be disclosed externally as a “routine use” pursuant to, DHS/ALL-004 General Information Technology Access Account Records System (GITAARS). Disclosure: Providing this information is voluntary, however, failure to provide this information will prevent CISA from providing this service to you.  
</p>`,
        },
    ],
})

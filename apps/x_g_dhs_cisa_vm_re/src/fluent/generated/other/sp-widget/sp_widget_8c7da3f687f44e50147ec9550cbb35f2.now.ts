import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['8c7da3f687f44e50147ec9550cbb35f2'],
    name: 'RSC Question State',
    clientScript: Now.include('./sp_widget_rsc_question_state/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_question_state/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_question_state/template.html'),
    customCss: Now.include('./sp_widget_rsc_question_state/style.scss'),
    id: 'rsc_question_state',
    linkScript: Now.include('./sp_widget_rsc_question_state/link-script.js'),
    public: true,
    angularProviders: [
        'c56bbfd387156a50ee0cb848cebb3559',
        'aa58900687b08a50147ec9550cbb3590',
        'b6fd93ba87b44e50147ec9550cbb3581',
    ],
    templates: [
        {
            $id: '0c5ac02087ab4210ee0cb848cebb353a',
            id: 'rsc_qs_u_separate_admin',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">Defend Privileges and Accounts</h4>
<p>Users should only have the minimum privileges necessary to do their work. This article explains the importance of separating accounts and the principle of "least privilege:"</p>
<p><a aria-label="Learn more about privileges and accounts." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://media.defense.gov/2019/Sep/09/2002180330/-1/-1/0/Defend%20Privileges%20and%20Accounts%20-%20Copy.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://media.defense.gov/2019/Sep/09/2002180330/-1/-1/0/Defend%20Privileges%20and%20Accounts%20-%20Copy.pdf</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-wrench" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Tool</div>
</div>
<h4 style="color: #0078ae;">WhiskeySAML</h4>
<p>Based on your responses, you might benefit from the third party tool: WhiskeySAML automates the remote extraction of an ADFS signing certificate:</p>
<p><a aria-label="Learn more about whiskeysaml." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/secureworks-whiskeysaml" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/secureworks-whiskeysaml</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: '10414388876b0210ee0cb848cebb3520',
            id: 'rsc_qs_u_named_cyber_role',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Cyber Guidance for Small Businesses</h4>
<p>To get started implementing a security culture at your organization, take a look at CISA's Guidance for Small Organizations:</p>
<p><a aria-label="Learn more about cisa guidance for small organizations." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/cyber-guidance-small-businesses" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/cyber-guidance-small-businesses</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">The Basics for Building a Culture of Cyber Readiness</h4>
<p>CISA&rsquo;s Cyber Essentials is a guide for leaders of small organizations to develop an actionable understanding of where to start implementing organizational cybersecurity practices:</p>
<p><a aria-label="Learn more about building a culture of cyber readiness." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/publications/Cyber%2520Essentials%2520Starter%2520Kit_03.12.2021_508_0.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/Cyber%2520Essentials%2520Starter%2520Kit_03.12.2021_508_0.pdf</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: '11738e2a47db8a508d277d88c26d43a7',
            id: 'rsc_qs_u_sm_inc_response_plan',
            htmlTemplate: `<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF document</div>
</div>
<h4 style="color: #0078ae;">Incident Response Plan Basics</h4>
<p>When incidents happen, your organization will recover faster if you already have a plan in place. Download this article to get started:</p>
<p><a style="text-decoration: underline;" aria-label="Incident response plan basics." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url}" href="https://www.cisa.gov/sites/default/files/publications/Incident-Response-Plan-Basics_508c.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/Incident-Response-Plan-Basics_508c.pdf</span>
  </a>
</p>`,
        },
        {
            $id: '1387c2ea471f8a508d277d88c26d43eb',
            id: 'rsc_qs_url_u_ttp_list',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Cybersecurity Alerts And Advisories</h4>
<p>CISA regularly publishes alerts and advisories to keep organizations informed about existing and potential threats:</p>
<p><a aria-label="Learn more."class="btn btn-primary" style="text-decoration: underline;" href="https://www.cisa.gov/news-events/cybersecurity-advisories" target="_blank" rel="noopener noreferrer nofollow">Learn More </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-wrench" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Tool</div>
</div>
<h4 style="color: #0078ae;">ClamAV</h4>
<p>Based on your responses, you might benefit from the third party tool:ClamAV. This is an open-source (general public license [GPL]) antivirus engine used in a variety of situations, including email and web scanning, and endpoint security:</p>
<p><a aria-label="Learn more."class="btn btn-primary" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/clamav" target="_blank" rel="noopener noreferrer nofollow">Learn More </a></p>
</div>
</div>`,
        },
        {
            $id: '1c5bc06087ab4210ee0cb848cebb358a',
            id: 'rsc_qs_u_unique_svc_accounts',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Choosing and Protecting Passwords</h4>
<p>Not all passwords are created equal! This article explains how to choose and protect strong passwords:</p>
<p><a aria-label="Learn more about passwords." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}"  style="text-decoration: underline;" href="https://www.cisa.gov/news-events/news/choosing-and-protecting-passwords" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/news-events/news/choosing-and-protecting-passwords</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-wrench" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Tool</div>
</div>
<h4 style="color: #0078ae;">O365Spray</h4>
<p>Based on your responses, you might benefit from the third party tool: O365Spray. This tool is a username enumeration and password spraying tool aimed at Microsoft Office 365:</p>
<p><a aria-label="Learn more about 0365spray." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}"  style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/o365spray" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/o365spray</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: '253bbfd0876b4210ee0cb848cebb35ce',
            id: 'rsc_qs_u_change_default_pw',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Bad Practices</h4>
<p>It's important to change the default passwords on all of your assets. Check out this list of other common "Bad Practices" that might be making it easier for attackers to target your organization:</p>
<p><a aria-label="Learn more about best practices for passwords." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/news-events/news/bad-practices-0" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/news-events/news/bad-practices-0</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-wrench" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Tool</div>
</div>
<h4 style="color: #0078ae;">AllStar</h4>
<p>Based on your responses, you might benefit from the third party tool: AllStar, a GitHub application for enforcing security policies and permissions:</p>
<p><a aria-label="Learn more about allstar." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/allstar" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/allstar
</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: '305840a8876b4210ee0cb848cebb35b3',
            id: 'rsc_qs_u_strong_mfa',
            htmlTemplate: `<p>&nbsp;</p>
<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-youtube-play" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Video</div>
</div>
<h4 style="color: #0078ae;">Make Your Accounts Safer with Multifactor Authentication (MFA)</h4>
<p>Using Multi-Factor Authentication (or MFA) is a simple way to make your accounts much safer from criminals seeking to steal your information. Watch this video to learn more:</p>
<p><a aria-label="Learn more about MFA." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.youtube.com/watch?v=XIlF2qkav5c" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.youtube.com/watch?v=XIlF2qkav5c</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">More than a Password</h4>
<p>A password is not enough. CISA strongly recommends that individuals and organizations implement multi-factor authentication to keep your accounts and data safe. Check out CISA's MFA Resource page to learn more:</p>
<p><a aria-label="Learn more about mfa and passwords." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/MFA" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/MFA</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: '451c3b14876b4210ee0cb848cebb35f0',
            id: 'rsc_qs_u_departing_employee_return',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-youtube-play" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Video</div>
</div>
<h4 style="color: #0078ae;">A Holistic Approach to Mitigating Insider Threats</h4>
<p>Employees who leave your organization should not have access to your organization's data. Watch this webinar to learn more about departing employees and other potential insider threats:</p>
<p><a aria-label="Learn more about mitigating insider threats." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.youtube.com/watch?v=IlNT0uJOZeg" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.youtube.com/watch?v=IlNT0uJOZeg</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">Insider Threat Mitigation Guide</h4>
<p>This guide will explain the threat that current and former employees can pose to your organization and offer to steps to mitigate the risk:</p>
<p><a aria-label="Learn more about threat mitigation." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/2022-11/Insider%20Threat%20Mitigation%20Guide_Final_508.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/2022-11/Insider%20Threat%20Mitigation%20Guide_Final_508.pdf</span>    

  </a></p>
</div>
</div>`,
        },
        {
            $id: '48760f4c876b0210ee0cb848cebb35d9',
            id: 'rsc_qs_u_no_public_devices',
            htmlTemplate: `<p>&nbsp;</p>
<div class="row">
<div class="col-xs-12">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Cyber Resource Hub</h4>
<p>Did you know that CISA offers several cyber hygiene services to help keep your organization safe? Visit the Vulnerability Scanning page today to take advantage of this free service:</p>
<p><a aria-label="Learn more about vulnerability scanning" ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/cyber-resource-hub" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/cyber-resource-hub</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: '48d6886c876b4210ee0cb848cebb3599',
            id: 'rsc_qs_u_supply_chain_risk',
            htmlTemplate: `<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-youtube-play" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Video</div>
</div>
<h4 style="color: #0078ae;">Cyber Supply Chain Risk Management</h4>
<p>Watch this webinar to learn about the importance of Supply Chain Risk Management and get started implementing SCRM in your organization:</p>
<p><a aria-label="Learn more about cyber supply chain risk management." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.youtube.com/watch?v=3Um_XY-Ahis" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.youtube.com/watch?v=3Um_XY-Ahis</span>    
  </a></p>`,
        },
        {
            $id: '4b12c068876b4210ee0cb848cebb3557',
            id: 'rsc_qs_u_asset_recovery_plan',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Incident Response and Awareness Training</h4>
<p>To get started making an Incident Response plan, check out CISA's free on-demand webinar "Incident Response and Awareness Training":</p>
<p><a aria-label="Learn more about incident response." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/training/incident-response-and-awareness-training" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/training/incident-response-and-awareness-training</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">CRR Supplemental Resource Guide</h4>
<p>The The Cyber Resilience Review Resource Guide for Incident Management has an Incident Reponse Plan Template that you can use to start drafting an IRP for your organization:</p>
<p><a aria-label="Learn more about CRR supplemental resources." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/c3vp/crr_resources_guides/CRR_Resource_Guide-IM.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/c3vp/crr_resources_guides/CRR_Resource_Guide-IM.pdf</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: '4b4500e8876b4210ee0cb848cebb35a7',
            id: 'rsc_qs_u_vul_management',
            htmlTemplate: `<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">CRR Supplemental Resource Guide</h4>
<p>To get started with Vulnerability Management, download this comprehensive guide:</p>
<p><a aria-label="Learn more about vulnerability management." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/publications/CRR_Resource_Guide-VM_0.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/CRR_Resource_Guide-VM_0.pdf</span>    
</a></p>`,
        },
        {
            $id: '52fdd6fb87d3ca50ee0cb848cebb35bc',
            id: 'rsc_qs_u_3rd_party_cyber_validation',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Services for All Organizations</h4>
<p>This service tests perimeter defenses by mimicking the techniques adversaries use to gain unauthorized access to networks:</p>
<p><a aria-label="Learn more about services for all organizations." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/stopransomware/services" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/stopransomware/services</span>
</a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Stakeholder Exercises</h4>
<p>CISA offers a wide portfolio of downloadable Tabletop Exercise Packages (CTEPs) to serve as an off-the-shelf solution for a variety of stakeholders' exercise needs:</p>
<p><a aria-label="Learn more about stakeholder exercises." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/stakeholder-exercises" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/stakeholder-exercises</span>
 </a></p>
</div>
</div>`,
        },
        {
            $id: '55b8929a47d4b6508d277d88c26d43ef',
            id: 'rsc_qs_u_defined_id_cyber_inc',
            htmlTemplate: `<div class="row">
  <div class="col-xs-12">
    <h4 style="color: #0078ae;">FEMA’s Planning Considerations for Cyber Incidents</h4>
    <p>Strengthen your organization’s ability to identify suspected cyber incidents with FEMA’s Planning Considerations for Cyber Incidents: Guidance for Emergency Managers. This resource provides actionable strategies to establish clear processes for monitoring, identifying, and responding to cyber incidents.</p>
    <p><a aria-label="Learn more about CISA’s Information and Communications Technology (ICT) Supply Chain Security"
        ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;"
        href="https://fema.gov/sites/default/files/documents/fema_planning-considerations-cyber-incidents_2023.pdf"
        target="_blank" rel="noopener noreferrer nofollow">
        <span ng-show="!c.nav.show_url">Learn More</span>
        <span
          ng-show="c.nav.show_url">https://fema.gov/sites/default/files/documents/fema_planning-considerations-cyber-incidents_2023.pdf</span>
      </a></p>
  </div>
</div>`,
        },
        {
            $id: '5c2cc02087ab4210ee0cb848cebb3556',
            id: 'rsc_qs_u_tls_enabled',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Encrypt Data in Transit</h4>
<p>To protect data in transit, check out this Guide from the Center for Internet Security:</p>
<p><a aria-label="Learn more about encrypting data in transit." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://essentialguide.docs.cisecurity.org/en/latest/bp/encrypt_data_in_transit.html" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://essentialguide.docs.cisecurity.org/en/latest/bp/encrypt_data_in_transit.html</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-wrench" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Tool</div>
</div>
<h4 style="color: #0078ae;">Cloudflare</h4>
<p>Based on your responses, you might benefit from the third party tool: Cloudflare. SSL (Secure Socket Layer) is the standard security technology for establishing an encrypted link between a web server and a browser. Cloudflare allows any internet property to use SSL with the click of a button:</p>
<p><a aria-label="Learn more about cloudflare." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/cloudflare-website-ddos-protection" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/cloudflare-website-ddos-protection</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: '6116c2a2471f8a508d277d88c26d4314',
            id: 'rsc_qs_u_inc_response_plan',
            htmlTemplate: `<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
  <div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
  <div style="color: #005288; font-weight: bold;">PDF document</div>
</div>
<h4 style="color: #0078ae;">Incident Response Plan Basics</h4>
<p>When incidents happen, your organization will recover faster if you already have a plan in place. Download this article to get started:</p>
<p><a aria-label="Learn More." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/publications/Incident-Response-Plan-Basics_508c.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/Incident-Response-Plan-Basics_508c.pdf</span> 
  </a></p>`,
        },
        {
            $id: '62a02afb87d3ca50ee0cb848cebb3573',
            id: 'rsc_qs_u_log_storage',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Logging Made Easy</h4>
<p>Logging is an important part of any organization's security posture. CISA has rolled out a new service that will make logging a breeze for your organization. Click the link to learn more:</p>
<p><a aria-label="Learn more about logging." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/logging-made-easy" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/logging-made-easy</span>  
</a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-youtube-play" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Video</div>
</div>
<h4 style="color: #0078ae;">Introduction to Investigating Logs for Incidents</h4>
<p>Watch this webinar to learn about the importance of logging and how logs can be used in incident analysis and response:</p>
<p><a aria-label="Learn more about logs for incidents." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.youtube.com/watch?v=pAE4hHdBI4Q" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.youtube.com/watch?v=pAE4hHdBI4Q</span>    
</a></p>
</div>
</div>`,
        },
        {
            $id: '62c40f4c876b0210ee0cb848cebb35d0',
            id: 'rsc_qs_u_public_services_disabled',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Cyber Hygiene Web Application Scanning</h4>
<p>CISA's Cyber Hygiene Web Application Scanning is "internet scanning-as-a-service." This service assesses the "health" of your publicly accessible web applications by checking for known vulnerabilities and weak configurations:</p>
<p><a aria-label="Learn more about cyber hygiene web application scanning" ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/news-events/news/cyber-hygiene-web-application-scanning" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url"> https://www.cisa.gov/news-events/news/cyber-hygiene-web-application-scanning</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-wrench" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Tool</div>
</div>
<h4 style="color: #0078ae;">BinaryEdge</h4>
<p>Based on your responses, you might benefit from the third party tool: BinaryEdge. This tool continuously collects and correlates data from internet accessible devices, allowing organizations to see what is their attack surface and what they are exposing to attackers:</p>
<p><a aria-label="Learn more about binary edge." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}"style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/binary-edge" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/binary-edge</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: '645a33d0876b4210ee0cb848cebb3576',
            id: 'rsc_qs_u_governance_training',
            htmlTemplate: `<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Governance</h4>
<p>For guidance on the importance of establishing security governance within your organization, take a look at the resources on the SAFECOM Governance page:</p>
<p><a aria-label="Learn more about safecom." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/safecom/governance" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/safecom/governance</span>    
  </a></p>`,
        },
        {
            $id: '67a7d0e887ab4210ee0cb848cebb35c5',
            id: 'rsc_qs_u_kev_mitagation',
            htmlTemplate: `<p>&nbsp;</p>
<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-link" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Link</div>
</div>
<h4 style="color: #0078ae;">Known Exploited Vulnerabilities Catalog</h4>
<p>CISA keeps a database on Known Exploited Vulnerabilities on our website. Check it out here:</p>
<p><a saria-label="Learn more about known exploited vulnerabilities" ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" tyle="text-decoration: underline;" href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/known-exploited-vulnerabilities-catalog</span>  
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Understanding Patches and Software Updates</h4>
<p>Many software updates are created to fix security risks, so it's important to keep your software up to date, as this blog article will explain:</p>
<p><a aria-label="Learn more about patches and software updates." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/news-events/news/understanding-patches-and-software-updates" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/news-events/news/understanding-patches-and-software-updates</span>  
  </a></p>
</div>
</div>`,
        },
        {
            $id: '681dba84876b0210ee0cb848cebb3501',
            id: 'rsc_qs_u_inc_reporting_policy',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-link" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Form</div>
</div>
<h4 style="color: #0078ae;">Incident Reporting System</h4>
<p>The CISA Incident Reporting System provides a secure web-enabled means of reporting computer security incidents to CISA:</p>
<p><a aria-label="CISA incident reporting system" ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="/irf?id=irf_incident_reporting_start" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url"> https://www.mycisaservices/irf?id=irf_incident_reporting_start</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">Federal Incident Reporting Guidelines</h4>
<p>This document provides guidance on incident reporting requirements:</p>
<p><a aria-label="CRR resource guide." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/c3vp/crr_resources_guides/CRR_Resource_Guide-IM.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/Federal_Incident_Notification_Guidelines.pdf</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: '6c7883cc876b0210ee0cb848cebb35f2',
            id: 'rsc_qs_u_pw_length',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Choosing and Protecting Passwords</h4>
<p>Not all passwords are created equal! This article explains how to choose and protect strong passwords:</p>
<p><a aria-label="Learn more about selecting strong passwords." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/news-events/news/choosing-and-protecting-passwords
" target="_blank" rel="noopener noreferrer nofollow"> 
    <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url"> https://www.cisa.gov/news-events/news/choosing-and-protecting-passwords</span>
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-wrench" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Tool</div>
</div>
<h4 style="color: #0078ae;">John the Ripper password cracker</h4>
<p>Based on your responses, you might benefit from the third party tool: John the Ripper. This offering is a password security auditing and password recovery tool available for many operating systems:</p>
<p><a aria-label="Learn more about password security with john the ripper." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/john-ripper-password-cracker" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/john-ripper-password-cracker</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: '7289925e47d4b6508d277d88c26d439c',
            id: 'rsc_qs_u_inc_comm_plan',
            htmlTemplate: `<div class="row">
  <div class="col-xs-12">
    <!--<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
      <div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
      <div style="color: #005288; font-weight: bold;">PDF Document</div>
    </div>-->
    <h4 style="color: #0078ae;">UK’s NCSC Guidance on Effective Communications</h4>
    <p>Improve your organization’s communication strategies during cyber incidents with the United Kingdom's (UK) National Cyber Security Centre (NCSC) Guidance on Effective Communications. This resource offers best practices for timely and transparent communication with stakeholders, ensuring that incident details are conveyed accurately to minimize impact and maintain trust.</p>
    <p><a aria-label="Learn more about UK’s NCSC Guidance on Effective Communications"
        ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;"
        href="https://www.ncsc.gov.uk/files/NCSC-Guidance-on-effective-communications-in-a-cyber-incident.pdf"
        target="_blank" rel="noopener noreferrer nofollow">
        <span ng-show="!c.nav.show_url">Learn More</span>
        <span
          ng-show="c.nav.show_url">https://www.ncsc.gov.uk/files/NCSC-Guidance-on-effective-communications-in-a-cyber-incident.pdf</span>
      </a></p>
  </div>
</div>`,
        },
        {
            $id: '75a31ce487ab4210ee0cb848cebb35d3',
            id: 'rsc_qs_u_security_research_contact',
            htmlTemplate: `<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Security.txt</h4>
<p>CISA supports using the “security.txt” standard to streamline notifications and reduce the risk of compromise. Read more about how this simple file can bring big value.</p>
<p><a aria-label="Learn more about security.txt." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/news-events/news/securitytxt-simple-file-big-value" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/news-events/news/securitytxt-simple-file-big-value</span>    
</a></p>`,
        },
        {
            $id: '7b84982887ab4210ee0cb848cebb35d1',
            id: 'rsc_qs_u_security_inc_sla',
            htmlTemplate: `<div class="row">
  <div class="col-xs-6">
    <div style="display: flex; flex-direction: row; padding-bottom: 5px;">
      <div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
      <div style="color: #005288; font-weight: bold;">PDF Document</div>
    </div>
    <h4 style="color: #0078ae;">Vendor Supply Chain Risk Management (SCRM) Template</h4>
    <p>Download CISA's Third Party Risk Management template, so you can start making sure your third parties don't pose
      unnecessary risk to your organization:</p>
    <p><a aria-label="Learn more about vendor supply chain risk management."
        ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;"
        href="https://www.cisa.gov/sites/default/files/publications/ICTSCRMTF_Vendor-SCRM-Template_508.pdf"
        target="_blank" rel="noopener noreferrer nofollow">
        <span ng-show="!c.nav.show_url">Learn More</span>
        <span
          ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/ICTSCRMTF_Vendor-SCRM-Template_508.pdf</span>
      </a></p>
  </div>
  <div class="col-xs-6">
    <div style="display: flex; flex-direction: row; padding-bottom: 5px;">
      <div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
      <div style="color: #005288; font-weight: bold;">Training</div>
    </div>
    <h4 style="color: #0078ae;">FedVTE</h4>
    <p>This free online course is available to the public and will explain how to get started with Supply Chain Risk
      Management:</p>
    <p><a aria-label="Learn more about automatic supply chain risk management."
        ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;"
        href="https://learning.cisa.gov/enrol/index.php?id=1676" target="_blank"
        rel="noopener noreferrer nofollow">
        <span ng-show="!c.nav.show_url">Learn More</span>
        <span
          ng-show="c.nav.show_url">https://support.microsoft.com/en-us/windows/backup-and-restore-in-windows-352091d2-bb9d-3ea3-ed18-52ef2b88cbef</span>
      </a></p>
  </div>
</div>`,
        },
        {
            $id: '7cc814a887ab4210ee0cb848cebb3537',
            id: 'rsc_qs_u_macros_disabled',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Macro Security</h4>
<p>Many types of malware rely on embedded code, such as Microsoft Office macros. To keep your organization safe, these macros should be disabled by default. Read this article to learn more</p>
<p><a aria-label="Learn more about macro security" ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.ncsc.gov.uk/guidance/macro-security-for-microsoft-office" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.ncsc.gov.uk/guidance/macro-security-for-microsoft-office</span>  
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">How to Disable Macros</h4>
<p>This white paper from the Center for Internet Security will walk you through the process of disabling macros by default in your organization:</p>
<p><a aria-label="Learn more about how to disable macros." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}"  style="text-decoration: underline;" href="https://www.cisecurity.org/insights/white-papers/intel-insight-how-to-disable-macros" target="_blank" rel="noopener noreferrer nofollow">
    <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisecurity.org/insights/white-papers/intel-insight-how-to-disable-macros</span>  
  </a></p>
</div>
</div>`,
        },
        {
            $id: '7fd9038087ab0210ee0cb848cebb359f',
            id: 'rsc_qs_u_secure_credential_storage',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">Reference Materials for Identity, Credential, and Access Management (ICAM) for Public Safety</h4>
<p>To make sure that you are properly managing user identities and credentials, check out this guide:</p>
<p><a aria-label="Learn more about identities and credentials." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/2023-02/ICAM_Reference_Guide_FINAL_508.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/2023-02/ICAM_Reference_Guide_FINAL_508.pdf</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-wrench" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Tool</div>
</div>
<h4 style="color: #0078ae;">Bitlocker</h4>
<p>Based on your responses, you might benefit from the third party tool: Bitlocker. This tool encrypts Microsoft Windows systems:</p>
<p><a aria-label="Learn more about bitlocker." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/bitlocker-microsoft-windows" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/bitlocker-microsoft-windows</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: '84d5e6738717ca50ee0cb848cebb3594',
            id: 'rsc_qs_u_hw_software_firmware_approval',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">CRR Supplemental Resource Guide</h4>
<p>In order to keep your environment secure, you have to know what devices you have, how they're configured, and have a defined process for any changes you need to make. Read this guide to Configuration and Change Management to get started:</p>
<p><a aria-label="Learn more about supplemental resources " ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/c3vp/crr_resources_guides/CRR_Resource_Guide-CCM.pdf" target="_blank" rel="noopener noreferrer nofollow">
   <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url"> https://www.cisa.gov/sites/default/files/c3vp/crr_resources_guides/CRR_Resource_Guide-CCM.pdf</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Spreadsheet</div>
</div>
<h4 style="color: #0078ae;">Asset Tracking Spreadsheet</h4>
<p>This tool is designed to help identify devices and applications. The spreadsheet can be used to track hardware, software, and sensitive information:</p>
<p><a aria-label="Learn more about tracking hardware and software." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/cis-hardware-and-software-asset-tracker" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/cis-hardware-and-software-asset-tracker</span>    
</a></p>
</div>
</div>`,
        },
        {
            $id: '87ddea0647d476508d277d88c26d434d',
            id: 'rsc_qs_u_org_estab_comm',
            htmlTemplate: `<div class="row">
  <div class="col-xs-12">
    <!--<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
      <div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
      <div style="color: #005288; font-weight: bold;">Article</div>
    </div>-->
    <h4 style="color: #0078ae;">CISA’s Cybersecurity Awareness Program</h4>
    <p>Engage your workforce with CISA’s Cybersecurity Awareness Program. Access a range of resources to educate employees on cyber hygiene, promote security best practices, and build a culture of cybersecurity within your organization.</p>
    <p><a aria-label="Learn more about CISA’s Cybersecurity Awareness Program" ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/programs/cisa-cybersecurity-awareness-program" target="_blank" rel="noopener noreferrer nofollow">
      <span ng-show="!c.nav.show_url">Learn More</span> 
      <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/programs/cisa-cybersecurity-awareness-program</span>    
      </a></p>
  </div>
</div>`,
        },
        {
            $id: '98a614a887ab4210ee0cb848cebb3539',
            id: 'rsc-qs_u_vendor_eval_docs',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-youtube-play" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Video</div>
</div>
<h4 style="color: #0078ae;">Evaluating Vendor and Supplier Trustworthiness</h4>
<p>When choosing a vendor, it's important to keep security in mind. Watch this video to learn how to evaluate a vendor's trustworthiness:</p>
<p><a aria-label="Learn more about evaluating vendor and supplier trustworthieness." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.youtube.com/watch?v=bf_M_47BNkw" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.youtube.com/watch?v=bf_M_47BNkw</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-calculator" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Scorecard</div>
</div>
<h4 style="color: #0078ae;">Security Scorecard</h4>
<p>Based on your responses, you might benefit from the third party tool: Security Scorecards, a collection of security health metrics for open source, allowing users to evaluate the security practices of an open source package before use:</p>
<p><a aria-label="Learn more about security scorecards." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://github.com/ossf/scorecard" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://github.com/ossf/scorecard</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: '999044e4876b4210ee0cb848cebb3583',
            id: 'rsc_qs_u_email_tls_dkim',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">Enhance Email And Web Security</h4>
<p>A significant portion of attacks against organizations come via email. Download this guide to CISA's recommendations for enhancing email security to protect your organization:</p>
<p><a aria-label="Learn more about email and web security." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/publications/CISAInsights-Cyber-EnhanceEmailandWebSecurity_S508C.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/CISAInsights-Cyber-EnhanceEmailandWebSecurity_S508C.pdf</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-wrench" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Tool</div>
</div>
<h4 style="color: #0078ae;">Perception Point</h4>
<p>Based on your responses, you might benefit from the third party tool: Perception Point. Perception Point&rsquo;s Free Email Security Plan, protects organizations from any threat entering organization via email and other collaboration channels:</p>
<p><a aria-label="Learn more about perception point." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/perception-point" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/perception-point</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: 'a189b750876b4210ee0cb848cebb35e1',
            id: 'rsc_qs_u_cia_data',
            htmlTemplate: `<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">What is Cybersecurity?</h4>
<p>If you're ready to start securing your network, check out this article with some cybersecurity basics:</p>
<p><a  aria-label="Learn more about cybersecurity basics." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/news-events/news/what-cybersecurity" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/news-events/news/what-cybersecurity</span>    
  </a></p>`,
        },
        {
            $id: 'a73d8c6087ab4210ee0cb848cebb3570',
            id: 'rsc_qs_u_ttp_list',
            htmlTemplate: `<p>&nbsp;</p>
<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Cybersecurity Alerts And Advisories</h4>
<p>CISA regularly publishes alerts and advisories to keep organizations informed about existing and potential threats:</p>
<p><a aria-label="Learn more about cybersecurity alerts and advisories." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/news-events/cybersecurity-advisories" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/news-events/cybersecurity-advisories</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-wrench" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Tool</div>
</div>
<h4 style="color: #0078ae;">ClamAV</h4>
<p>Based on your responses, you might benefit from the third party tool:ClamAV. This is an open-source (general public license [GPL]) antivirus engine used in a variety of situations, including email and web scanning, and endpoint security:</p>
<p><a aria-label="Learn more about windows defender." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/clamav" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/clamav</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: 'a84806ea471f8a508d277d88c26d433e',
            id: 'rsc_qs_u_security_vuln_sla',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-0" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">Empowering SMBs</h4>
<p>The ICT SCRM Task Force&rsquo;s resource guide was created to provide a valuable starting point for you to develop and tailor an ICT SCRM plan that meets the needs of your organization:</p>
<p><a aria-label="Resource guide."ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}"style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/2023-10/Empowering%20SMBs%20-%20A%20Resource%20Guide%20For%20Developing%20A%20Resilient%20SCRM%20Plan_508_0.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/2023-10/Empowering%20SMBs%20-%20A%20Resource%20Guide%20For%20Developing%20A%20Resilient%20SCRM%20Plan_508_0.pdf</span>  
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">Securing Small and Medium-Sized Business Supply Chains</h4>
<p>This handbook provides an overview of the highest supply chain risk categories commonly faced by ICT small and medium-sized businesses (SMBs):</p>
<p><a aria-label="Supply chain risk category handbook."ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}"style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/2023-01/Securing-SMB-Supply-Chains_Resource-Handbook_508.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/2023-01/Securing-SMB-Supply-Chains_Resource-Handbook_508.pdf</span>  
  </a></p>
</div>
</div>`,
        },
        {
            $id: 'a9eedafb87d3ca50ee0cb848cebb35c0',
            id: 'rsc_qs_u_log_unsuccessful_login',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Logging Made Easy</h4>
<p>Logging is an important part of any organization's security posture. CISA has rolled out a new service that will make logging a breeze for your organization. Click the link to learn more:</p>
<p><a aria-label="Learn more about logging made easy." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/logging-made-easy" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/logging-made-easy</span>  
</a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-link" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Link</div>
</div>
<h4 style="color: #0078ae;">Security Onion</h4>
<p>Based on your responses, you might benefit from the third party tool: Security Onion, a free and open Linux distribution for threat hunting, enterprise security monitoring, and log management:</p>
<p><a aria-label="Learn more about security onion." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/security-onion" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/security-onion</span>
</a></p>
</div>
</div>`,
        },
        {
            $id: 'af3efec4876b0210ee0cb848cebb35e3',
            id: 'rsc_qs_u_prohibit_unauth_devices',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">The Risks of Using Portable Devices</h4>
<p>Keep your organization safe by ensuring you have policies and procedures to prevent unauthorized devices from connecting to your network. This article outlines the risks posed by portable devices:</p>
<p><a aria-label="Risks of portable devices." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/publications/RisksOfPortableDevices.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/RisksOfPortableDevices.pdf</span>    
</a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Protecting Portable Devices: Data Security</h4>
<p>Read this blog from CISA to learn about how to protect your portable devices:</p>
<p><a aria-label="Portable device security" ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/news-events/news/protecting-portable-devices-data-security" target="_blank" rel="noopener noreferrer nofollow">
   <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/news-events/news/protecting-portable-devices-data-security</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: 'b310cfc4876b0210ee0cb848cebb35eb',
            id: 'rsc_qs_u_network_diagrams',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">CRR Supplemental Resource Guide</h4>
<p>To know what to protect, you need to know what you have. Check out this resource guide to creating an asset inventory:</p>
<p><a aria-label="CRR supplemental resource guide." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/c3vp/crr_resources_guides/CRR_Resource_Guide-AM.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/c3vp/crr_resources_guides/CRR_Resource_Guide-AM.pdf</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Create a network diagram</h4>
<p>This offering is a utility for network discovery and security auditing:</p>
<p><a aria-label="How to create a network diagram using vizio." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/network-mapper" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/network-mapper</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: 'b788cac6471476508d277d88c26d43d5',
            id: 'rsc_qs_u_users_systems_minimal_access',
            htmlTemplate: `<div class="row">
  <div class="col-xs-12">
    <!--
    <div style="display: flex; flex-direction: row; padding-bottom: 5px;">
      <div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
      <div style="color: #005288; font-weight: bold;">Article</div>
    </div>-->
    <h4 style="color: #0078ae;">Cybersecurity Advisory AA22-137A</h4>
    <p>Ensuring users and systems only have the access they need is a fundamental step in reducing cybersecurity risks. Explore CISA's joint cybersecurity advisory to better understand the principle of limiting privileges, securing access controls, and other common weak security configurations.</p>
    <p><a aria-label="Learn more about mitigating insider threats." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-137a" target="_blank" rel="noopener noreferrer nofollow">
      <span ng-show="!c.nav.show_url">Learn More</span> 
      <span ng-show="c.nav.show_url">https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-137a</span>    
      </a>
    </p>
  </div>
</div>`,
        },
        {
            $id: 'ba8eea0647d476508d277d88c26d431c',
            id: 'rsc_qs_u_org_msp_process',
            htmlTemplate: `<div class="row">
  <div class="col-xs-12">
    <!--<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
      <div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
      <div style="color: #005288; font-weight: bold;">Article</div>
    </div>-->
    <h4 style="color: #0078ae;">Protecting Against Cyber Threats to MSPs and their Customers</h4>
    <p>Secure your organization’s partnership with MSPs by exploring CISA’s joint Cybersecurity Advisory AA22-131A. This resource, developed in collaboration with international cybersecurity authorities, offers actionable guidance to protect against malicious cyber activity targeting MSPs and their customers.</p>
    <p><a aria-label="Learn more about Protecting Against Cyber Threats to MSPs and their Customers" ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/publications/AA22-131A_Protecting_Against_Cyber_Threats_to_MSPs_and_their_Customers.pdf" target="_blank" rel="noopener noreferrer nofollow">
      <span ng-show="!c.nav.show_url">Learn More</span> 
      <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/AA22-131A_Protecting_Against_Cyber_Threats_to_MSPs_and_their_Customers.pdf</span>    
      </a></p>
  </div>
</div>`,
        },
        {
            $id: 'cfbc52bb87d3ca50ee0cb848cebb3599',
            id: 'rsc_qs_u_annual_cyber_training',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-youtube-play" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Video</div>
</div>
<h4 style="color: #0078ae;">Recognize and Report Phishing</h4>
<p>Did you know that CISA is on YouTube? Check out our channel for short educational videos like this one that you can use to train your employees and increase their security awareness:</p>
<p><a aria-label="Learn more about recognizing and reporting phishing." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.youtube.com/watch?v=JlQovysQBn0" target="_blank" rel="noopener noreferrer nofollow">
	<span ng-show="!c.nav.show_url">Learn More</span> 
	<span ng-show="c.nav.show_url">https://www.youtube.com/watch?v=JlQovysQBn0</span>
</a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">Phishing Guidance</h4>
<p>You can find plenty of documents providing basic cybersecurity guidance for your employees at cisa.gov, including this article detailing Anti-phishing guidance for your organizaiton:</p>
<p><a aria-label="Learn more about phishing guidance." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/2023-10/Phishing%20Guidance%20-%20Stopping%20the%20Attack%20Cycle%20at%20Phase%20One_508c.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">  https://www.cisa.gov/sites/default/files/2023-10/Phishing%20Guidance%20-%20Stopping%20the%20Attack%20Cycle%20at%20Phase%20One_508c.pdf</span>  
</a></p>
</div>
</div>`,
        },
        {
            $id: 'd17f77d4876b4210ee0cb848cebb3598',
            id: 'rsc_qs_u_connect_deny_default',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">Layering Network Security Through Segmentation</h4>
<p>Check out this infographic to learn more about layering network security through segmentation:</p>
<p><a aria-label="Learn more about layering network security through segementation." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/publications/layering-network-security-segmentation_infographic_508_0.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/layering-network-security-segmentation_infographic_508_0.pdf</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Network Segmentation: Concepts and Practices</h4>
<p>Visit Carnegie Mellon University's Software Engineering Institute Blog for an article on Network Segmentation concepts:</p>
<p><a aria-label="Learn more about Network segementation concepts." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://insights.sei.cmu.edu/blog/network-segmentation-concepts-and-practices/" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://insights.sei.cmu.edu/blog/network-segmentation-concepts-and-practices/</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: 'da6eb794876b4210ee0cb848cebb35d9',
            id: 'rsc_qs_u_basline_config_documents',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">CRR Supplemental Resource Guide</h4>
<p>In order to keep your environment secure, you have to know what devices you have, how they're configured, and have a defined process for any changes you need to make. Read this guide to Configuration and Change Management to get started:</p>
<p><a aria-label="Learn more about CRR supplemental resource guide." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/publications/CRR_Resource_Guide-CCM_0.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/CRR_Resource_Guide-CCM_0.pdf</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-wrench" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Tool</div>
</div>
<h4 style="color: #0078ae;">Security Compliance Toolkit and Baselines</h4>
<p>Based on your responses, you might benefit from the third party tool: Security Compliance Toolkit. This toolset allows enterprise security administrators to download, analyze, test, edit and store Microsoft-recommended security configuration baselines for Windows and other Microsoft products, while comparing them against other security configurations:</p>
<p><a aria-label="Learn more about security compliance toolkit and baselines." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/microsoft-security-compliance-toolkit-10" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/microsoft-security-compliance-toolkit-10</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: 'dc5343c8876b0210ee0cb848cebb35ed',
            id: 'rsc_qs_u_ot_cyber_training',
            htmlTemplate: `<p>&nbsp;</p>
<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Training</h4>
<p>Did you know that CISA provides virtual and in-person training sessions on a variety of topics? Visit CISA's training page to learn more:</p>
<p><a aria-label="Learn more about virtual and in-person training sessions." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/training" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/training</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">Cybersecurity Workforce Training Guide</h4>
<p>This Guide helps professionals develop a training plan based on their current skill level and desired career opportunities:</p>
<p><a aria-label="Learn more about cybersecurity workforce training guide." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/publications/Cybersecurity%2520Workforce%2520Training%2520Guide%25207.28.21%2520508c.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/Cybersecurity%2520Workforce%2520Training%2520Guide%25207.28.21%2520508c.pdf</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: 'e5f16ebf87d3ca50ee0cb848cebb35eb',
            id: 'rsc_qs_u_log_storage_detect_resp',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-youtube-play" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Video</div>
</div>
<h4 style="color: #0078ae;">Introduction to Incident Analysis and Tools</h4>
<p>To get started making an Incident Response plan, check out CISA's free on-demand webinar "Incident Response and Awareness Training:</p>
<p><a aria-label="Learn more about incident response plans." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.youtube.com/watch?v=0m7NN6yvsq0" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.youtube.com/watch?v=0m7NN6yvsq0</span>  
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-link" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Link</div>
</div>
<h4 style="color: #0078ae;">Security Onion</h4>
<p>Based on your responses, you might benefit from the third party tool: Security Onion, a free and open Linux distribution for threat hunting, enterprise security monitoring, and log management:</p>
<p><a aria-label="Learn more about securit onion." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/security-onion" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/security-onion</span>  
  </a></p>
</div>
</div>`,
        },
        {
            $id: 'ea68f350876b4210ee0cb848cebb357f',
            id: 'rsc _qs_u_device_config',
            htmlTemplate: `<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">Securing Network Infrastructure Devices</h4>
<p>Check out this post on CISA's blog to get started securing network devices:</p>
<p><a aria-label="Learn more about securing network infrastructure devices." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/news-events/news/securing-network-infrastructure-devices" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/news-events/news/securing-network-infrastructure-devices</span>    
  </a></p>`,
        },
        {
            $id: 'eac30428876b4210ee0cb848cebb3573',
            id: 'rsc_qs_u_cyber_incident_plan',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Article</div>
</div>
<h4 style="color: #0078ae;">CISA Tabletop Exercise Packages</h4>
<p>CISA offers a wide portfolio of downloadable Tabletop Exercise Packages (CTEPs) to serve as an off-the-shelf solution for a variety of stakeholders' exercise needs:</p>
<p><a aria-label="Learn more about cisa tabletop exercise packages." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/cisa-tabletop-exercise-packages" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/cisa-tabletop-exercise-packages</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">Cybersecurity Tabletop Exercise Tips</h4>
<p>Check out this fact sheet for some tips on creating and running your own tabletop exercises:</p>
<p><a aria-label="Learn more about tabletop exercises." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/publications/Cybersecurity-Tabletop-Exercise-Tips_508c.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/Cybersecurity-Tabletop-Exercise-Tips_508c.pdf</span>    
  </a></p>
</div>
</div>`,
        },
        {
            $id: 'eb858a22471f8a508d277d88c26d43c1',
            id: 'rsc_qs_url_u_vendor_eval_docs',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-youtube-play" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Video</div>
</div>
<h4 style="color: #0078ae;">Evaluating Vendor and Supplier Trustworthiness</h4>
<p>When choosing a vendor, it's important to keep security in mind. Watch this video to learn how to evaluate a vendor's trustworthiness:</p>
<p><a style="text-decoration: underline;" aria-label="Watch now."href="https://www.youtube.com/watch?v=bf_M_47BNkw" target="_blank" rel="noopener noreferrer nofollow">https://www.youtube.com/watch?v=bf_M_47BNkw</a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-calculator" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Scorecard</div>
</div>
<h4 style="color: #0078ae;">Security Scorecard</h4>
<p>Based on your responses, you might benefit from the third party tool: Security Scorecards, a collection of security health metrics for open source, allowing users to evaluate the security practices of an open source package before use:</p>
<p><a style="text-decoration: underline;" href="https://github.com/ossf/scorecard" target="_blank" aria-label="Learn more."rel="noopener noreferrer nofollow">https://github.com/ossf/scorecard</a></p>
</div>
</div>`,
        },
        {
            $id: 'ed48da7787d3ca50ee0cb848cebb355b',
            id: 'rsc_qs_u_asset_inventory',
            htmlTemplate: `<div class="row">
  <div class="col-xs-6">
    <div style="display: flex; flex-direction: row; padding-bottom: 5px;">
      <div class="fa fa-graduation-cap" style="color: #005288; padding-right: 3px;">&nbsp;</div>
      <div style="color: #005288; font-weight: bold;">Article</div>
    </div>
    <h4 style="color: #0078ae;">Stuff Off Search</h4>
    <p>What do you know about your internet attack surface? To make sure you know what's accessible to attackers, check
      out CISA's Stuff Off Search:</p>
    <p><a aria-label="Learn more about stuff off search."
        ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;"
        href="https://www.cisa.gov/resources-tools/resources/stuff-search" target="_blank"
        rel="noopener noreferrer nofollow">
        <span ng-show="!c.nav.show_url">Learn More</span>
        <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/resources/stuff-search</span>
      </a></p>
  </div>
  <div class="col-xs-6">
    <div style="display: flex; flex-direction: row; padding-bottom: 5px;">
      <div class="fa fa-wrench" style="color: #005288; padding-right: 3px;">&nbsp;</div>
      <div style="color: #005288; font-weight: bold;">Tool</div>
    </div>
    <h4 style="color: #0078ae;">Security Command Center</h4>
    <p>Based on your responses, you might benefit from the third party tool: the Google Security Command Center. This
      tool helps users strengthen their security posture by evaluating their security and data attack surface; providing
      asset inventory and discovery; identifying misconfigurations, vulnerabilities and threats; and helping them
      mitigate and remediate risks:</p>
    <p><a aria-label="Learn more about security command center."
        ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;"
        href="https://www.cisa.gov/resources-tools/services/google-security-command-center" target="_blank"
        rel="noopener noreferrer nofollow">
        <span ng-show="!c.nav.show_url">Learn More</span>
        <span
          ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/google-security-command-center</span>
      </a></p>
  </div>
</div>`,
        },
        {
            $id: 'eea26ebf87d3ca50ee0cb848cebb35ef',
            id: 'rsc_qs_u_iam_security',
            htmlTemplate: `<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-youtube-play" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Video</div>
</div>
<h4 style="color: #0078ae;">Stop Online Crime with Strong Passwords</h4>
<p>A great first step to securing user accounts is to learn how to choose strong passwords. Watch this short video from CISA to learn more</p>
<p><a aria-label="Learn more about strong passwords." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}"style="text-decoration: underline;" href="https://www.youtube.com/watch?v=FZoB7yUGh7Y" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.youtube.com/watch?v=FZoB7yUGh7Y</span>  
</a></p>`,
        },
        {
            $id: 'fbfb4fc087ab0210ee0cb848cebb35e7',
            id: 'rsc_qs_u_regular_backups',
            htmlTemplate: `<div class="row">
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF Document</div>
</div>
<h4 style="color: #0078ae;">Data Backup Options</h4>
<p>To ensure the availabilty of your data, it's important to make regular backups. CISA has some backup options detailed here:</p>
<p><a aria-label="Learn more about data backup options." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf</span>    
  </a></p>
</div>
<div class="col-xs-6">
<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-wrench" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">Tool</div>
</div>
<h4 style="color: #0078ae;">Back up your Windows PC</h4>
<p>Based on your responses, you might benefit from a third party tool, which sets up automatic backups of Windows 10 and 11 operating systems:</p>
<p><a aria-label="Learn more about automatic backups." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}"  style="text-decoration: underline;" href="https://www.cisa.gov/resources-tools/services/windows-auto-backup" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/services/windows-auto-backup</span>    
  </a></p>
</div>
</div>`,
        },
    ],
})

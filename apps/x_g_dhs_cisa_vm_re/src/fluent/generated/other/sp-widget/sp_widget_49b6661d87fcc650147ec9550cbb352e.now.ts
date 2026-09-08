import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['49b6661d87fcc650147ec9550cbb352e'],
    name: 'RSC Question Boolean',
    clientScript: Now.include('./sp_widget_rsc_question_boolean/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_question_boolean/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_question_boolean/template.html'),
    customCss: Now.include('./sp_widget_rsc_question_boolean/style.scss'),
    id: 'rsc_question_boolean',
    linkScript: Now.include('./sp_widget_rsc_question_boolean/link-script.js'),
    public: true,
    angularProviders: [
        'aa58900687b08a50147ec9550cbb3590',
        'c56bbfd387156a50ee0cb848cebb3559',
        'b6fd93ba87b44e50147ec9550cbb3581',
    ],
    templates: [
        {
            $id: '138bc50687abc610ee0cb848cebb35a8',
            id: 'rsc_qs_sm_u_inc_response_plan',
            htmlTemplate: `<h4 style="color: #005288;">Understanding the Risks</h4>
<p>Without a defined plan for handling cybersecurity incidents, your organization may face longer downtimes, increased
    damage, and a slower recovery when an attack or disruption occurs. Cyber incidents, such as supply chain attacks or
    system outages, can disrupt your operations, compromise sensitive data, or damage your reputation. Having a clear
    incident response plan allows your organization to act quickly and minimize impact. In 2017, Heritage Valley Health
    System became a victim of the NotPetya ransomware attack. Following their recovery from the attack, upon
    investigation, the Office of Civil Rights (OCR) fined Heritage Valley Health for $950,000 due to lack of a backup
    and recovery plan.</p>
<br />
<h4 style="color: #005288;">Recommended Actions</h4>
<ul class="recommended-actions-ul">
    <li>
        <strong>Reference CPG items 2.S: Incident Response (IR) Plans and 5.A: Incident Planning and Preparedness
        </strong>
    </li>
    <li>
        <strong>Develop an Incident Response Plan:</strong> Create a structured plan outlining steps to identify,
        respond to, and recover from cyber incidents. Ensure that roles and responsibilities are clear and assigned.
    </li>
    <li>
        <strong>Practice Regular Drills:</strong> Conduct regular incident response exercises or simulations to ensure
        that all team members understand their roles and can act quickly in an actual event.</li>
    <li>
        <strong>Establish Communication Protocols:</strong> Include clear communication guidelines in your plan to
        ensure timely updates to stakeholders, team members, and, when necessary, external partners or customers.</li>
    <li>
        <strong>Maintain a List of Critical Assets:</strong> Identify and prioritize essential systems and data that
        must be protected and restored in the event of an incident. This ensures the most vital resources are addressed
        first.</li>
</ul>
<br>
<h4 style="color: #005288;">Featured Resource</h4>
<p>For guidance on creating and maintaining a strong incident response plan, refer to CISA’s free <strong>Incident
        Response Training</strong> course, which offers practical steps for incident handling and recovery.</p>
<br>
<p>

    <a aria-label="Learn more about Incident Response Training."
        ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url, 'external-link': c.nav.show_url}"
        href="https://www.cisa.gov/resources-tools/programs/Incident-Response-Training"
        target="_blank" rel="noopener noreferrer nofollow">
        <span ng-show="!c.nav.show_url">View Resource</span>
        <span class="dhs-link-styling"
            ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/programs/Incident-Response-Training</span>
    </a>

    <a aria-label="Learn More about Incident Response plans."
        ng-class="{'btn':!c.nav.show_url,'btn-outline-back':!c.nav.show_url, 'external-link': c.nav.show_url}"
        href="https://www.cisa.gov/sites/default/files/publications/Incident-Response-Plan-Basics_508c.pdf" target="_blank"
        rel="noopener noreferrer nofollow">
        <span ng-show="!c.nav.show_url">View Additional Resource</span>
        <span class="dhs-link-styling"
            ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/Incident-Response-Plan-Basics_508c.pdf</span>
    </a>

</p>`,
        },
        {
            $id: '16a746f78793ca50ee0cb848cebb3511',
            id: 'rsc_qs_u_mfa_enabled',
            htmlTemplate: `<h4 style="color: #005288;">Understanding the Risks</h4>
<p>Relying only on passwords for work accounts, especially those with sensitive data, leaves your organization
  vulnerable to security threats. Attackers can exploit weak or stolen credentials through password guessing, remote
  access services like RDP and SSH, or by using credentials obtained from phishing. Multi-Factor Authentication (MFA)
  adds crucial protection by requiring extra verification beyond passwords. November 12, 2024. The U.S. Department of
  Justice unsealed an indictment against two suspected Snowflake hackers, who breached more than 165 organizations using
  the services of the Snowflake cloud storage company. They demanded a ransom to keep the data secret. The attackers
  used information-stealing malware to compromise Snowflake accounts that were not protected by multi-factor
  authentication.</p>
<br />
<h4 style="color: #005288;">Recommended Actions</h4>
<ul class="recommended-actions-ul">
  <li><strong>Reference CPG item 2.H: Phishing-Resistant Multi-Factor Authentication</strong></li>
  <li><strong>Implement Strong MFA:</strong> Use the strongest MFA available for each asset to protect work accounts,
    particularly those that handle sensitive data.</li>
  <ul>
    <li style="list-style-type: disc;"><strong>Best:</strong> Whenever possible, use hardware-based MFA options like
      FIDO/WebAuthn or PKI-based solutions.</li>
    <li style="list-style-type: disc;"><strong>Better:</strong> If hardware options aren’t available, use mobile
      app-based soft tokens, such as push notifications with number matching or FIDO passkeys.</li>
    <li style="list-style-type: disc;"><strong>Good:</strong> Use SMS or voice-based MFA only as a last resort when
      other options aren’t feasible.</li>
  </ul>
  <li><strong>Apply MFA for All IT Accounts:</strong> Use MFA for all IT accounts that access organizational resources,
    especially for high-risk accounts like privileged administrative accounts.</li>
  <li><strong>Apply MFA for All OT Accounts:</strong> Enable MFA on any remotely accessible OT systems, including vendor
    and maintenance accounts, remote workstations, and human-machine interfaces (HMIs).</li>
</ul>
<br>
<h4 style="color: #005288;">Featured Resource</h4>
<p>Explore CISA’s <strong>Turn on MFA guide</strong> to implement MFA and enhance security for accounts that access
  sensitive data.
</p>
<br>
<p>

  <a aria-label="Learn more about multi-factor authentication."
    ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url, 'external-link': c.nav.show_url}"
    href="https://www.cisa.gov/secure-our-world/turn-mfa" target="_blank" rel="noopener noreferrer nofollow">
    <span ng-show="!c.nav.show_url">View Resource</span>
    <span class="dhs-link-styling" ng-show="c.nav.show_url">https://www.cisa.gov/secure-our-world/turn-mfa</span>
  </a>

  <a aria-label="Learn more about best practices for multi-factor authentication."
    ng-class="{'btn':!c.nav.show_url,'btn-outline-back':!c.nav.show_url, 'external-link': c.nav.show_url}"
    href="https://www.cisa.gov/topics/cybersecurity-best-practices/multifactor-authentication" target="_blank"
    rel="noopener noreferrer nofollow">
    <span ng-show="!c.nav.show_url">View Additional Resource</span>
    <span class="dhs-link-styling"
      ng-show="c.nav.show_url">https://www.cisa.gov/topics/cybersecurity-best-practices/multifactor-authentication</span>
  </a>

</p>`,
        },
        {
            $id: '26635a7387d3ca50ee0cb848cebb35a1',
            id: 'rsc_qs_u_security_features',
            htmlTemplate: `<h4 style="color: #005288;">Understanding the Risks</h4>
<p>Neglecting physical security measures for work devices increases the risk of unauthorized access, data breaches, and potential loss of sensitive information. If a device is lost, stolen, or otherwise accessed without proper safeguards, attackers can exploit it to install malware, steal data, or gain access to your organization's network. Implementing physical security controls is essential to protect your devices and the data they contain. On Nov 2, 2017, an employee of Coplin Health Systems had a laptop stolen from their car. Even though it was password protected, the data stored on the hard drive was not encrypted. This put PII of 43,000  patient at risk of exposure. By removing the hard drive, a thief can easily access the unencrypted data without the password.</p>
<br/>
<h4 style="color: #005288;">Recommended Actions</h4>
<ul class="recommended-actions-ul">
  <li>
    <strong>Reference CPG item 2.V: Prohibit Connection of Unauthorized Devices</strong>
  </li>
  <li>
    <strong>Enable Auto-Lock and Strong Authentication:</strong> Set devices to auto-lock after inactivity and secure access with PINs, passwords, or biometric methods.</li>
  <li>
    <strong>Activate Remote Wipe Capabilities:</strong> Ensure remote wipe features are enabled on all work devices to allow data erasure if a device is lost or stolen.</li>
  <li>
    <strong>Prohibit Unauthorized Devices:</strong> Establish policies that prevent unapproved USBs or other devices from connecting to IT and OT systems and disable AutoRun to reduce the risk of malware spreading.</li>
  <li>
    <strong>Store Devices Securely:</strong> When not in use, store devices in a secure location with limited access.</li>
</ul>
<br>
  <h4 style="color: #005288;">Featured Resource</h4>
  <p>To strengthen your organization’s device and data security, refer to CISA’s <strong>Protect the Physical Security of Your Digital Devices</strong> guide, which provides detailed steps on safeguarding your devices.
  </p>
  <br>
    <p>
      
      <a aria-label="Learn more about physical securtiy for your devices."ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url, 'external-link': c.nav.show_url}" href="https://www.cisa.gov/resources-tools/training/protect-physical-security-your-digital-devices" target="_blank" rel="noopener noreferrer nofollow">
        <span ng-show="!c.nav.show_url">View Resource</span>
        <span class="dhs-link-styling" ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/training/protect-physical-security-your-digital-devices</span>
      </a>

    </p>`,
        },
        {
            $id: '37659ef387d3ca50ee0cb848cebb35a8',
            id: 'rsc_qs_u_disable_svcs',
            htmlTemplate: `<h4 style="color: #005288;">Understanding the Risks</h4>
<p>Allowing unnecessary apps and features on work devices exposes your organization to additional security risks. Attackers often target unprotected services or applications to gain access, exploit vulnerabilities, and spread malware. Services like Remote Desktop Protocol (RDP) can provide attackers a direct route into your network if they’re not properly secured. In May 2017, the infamous Wannacry ransomware which infected banks, hospitals, telecom providers, and government institutions all over the world in at least 150 countries and on over 200,000 computers, was able to spread via a vulnerability in the SMB protocol. The SMB protocol provides necessary file and print sharing among Windows computers, but should not be enabled on Internet facing devices or exposed by wi-fi access.</p>
<br/>
<h4 style="color: #005288;">Recommended Actions</h4>
<ul class="recommended-actions-ul">
  <li>
    <strong>Reference CPG item 2.W: No Exploitable Services on the Internet</strong>
  </li>
  <li>
    <strong>Disable Unnecessary Apps and Features:</strong> Review and turn off any apps, network protocols, or services on work devices that aren’t essential to business operations. This reduces the risk of exploitation.</li>
  <li>
    <strong>Secure Public-Facing Services:</strong> If you must use services like RDP, make sure they are protected with appropriate security controls (e.g., strong authentication, monitoring) to prevent unauthorized access.</li>
  <li>
    <strong>Regularly Review Device Configurations:</strong> Periodically check work devices to ensure that no new, unnecessary apps or services have been added that could increase vulnerability.</li>
</ul>
<br>
  <h4 style="color: #005288;">Featured Resource</h4>
  <p>To help your organization securely manage app permissions and ensure only necessary apps are enabled, refer to CISA’s <strong>Manage Application Permissions, Privacy, and Security</strong> guide.</p>
  <br>
    <p>

      <a aria-label="Learn more about managing application permissions, privacy, and security." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url, 'external-link': c.nav.show_url}" href="https://www.cisa.gov/resources-tools/training/manage-application-permissions-privacy-and-security" target="_blank" rel="noopener noreferrer nofollow">
        <span ng-show="!c.nav.show_url">View Resource</span>
        <span class="dhs-link-styling" ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/training/manage-application-permissions-privacy-and-security</span>
      </a>

      <a aria-label="Learn more about securing your router." ng-class="{'btn':!c.nav.show_url,'btn-outline-back':!c.nav.show_url, 'external-link': c.nav.show_url}" href="https://www.cisa.gov/audiences/high-risk-communities/projectupskill/module5" target="_blank" rel="noopener noreferrer nofollow">
        <span ng-show="!c.nav.show_url">View Additional Resource</span>
        <span class="dhs-link-styling" ng-show="c.nav.show_url">https://www.cisa.gov/audiences/high-risk-communities/projectupskill/module5</span>
      </a>

    </p>`,
        },
        {
            $id: '4ef1da3387d3ca50ee0cb848cebb358b',
            id: 'rsc_qs_u_backup_auto',
            htmlTemplate: `<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF</div>
</div>
<h4 style="color: #0078ae;">Automatic Backups</h4>
<p>Establish regular automated backups and redundancies of key systems. Employ a backup solution that automatically and continuously backs up your business-critical data and system configurations. Regular backups protect against ransomware and malware attacks. Use on-site and remote backup methods to protect vulnerable information:</p>
<p><a aria-label="Learn more about automatic backups." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/publications/Cyber%2520Essentials%2520Toolkit%25205%252020201015_508.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/publications/Cyber%2520Essentials%2520Toolkit%25205%252020201015_508.pdf</span>  
  </a></p>`,
        },
        {
            $id: '7fd21a7387d3ca50ee0cb848cebb353b',
            id: 'rsc_qs_u_backup_access',
            htmlTemplate: `<div style="display: flex; flex-direction: row; padding-bottom: 5px;">
<div class="fa fa-file-pdf-o" style="color: #005288; padding-right: 3px;">&nbsp;</div>
<div style="color: #005288; font-weight: bold;">PDF</div>
</div>
<h4 style="color: #0078ae;">Access to Backups</h4>
<p>Prioritize backups (based off of the importance of the information) and have a schedule of what to bring back online when so that your business can still function during a cyberattack. Test your backup strategy before you need to use it to make sure you have full read-back verification, a method of preventing errors when information is relayed or repeated in a different form in order to confirm its accuracy:</p>
<p><a aria-label="Learn more about backups." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.nccoe.nist.gov/sites/default/files/legacy-files/msp-protecting-data-extended.pdf" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">Learn More</span> 
  <span ng-show="c.nav.show_url">https://www.nccoe.nist.gov/sites/default/files/legacy-files/msp-protecting-data-extended.pdf</span>  
 </a></p>`,
        },
        {
            $id: '8bb486378793ca50ee0cb848cebb352d',
            id: 'rsc_qs_u_pw_different',
            htmlTemplate: `<h4 style="color: #005288;">Understanding the Risk</h4>
<p>Allowing employees to use the same passwords across work accounts significantly increases your organization’s risk of
  unauthorized access. When employees reuse passwords, a breach in one account can open the door to attacks across your
  organization's work systems, potentially leading to data breaches, downtime, and even financial losses. For example, in 
  December of 2022, Norton Lifelock reported a security breach affecting 925,000 customers. The attack 
  exploited password reuse across multiple accounts. It took 21 days to fully secure all impacted accounts.</p>
<br />
<h4 style="color: #005288;">Recommended Actions</h4>
<ul class="recommended-actions-ul">
  <li><strong>Reference CPG item 2.C: Unique Credentials</strong></li>
  <li><strong>Require Unique Passwords for Each Work Account:</strong> Ensure that all work accounts use unique
    passwords to prevent cross-account breaches.</li>
  <li><strong>Update Default Credentials on all Hardware and Software:</strong> Require that staff change all default
    credentials as they may be physically labeled on the device or even readily available on the internet.</li>
  <li><strong>Provide an Enterprise-Level Password Manager:</strong> Provide a company password manager to make it
    easier for employees to use unique, long, and strong passwords.</li>
  <li><strong>Implement, Regularly Review, and Update Password Policies:</strong> Periodically check and update your
    organization’s password policies to align with evolving security standards and threats.</li>
</ul>
<br />
<h4 style="color: #005288;">Featured Resource</h4>
<p>Explore CISA’s <strong>Require Strong Passwords guide</strong> for actionable steps to strengthen your organization’s
  password policies and credential management practices.</p>
<br />
<p>
  <a aria-label="Learn more about requiring strong passwords"
    ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url, 'external-link': c.nav.show_url}"
    href="https://www.cisa.gov/secure-our-world/require-strong-passwords"
    target="_blank" rel="noopener noreferrer nofollow">
    <span ng-show="!c.nav.show_url">View Resource</span>
    <span class="dhs-link-styling"
      ng-show="c.nav.show_url">https://www.cisa.gov/secure-our-world/require-strong-passwords</span>
  </a>  
</p>`,
        },
        {
            $id: 'ac36d63787d3ca50ee0cb848cebb35f4',
            id: 'rsc_qs_u_software_updates',
            htmlTemplate: `<h4 style="color: #005288;">Understanding the Risks</h4>
<p>Regularly updating software and applications helps protect your organization from security vulnerabilities that attackers might exploit. Outdated software can expose systems to risks like unauthorized access, malware, and data breaches, particularly in public-facing applications. Keeping software current closes these gaps and strengthens your defenses against common tactics used by attackers. The Equifax data breach in September 2017 affected 147 million customers exposing names, social security numbers, birth dates, and other personal data. The attackers exploited a vulnerability known for 6 months which Equifax failed to patch. The attackers were able to navigate to many servers, found usernames/passwords in plaintext, and were free to exfiltrate data without being detected for months since Equifax had also failed to renew an encryption certificate.</p>
<br/>
<h4 style="color: #005288;">Recommended Actions</h4>
<ul class="recommended-actions-ul">
  <li><strong>Reference CPG item 1.E: Mitigating Known Vulnerabilities</strong></li>
  <li><strong>Consult CISA’s Known Exploited Vulnerabilities (KEV) Catalog:</strong> Regularly reference CISA’s KEV Catalog to identify and prioritize patching of high-risk vulnerabilities on critical devices.</li>
  <li><strong>Enable Auto-Updates Where Possible:</strong> Turn on automatic updates for software and applications on work devices to ensure timely security patches and reduce manual workload.</li>
  <li><strong>Apply Compensating Controls if Patching Isn’t Possible:</strong> For systems where patching may disrupt operations or isn’t feasible, implement additional safeguards (e.g., network segmentation, close monitoring) to minimize risk.</li>
</ul>
<br>
<h4 style="color: #005288;">Featured Resource</h4>
<p>For more guidance on staying secure by updating your software, explore CISA’s <strong>Update Software</strong> guide, which outlines best practices to keep systems current.</p>
<br>
<p>
  <a aria-label="Learn more about software updates." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url, 'external-link': c.nav.show_url}" href="https://www.cisa.gov/secure-our-world/update-software" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">View Resource</span> 
  <span class="dhs-link-styling" ng-show="c.nav.show_url">https://www.cisa.gov/secure-our-world/update-software</span>  
  </a>
  
  <a aria-label="Learn more about keeping device os and applications up to date." ng-class="{'btn':!c.nav.show_url,'btn-outline-back':!c.nav.show_url, 'external-link': c.nav.show_url}" href="https://www.cisa.gov/resources-tools/training/keep-your-devices-operating-system-and-applications-date" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">View Additional Resource</span> 
  <span class="dhs-link-styling" ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/training/keep-your-devices-operating-system-and-applications-date</span>  
  </a>
</p>`,
        },
        {
            $id: 'b6e49eb387d3ca50ee0cb848cebb35a4',
            id: 'rsc_qs_u_fw_av',
            htmlTemplate: `<h4 style="color: #005288;">Understanding the Risks</h4>
<p>Without essential protections like firewalls and antivirus software, work devices are highly vulnerable to external threats. Attackers can exploit weaknesses through vulnerabilities in public-facing applications, unpatched software, or unprotected network connections. These weaknesses can lead to malware infections, remote exploitation, or data theft, potentially causing operational disruptions and financial loss. In March of 2023, Fujitsu was compromised by malware and their investigation found evidence that personal and customer information was exfiltrated. Fujitsu responded by implementing a comprehensive suite of security tools for malware detection, automating and managing patches and upgrades, and employed AI technology to both predict future attacks and automate the response to an attack. These measures successfully reduced the frequency and cost of cyber attacks.</p>
<br/>
<h4 style="color: #005288;">Recommended Actions</h4>
<ul class="recommended-actions-ul">
  <li><strong>Reference CPG items 1.E: Mitigating Known Vulnerabilities and 2.F: Network Segmentation</strong></li>
  <li><strong>Install and Enable Firewalls and Antivirus Software:</strong> Ensure all work devices have active, up-to-date firewall and antivirus software to detect and block malicious activity.</li>
  <li><strong>Patch Known Vulnerabilities:</strong> Regularly update and patch software on all devices to close security gaps. For any systems that can’t be patched, apply other safeguards, like restricting access and monitoring closely.</li>
  <li><strong>Reference CISA’s Known Exploited Vulnerabilities (KEV) Catalog:</strong> Regularly consult CISA’s KEV Catalog for a list of known vulnerabilities and prioritize patching or mitigating these on all critical devices.</li>
  <li><strong>Use Network Segmentation:</strong> Limit connections to critical systems by requiring connections to pass through monitored, secure channels like firewalls or a demilitarized zone (DMZ). Deny unauthorized access by default.</li>
</ul>
<br>
<h4 style="color: #005288;">Featured Resource</h4>
<p>For further details on ensuring basic protections are in place for your organization’s work devices, explore CISA's <strong>Ensure OS, Antivirus, and Anti-Malware Protections are Active</strong> guide.</p>
<br>
<p>
  <a aria-label="Learn more about anti-virus and malware protections." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url, 'external-link': c.nav.show_url}" href="https://www.cisa.gov/resources-tools/training/ensure-your-os-antivirus-and-anti-malware-protections-are-active" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">View Resource</span> 
  <span class="dhs-link-styling" ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/training/ensure-your-os-antivirus-and-anti-malware-protections-are-active</span>  
  </a>
</p>`,
        },
        {
            $id: 'c4d686378793ca50ee0cb848cebb354a',
            id: 'rsc_qs_u_pw_strong',
            htmlTemplate: `<h4 style="color: #005288;">Understanding the Risks</h4>
<p>Using weak or short passwords for work accounts significantly increases the risk of unauthorized access to your organization's systems. Short passwords are more susceptible to these attacks because they have fewer possible combinations, making them easier to guess or crack. Attackers commonly use brute force tactics like guessing simple passwords, cracking password hashes, and using stolen credentials from other breaches. Implementing strong passwords significantly enhances security by increasing the complexity and reducing the likelihood of successful brute force attacks. Nvidia discovered a cyberattack on Feb. 23, 2022. Cyber-criminal group LAPSUS$ claimed responsibility for exfiltrating over 1 Terabyte of NVIDIA's proprietary data and employee personal information. They demanded that NVIDIA disable GPU limitations on crypto mining as well as publish source code for its drivers. A forensics team determined they were likely breached due to weak employee passwords such as "nvidia", "nvidia3d", and even "password."</p>
<br/>
<h4 style="color: #005288;">Recommended Actions</h4>
<ul class="recommended-actions-ul">
  <li>
    <strong>Reference CPG item 2.B: Minimum Password Strength</strong>
  </li>
  <li>
    <strong>Set a 16-Character Minimum:</strong> Require passwords of at least 16 characters for all IT systems, and for OT systems where possible.</li>
  <li>
    <strong>Use Passphrases or Password Managers:</strong> Encourage passphrases or provide an enterprise-level secure password manager to help employees easily create and remember long passwords.</li>
  <li>
    <strong>Apply Compensating Controls if Needed:</strong> If 16-character passwords aren’t possible, use other safeguards and keep a record of these exceptions.</li>
  <li>
    <strong>Monitor All Login Attempts:</strong> Track login attempts for assets that can’t support longer passwords to detect unauthorized access.</li>
  <li>
    <strong>Prioritize Upgrades:</strong> Plan to upgrade or replace systems that can’t meet the 16-character minimum to improve security over time.</li>
</ul>
<br/>
<h4 style="color: #005288;">Featured Resource</h4>
<p>For comprehensive guidance on how to implement strong, unique passwords across your organization, check out CISA’s training on Formulating Strong Passwords and PIN Codes.</p>
<br/>
<p>
  <a aria-label="Learn more about strong passwords." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url, 'external-link': c.nav.show_url}"class="btn btn-primary" href="https://www.cisa.gov/resources-tools/training/formulate-strong-passwords-and-pin-codes" target="_blank" rel="noopener noreferrer nofollow">
    <span ng-show="!c.nav.show_url">View Resource</span>
    <span class="dhs-link-styling" ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/training/formulate-strong-passwords-and-pin-codes</span>
  </a>
</p>`,
        },
        {
            $id: 'd180563f8793ca50ee0cb848cebb35a7',
            id: 'rsc_qs_u_backup_data',
            htmlTemplate: `<h4 style="color: #005288;">Understanding the Risks</h4>
<p>Without regular backups, your organization is exposed to threats that can lead to data loss and operational
  disruptions. Attackers can delete, encrypt, or block access to critical data, resulting in permanent loss of data,
  ransomware locking your files, and blocked access to restore data. Backups are essential to recover quickly after a
  serious incident, minimizing downtime and financial impact. A Pixar employee accidentally issued a faulty command
  which was supposed to deleted unneeded files, but instead started deleting all files. About 90% of the character
  models and assets for the movie Toy Story 2 were deleted. By sheer luck, an employee working from home on maternity
  leave had a copy of these files and Pixar was able to recover the lost data. The movie cost around $90 million and
  grossed nearly $500 million worldwide and it was all saved due to an offsite backup.</p>
<br />
<h4 style="color: #005288;">Recommended Actions</h4>
<ul class="recommended-actions-ul">
  <li><strong>Reference CPG item 2.R: System Backups</strong></li>
  <li><strong>Back Up All Essential Systems Regularly:</strong> Ensure all critical systems are backed up on a set
    schedule, at least once per year, though more frequent backups (daily or weekly) are recommended for sensitive data.
  </li>
  <li><strong>Store Backups Separately:</strong> Keep backups in a secure, isolated location—either offline or in a
    secure cloud—to protect them from ransomware and other threats that may target network-accessible backups.</li>
  <li><strong>Test Backups Regularly:</strong> Verify at least once a year that your backups are complete, current, and
    can be restored without issues.</li>
  <li><strong>Back Up Critical OT Data:</strong> For Operational Technology (OT) environments, back up essential data,
    including configurations, user roles, PLC logic, engineering drawings, and necessary tools, to enable quick recovery
    if needed.</li>
</ul>
<br>
<h4 style="color: #005288;">Featured Resource</h4>
<p>Backing up data is essential to protect against ransomware and other threats. Refer to CISA's <strong>How to Protect
    Data Stored on Your Devices</strong> guide for device-specific strategies to secure data, ensuring you can recover
  data if needed.</p>
<br>
<p>

  <a aria-label="Learn more about protecting stored data."
    ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url, 'external-link': c.nav.show_url}"
    href="https://www.cisa.gov/resources-tools/training/how-protect-data-stored-your-devices" target="_blank"
    rel="noopener noreferrer nofollow">
    <span ng-show="!c.nav.show_url">View Resource</span>
    <span class="dhs-link-styling"
      ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/training/how-protect-data-stored-your-devices</span>
  </a>

  <a aria-label="Learn more about cloud storage and services."
    ng-class="{'btn':!c.nav.show_url,'btn-outline-back':!c.nav.show_url, 'external-link': c.nav.show_url}"
    href="https://www.cisa.gov/resources-tools/training/get-most-out-cloud-storage-and-services-while-minimizing-risk" target="_blank"
    rel="noopener noreferrer nofollow">
    <span ng-show="!c.nav.show_url">View Additional Resource</span>
    <span class="dhs-link-styling"
      ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/training/get-most-out-cloud-storage-and-services-while-minimizing-risk</span>
  </a>

</p>`,
        },
        {
            $id: 'da222d1887759e50ee0cb848cebb35fd',
            id: 'rsc_qs_u_trusted_software',
            htmlTemplate: `<h4 style="color: #005288;">Understanding the Risks</h4>
<p>Installing software from untrusted sources can introduce serious security risks to your organization. Malicious or unverified software may contain hidden malware, spyware, or backdoors, which attackers can exploit to gain unauthorized access, steal data, or compromise operations. This is especially relevant in supply chain attacks, where compromised software is unknowingly installed within a trusted network. In April of 2019, a third party app developer, Cultura Colectiva, didn't protect their dataset with a password. Since Cultura Colectiva developed apps for Facebook, this oversight exposed 540 million Facebook user records to anyone.</p>
<br/>
<h4 style="color: #005288;">Recommended Actions</h4>
<ul class="recommended-actions-ul">
  <li><strong>Reference CPG item 2.Q: Hardware and Software Approval Process</strong></li>
  <li><strong>Use Only Trusted Sources:</strong> Require that all software and applications on work devices come from verified, reputable sources. Avoid downloads from unofficial sites to reduce malware risk.</li>
  <li><strong>Establish an Approval Process:</strong> Set up a formal process to approve any new software, applications, or updates before installation. Use an allowlist of trusted software and versions to ensure consistency.</li>
  <li><strong>Maintain a Software Allowlist:</strong> Create and update a list of approved software, specifying approved versions when possible. Limit installations to only the applications on this list.</li>
  <li><strong>Restrict Browser Extensions:</strong> Limit or monitor the use of browser extensions, as these can sometimes introduce vulnerabilities or spyware.</li>
</ul>
<br>
<h4 style="color: #005288;">Featured Resource</h4>
<p>For detailed guidance on securely vetting software and applications, refer to CISA’s <strong>Vet Technologies Before Adding Them to Your Network</strong> guide, which offers practical steps to verify software sources.</p>
<br>
<p>
  <a aria-label="Learn more about vetting technologies." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url, 'external-link': c.nav.show_url}" href="https://www.cisa.gov/resources-tools/training/vet-technologies-adding-them-your-network" target="_blank" rel="noopener noreferrer nofollow">
  <span ng-show="!c.nav.show_url">View Resource</span> 
  <span class="dhs-link-styling" ng-show="c.nav.show_url">https://www.cisa.gov/resources-tools/training/vet-technologies-adding-them-your-network</span>  
  </a>
</p>`,
        },
    ],
})

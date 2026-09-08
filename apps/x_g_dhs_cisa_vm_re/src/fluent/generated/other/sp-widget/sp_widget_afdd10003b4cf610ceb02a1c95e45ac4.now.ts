import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['afdd10003b4cf610ceb02a1c95e45ac4'],
    name: 'RSC Intake With Status Modal',
    clientScript: Now.include('./sp_widget_rsc_intake_with_status_modal/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_intake_with_status_modal/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_intake_with_status_modal/template.html'),
    customCss: Now.include('./sp_widget_rsc_intake_with_status_modal/style.scss'),
    hasPreview: true,
    id: 'rsc_intake_with_status_modal',
    linkScript: Now.include('./sp_widget_rsc_intake_with_status_modal/link-script.js'),
    optionSchema: [
        {
            name: 'intake_section',
            section: 'Data',
            defaultValue: 'irf_intake_contact_information',
            label: 'Default Intake Section',
            type: 'string',
        },
    ],
    public: true,
    angularProviders: [
        'b6fd93ba87b44e50147ec9550cbb3581',
        'e2ec38d93bc83e10ceb02a1c95e45a47',
        '0fb9f4193bc83e10ceb02a1c95e45ac8',
        'bc1158218749c2106fa97627cebb35f0',
    ],
    templates: [
        {
            $id: '0499234f33c07a50dfa2f432cd5c7bd5',
            id: 'rsc_intake_summary_wsm',
            htmlTemplate: `<form class="sd-form-pad ci-form-pad">
    <div id="rsc_summary_top" class="row">
        <div class="col-md-8" tabindex="0">
            <h1 class="sd-h1">Summary and Resources</h1>
        </div>
        <div class="col-md-4 mt-22">
            <div class="header-org">
                <img id="template_header_org_src" src="{{c.org_image_src}}" />
                <p class="dark-blue">
                    {{c.template_header_org_size}}
                </p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <hr class="horizontal-line" />
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">

            <!-- Thank for completion -->
            <div class="row">
                <div class="col-md-12">
                    <h2 class="sd-h2">
                        Thank you for completing the ReadySetCyber questionnaire!
                    </h2>
                    <p style="padding-top: 4px">
                        Below is the full list of tools, services, and resources from our collection that we recommend
                        you explore
                        to
                        help strengthen your organization's security posture.
                    </p>
                </div>
            </div>

            <!-- Login.gov Banner -->
            <div class="row pt-4" ng-if="!c.user.loggedIn">
                <div class="col-md-12">
                    <usa-alert variant="warning" role="alert" aria-live="assertive">
                        <usa-alert-heading role="heading" heading-level="3">
                          <strong>Create a Login.gov Account</strong>
                        </usa-alert-heading>
                        <usa-alert-text>
                            By creating a Login.gov account with your organization email address, we can link your
                            questionnaire responses to your organization. This important step enables you to create an
                            Organizational Account after submitting your questionnaire, so you can access your results
                            anytime and track your cybersecurity maturity over time.
                            <br/>

                            <div class="row pt-6">
                                <div class="col-md-12">
                                    <usa-button ng-click="c.loginNav()" aria-label="Create a Login.gov account">
                                        Create a Login.gov account
                                    </usa-button>
                                </div>
                            </div>


                        </usa-alert-text>
                    </usa-alert>
                </div>
            </div>

            <!-- Account Registration Banner -->
            <div class="row pt-4" ng-if="!c.user.account && c.user.loggedIn">
                <div class="col-md-12">
                    <usa-alert variant="warning" role="alert" aria-live="assertive">
                        <usa-alert-heading role="heading" heading-level="3">
                          <strong>Finish Your Account Registration</strong>
                        </usa-alert-heading>
                        <usa-alert-text>
                            Complete your organization's profile to link your questionnaire results to your entity. This
                            allows you
                            to:
                            <usa-unordered-list>
                              	<li>Enroll in Cyber Hygiene Services</li>
                                <li>Access your past results anytime</li>
                                <li>Revisit your customized recommended resources</li>
                                <li>Track how your organization's cybersecurity maturity improves over time</li>
                            </usa-unordered-list>

                            <usa-button ng-click="c.requestNav()"
                                aria-label="Finish your Organization Profile intake form">
                                Complete Organization Profile
                            </usa-button>

                        </usa-alert-text>
                    </usa-alert>
                </div>
            </div>

            <!-- Next Steps -->
            <div class="row">
                <div class="col-md-12">
                    <h2 class="dark-blue">Next Steps</h2>
                    <p>After reviewing your results, we recommend prioritizing following actions:</p>
                  	<usa-process-list>
                      
                      <usa-process-list-item>
        								<h4 usa-process-list-heading>Talk with your CISA Cybersecurity Advisor</h4>
        								<p class="">
                          If you have questions or want more custom-tailored CISA services, get in touch with your
                          CISA Cybersecurity Advisor. CISA has Cybersecurity Advisors in regions across the country to help critical
                           infrastructure organizations.
       									</p>
    									</usa-process-list-item>
                      
                      <usa-process-list-item>
        								<h4 usa-process-list-heading>Implement and Reassess</h4>
        								<p class="">
                          The ReadySetCyber tool is intended to support organizations throughout their
                          cybersecurity maturity journey. Return to ReadySetCyber to reassess your progress as you explore and implement
                          the recommended resources. Additionally, please consider sharing your feedback as we seek to
                         	continuously improve this resource matching tool.
       									</p>
    									</usa-process-list-item>
                      
                      <usa-process-list-item>
        								<usa-card-group class="remove-bullet">
                          <usa-card>
                            <usa-card-header>
                              <div class="header-title-flex">
                                <div class="card-title title-blue">
                                  Enroll in CISA's Cyber Hygiene Services
                                </div>
                              </div> 
                            </usa-card-header>
                            
    												<usa-card-body>
                            	Secure your internet-exposed attack surface with CISA's Cyber Hygiene Services. 
                        			Enroll today for comprehensive asset scanning and tailored cybersecurity solutions. 
                            </usa-card-body>
                            
                            <usa-card-footer class="irf-pt-30">
                       				<usa-button variant="primary" class="btn btn-primary"
                                   ng-click="c.navToCyhyEnrollment()"
                                   aria-label="Continue to Enrollment">Enroll Now</usa-button>
                    				</usa-card-footer>
    												
                          </usa-card>
                        </usa-card-group>
    									</usa-process-list-item>
                      
                  	</usa-process-list>
                    <!-- <ol>
                        <li><strong> Talk with your CISA Cybersecurity Advisor</strong>
                            <p>If you have questions or want more custom-tailored CISA services, get in touch with your
                                CISA
                                Cybersecurity
                                Advisor. CISA has Cybersecurity Advisors in regions across the country to help critical
                                infrastructure
                                organizations.</p>
                        </li>
                        <li><strong>Sign up for Cyber Hygiene Services</strong>
                            <p>CISA's Cyber Hygiene services help find systems connected to the internet that have weak
                                settings and
                                known
                                security problems. This helps organizations reduce their risk of threats by taking
                                proactive steps to
                                fix
                                potential attack points.</p>
                            
                        </li>
                        <li class="pt-15"><strong>Implement and Reassess</strong>
                            <p>The ReadySetCyber tool is intended to support organizations throughout their
                                cybersecurity maturity
                                journey. Return to ReadySetCyber to reassess your progress as you explore and implement
                                the recommended
                                resources. Additionally, please consider sharing your feedback as we seek to
                                continuously improve this
                                resource matching tool.</p>
                        </li>

                    </ol> -->
                </div>
            </div>

        </div>
    </div>

    <div ng-repeat="page in c.nav.pages">
        <div class="section-blue" ng-if="(page != 'rsc_intake_summary') && (page != 'rsc_question_introduction')"
            ng-include="page"></div>
    </div>

</form>`,
        },
        {
            $id: '3bfe382b334cba50dfa2f432cd5c7b18',
            id: 'rsc_question_introduction_wsm',
            htmlTemplate: `<form class="ci-form-pad" name="intro" novalidate>
  <div id="rsc_incident_response_top" class="row">
    <div class="col-md-9" tabindex="0">
      <h1 class="ci-h1">Fundamental Cybersecurity Practices</h1>
    </div>
    <div class="col-md-3 mt-22" ng-if="!c.nav.isSummaryPage()">
      <div class="row">
        <p class="dark-blue text-right"><strong>PRA # 1670-0051</strong></p>
      </div>
      <div class="row">
        <p class="dark-blue text-right">
          <strong>Expiration Date 3/31/2027</strong>
        </p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <hr class="horizontal-line" />
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <h2 class="dark-blue">Introduction</h2>
      <p>
        The following questions are based on the 38 Cross-Sector Cybersecurity Performance Goals (CPGs) and are
        organized into seven categories. These questions assess fundamental cybersecurity practices that are expected to
        be the foundations of any information security program, and help to establish a baseline understanding of an
        organization's cybersecurity maturity.
      </p>
      <p>
        For each "Not Started" response, you will be immediately provided with recommended resources that you can begin
        using right away or save for later action by using the "Print to PDF" option at the end of the questionnaire.
      </p>
      <p>
        For all other response types, you will see additional related questions to help further match CISA's recommended
        resources to your organization's specific needs.
      </p>
      <p>
        The resources recommended here are based on your responses to our questionnaire. This includes the tools that
        are provided and maintained by third-party developers and should not be considered as endorsed by CISA. We do
        not guarantee the performance, reliability, or suitability of these tools for your specific needs. You are
        responsible for evaluating the features of these tools and determining if the capabilities suit your unique
        situation.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      
      <!-- Email -->
      <div class="row question_box" ng-if="!c.data.isLoggedIn">
        <div class="col-md-12">
          
          <usa-label for="customer_email">
            <strong>Want to Save Your Responses?</strong>
          </usa-label>
          <usa-hint>
            Enter your organization email to link your responses. If you decide to create an organization account later
            using this email, you'll be able to retrieve and track your questionnaire results.
          </usa-hint>
          
          <!-- Validation -->
          <div class="red" aria-atomic="true" role="alert">
            <p class="mb-0" ng-if="intro.customer_email.$touched && !intro.customer_email.$valid">
              Error - Email is invalid</p>
          </div>
          
          <usa-text-input id="customer_email" name="customer_email" type="email" ng-model="c.rscForm.customer_email"
            ng-disabled="c.nav.isSummaryPage()"></usa-text-input>

        </div>
      </div>
      
    </div>
  </div>

</form>`,
        },
        {
            $id: '86fab0993bc83e10ceb02a1c95e45a64',
            id: 'rsc_security_best_practices_wsm_dekete',
            htmlTemplate: `<form class="ci-form-pad" name="security_practices" ng-keypress="($event.which===13)&&$event.preventDefault()" novalidate>
<div id="rsc_security_best_practices_top" class="row">
  <div class="col-md-8">
    <h1 class="ci-h1">
        Security Best Practices
    </h1>
  </div>
  <div class="col-md-4 mt-22" ng-if="!c.nav.isSummaryPage()">
    <div class="header-org">
      <img id="template_header_org_src" src="{{c.org_image_src}}" />
      <p class="dark-blue">
          {{c.template_header_org_size}}
      </p>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <hr class="horizontal-line" />
  </div>
</div>

<!--Introduction Text-->
<div class="row">
  <div class="col-md-12">
    <h2 class="dark-blue">Introduction</h2>
  </div>
</div>
<div class="row">
  <div class="col-md-12">

    <p>ReadySetCyber questionnaire is designed to support your organization in creating a secure, resilient
        cybersecurity environment. The questions are based on fundamental cybersecurity best practices and designed to
        provide you with tailored resources and guidance that are developed by CISA’s cybersecurity experts.</p>

    <p style="white-space: pre-line;">Each question addresses a key area of protection to help you understand and strengthen your organization’s cybersecurity foundation. For each <strong>"No/Unsure"</strong> response, you will be immediately provided with recommended guidance and resources that you can begin using right away or save for later action by using the "Print to PDF" option at the end of the questionnaire:    
    </p>
    <ul>
      <li class="li-override">
        <strong>Understanding the Risk:</strong> Explain why this security measure is essential,
          with practical examples of the threats it addresses.</li>
      <li class="li-override">
        <strong>Recommended Actions:</strong> Provides clear steps you can take to improve
          security in this area, with tips tailored for small organizations. You can act on these recommendations
          immediately or save them for later by using the “Print to PDF” option at the end in the “Summary and
          Resources” page.
      </li>
      <li class="li-override">
        <strong>Featured Resource:</strong> Offers guidance from CISA experts to help you put
          these actions into practice. Make sure to bookmark the suggested resources below for easy reference.</li>
      <ul>
        <li class="li-override">
          <usa-link href="https://www.cisa.gov/cybersecurity-performance-goals-cpgs" target="_blank">Cross-Sector Cybersecurity Performance Goals (CPGs)</usa-link>:The baseline set of
            cybersecurity practices that businesses and critical infrastructure owners can take to protect themselves
            against cyber threats</li>
        <li class="li-override">
          <usa-link href="https://www.cisa.gov/secure-our-world" target="_blank">Secure Our World</usa-link>: Simple ways we can take every day to protect ourselves, our
            families, and our business from online threats</li>
        <li class="li-override">
          <usa-link href="https://www.cisa.gov/audiences/high-risk-communities/projectupskill" target="_blank">Project Upskill</usa-link>: Simple, how-to guides for high-risk communities to improve
            their cybersecurity</li>
        <li class="li-override">
          <usa-link href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank">Known Exploited Vulnerability (KEV) Catalog</usa-link>: The authoritative source of
            vulnerabilities that have been exploited in the wild</li>
      </ul>
    </ul>

  </div>
</div>
<!--End Introduction Text-->

<div class="row">
  <div class="col-md-12">
    <p>
        Tooltips are available when you see the <i class="fa fa-question-circle-o" aria-hidden="true"></i> icon,
        simply click on the icon to get more information.
    </p>
  </div>
</div>

<!-- Email -->
<div class="row question_box" ng-if="!c.data.isLoggedIn">
  <div class="col-md-12">

    <usa-label for="customer_email">
      <strong>Want to Save Your Responses?</strong>
    </usa-label>
    <usa-hint>
        Enter your organization email to link your responses. If you decide to create an organization account later
        using this email, you'll be able to retrieve and track your questionnaire results.
    </usa-hint>

    <!-- Validation -->
    <div class="red" aria-atomic="true" role="alert">
      <p class="mb-0" ng-if="security_practices.customer_email.$touched && !security_practices.customer_email.$valid">
          Error - Email is invalid</p>
    </div>

    <usa-text-input id="customer_email" name="customer_email" type="email" ng-model="c.rscForm.customer_email" ng-disabled="c.nav.isSummaryPage()"></usa-text-input>

  </div>
</div>

<sp-widget widget="data.u_pw_different"></sp-widget>
<sp-widget widget="data.u_pw_strong"></sp-widget>
<sp-widget widget="data.u_mfa_enabled"></sp-widget>
<sp-widget widget="data.u_backup_data"></sp-widget>

<div ng-if="c.rscForm.elements.u_backup_data.value == 'yes'">
  <sp-widget widget="data.u_backup_auto"></sp-widget>
  <sp-widget widget="data.u_backup_access"></sp-widget>
</div>

<sp-widget widget="data.u_security_features"></sp-widget>
<sp-widget widget="data.u_fw_av"></sp-widget>
<sp-widget widget="data.u_disable_svcs"></sp-widget>
<sp-widget widget="data.u_software_updates"></sp-widget>
<sp-widget widget="data.u_trusted_software"></sp-widget>

<sp-widget widget="data.u_sm_inc_response_plan"></sp-widget>
<!--end questions-->
</form>`,
        },
        {
            $id: '913e455d3b0c3e10ceb02a1c95e45a3d',
            id: 'rsc_general_org_info_wsm',
            htmlTemplate: `<form class="ci-form-pad">
    <div id="rsc_general_org_info_top" class="row">
        <div class="col-md-8" tabindex="0">
            <h1 class="ci-h1">Regional Information</h1>
        </div>
        <div class="col-md-4 mt-22" ng-if="!c.nav.isSummaryPage()">
            <div class="header-org">
                <img id="template_header_org_src" src="{{c.org_image_src}}" />
                <p class="dark-blue">
                    {{c.template_header_org_size}}
                </p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <hr class="horizontal-line" />
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <h2 class="dark-blue">Your Regional Contact's Information</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div>
                <p>
                    CISA's program of work is carried out across the nation by personnel assigned to its 10 regional
                    offices. Our experts collaborate with critical infrastructure partners and communities at the
                    regional,
                    state, county, tribal, and local levels to:
                </p>
                <ul>
                    <li>
                        Support preparation, response, and recovery efforts for hazards
                        impacting critical infrastructure
                    </li>
                    <li>
                        Conduct and integrate infrastructure assessments and analysis,
                        including dependencies and cascading effects, on critical
                        infrastructure to influence decision-making at all phases of emergency
                        management
                    </li>
                    <li>
                        Facilitate information sharing between public and private sector
                        critical infrastructure partners
                    </li>
                    <li>
                        Improve situational awareness of cybersecurity risks and incidents
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Question 3 -->
    <div class="row blue-box">

        <div class="col-md-12 form-group">
            <usa-label for="u_hq_location">
                <strong>In what U.S state or territory is your organization headquartered?</strong>
            </usa-label>
            <!-- class="form-control"  -->
            <usa-select name="u_hq_location" id="u_hq_location" ng-model="c.rscForm.elements.u_hq_location.value"
                ng-change="c.state.recordState(c.rscForm.elements.u_hq_location.value)"
                ng-disabled="c.nav.isSummaryPage()">
                <option ng-repeat="state in c.data.states track by $index" value="{{state.name}}">
                    {{state.name}}
                </option>
            </usa-select>
        </div>
        <!-- Turn this into a widget -->
        <div ng-if="c.rscForm.elements.u_hq_location.value != ''">
            <widget id="rsc_region_info_modal"></widget>
        </div>
        <!-- End widget -->
    </div>
</form>`,
        },
        {
            $id: 'afc709d53b0c3e10ceb02a1c95e45a6b',
            id: 'rsc_intake_footer_wsm',
            htmlTemplate: `<div class="pt50 irf-mt-15" style="padding-left: 16px; padding-right: 16px">
  <div class="row irf-px-15">
    <div class="col-xs-12 btn-container">
      <div class="col-xs-6 col-sm-6 col-md-6 irf-py-15 irf-pr-15">
        <button
          ng-if="c.nav.currentPage > 0"
          class="btn btn-outline-back pull-left"
          type="button"
          ng-click="c.nav.prevPage()"
          aria-label="Back to previous page"
        >
          Back
        </button>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 irf-py-15 irf-pl-15">
        <!-- ng-if="c.nav.currentPage < c.nav.pages.length-1 && (c.nav.pages[c.nav.currentPage] != 'rsc_security_best_practices' || c.nav.pages[c.nav.currentPage] != 'rsc_security_best_practices')" -->
        <button
          ng-if="c.nav.currentPage < c.nav.pages.length-1"
          class="btn btn-dark-blue pull-right"
          type="button"
          ng-click="c.nav.nextPage()"
          aria-label="Next page"
        >
          Next
          <!--
          <div
            ng-if="c.nav.pages[c.nav.currentPage] != 'rsc_security_best_practices' && c.nav.pages[c.nav.currentPage] != 'rsc_incident_response'"
          >
            Next
          </div>
          <div
            ng-if="c.nav.pages[c.nav.currentPage] == 'rsc_security_best_practices' || c.nav.pages[c.nav.currentPage] == 'rsc_incident_response'"
          >
            Submit
          </div>
					-->
        </button>
      </div>
    </div>
  </div>
</div>
`,
        },
    ],
})

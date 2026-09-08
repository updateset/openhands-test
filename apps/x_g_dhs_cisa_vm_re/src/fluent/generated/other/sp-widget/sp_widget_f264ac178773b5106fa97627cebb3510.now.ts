import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['f264ac178773b5106fa97627cebb3510'],
    name: 'RSC Intake',
    clientScript: Now.include('./sp_widget_rsc_intake/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_intake/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_intake/template.html'),
    customCss: Now.include('./sp_widget_rsc_intake/style.scss'),
    hasPreview: true,
    id: 'rsc_intake',
    linkScript: Now.include('./sp_widget_rsc_intake/link-script.js'),
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
        '7294a0988709ce506fa97627cebb3583',
        'b6fd93ba87b44e50147ec9550cbb3581',
        'aa58900687b08a50147ec9550cbb3590',
        'bc1158218749c2106fa97627cebb35f0',
    ],
    templates: [
        {
            $id: '0cfe1ae387784e506fa97627cebb35b8',
            id: 'rsc_iam',
            htmlTemplate: `<form class="ci-form-pad">
  <div id="rsc_iam_top" class="row">
    <div class="col-md-9" tabindex="0">
      <h1 class="ci-h1">Identity Access Management (IAM)</h1>
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
 
        <!--Introduction Text-->
  <!--<div class="row">
    <div class="col-md-12">
      <h2 class="dark-blue">Introduction</h2>
    </div>
  </div>-->
  <div class="row">
    <div class="col-md-12">
      <p>
      Questions that examine identity and access management polices and procedures.
      </p>
    </div>
  </div>
    <!--End Introduction Text-->
  
  <div class="row">
    <div class="col-md-12">

      <p>
        Tooltips are available when you see the
        <i class="fa fa-question-circle-o" aria-hidden="true"></i> icon,
        simply click on the icon to get more information.
      </p>
    </div>
  </div>

  <!-- Baseline -->
  <sp-widget ng-if="c.data.org_size != 'large'" widget="data.qB1_1"></sp-widget>

  <!-- Conditional Questions -->
  <div ng-if="c.baselineValidation('u_iam_security')">
    <sp-widget widget="data.qC1_1"></sp-widget>
    <sp-widget widget="data.qC1_2"></sp-widget>
    <sp-widget widget="data.qC1_3"></sp-widget>
    <sp-widget widget="data.qC1_4"></sp-widget>
    <sp-widget widget="data.qC1_5"></sp-widget>
    <sp-widget widget="data.qC1_6"></sp-widget>
    <sp-widget widget="data.qC1_7"></sp-widget>
  </div>

</form>
`,
        },
        {
            $id: '1d2f60df8773b5106fa97627cebb35a4',
            id: 'rsc_intake_footer',
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
        {
            $id: '2d5a1d9f87f88e50147ec9550cbb35ff',
            id: 'rsc_modal_ci_subsector',
            htmlTemplate: `<div>
  <p>
    If applicable, please note the subsector that aligns with your organization's primary product, service, or function.
  </p>
</div>`,
        },
        {
            $id: '3521e66787784e506fa97627cebb35fe',
            id: 'rsc_supply_chain_risk_management',
            htmlTemplate: `<form class="ci-form-pad">
  <div id="rsc_supply_chain_risk_management_top" class="row">
    <div class="col-md-9" tabindex="0">
      <h1 class="ci-h1">Supply Chain Risk Management (SCRM)</h1>
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
      <p>
        Questions that examine an organization's supply chain risk management program or practices used to evaluate vendor security.
      </p>
      <p>
        Tooltips are available when you see the
        <i class="fa fa-question-circle-o" aria-hidden="true"></i> icon, simply
        hover over the icon to get more information.
      </p>
    </div>
  </div>

  <!-- Baseline -->
  <sp-widget ng-if="c.data.org_size != 'large'" widget="data.qB1_6"></sp-widget>

  <!-- Conditional Questions -->
  <div ng-if="c.baselineValidation('u_supply_chain_risk')">
    <sp-widget widget="data.qC6_1"></sp-widget>
    <sp-widget widget="data.qC6_2"></sp-widget>
    <sp-widget widget="data.qC6_3"></sp-widget>
  </div>
</form>
`,
        },
        {
            $id: '41f0226787784e506fa97627cebb3553',
            id: 'rsc_vulnerability_management',
            htmlTemplate: `<form class="ci-form-pad">
  <div id="rsc_vulnerability_management_top" class="row">
    <div class="col-md-9" tabindex="0">
      <h1 class="ci-h1">Vulnerability Management (VM)</h1>
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
      <p>
        Questions that examine an organization's vulnerability management policies and procedures.
      </p>
      <p>
        Tooltips are available when you see the
        <i class="fa fa-question-circle-o" aria-hidden="true"></i> icon, simply
        hover over the icon to get more information.
      </p>
    </div>
  </div>

  <!-- Baseline -->
  <sp-widget ng-if="c.data.org_size != 'large'" widget="data.qB1_5"></sp-widget>

  <!-- Conditional Questions -->
  <div ng-if="c.baselineValidation('u_vul_management')">
    <sp-widget widget="data.qC5_1"></sp-widget>
    <sp-widget widget="data.qC5_2"></sp-widget>
    <sp-widget widget="data.qC5_3"></sp-widget>
    <sp-widget widget="data.qC5_4"></sp-widget>
    <sp-widget widget="data.qC5_5"></sp-widget>
  </div>
</form>`,
        },
        {
            $id: '5e80a22787784e506fa97627cebb3596',
            id: 'rsc_governance_training',
            htmlTemplate: `<form class="ci-form-pad">
  <div id="rsc_governance_training_top" class="row">
    <div class="col-md-9" tabindex="0">
      <h1 class="ci-h1">Governance &amp; Training (G&amp;T)</h1>
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
      <p>
        Questions that examine governance and training practices across the organization to ensure security policies are implemented and understood.
      </p>
      <p>
        Tooltips are available when you see the
        <i class="fa fa-question-circle-o" aria-hidden="true"></i> icon, simply
        hover over the icon to get more information.
      </p>
    </div>
  </div>

  <!-- Baseline -->
  <sp-widget ng-if="c.data.org_size != 'large'" widget="data.qB1_4"></sp-widget>

  <!-- Conditional Questions -->
  <div ng-if="c.baselineValidation('u_governance_training')">
    <sp-widget widget="data.qC4_1"></sp-widget>
    <sp-widget widget="data.qC4_2"></sp-widget>
    <sp-widget widget="data.qC4_3"></sp-widget>
  </div>
</form>
`,
        },
        {
            $id: '79781d1f87f88e50147ec9550cbb3599',
            id: 'rsc_modal_ci_sector',
            htmlTemplate: `<div>
  <p>
    Your organization may fall under multiple critical infrastructure sectors. Please select the one that aligns with your organization's primary product, service, or function. Visit here to learn more about the 16 critical infrastructure sectors and if your organization is part of one: https://www.cisa.gov/topics/critical-infrastructure-security-and-resilience/critical-infrastructure-sectors</p>
</div>`,
        },
        {
            $id: '8291a26787784e506fa97627cebb359c',
            id: 'rsc_incident_response',
            htmlTemplate: `<form class="ci-form-pad">
  <div id="rsc_incident_response_top" class="row">
    <div class="col-md-9" tabindex="0">
      <h1 class="ci-h1">Incident Response (IR)</h1>
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
      <p> 
       Questions that examine an organization's incident response policies and procedures.
      </p>
      <p>
        Tooltips are available when you see the
        <i class="fa fa-question-circle-o" aria-hidden="true"></i> icon, simply
        hover over the icon to get more information.
      </p>
    </div>
  </div>

  <!-- Baseline -->
  <sp-widget ng-if="c.data.org_size != 'large'" widget="data.qB1_7"></sp-widget>

  <!-- Conditional Questions -->
  <div ng-if="c.baselineValidation('u_inc_response_plan')">
    <sp-widget widget="data.qC7_1"></sp-widget>
    <sp-widget widget="data.qC7_2"></sp-widget>
    <sp-widget widget="data.qC7_3"></sp-widget>
    <sp-widget widget="data.qC7_4"></sp-widget>
  </div>
</form>
`,
        },
        {
            $id: '8bd76c2d4712c2508d277d88c26d4315',
            id: 'rsc_question_introduction',
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
            $id: '8ccee89f8773b5106fa97627cebb35b9',
            id: 'rsc_intake_summary',
            htmlTemplate: `<style>
.remove-bullet{
  list-style-type: none !important;
}
  
.usa-process-list .usa-process-list__item{
  max-width: 100%;
}
  
.card-title {
  font-family: "Source Sans Pro Web", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  //line-height: 1.2;
  //min-height: 80px;
  //margin-top: 0;
  //margin-bottom: 0;

  /* CISA-IRF/H3 */
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
  
.title-blue {
  color: #005288;
  padding-top 20px;
}
  
.usa-card__body {
  color: $brand-primary;
}
</style>

<script>
  	var navToCyhyEnrollment = function () {
		var url = "/rsc?id=rsc_cyhy_enrollment_landing";
		window.open(url, "_self");
	};
</script>

<form class="sd-form-pad ci-form-pad">
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
              <br />

              <div class="row pt-6">
                <div class="col-md-12">
                  <usa-button ng-click="c.loginNav()" aria-label="Login or create an account">
                    Login or create an account
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

              <usa-button ng-click="c.requestNav()" aria-label="Finish your Organization Profile intake form">
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
              <h3 usa-process-list-heading>Talk with your CISA Cybersecurity Advisor</h3>
              <p class="">
                If you have questions or want more custom-tailored CISA services, get in touch with your
                CISA Cybersecurity Advisor. CISA has Cybersecurity Advisors in regions across the country to help
                critical
                infrastructure organizations.
              </p>
            </usa-process-list-item>

            <usa-process-list-item>
              <h3 usa-process-list-heading>Implement and Reassess</h3>
              <p class="">
                The ReadySetCyber tool is intended to support organizations throughout their
                cybersecurity maturity journey. Return to ReadySetCyber to reassess your progress as you explore and
                implement
                the recommended resources. Additionally, please consider sharing your feedback as we seek to
                continuously improve this resource matching tool.
              </p>
            </usa-process-list-item>

            <usa-process-list-item>
              <usa-card-group class="remove-bullet">
                <usa-card>
                  <usa-card-header heading-level="3">
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
                    <usa-button onclick="window.open('/rsc?id=rsc_cyhy_enrollment_landing', '_self')"
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
            $id: '8fbed6e387784e506fa97627cebb353e',
            id: 'rsc_baseline',
            htmlTemplate: `<form class="ci-form-pad">
  <div class="row">
    <div class="col-md-9">
      <h1 class="ci-h1">
        Baseline
      </h1>
    </div>
    <div class="col-md-3">
      <div class="row">
        <p class="dark-blue text-right"><strong>PRA # 1670-0051</strong></p>
      </div>
      <div class="row">
        <p class="dark-blue text-right"><strong>Expiration Date 3/31/2027</strong></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <hr class="horizontal-line" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et
        dolore
        magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt
        ut
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et d
      </p>-->
        <p>
          Tooltips are available when you see the <i class="fa fa-question-circle-o" aria-hidden="true"></i> icon,
          simply hover over the icon to get more information.
        </p>
      </div>
    </div>

    <!-- 7 questions so far -->

    <sp-widget widget="data.qB1_1"></sp-widget>
    <sp-widget widget="data.qB1_2"></sp-widget>
    <sp-widget widget="data.qB1_3"></sp-widget>
    <sp-widget widget="data.qB1_4"></sp-widget>
    <sp-widget widget="data.qB1_5"></sp-widget>
    <sp-widget widget="data.qB1_6"></sp-widget>
    <sp-widget widget="data.qB1_7"></sp-widget>
  </div>

</form>`,
        },
        {
            $id: '97c1e66787784e506fa97627cebb35c4',
            id: 'rsc_org_specific_info',
            htmlTemplate: `<form class="ci-form-pad" name="osi" novalidate>
  <div class="row">
    <div class="col-md-12">
      <h1 class="ci-h1">Organization Specific Information</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <hr class="horizontal-line" />
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et
        dolore
        magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt
        ut
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et d
      </p>-->
      <p>
        Tooltips are available when you see the
        <i class="fa fa-question-circle-o" aria-hidden="true"></i> icon, simply
        hover over the icon to get more information.
      </p>
    </div>
  </div>

  <!-- D1.1 -->
  <div class="row blue-box">
    <div class="col-md-12">
      <h2 class="dark-blue pb-30">Question 1</h2>
    </div>
    <div class="col-md-12 form-group">
      <label for="org_name"
        ><strong>What is your organization's name?</strong></label
      >
      <input
        type="text"
        class="form-control"
        name="u_org_name"
        id="u_org_name"
        ng-model="c.rscForm.elements['u_org_name'].value"
        ng-disabled="c.nav.isSummaryPage()"
      />
    </div>
  </div>

  <!-- D1.10 -->
  <div class="row blue-box">
    <div class="col-md-12">
      <h2 class="dark-blue pb-30">Question 2</h2>
    </div>
    <div class="col-md-12 form-group">
      <label for="hq_address"><strong>Headquarters Address </strong></label>
      <input
        type="text"
        class="form-control"
        name="u_hq_location"
        id="u_hq_location"
        ng-model="c.rscForm.elements['u_hq_location'].value"
        ng-disabled="c.nav.isSummaryPage()"
      />
    </div>
  </div>

  <sp-widget widget="data.qD1_2"></sp-widget>
  <sp-widget widget="data.qD1_3"></sp-widget>

  <!-- D1.11 -->
  <div class="row blue-box">
    <div class="col-md-12">
      <h2 class="dark-blue pb-30">Question 5</h2>
    </div>
    <div class="col-md-12 form-group">
      <label for="u_cyber_services_used"
        ><strong
          >What cybersecurity services are currently in use at your
          organization?</strong
        ></label
      >
      <div class="row">
        <div class="col-xs-6">
          <label class="checkbox-inline"
            ><input
              type="checkbox"
              id="firewall"
              index="0"
              ng-model="firewall"
              ng-change="c.setCheckbox('u_cyber_services_used','Firewall and Network Security', firewall)"
              ng-disabled="c.isSummaryPage()"
            />Firewall and Network Security</label
          >
        </div>
        <div class="col-xs-6">
          <label class="checkbox-inline"
            ><input
              type="checkbox"
              id="siem"
              index="1"
              ng-model="siem"
              ng-change="c.setCheckbox('u_cyber_services_used','Security Information and Event Management (SIEM)', siem)"
              ng-disabled="c.isSummaryPage()"
            />Security Information and Event Management (SIEM)</label
          >
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6">
          <label class="checkbox-inline"
            ><input
              type="checkbox"
              id="endpoint"
              index="2"
              ng-model="endpoint"
              ng-change="c.setCheckbox('u_cyber_services_used','Endpoint Protection', endpoint)"
              ng-disabled="c.isSummaryPage()"
            />Endpoint Protection</label
          >
        </div>
        <div class="col-xs-6">
          <label class="checkbox-inline"
            ><input
              type="checkbox"
              id="idps"
              index="3"
              ng-model="idps"
              ng-change="c.setCheckbox('u_cyber_services_used','Intrusion Detection and Prevention Systems (IDPS)', idps)"
              ng-disabled="c.isSummaryPage()"
            />Intrusion Detection and Prevention Systems (IDPS)</label
          >
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6">
          <label class="checkbox-inline"
            ><input
              type="checkbox"
              id="ams"
              index="4"
              ng-model="ams"
              ng-change="c.setCheckbox('u_cyber_services_used','Anti-Malware Software', ams)"
              ng-disabled="c.isSummaryPage()"
            />Anti-Malware Software</label
          >
        </div>
        <div class="col-xs-6">
          <label class="checkbox-inline"
            ><input
              type="checkbox"
              id="dep"
              index="5"
              ng-model="dep"
              ng-change="c.setCheckbox('u_cyber_services_used','Data Encryption and Protection', dep)"
              ng-disabled="c.isSummaryPage()"
            />Data Encryption and Protection</label
          >
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6">
          <label class="checkbox-inline"
            ><input
              type="checkbox"
              id="iam"
              index="6"
              ng-model="iam"
              ng-change="c.setCheckbox('u_cyber_services_used','Identity and Access Management (IAM)', iam)"
              ng-disabled="c.isSummaryPage()"
            />Identity and Access Management (IAM)</label
          >
        </div>
        <div class="col-xs-6">
          <label class="checkbox-inline"
            ><input
              type="checkbox"
              id="usat"
              index="7"
              ng-model="usat"
              ng-change="c.setCheckbox('u_cyber_services_used','User Security Awareness Training', usat)"
              ng-disabled="c.isSummaryPage()"
            />User Security Awareness Training</label
          >
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6">
          <label class="checkbox-inline"
            ><input
              type="checkbox"
              id="other"
              index="8"
              ng-model="other"
              ng-change="c.setCheckbox('u_cyber_services_used','Other', other)"
              ng-disabled="c.isSummaryPage()"
            />Other</label
          >
        </div>
      </div>
    </div>
  </div>

  <!-- D1.13 -->
  <div class="row blue-box">
    <div class="col-md-12">
      <h2 class="dark-blue pb-30">Question 6</h2>
    </div>
    <div class="col-md-12 form-group">
      <label for="cyber_challenge"
        ><strong
          >What is the greatest cybersecurity challenge facing your
          organization?</strong
        ></label
      >
      <select
        class="form-control"
        name="u_cyber_challenge"
        id="u_cyber_challenge"
        ng-model="c.rscForm.elements['u_cyber_challenge'].value"
      >
        <option>- Select -</option>
        <option>Employee cybersecurity awareness gaps</option>
        <option>Limited resources for security measures</option>
        <option>Adapting to evolving threat landscape</option>
        <option>Compliance complexities and obligations</option>
        <option>Other</option>
      </select>
    </div>
  </div>

  <!-- D1.14 -->
  <div class="row blue-box">
    <div class="col-md-12">
      <h2 class="dark-blue pb-30">Question 7</h2>
    </div>
    <div class="col-md-12 form-group">
      <label for="rsc_ref_source"
        ><strong>How did you hear about ReadySetCyber?</strong></label
      >
      <select
        class="form-control"
        name="u_rsc_ref_source"
        id="u_rsc_ref_source"
        ng-model="c.rscForm.elements['u_rsc_ref_source'].value"
      >
        <option>- Select -</option>
        <option>Social Media (Facebook, X, Instagram, etc.)</option>
        <option>Recommendation from a friend or colleague</option>
        <option>Online Search (Google, Bing, etc.)</option>
        <option>News Article or Blog Post</option>
        <option>Professional Networking Site (LinkedIn, etc.)</option>
        <option>Podcast or Webinar</option>
        <option>Conference or Event</option>
        <option>Other</option>
      </select>
    </div>
  </div>

  <!-- D1.6 -->
  <div class="row blue-box">
    <div class="col-md-12">
      <h2 class="dark-blue pb-30">Question 8</h2>
    </div>
    <div class="col-md-12 form-group">
      <label for="org_website"><strong>Organization Website </strong></label>
      <input
        type="text"
        class="form-control"
        name="u_org_website"
        id="u_org_website"
        ng-model="c.rscForm.elements['u_org_website'].value"
        ng-disabled="c.nav.isSummaryPage()"
      />
    </div>
  </div>

  <!-- D1.7 -->
  <div class="row blue-box">
    <div class="col-md-12">
      <h2 class="dark-blue pb-30">Question 9</h2>
    </div>
    <div class="col-md-12 form-group">
      <label for="contact_name"><strong>Contact Name</strong></label>
      <input
        type="text"
        class="form-control"
        name="u_contact_name"
        id="u_contact_name"
        ng-model="c.rscForm.elements['u_contact_name'].value"
        ng-disabled="c.nav.isSummaryPage()"
      />
    </div>
  </div>

  <!-- D1.8 -->
  <div class="row blue-box">
    <div class="col-md-12">
      <h2 class="dark-blue pb-30">Question 10</h2>
    </div>
    <div class="col-md-12 form-group">
      <label for="u_contact_email"><strong>Contact Email</strong></label>
      <span
        style="color: #d54309"
        ng-show="osi.u_contact_email.$dirty && osi.u_contact_email.$invalid"
      >
        <span ng-show="osi.u_contact_email.$error.email"
          >Please enter a valid email</span
        >
      </span>
      <input
        type="email"
        class="form-control"
        name="u_contact_email"
        id="u_contact_email"
        ng-model="c.rscForm.elements['u_contact_email'].value"
        ng-disabled="c.nav.isSummaryPage()"
      />
    </div>
  </div>

  <!-- D1.9 -->
  <!-- <div class="row blue-box">
        <div class="col-md-12">
            <h2 class="dark-blue pb-30">Question 11</h2>
        </div>
        <div class="col-md-12 form-group">
            <label for="u_confirm_contact_email"><strong>Confirm Contact Email </strong></label>
            <span style="color:#D54309" ng-show="osi.u_confirm_contact_email.$dirty && osi.u_confirm_contact_email.$invalid">
                <span ng-show="osi.u_confirm_contact_email.$error.required">Email is required</span>
                <span ng-show="osi.u_confirm_contact_email.$error.email">Please enter a valid email</span>
            </span>
            <span style="color:#D54309" ng-show="osi.u_confirm_contact_email.$dirty && c.emailMatch == false">                
                <span ng-show="c.emailMatch == false && !osi.u_confirm_contact_email.$invalid">Emails do not match</span>
            </span>
            <input type="email" class="form-control" name="u_confirm_contact_email" id="u_confirm_contact_email" ng-change="c.emailConfirmation()" ng-model="c.confirm_email" ng-disabled="c.nav.isSummaryPage()">
        </div>
    </div> -->

  <sp-widget widget="data.qD1_12"></sp-widget>
</form>
`,
        },
        {
            $id: '991e5a6387784e506fa97627cebb35c7',
            id: 'rsc_general_org_info',
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

  <!--Introduction Text
  <div class="row">
    <div class="col-md-12">
      <h2 class="dark-blue">Introduction</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <p>
        Welcome to ReadySetCyber, CISA's initiative to simplify and customize
        the way our partners and potential collaborators navigate the wealth of
        information on cybersecurity best practices. Our goal is to make process
        of working with CISA more intuitive and user-friendly so that every
        organization, regardless of size, can spend more time meeting business
        goals and less time sifting through cybersecurity resources.
      </p>
      <p>
        The following questions are based on CISA's Cybersecurity Performance
        Goals (CPG) and are designed for stakeholders who need help prioritizing
        actions to help them to reduce the likelihood and impact of damaging
        intrusions. Organizations of all sizes and resourcing, however, will
        come away from ReadySetCyber with a customized roadmap of actionable
        strategies, tools, and resources to effectively mitigate their unique
        risks.
      </p>
      <p>
        Tooltips are avaliable when you see the <i class="fa fa-question-circle-o" aria-hidden="true"></i> icon, simply hover over the icon to get more information.
      </p>
    </div>
  </div>-->
  <!-- <div class="row">
        <div class="col-md-12">
            <h2 class="dark-blue">Contact Information</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <p>
                You can start your questionnaire right away or you can enter your email
                to save your progress as you go – no need to finish it all at once!
                Plus, if you decide to create an account later, we'll have your
                responses ready for a quick setup. It's totally up to you – start now or
                save as you go.
            </p>
        </div>
    </div> -->

  <!-- Blue Boxes: Questions Start -->
  <!-- Email -->
  <!-- <div class="row blue-box">
        <div class="col-md-12 form-group">
            <label for="u_contact_email">
              <strong>Please Enter Your Email</strong> (Optional)
          	</label>
            <input
              type="text"
              class="form-control"
              name="u_contact_email"
              id="u_contact_email"
              ng-model="c.rscForm.elements.u_contact_email.value"
              ng-disabled="c.nav.isSummaryPage()"
            />
        </div>
    </div> -->

  <!-- D1.14 -->
  <!-- <div class="row blue-box">
        <div class="col-md-12 form-group">
            <label for="u_rsc_ref_source">
              <strong>How did you hear about ReadySetCyber?</strong>
          	</label>
            <select
              class="form-control"
              name="u_rsc_ref_source"
              id="u_rsc_ref_source"
              ng-model="c.rscForm.elements['u_rsc_ref_source'].value"
              ng-disabled="c.nav.isSummaryPage()"
            >
              <option>Social Media (Facebook, X, Instagram, etc.)</option>
              <option>Recommendation from a friend or colleague</option>
              <option>Online Search (Google, Bing, etc.)</option>
              <option>News Article or Blog Post</option>
              <option>Professional Networking Site (LinkedIn, etc.)</option>
              <option>Podcast or Webinar</option>
              <option>Conference or Event</option>
              <option>Other</option>
            </select>
        </div>
    </div> -->

  <!-- D1.13 -->
  <!-- <div class="row blue-box">
        <div class="col-md-12 form-group">
            <label for="u_cyber_challenge">
							<strong>What is the greatest cybersecurity challenge facing your organization?</strong>
          	</label>
            <select
              class="form-control"
              name="u_cyber_challenge"
              id="u_cyber_challenge"
              ng-model="c.rscForm.elements['u_cyber_challenge'].value"
              ng-disabled="c.nav.isSummaryPage()"
            >
              <option>Employee cybersecurity awareness gaps</option>
              <option>Limited resources for security measures</option>
              <option>Adapting to evolving threat landscape</option>
              <option>Compliance complexities and obligations</option>
              <option>Other</option>
            </select>
        </div>
    </div> -->

  <!-- Org Specific Info -->
  <!-- Line -->
  <!-- <div class="row">
        <div class="col-md-12">
            <hr class="horizontal-line" />
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <h2 class="dark-blue">Organization Information</h2>
        </div>
    </div> -->

  <!-- D1.1 -->
  <!-- <div class="row blue-box">
        <div class="col-md-12 form-group">
            <label for="u_org_name">
              <strong>What is your organization's name?</strong>
          	</label>
            <input
              type="text"
              class="form-control"
              name="u_org_name"
              id="u_org_name"
              ng-model="c.rscForm.elements['u_org_name'].value"
              ng-disabled="c.nav.isSummaryPage()"
            />
        </div>
    </div> -->

  <!-- D1.10 -->
  <!-- <div class="row blue-box">
        <div class="col-md-12 form-group">
            <label for="u_hq_location">
              <strong>Headquarters Address</strong>
          	</label>
            <input
              type="text"
              class="form-control"
              name="u_hq_location"
              id="u_hq_location"
              ng-model="c.rscForm.elements['u_hq_location'].value"
              ng-disabled="c.nav.isSummaryPage()"
            />
        </div>
    </div>

    <sp-widget widget="data.qD1_2"></sp-widget>
    <sp-widget widget="data.qD1_3"></sp-widget> -->

  <!-- D1.11 -->
  <!-- <div class="row blue-box">
        <div class="col-md-12 form-group">
            <label for="u_cyber_services_used">
              <strong>What cybersecurity services are currently in use at your organization?</strong>
          	</label>
            <div class="row">
                <div class="col-xs-6">
                    <label for="firewall" class="checkbox-inline">
                      <input
                        type="checkbox"
                        id="firewall"
                        index="0"
                        ng-model="firewall"
                        ng-change="c.setCheckbox('u_cyber_services_used','Firewall and Network Security', firewall)"
                        ng-disabled="c.nav.isSummaryPage()"
                      />
                      Firewall and Network Security
                  	</label>
                </div>
                <div class="col-xs-6">
                    <label for="siem" class="checkbox-inline">
                      <input
                        type="checkbox"
                        id="siem"
                        index="1"
                        ng-model="siem"
                        ng-change="c.setCheckbox('u_cyber_services_used','Security Information and Event Management (SIEM)', siem)"
                        ng-disabled="c.nav.isSummaryPage()"
                      />
                      Security Information and Event Management (SIEM)
                  	</label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6">
                    <label for="endpoint" class="checkbox-inline">
                      <input
                        type="checkbox"
                        id="endpoint"
                        index="2"
                        ng-model="endpoint"
                        ng-change="c.setCheckbox('u_cyber_services_used','Endpoint Protection', endpoint)"
                        ng-disabled="c.nav.isSummaryPage()"
                      />
                      Endpoint Protection
                  	</label>
                </div>
                <div class="col-xs-6">
                    <label for="idps" class="checkbox-inline">
                      <input
                        type="checkbox"
                        id="idps"
                        index="3"
                        ng-model="idps"
                        ng-change="c.setCheckbox('u_cyber_services_used','Intrusion Detection and Prevention Systems (IDPS)', idps)"
                        ng-disabled="c.nav.isSummaryPage()"
                      />
                      Intrusion Detection and Prevention Systems (IDPS)
                  	</label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6">
                    <label for="ams" class="checkbox-inline">
                      <input
                        type="checkbox"
                        id="ams"
                        index="4"
                        ng-model="ams"
                        ng-change="c.setCheckbox('u_cyber_services_used','Anti-Malware Software', ams)"
                        ng-disabled="c.nav.isSummaryPage()"
                      />
                      Anti-Malware Software
                  	</label>
                </div>
                <div class="col-xs-6">
                    <label for="dep" class="checkbox-inline">
                      <input
                        type="checkbox"
                        id="dep"
                        index="5"
                        ng-model="dep"
                        ng-change="c.setCheckbox('u_cyber_services_used','Data Encryption and Protection', dep)"
                        ng-disabled="c.nav.isSummaryPage()"
                      />
                      Data Encryption and Protection
                  	</label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6">
                    <label for="iam" class="checkbox-inline">
                      <input
                        type="checkbox"
                        id="iam"
                        index="6"
                        ng-model="iam"
                        ng-change="c.setCheckbox('u_cyber_services_used','Identity and Access Management (IAM)', iam)"
                        ng-disabled="c.nav.isSummaryPage()"
                      />
                      Identity and Access Management (IAM)
                  	</label>
                </div>
                <div class="col-xs-6">
                    <label for="usat" class="checkbox-inline">
                      <input
                        type="checkbox"
                        id="usat"
                        index="7"
                        ng-model="usat"
                        ng-change="c.setCheckbox('u_cyber_services_used','User Security Awareness Training', usat)"
                        ng-disabled="c.nav.isSummaryPage()"
                      />User Security Awareness Training
                  	</label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6">
                    <label for="other" class="checkbox-inline">
                      <input
                        type="checkbox"
                        id="other"
                        index="8"
                        ng-model="other"
                        ng-change="c.setCheckbox('u_cyber_services_used','Other', other)"
                        ng-disabled="c.nav.isSummaryPage()"
                      />Other
                  	</label>
                </div>
            </div>
        </div>
    </div> -->

  <!-- D1.6 -->
  <!-- <div class="row blue-box">
        <div class="col-md-12 form-group">
            <label for="u_org_website">
              <strong>Organization Website</strong>
          	</label>
            <input
              type="text"
              class="form-control"
              name="u_org_website"
              id="u_org_website"
              ng-model="c.rscForm.elements['u_org_website'].value"
              ng-disabled="c.nav.isSummaryPage()"
            />
        </div>
    </div> -->

  <!-- D1.7 -->
  <!-- <div class="row blue-box">
        <div class="col-md-12 form-group">
            <label for="u_contact_name">
              <strong>Contact Name</strong>
          	</label>
            <input
              type="text"
              class="form-control"
              name="u_contact_name"
              id="u_contact_name"
              ng-model="c.rscForm.elements['u_contact_name'].value"
              ng-disabled="c.nav.isSummaryPage()"
            />
        </div>
    </div> -->

  <!-- D1.8 -->
  <!-- <div class="row blue-box">
        <div class="col-md-12 form-group">
            <label for="u_contact_email">
              <strong>Contact Email</strong>
          	</label>
            <span
              style="color: #d54309"
              ng-show="osi.u_contact_email.$dirty && osi.u_contact_email.$invalid"
            >
              <span ng-show="osi.u_contact_email.$error.email">
                Please enter a valid email
              </span>
            </span>
            <input
              type="email"
              class="form-control"
              name="u_contact_email"
              id="u_contact_email"
              ng-model="c.rscForm.elements['u_contact_email'].value"
              ng-disabled="c.nav.isSummaryPage()"
            />
        </div>
    </div>

    <sp-widget widget="data.qD1_12"></sp-widget> -->

  <!-- Line -->
  <!-- <div class="row">
        <div class="col-md-12">
            <hr class="horizontal-line" />
        </div>
    </div> -->

  <!-- Question 1 -->
  <!-- <div class="row blue-box">
        <div class="col-md-12 form-group">
            <label for="u_ci_sector">
                <strong>Does your organization fall into one of the following critical infrastructure sectors?</strong>
                <button class='tooltip-button' ng-click="c.toggle_global_modal('rsc_modal_ci_sector')" aria-label="u_ci_sector tooltip">
                    <i                        
                        class="fa fa-question-circle light-blue"
                        aria-hidden="true"
                    ></i>
                </button>                
            </label>
            <select
                class="form-control"
                name="u_ci_sector"
                id="u_ci_sector"
                ng-model="c.rscForm.elements.u_ci_sector.value"
                ng-disabled="c.nav.isSummaryPage()"
                ng-change="c.rscForm.elements.u_ci_subsector.value = ''"
                required
            >
                <option
                    ng-repeat="sector in data.sectors track by $index"
                    value="{{sector.name}}"
                >
                    {{sector.name}}
                </option>
            </select>
        </div>
    </div> -->

  <!-- Question 2 -->
  <!-- <div class="row blue-box">

        <div class="col-md-12 form-group">
            <label for="u_ci_subsector">
                <strong>Which critical infrastructure subsector is your organization aligned to?</strong>
                <button class='tooltip-button' ng-click="c.toggle_global_modal('rsc_modal_ci_subsector')" aria-label="u_ci_subsector tooltip">
                    <i                
                        class="fa fa-question-circle light-blue"
                        aria-hidden="true"
                    ></i>
                </button>
            </label>
            <select
                class="form-control"
                name="u_ci_subsector"
                id="u_ci_subsector"
                ng-model="c.rscForm.elements.u_ci_subsector.value"
                ng-disabled="c.nav.isSummaryPage() || c.rscForm.elements.u_ci_sector.value == '' || c.rscForm.elements.u_ci_sector.value == 'Not part of a Critical Infrastructure Sector or Unsure'"
            >
                <option
                    ng-repeat="sub in data.sectorObj[c.rscForm.elements.u_ci_sector.value].children track by $index"
                    ng-value="sub"
                >
                    {{sub}}
                </option>
            </select>
        </div>
    </div> -->

  <!-- Question 3 -->
  <div class="row blue-box">

    <div class="col-md-12 form-group">
      <usa-label for="u_hq_location">
        <strong>In what U.S state or territory is your organization headquartered?</strong>
      </usa-label>
      <!-- class="form-control"  -->
      <usa-select name="u_hq_location" id="u_hq_location"
        ng-model="c.rscForm.elements.u_hq_location.value"
        ng-change="c.state.recordState(c.rscForm.elements.u_hq_location.value)" ng-disabled="c.nav.isSummaryPage()">
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
            $id: 'a13f1ae387784e506fa97627cebb35bc',
            id: 'rsc_device_configuration_security',
            htmlTemplate: `<form class="ci-form-pad">
  <div id="rsc_device_configuration_security_top" class="row">
    <div class="col-md-9" tabindex="0">
      <h1 class="ci-h1">Device Configuration &amp; Security (DC&amp;S)</h1>
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
      <p>
        Questions that examine policies and controls to manage the provisioning, security, and deployment of devices across the organization.
      </p>
      <p>
        Tooltips are available when you see the
        <i class="fa fa-question-circle-o" aria-hidden="true"></i> icon,
        simply hover over the icon to get more information.
      </p>
    </div>
  </div>

  <!-- Baseline -->
  <sp-widget ng-if="c.data.org_size != 'large'" widget="data.qB1_2"></sp-widget>

  <!-- Conditional Questions -->
  <div ng-if="c.baselineValidation('u_device_config')">
    <sp-widget widget="data.qC2_1"></sp-widget>
    <sp-widget widget="data.qC2_2"></sp-widget>
    <sp-widget widget="data.qC2_3"></sp-widget>
    <sp-widget widget="data.qC2_4"></sp-widget>
    <sp-widget widget="data.qC2_5"></sp-widget>
    <sp-widget widget="data.qC2_6"></sp-widget>
  </div>
</form>
`,
        },
        {
            $id: 'bb10a22787784e506fa97627cebb353e',
            id: 'rsc_data_security',
            htmlTemplate: `<form class="ci-form-pad">
  <div id="rsc_data_security_top" class="row">
    <div class="col-md-9" tabindex="0">
      <h1 class="ci-h1">Data Security (DS)</h1>
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
      <p>
        Questions that examine controls aimed at protecting and maintaining the confidentiality, integrity, and availability of organizational assets and data. 
      </p>
      <p>
        Tooltips are available when you see the
        <i class="fa fa-question-circle-o" aria-hidden="true"></i> icon,
        simply hover over the icon to get more information.
      </p>
    </div>
  </div>

  <!-- Baseline -->
  <sp-widget ng-if="c.data.org_size != 'large'" widget="data.qB1_3"></sp-widget>

  <!-- Conditional Questions -->
  <div ng-if="c.baselineValidation('u_cia_data')">
    <sp-widget widget="data.qC3_1"></sp-widget>
    <sp-widget widget="data.qC3_2"></sp-widget>
    <sp-widget widget="data.qC3_3"></sp-widget>
    <sp-widget widget="data.qC3_4"></sp-widget>
    <sp-widget widget="data.qC3_5"></sp-widget>
    <sp-widget widget="data.qC3_6"></sp-widget>
    <sp-widget widget="data.qC3_7"></sp-widget>
  </div>
</form>
`,
        },
        {
            $id: 'e3a068e947f162108d277d88c26d438b',
            id: 'rsc_intake_submit_footer',
            htmlTemplate: `<div class="pt50 irf-mt-15" style="padding-left: 16px; padding-right: 16px">
    <div class="row irf-px-15">
        <div class="col-xs-12 footer-blue-container p-8">
            <div ng-bind-html="c.data.terms[0]['terms.template']"></div>
        </div>
    </div>
</div>


<div class="pt50 irf-mt-15" style="padding-left: 16px; padding-right: 16px">
    <div class="row irf-px-15">
        <div class="col-xs-12 btn-container">
            <div class="row">

                <!-- Back -->
                <div class="col-xs-2 py-4">

                    <button ng-if="c.nav.currentPage > 0" class="btn btn-outline-back pull-left" type="button"
                        ng-click="c.nav.prevPage()" aria-label="Back to previous page">
                        Back
                    </button>

                </div>

                <!-- Submit -->
                <div class="col-xs-10 py-4">
                    <div class="grid-row pull-right">

                        <button ng-if="c.nav.currentPage < c.nav.pages.length-1" class="btn btn-dark-blue" type="button"
                            ng-click="c.evalSubmit()" aria-label="Next page" id="intake_summary_footer_submit_button">
                            Submit
                        </button>

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`,
        },
        {
            $id: 'e9290d0287748a50147ec9550cbb35ea',
            id: 'rsc_intake_summary_footer',
            htmlTemplate: `<div class="pt50 irf-mt-15" style="padding-left: 16px; padding-right: 16px">
  <div class="row irf-px-15">
    <div class="col-xs-12 footer-blue-container p-8">
      <div ng-bind-html="c.data.terms[0]['terms.template']"></div>
    </div>
  </div>
</div>

<div class="row pb-2 px-6 pt-8">
    <div class="col-sm-12">
        <button class="btn-no-style btn-scroll-top pull-right" aria-label="Scroll to top of screen" ng-click="c.top()">
            <span>Scroll to Top</span>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
    </div>
</div>

<div class="px-6">
    <div class="row px-6">
        <div class="col-xs-12 btn-container">

            <div class="col-xs-6 col-sm-6 col-md-6 irf-py-15 irf-pr-15">
                <usa-button variant="outline" aria-label="Return to welcome page and take another questionnaire"
                    ng-click="c.navigate('/rsc?id=rsc_welcome')">
                    Take Another Questionnaire
                </usa-button>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-6 irf-py-15 irf-pl-15">
                <ul class="list-group list-group-horizontal pull-right">
                    <li class="list-group-item" style="margin-right:10px; color: #181A1F;">
                        <label class="checkbox-inline"><input type="checkbox" id="submit_show_url" index="0"
                                ng-model="c.nav.show_url" />Show Hyperlinks on PDF</label>
                    </li>
                    <li class="list-group-item">
                        <!-- refer to the containers in page designer for IRF pages css is hiding these things from the print screen -->
                        <button class="btn btn-success" type="button" ng-click="c.print()"
                            aria-label="Save a PDF copy of this survey">Download PDF</button>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</div>`,
        },
        {
            $id: 'f377041f87b48e50147ec9550cbb3576',
            id: 'rsc_modal_example',
            htmlTemplate: `<div>
  <strong> Hello World </strong>
  <p> Test </p>
  <p>
    Testing
  </p>
</div>`,
        },
        {
            $id: 'f97e5a6387784e506fa97627cebb35cb',
            id: 'rsc_security_best_practices',
            htmlTemplate: `<form class="ci-form-pad" name="security_practices" novalidate>
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

<sp-widget widget="data.q1"></sp-widget>
<sp-widget widget="data.q2"></sp-widget>
<sp-widget widget="data.q3"></sp-widget>
<sp-widget widget="data.q4"></sp-widget>
<!--Question A2.5
    <div ng-if="c.rscForm.elements.u_backup_data.value == 'yes'" class="row blue-box">
      <div class="col-md-12">
        <h2 class="dark-blue pb-30">Question 4a</h2>
      </div>
      <div class="col-md-12 form-group">
        <label for="u_backup_method"><strong>What methods do you use to back up your data?</strong></label>
        <select class="form-control" name="u_backup_method" id="u_backup_method" ng-model="c.rscForm.elements.u_backup_method.value">
          <option>An external hard drive</option>
          <option>A USB stick or flash drive</option>
          <option>A network-connected hard drive (such as a NAS drive)</option>
          <option>A Cloud drive</option>
          <option>A combination of the above</option>
          <option>N/A</option>
        </select>
      </div>
    </div>-->
<div ng-if="c.rscForm.elements.u_backup_data.value == 'yes'">
  <sp-widget widget="data.q6"></sp-widget>
  <sp-widget widget="data.q7"></sp-widget>
</div>

<!--Question A2.8
    <div class="row blue-box">
      <div class="col-md-12">
        <h2 class="dark-blue pb-30">Question 5</h2>
      </div>
      <div class="col-md-12 form-group">
        <label for="u_device_type"><strong>What type of information technology (IT) devices do you use for work?</strong></label>
        <select class="form-control" name="u_device_type" id="u_device_type" ng-model="c.rscForm.elements.u_device_type.value">
          <option>- Select -</option>
          <option>Laptop computer</option>
          <option>Desktop computer</option>
          <option>Mobile device (phone, tablet, PDA)</option>
          <option>A combination of the above</option>
        </select>
      </div>
    </div>-->
<sp-widget widget="data.q9"></sp-widget>
<sp-widget widget="data.q10"></sp-widget>
<sp-widget widget="data.q11"></sp-widget>
<sp-widget widget="data.q12"></sp-widget>
<sp-widget widget="data.q14"></sp-widget>
<!--Question A2.13
    <div class="row blue-box">
      <div class="col-md-12">
        <h2 class="dark-blue pb-30">Question 9</h2>
      </div>
      <div class="col-md-12 form-group">
        <label id="u_reputable_software_label"><strong>Do you install apps and software from official and/or reputable sources?</strong></label>
        <div>  
          <label class="radio-inline radio-box">
            <input id="u_reputable_software" name="Always" value="Always" type="radio" ng-disabled="c.nav.isSummaryPage()" ng-model="c.rscForm.elements.u_reputable_software.value" aria-labelledby="u_reputable_software_label"/> <span class="label-text">Always</span>
          </label>
          <label class="radio-inline radio-box">
            <input id="u_reputable_software" name="Sometimes" value="Sometimes" type="radio" ng-disabled="c.nav.isSummaryPage()" ng-model="c.rscForm.elements.u_reputable_software.value" aria-labelledby="u_reputable_software_label"/><span class="label-text">Sometimes</span>
          </label>
          <label class="radio-inline radio-box">
            <input id="u_reputable_software" name="Never" value="Never" type="radio" ng-disabled="c.nav.isSummaryPage()" ng-model="c.rscForm.elements.u_reputable_software.value" aria-labelledby="u_reputable_software_label"/><span class="label-text">Never</span>
          </label>
        </div>
      </div>
      <div ng-if="c.rscForm.elements.u_reputable_software.value == 'Sometimes' || c.rscForm.elements.u_reputable_software.value == 'Never' " class="col-md-12">
        <div class="row white-box">
          <div class="col-md-12">
            <h3 class="title">
              <strong>Recommended Resources</strong>
            </h3>
          </div>
            <div class="col-md-12">
              <p style="color: #005288; font-weight: bold; padding-bottom: 5px;"><i class="fa fa-file-pdf-o" aria-hidden="true" style="padding-right: 3px;"></i> PDF Document</p>
              <h4 style="color: #0078ae;">Securing the Software Supply Chain</h4>
              <p>This might mean only downloading from an official app store such as Apple App Store or Google Play, or researching the brand or checking its reviews first. For more details, read the Securing the Software Supply Chain Fact Sheet:</p>
              <a aria-label="Learn more about securing the software supply chain." ng-class="{'btn':!c.nav.show_url,'btn-primary':!c.nav.show_url,}" style="text-decoration: underline;" href="https://www.cisa.gov/sites/default/files/2023-01/esf_securing_the_software_supply_chain_customer_slicksheet.pdf" target="_blank">
              	<span ng-show="!c.nav.show_url">Learn More</span> 
				<span ng-show="c.nav.show_url">https://www.cisa.gov/sites/default/files/2023-01/esf_securing_the_software_supply_chain_customer_slicksheet.pdf</span>
              </a>
            </div>
          
        </div>
      </div>
    </div> -->
<sp-widget widget="data.q13"></sp-widget>
<!--end questions-->
</form>`,
        },
    ],
})

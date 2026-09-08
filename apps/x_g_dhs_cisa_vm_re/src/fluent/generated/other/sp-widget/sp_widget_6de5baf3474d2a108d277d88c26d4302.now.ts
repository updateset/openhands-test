import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['6de5baf3474d2a108d277d88c26d4302'],
    name: 'RSC - Landing Page',
    clientScript: Now.include('./sp_widget_rsc_landing_page/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_landing_page/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_landing_page/template.html'),
    customCss: Now.include('./sp_widget_rsc_landing_page/style.scss'),
    id: 'rsc_landing_page',
    linkScript: Now.include('./sp_widget_rsc_landing_page/link-script.js'),
    public: true,
    angularProviders: ['26da2ac147d5ae108d277d88c26d43c9'],
    templates: [
        {
            $id: '2a5e363f474d2a108d277d88c26d4323',
            id: 'rsc_white_box',
            htmlTemplate: `<!-- White box -->
<div class="row mb-8">
  <div class="col-md-12">
    <div class="p-8 bg-white-shadow">
      <div class="row">
        <div class="col-md-12">

          <!-- Header -->
          <div class="row pb-8">
            <div class="col-md-12">
              <h1 class="template-h1">
                Welcome to ReadySetCyber
              </h1>
            </div>
          </div>

          <!-- Sub heading -->
          <div class="row p-4">
            <div class="col-md-12">
              <!-- <p class="mb-0.5"><strong>mod tempor incididunt ut la</strong></p> -->
              <p>The Cybersecurity and Infrastructure Security Agency
                (CISA)'s&nbsp;ReadySetCyber&nbsp;tool is
                designed
                for&nbsp;organizations of all sizes and types to help find which of CISA's
                collection of
                free tools and
                services best match their cybersecurity needs.</p>
              <p>Completing the questionnaire should take approximately 20 minutes and may require
                input from
                senior leaders
                and daily operations staff in your organization to&nbsp;accurately assess. Also, we
                welcome
                feedback from
                cybersecurity experts and collaborators to enhance the effectiveness of
                questionnaires. Your
                voluntary
                participation will enable us to create a more robust and user-friendly resource
                matching
                tool. Currently,
                we are working with select stakeholder groups for refining and improving on the
                experience
                of Beta version
                of the tool.</p>
              <p><strong>To begin,</strong>&nbsp;select an option that best matches your organization
                based on
                the number of
                Information Technology (IT) personnel supporting you.&nbsp;Make sure to include
                partially
                and
                fully-dedicated staff and all IT personnel contracted through a Managed Service
                Provider
                (MSP).</p>
            </div>
          </div>

          <!-- Account Registration Banner -->
          <div class="row p-4" ng-if="!c.user.account && c.user.loggedIn">
            <div class="col-md-12">
              <usa-alert variant="warning" role="alert" aria-live="assertive">
                <usa-alert-heading role="heading" heading-level="2">
                  <strong>Finish Your Account Registration</strong>
                </usa-alert-heading>
                <usa-alert-text>
                  Complete your organization's profile to link your questionnaire results to your
                  entity. This allows you
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

          <!-- Login or Create Account Banner -->
          <div class="row p-4" ng-if="!c.user.account && !c.user.loggedIn">
            <div class="col-md-12">
              <usa-alert variant="warning" role="alert" aria-live="assertive">
                <usa-alert-heading role="heading" heading-level="2">
                  <strong>Login and Track Your Questionnaires</strong>
                </usa-alert-heading>
                <usa-alert-text>
                  <p class="irf-mt-15">
                    By logging in or creating a Login.gov account with your organization email address, we can link your
                    questionnaire responses to your organization.
                    This important step enables you to create an Organizational Account after submitting your
                    questionnaire, so you can access your results anytime and track your cybersecurity maturity over
                    time.
                    Additionally, this is the first step to Cyber Hygiene enrollment.
                  </p>

                  <usa-button class="irf-mt-10" ng-click="c.loginNav()" aria-label="Login or create an account">
                    Login or create an account
                  </usa-button>

                </usa-alert-text>
              </usa-alert>
            </div>
          </div>

          <!-- Cards -->
          <div class="row">
            <div class="col-md-12">

              <usa-card-group>

                <!-- Small Organization -->
                <usa-card class="flex-1">

                  <usa-card-header heading-level="2">
                    <div class="header-title-flex">
                      <div class="header-title-flex">
                        <img class="irf-pr-15 img-size" src="/x_g_dhs_cisa_vm_re.small-org.svg" />
                      </div>
                      <div class="title title-blue irf-pt-15">Small Organizations</div>
                    </div>
                  </usa-card-header>

                  <usa-card-body>
                    0 to 9 IT personnel; encompasses more than 90% of organizations
                  </usa-card-body>

                  <usa-card-footer>
                    <usa-button variant="primary" class="btn btn-primary" ng-click="c.navigate('small')"
                      aria-label="Take the survey for small sized organizations">Start
                      Here</usa-button>
                  </usa-card-footer>

                </usa-card>

                <!-- Medium Organization -->
                <usa-card class="flex-1">

                  <usa-card-header heading-level="2">
                    <div class="header-title-flex">
                      <div class="header-title-flex">
                        <img class="irf-pr-15 img-size" src="/x_g_dhs_cisa_vm_re.medium-org.svg" />
                      </div>
                      <div class="title title-blue irf-pt-15">Medium Organizations</div>
                    </div>
                  </usa-card-header>

                  <usa-card-body>
                    10 to 99 IT personnel; encompasses 5-9% of organizations
                  </usa-card-body>

                  <usa-card-footer>
                    <usa-button variant="primary" class="btn btn-primary" ng-click="c.navigate('medium')"
                      aria-label="Take the survey for medium sized organizations">Start
                      Here</usa-button>
                  </usa-card-footer>

                </usa-card>

                <!-- Large Organization -->
                <usa-card class="flex-1">

                  <usa-card-header heading-level="2">
                    <div class="header-title-flex">
                      <div class="header-title-flex">
                        <img class="irf-pr-15 img-size" src="/x_g_dhs_cisa_vm_re.large-org.svg" />
                      </div>
                      <div class="title title-blue irf-pt-15">Large Organizations</div>
                    </div>
                  </usa-card-header>

                  <usa-card-body>
                    100+ IT personnel; the top 1% of organizations
                  </usa-card-body>

                  <usa-card-footer>
                    <usa-button variant="primary" class="btn btn-primary" ng-click="c.navigate('large')"
                      aria-label="Take the survey for large sized organizations">Start
                      Here</usa-button>
                  </usa-card-footer>

                </usa-card>

              </usa-card-group>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>`,
        },
        {
            $id: '7e3c3ac847ea22908d277d88c26d4321',
            id: 'rsc_pra_burden_statement',
            htmlTemplate: '<p class="footer-statement" ng-bind-html="c.data.terms[0][\'terms.template\']"></p>',
        },
        {
            $id: '84355b3b47cd2a108d277d88c26d4301',
            id: 'rsc_modal',
            htmlTemplate: `<!-- Modal -->
<usa-modal id="authenticate-modal" is-visible="c.modalDefaultVis" aria-labelledby="force-modal-heading"
    aria-describedby="force-modal-description">
    <usa-modal-header id="force-modal-heading">
        <div class="row">
            <div class="col-xs-1">
                <i class="fa fa-user-circle pr-2" aria-hidden="true"></i>
            </div>
            <div class="col-xs-11">
                Sign-in or continue anonymously
            </div>
        </div>

    </usa-modal-header>
    <usa-modal-body class="usa-prose modal-body">
        <div id="force-modal-description">

            <!-- Prompt to login -->
            <div>
                <p><strong>Lorem Ipsum:</strong> Please login</p>
                <p><strong>Ipsum Lorem:</strong> Or continue anonymously</p>
            </div>

        </div>
    </usa-modal-body>
    <usa-modal-footer>
        <usa-button-group>
            <usa-button-group-item>
                <usa-button variant="primary" ng-click="c.continue(1)" aria-label="Proceed to login with Login.gov">
                    Login
                </usa-button>
            </usa-button-group-item>
            <usa-button-group-item>
                <usa-button variant="outline" ng-click="c.continue(2)"
                    aria-label="Proceed anonymously to questionnaire">
                    Continue to Questionnaire
                </usa-button>
            </usa-button-group-item>
        </usa-button-group>
    </usa-modal-footer>
</usa-modal>`,
        },
        {
            $id: 'c22e7a7f474d2a108d277d88c26d43c6',
            id: 'rsc_landing_alert',
            htmlTemplate: `<!-- Alert -->
<div class="row pb-8">
    <div class="col-md-12">

        <!-- Warning Alert Without Icon -->
        <usa-alert variant="info" no-icon role="alert" aria-live="polite">
            <usa-alert-text class="ml-0">
                You're viewing the beta version of our website. We're working hard to enhance your experience. Share
                your feedback with us at <a class="usa-link" href="mailto:contact@mail.cisa.dhs.gov">contact@mail.cisa.dhs.gov</a>
            </usa-alert-text>
        </usa-alert>

    </div>
</div>`,
        },
        {
            $id: 'cdc4cb37478d2a108d277d88c26d435d',
            id: 'rsc_policy_agreement',
            htmlTemplate: `<!-- Policy Agreement -->
<div class="row my-8">
    <div class="col-md-12">
        <div class="footer-blue-container p-8">
          	<div ng-include="'rsc_pra_burden_statement'"></div>
            <p class="footer-statement">
                <strong>ReadySetCyber Initiative Questionnaire Privacy Act Statement Authority:</strong> Collection
                of the
                information solicited for the ReadySetCyber Initiative Questionnaire is authorized by 6 U.S.C. §§
                652(c)(5),
                652(e)(1)(B), 659(c)(6), and 659(c)(7). Purpose: The purpose of collecting this information is to
                create a
                ReadySetCyber Initiative Questionnaire account to allow enrollment into matched services, review and
                update
                user and organization information and request additional information from CISA. Routine Uses: The
                information collected may be disclosed externally as a “routine use” pursuant to, DHS/ALL-004
                General
                Information Technology Access Account Records System (GITAARS). Disclosure: Providing this
                information is
                voluntary, however, failure to provide this information will prevent CISA from providing this
                service to
                you.
            </p>
        </div>
    </div>
</div>`,
        },
    ],
})

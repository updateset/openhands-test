import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['fc24a0bc87f406506fa97627cebb353f'],
    name: 'RSC Top Banner Simple',
    clientScript: Now.include('./sp_widget_rsc_top_banner_simple/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_top_banner_simple/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_top_banner_simple/template.html'),
    customCss: Now.include('./sp_widget_rsc_top_banner_simple/style.scss'),
    id: 'rsc_top_banner_simple',
    linkScript: Now.include('./sp_widget_rsc_top_banner_simple/link-script.js'),
    public: true,
    angularProviders: [
        '26da2ac147d5ae108d277d88c26d43c9',
        '78b51f0e4747aa508d277d88c26d431d',
        '7cbbd9a347ed62108d277d88c26d432f',
    ],
    templates: [
        {
            $id: '605a0f3687a16e10ee0cb848cebb35b4',
            id: 'rsc_top_banner_header_logo',
            htmlTemplate: `<!-- Logo/Heading -->
<div class="col-sm-5 inherit-parent-height grid-row">
    <img class="logo" src="x_1131290_cisa_irf.logo1.png" width="65px"
        alt="Cybersecurity & Infrastructure Security Agency" />

    <a href="/rsc" target="_self">
        <img class="rsc-logo" src="x_g_dhs_cisa_vm_re.rsc-logo-transparent.svg" width="200px"
            alt="Ready Set Cyber logo" />
    </a>
</div>`,
        },
        {
            $id: '9a49833687a16e10ee0cb848cebb35e3',
            id: 'rsc_top_banner_org_request_modal',
            htmlTemplate: `<!-- Modal - Org Account Request -->
<usa-modal id="force-modal" is-visible="c.accountRegistration" aria-labelledby="force-modal-heading"
    aria-describedby="force-modal-description" force-action="true" variant="large">
    <usa-modal-header id="force-modal-heading">
        Finish Your Account Registration
    </usa-modal-header>
    <usa-modal-body class="usa-prose modal-body">
        <div id="force-modal-description">

            <div>
                <p>Complete your organization's profile to link your questionnaire results to your
                    entity. This allows you
                    to:
                </p>
                <usa-unordered-list>
                    <li>Access your past results anytime</li>
                    <li>Revisit your customized recommended resources</li>
                    <li>Track how your organization's cybersecurity maturity improves over time</li>
                </usa-unordered-list>
            </div>

        </div>
    </usa-modal-body>
    <usa-modal-footer>
        <usa-button-group>
            <usa-button-group-item ng-if="c.data.pageId == 'rsc_request_account'">
                <usa-button variant="primary" ng-click="c.queueModal(1)">
                    Continue
                </usa-button>
            </usa-button-group-item>
            <usa-button-group-item ng-if="c.data.pageId != 'rsc_request_account'">
                <usa-button variant="secondary" ng-click="c.queueModal(1)">
                    Cancel
                </usa-button>
            </usa-button-group-item>
            <usa-button-group-item ng-if="c.data.pageId != 'rsc_request_account'">
                <usa-button variant="primary" ng-click="c.queueModal(2)">
                    Complete Organization Profile
                </usa-button>
            </usa-button-group-item>
        </usa-button-group>
    </usa-modal-footer>
</usa-modal>
<!-- End Modal -->`,
        },
        {
            $id: 'b8c6180c476f6a108d277d88c26d4342',
            id: 'uswds_header_temp',
            htmlTemplate: `<usa-header-extended>
  <usa-header-extended-logo-wrapper>

    <a href="/rsc" class="flex">

      <!-- CISA Logo -->
      <usa-header-extended-logo-img src="x_1131290_cisa_irf.logo1.png" width="65px"
        alt="Cybersecurity & Infrastructure Security Agency">
      </usa-header-extended-logo-img>

      <!-- RSC Logo -->
      <usa-header-extended-logo-img class="logo-align" src="x_g_dhs_cisa_vm_re.rsc-logo-transparent.svg" width="200px"
        height="100%" alt="Ready Set Cyber logo">
      </usa-header-extended-logo-img>

    </a>
  </usa-header-extended-logo-wrapper>

  <usa-header-extended-nav>
    <!-- Search wrapper must come before the menu items -->
    <usa-header-extended-search-wrapper role="menu">
      <!-- Login -->
      <div class="pr-8 pull-right grid-row" ng-if="!c.data.user">

        <!-- OBM Control Number -->
        <div class="pr-8">
          <div>
            <p class="dark-blue mb-0">
              <strong>OMB Control No.: 1670-0051</strong>
            </p>
          </div>
          <div>
            <p class="dark-blue mb-9">
              <strong>Expiration Date 3/31/2027</strong>
            </p>
          </div>
        </div>

        <!-- Login -->
        <a href="?id=login" class="login" aria-label="Login with Okta or Login.gov">Login</a>

      </div>

      <!-- Avatar Drop Down -->
      <div class="pr-8 pull-right grid-row" role="presentation" ng-if="c.data.user">

        <!-- OBM Control Number -->
        <div class="pr-4">

          <div>
            <p class="dark-blue mb-0">
              <strong>OMB Control No.: 1670-0051</strong>
            </p>
          </div>
          <div>
            <p class="dark-blue mb-9">
              <strong>Expiration Date 3/31/2027</strong>
            </p>
          </div>

        </div>

        <!-- My Questionnaires -->
        <div class="px-4 grid-row">

          <button id="my_questionnaire_btn" class="no-style grid-row" ng-click="c.myQuestionnaires()"
            aria-label="View my submitted questionnaires">
            <span class="pt-5 usa-link">My Questionnaires</span>
            <span class="questionnaire-circle ml-2 mt-4">
              <div class="questionnaire-text">{{c.data.count}}</div>
            </span>
          </button>

        </div>

        <!-- Avatar -->
        <div class="px-4">
          <div class="dropdown" usa-focus-out="c.closeOptions()">
            <button class="no-style dropdown-toggle" type="button" id="userAvatar" aria-haspopup="true"
              aria-expanded="false" ng-click="c.toggleOptions()">
              <div class="grid-row">
                <span class="avatar-circle">
                  <div class="avatar-circle">{{c.data.userInitials}}</div>
                </span>
                <i class="fa fa-angle-down pl-2 pt-5" aria-hidden="true"></i>
              </div>
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userAvatar"
              ng-class="{'show': c.areOptionsOpen}">
              <usa-icon-list>
                <a ng-href="logout.do" title="Logout">
                  <usa-icon-list-item icon-src="uswds_logout.svg" icon-alt="Logout icon">
                    Logout
                  </usa-icon-list-item>
                </a>
              </usa-icon-list>
            </div>
          </div>
        </div>

      </div>

    </usa-header-extended-search-wrapper>

    <!-- Normal Menu -->
    <usa-header-extended-nav-parent title="Report a Cyber Issue">
      <usa-header-extended-nav-child ng-repeat="item in c.menuOneItems" title="{{item.name}}" target="_blank"
        link="{{item.link}}"></usa-header-extended-nav-child>
    </usa-header-extended-nav-parent>

    <!-- Cyber Hygiene Menu -->
    <usa-header-extended-nav-parent title="Cyber Services">
      <usa-header-extended-nav-child ng-repeat="item in c.menuTwoItems" title="{{item.name}}" target="_blank"
        link="{{item.link}}"></usa-header-extended-nav-child>
    </usa-header-extended-nav-parent>

    <!-- Simple link -->
    <usa-header-extended-nav-parent title="CISA.gov" target="_blank" link="https://cisa.gov">
    </usa-header-extended-nav-parent>

  </usa-header-extended-nav>
</usa-header-extended>

<!-- Org Request Modal -->
<div ng-include="'rsc_top_banner_org_request_modal'"></div>`,
        },
        {
            $id: 'd27a0f3687a16e10ee0cb848cebb3530',
            id: 'rsc_top_banner_header_navigation',
            htmlTemplate: `<!-- Navigation Links -->
<div class="col-sm-7 pra-text">
    <div class="grid-row pull-right">

        <!-- OBM Control Number -->
        <div>
            <div>
                <p class="dark-blue" style="color: #005288;"><strong>OMB Control No.: 1670-0051</strong></p>
            </div>
            <div>
                <p class="dark-blue" style="color: #005288;"><strong>Expiration Date 3/31/2027</strong></p>
            </div>
        </div>

        <!-- My Questionnaires -->
        <div class="pl-4 grid-row" ng-if="c.data.user">

            <button id="my_questionnaire_btn" class="no-style grid-row" ng-click="c.myQuestionnaires()"
                aria-label="View my submitted questionnaires">
                <span class="pt-5 usa-link">My Questionnaires</span>
                <span class="questionnaire-circle ml-2 mt-4">
                    <div class="questionnaire-text">{{c.data.count}}</div>
                </span>
            </button>

        </div>

        <!-- Log In/Log Out -->
        <div class="pt-1 pl-4">

            <!-- Login -->
            <div class="pt-2 pl-4" ng-if="!c.data.user">
                <!-- Use new login page -->
                <usa-link ng-click="c.setRedirect()" ng-href="/rsc?id=login" target="_self">Login</usa-link>
            </div>

            <!-- Avatar -->
            <div ng-if="c.data.user">
                <div class="dropdown" usa-focus-out="c.closeOptions()">
                    <button class="no-style dropdown-toggle" type="button" id="userAvatar" aria-haspopup="true"
                        aria-expanded="false" ng-click="c.toggleOptions()">
                        <div class="grid-row">
                            <span class="avatar-circle">
                                <div class="avatar-circle">{{c.data.userInitials}}</div>
                            </span>
                            <i class="fa fa-angle-down pl-2 pt-5" aria-hidden="true"></i>
                        </div>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userAvatar"
                        ng-class="{'show': c.areOptionsOpen}">
                        <usa-icon-list>
                            <a ng-href="logout.do" title="Logout">
                                <usa-icon-list-item icon-src="uswds_logout.svg" icon-alt="Logout icon">
                                    Logout
                                </usa-icon-list-item>
                            </a>
                        </usa-icon-list>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>`,
        },
    ],
})

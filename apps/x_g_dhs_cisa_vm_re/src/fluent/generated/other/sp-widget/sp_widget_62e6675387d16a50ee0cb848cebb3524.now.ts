import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['62e6675387d16a50ee0cb848cebb3524'],
    name: 'RSC - Summary Page',
    clientScript: Now.include('./sp_widget_rsc_summary_page/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_summary_page/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_summary_page/template.html'),
    customCss: Now.include('./sp_widget_rsc_summary_page/style.scss'),
    id: 'rsc_summary_page',
    linkScript: Now.include('./sp_widget_rsc_summary_page/link-script.js'),
    public: true,
    angularProviders: [
        'c56bbfd387156a50ee0cb848cebb3559',
        'bc1158218749c2106fa97627cebb35f0',
        'b6fd93ba87b44e50147ec9550cbb3581',
        '26da2ac147d5ae108d277d88c26d43c9',
    ],
    templates: [
        {
            $id: '2acdbb5f87156a50ee0cb848cebb35e4',
            id: 'rsc_sum_general_org_info',
            htmlTemplate: `<!-- Summary -->
<form class="ci-form-pad">
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
      <usa-select name="u_hq_location" id="u_hq_location" ng-model="c.rscForm.elements.u_hq_location.value"
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
            $id: '35328edc876da210ee0cb848cebb3589',
            id: 'rsc_sum_device_configuration_security',
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
            $id: '4a42c61c876da210ee0cb848cebb3579',
            id: 'rsc_sum_data_security',
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
            $id: '4d728edc876da210ee0cb848cebb358e',
            id: 'rsc_sum_vulnerability_management',
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
            $id: '59624edc876da210ee0cb848cebb35c3',
            id: 'rsc_sum_governance_training',
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
            $id: '9992861087ada210ee0cb848cebb35af',
            id: 'rsc_sum_incident_response',
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
            $id: 'c182021087ada210ee0cb848cebb35ae',
            id: 'rsc_sum_supply_chain_risk_management',
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
            $id: 'c744861087ada210ee0cb848cebb35ba',
            id: 'rsc_sum_footer',
            htmlTemplate: `<div class="pt50">
    <div class="row irf-px-15">
        <div class="col-xs-12 footer-blue-container p-8">
            <div ng-bind-html="c.data.terms[0]['terms.template']"></div>
        </div>
    </div>
</div>

<div class="row pb-2">
    <div class="col-sm-12">
        <button class="btn-no-style btn-scroll-top pull-right" aria-label="Scroll to top of screen" ng-click="c.top()">
            <span>Scroll to Top</span>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
    </div>
</div>

<div class="row px-6">
    <div class="col-xs-12 btn-container">
        <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 irf-py-15 irf-pr-15">
                <usa-button variant="outline" aria-label="Return to RSC Home" ng-click="c.navigate()">
                    Return to RSC Home
                </usa-button>
                <!-- <button class="btn btn-outline-back pull-left" type="button" ng-click="c.navigate()" aria-label="Return to welcome page to take another questionnaire">Take Another Questionnaire</button> -->
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
            $id: 'e02282dc876da210ee0cb848cebb35c6',
            id: 'rsc_sum_iam',
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
            $id: 'f66db35f87156a50ee0cb848cebb35c1',
            id: 'rsc_sum_security_best_practices',
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
                cybersecurity environment. The questions are based on fundamental cybersecurity best practices and
                designed to
                provide you with tailored resources and guidance that are developed by CISA’s cybersecurity experts.</p>

            <p style="white-space: pre-line;">Each question addresses a key area of protection to help you understand
                and
                strengthen your organization’s cybersecurity foundation. For every <strong>"No/Unsure"</strong>
                response, you’ll
                receive three types of guidance:
            </p>
            <ul>
                <li class="li-override"><strong>Understanding the Risk:</strong> Explain why this security measure is
                    essential,
                    with practical examples of the threats it addresses.</li>
                <li class="li-override"><strong>Recommended Actions:</strong> Provides clear steps you can take to
                    improve
                    security in this area, with tips tailored for small organizations. You can act on
                    these recommendations
                    immediately or save them for later by using the “Print to PDF” option at the end in the “Summary and
                    Resources” page.
                </li>
                <li class="li-override"><strong>Featured Resource:</strong> Offers guidance from CISA experts to help
                    you put
                    these actions into practice. Make sure to bookmark the suggested resources below for easy reference.
                </li>
                <ul>
                    <li class="li-override"><u>Cross-Sector Cybersecurity Performance Goals (CPGs)</u>:The baseline set
                        of
                        cybersecurity practices that businesses and critical infrastructure owners can take to protect
                        themselves
                        against cyber threats..</li>
                    <li class="li-override"><u>Secure Our World</u>: Simple ways we can take every day to protect
                        ourselves, our
                        families, and our business from online threats</li>
                    <li class="li-override"><u>Project Upskill</u>: Simple, how-to guides for high-risk communities to
                        improve
                        their cybersecurity</li>
                    <li class="li-override"><u>Known Exploited Vulnerability (KEV) Catalog</u>: The authoritative source
                        of
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
                Enter your organization email to link your responses. If you decide to create an organization account
                later
                using this email, you'll be able to retrieve and track your questionnaire results.
            </usa-hint>

            <!-- Validation -->
            <div class="red" aria-atomic="true" role="alert">
                <p class="mb-0"
                    ng-if="security_practices.customer_email.$touched && !security_practices.customer_email.$valid">
                    Error - Email is invalid</p>
            </div>

            <usa-text-input id="customer_email" name="customer_email" type="email" ng-model="c.customer_email"
                ng-disabled="c.nav.isSummaryPage()"></usa-text-input>

        </div>
    </div>

    <sp-widget widget="data.q1"></sp-widget>
    <sp-widget widget="data.q2"></sp-widget>
    <sp-widget widget="data.q3"></sp-widget>
    <sp-widget widget="data.q4"></sp-widget>

    <div ng-if="c.rscForm.elements.u_backup_data.value == 'yes'">
        <sp-widget widget="data.q6"></sp-widget>
        <sp-widget widget="data.q7"></sp-widget>
    </div>

    <sp-widget widget="data.q9"></sp-widget>
    <sp-widget widget="data.q10"></sp-widget>
    <sp-widget widget="data.q11"></sp-widget>
    <sp-widget widget="data.q12"></sp-widget>
    <sp-widget widget="data.q14"></sp-widget>
    
    <sp-widget widget="data.q13"></sp-widget>
    <!--end questions-->
</form>`,
        },
    ],
})

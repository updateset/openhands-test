import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['b41a321347f8e6108d277d88c26d4339'],
    name: 'RSC - Account Creation',
    clientScript: Now.include('./sp_widget_rsc_account_creation/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_account_creation/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_account_creation/template.html'),
    customCss: Now.include('./sp_widget_rsc_account_creation/style.scss'),
    id: 'rsc_account_creation',
    linkScript: Now.include('./sp_widget_rsc_account_creation/link-script.js'),
    roles: ['snc_external'],
    angularProviders: [
        '26da2ac147d5ae108d277d88c26d43c9',
        '341e565387702a10ee0cb848cebb3576',
        '7cbbd9a347ed62108d277d88c26d432f',
    ],
    templates: [
        {
            $id: '15214b6b87746a10ee0cb848cebb358d',
            id: 'submission_confirmation',
            htmlTemplate: `<div class="bg-white-shadow p-8">
    <div class="row">
        <div class="col-md-12">

            <!-- Header -->
            <div class="row pb-4">
                <div class="col-md-12">
                    <h1 class="template-h1">
                        Thank You
                    </h1>
                </div>
            </div>

            <!-- Sub heading -->
            <div class="row pb-4">
                <div class="col-md-12">
                    <!-- <p class="mb-0.5"><strong>mod tempor incididunt ut la</strong></p> -->
                    <p>Your organization account details have been submitted successfully. You will receive an email confirming your organization has been created. 
                      Once you receive the email, return to this page and select "Continue to Enrollment" to complete the process for signing up for CISA's Cyber Hygiene Services.</p>
                </div>
            </div>
          
          	<!-- Enrollment card-->
          	<div class="row pb-4">
              <div class="col-md-12">
                <usa-card-group>
                  <usa-card class="flex-1">
                    <usa-card-header heading-level="2">
                      <div class="header-title-flex">
                        <div class="title title-blue">Ready to Enroll in Cyber Hygiene Services?</div>
                      </div>
                     </usa-card-header>

                     <usa-card-body>
                        Secure your internet-exposed attack surface with CISA's Cyber Hygiene Services. 
                        Enroll today for comprehensive asset scanning and tailored cybersecurity solutions.       
                     </usa-card-body>

                     <usa-card-footer class="irf-pt-30">
                       <usa-button ng-click="c.navToCyhyEnrollment()"
                                   aria-label="Enroll Now">Enroll Now
                       </usa-button>
                     </usa-card-footer>

                   </usa-card>
                </usa-card-group>
              </div>
          	</div>

            <!-- Return to Homepage -->
          	<!--
             <div class="row">
                <div class="col-md-12">
                    <usa-button aria-label="Continue to survey landing page" ng-click="c.navigate()">
                        Continue to Survey
                    </usa-button>
                </div>
             </div>    -->        
			
        </div>
    </div>`,
        },
        {
            $id: '2a008bd747f8e6108d277d88c26d4334',
            id: 'create_account',
            htmlTemplate: `<!-- Create Account -->
<div class="p-8 bg-white-shadow">
  <div class="row">
    <div class="col-md-12">

      <!-- Header -->
      <div class="row pb-4">
        <div class="col-md-12">
          <h1 class="template-h1">
            Create an Organizational Account
          </h1>
        </div>
      </div>

      <!-- Sub heading -->
      <div class="row pb-4">
        <div class="col-md-12">
          <!-- <p class="mb-0.5"><strong>mod tempor incididunt ut la</strong></p> -->
          <p>CISA collects organization details to best tailor service offerings to your organization and
            gain a better understanding of CISA's critical infrastructure partners. Your organization's
            information is secure and handled in accordance with federal security and privacy standards.
          </p>

          <p>In order to create an organization account online, you must certify that the Organization
            Headquarter address is located within the United States.
            If your organization HQ is located outside of the United States, please email
            <a href="mailto:vscan.intl@mail.cisa.dhs.gov">vscan.intl@mail.cisa.dhs.gov</a> and detail your interest in
            establishing an organizational account.
          </p>

          <p>Required fields are marked with an asterisk (<strong class="red">*</strong>)</p>
        </div>
      </div>

      <!-- Invalid fields -->
      <!-- ng-if="c.incompleteForm && c.missingFields.length > 0" -->
      <div role="alert" aria-live="assertive" tabindex="-1" id="error_summary">
        <div class="row pb-4" ng-if="c.incompleteForm && c.missingFields.length > 0">
          <div class="col-sm-12">
            <usa-alert variant="error">
              <usa-alert-heading role="heading" heading-level="2" id="incompleteFieldsError">
                <strong>The following
                  required
                  fields
                  are incomplete:</strong>
              </usa-alert-heading>
              <usa-alert-text>
                <div class="row pb-4">
                  <div class="col-sm-12">
                    <usa-unordered-list>
                      <li ng-repeat="field in c.missingFields | orderBy: 'order' track by $index">
                        <span>
                          {{field.label}}
                        </span>
                      </li>
                    </usa-unordered-list>
                  </div>
                </div>
              </usa-alert-text>
            </usa-alert>
          </div>
        </div>
      </div>

      <!-- Blue box -->
      <div class="template-blue-box mb-8">
        <form name="formVal" novalidate>

          <!-- Section 1 -->
          <div class="row">
            <div class="col-md-12">

              <!-- Heading -->
              <div class="row">
                <div class="col-md-12">
                  <h2 class="template-h2 mb-4">
                    Organization Information
                  </h2>
                </div>
              </div>

              <!-- Name and Segment -->
              <div class="row pb-4 flex-bottom">

                <!-- Name -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="v_entity_name"><strong class="red">* </strong><strong>Organization
                      Name</strong></usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0" ng-if="formVal.v_entity_name.$touched && formVal.v_entity_name.$error.required">
                      Error - Organization
                      Name is required</p>
                  </div>

                  <!-- Input element -->
                  <usa-text-input id="v_entity_name" name="v_entity_name"
                    ng-model="c.rscOnboardingFactory.v_entity_name.value" required aria-required="true">
                  </usa-text-input>

                </div>

                <!-- Employees -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="employee_count--combo-input"><strong class="red">* </strong><strong>How many
                      employees are in your
                      organization</strong></usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0"
                      ng-if="formVal.employee_count_input.$touched && c.rscOnboardingFactory.num_of_employees.value == ''">
                      Error - How many
                      employees are in your
                      organization is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-combo-box id="employee_count">
                    <usa-combo-box-select model="c.rscOnboardingFactory.num_of_employees.value">
                      <usa-combo-box-option
                        ng-repeat="row in c.rscOnboardingFactory.num_of_employees.options track by $index"
                        value="{{row.value}}" label="{{row.label}}">{{row.label}}
                      </usa-combo-box-option>
                    </usa-combo-box-select>
                    <usa-combo-box-input name="employee_count_input"></usa-combo-box-input>
                  </usa-combo-box>
                </div>

              </div>

              <!-- Org Website and Customer Segment -->
              <div class="row pb-8 flex-bottom">

                <!-- Website -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="website"><strong class="red">* </strong><strong>Organization
                      Website</strong></usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0" ng-if="formVal.website.$touched && formVal.website.$error.required">
                      Error - Organization
                      Website is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="website" name="website" ng-model="c.rscOnboardingFactory.website.value" required
                    aria-required="true">
                  </usa-text-input>
                </div>

                <!-- Segment -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="v_entity_customer_segment--combo-input"><strong class="red">*
                    </strong><strong>Organization Customer
                      Segment</strong></usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0"
                      ng-if="formVal.v_entity_customer_segment_input.$touched && c.rscOnboardingFactory.v_entity_customer_segment.value == ''">
                      Error - Organization Customer Segment is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-combo-box id="v_entity_customer_segment">
                    <usa-combo-box-select model="c.rscOnboardingFactory.v_entity_customer_segment.value">
                      <usa-combo-box-option
                        ng-repeat="row in c.rscOnboardingFactory.v_entity_customer_segment.options track by $index"
                        value="{{row.value}}" label="{{row.label}}">{{row.label}}
                      </usa-combo-box-option>
                    </usa-combo-box-select>
                    <usa-combo-box-input name="v_entity_customer_segment_input" is-required="true"></usa-combo-box-input>
                  </usa-combo-box>
                </div>

              </div>

              <!-- Horizontal Rule -->
              <hr />

              <!-- Address -->
              <div class="row pb-4">

                <div class="col-md-12">
                  <!-- Field Label -->
                  <usa-label for="v_street"><strong class="red">* </strong><strong>Organization
                      Headquarters Street
                      Address</strong></usa-label>

                  <!-- Angular Validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0" ng-if="formVal.v_street.$touched && formVal.v_street.$error.required">
                      Error - Organization
                      Headquarters Street
                      Address is required</p>
                  </div>

                  <!-- Input element -->
                  <usa-text-input id="v_street" name="v_street" ng-model="c.rscOnboardingFactory.v_street.value"
                    required aria-required="true">
                  </usa-text-input>

                </div>
              </div>

              <!-- City and County -->
              <div class="row pb-4 flex-bottom">

                <!-- City -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="v_city_town"><strong class="red">* </strong><strong>Organization
                      Headquarters City</strong></usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0" ng-if="formVal.v_city_town.$touched && formVal.v_city_town.$error.required">
                      Error - Organization
                      Headquarters City is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="v_city_town" name="v_city_town"
                    ng-model="c.rscOnboardingFactory.v_city_town.value" required aria-required="true"></usa-text-input>

                </div>

                <!-- County -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="v_county"><strong class="red">* </strong><strong>Organization
                      Headquarters County</strong></usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0" ng-if="formVal.v_county.$touched && formVal.v_county.$error.required">
                      Error - Organization
                      Headquarters County is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="v_county" name="v_county" ng-model="c.rscOnboardingFactory.v_county.value"
                    required aria-required="true">
                  </usa-text-input>

                </div>
              </div>

              <!-- Zip Code and State -->
              <div class="row pb-4 flex-bottom">

                <!-- Zip -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="v_zip_code"><strong class="red">* </strong><strong>Organization
                      Headquarters
                      Zip code</strong></usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0" ng-if="formVal.v_zip_code.$touched && formVal.v_zip_code.$error.required">
                      Error - Organization
                      Headquarters
                      Zip code is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="v_zip_code" name="v_zip_code" ng-model="c.rscOnboardingFactory.v_zip_code.value"
                    required aria-required="true" usa-input-mask="_____" pattern="\\d{5}" charset="#####">
                  </usa-text-input>

                </div>

                <!-- State -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="v_state--combo-input"><strong class="red">* </strong><strong>Organization
                      Headquarters State/Territory</strong></usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0"
                      ng-if="formVal.v_state_input.$touched && c.rscOnboardingFactory.v_state.value == ''">
                      Error - Organization
                      Headquarters State/Territory is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-combo-box id="v_state">
                    <usa-combo-box-select model="c.rscOnboardingFactory.v_state.value">
                      <usa-combo-box-option ng-repeat="row in c.rscOnboardingFactory.v_state.options track by $index"
                        value="{{row.sys_id}}" label="{{row.name}}">{{row.name}}
                      </usa-combo-box-option>
                    </usa-combo-box-select>
                    <usa-combo-box-input name="v_state_input" required aria-required="true">
                    </usa-combo-box-input>
                  </usa-combo-box>

                </div>

              </div>

              <!-- Country -->
              <div class="row pb-4 flex-bottom">

                <!-- Country -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="country"><strong class="red">* </strong><strong>Organization
                      Headquarters
                      Country</strong></usa-label>

                  <!-- Angular validation
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0" ng-if="formVal.v_country.$touched && formVal.v_country.$error.required">
                      Error - Zip Code is required</p>
                  </div> -->

                  <!-- Input Element -->
                  <usa-text-input id="v_country" name="v_country" value="United States of America" disabled>
                  </usa-text-input>

                </div>

              </div>

              <!-- Horizontal Rule -->
              <hr />

              <!-- Infrastructure and Sub -->
              <fieldset style="padding: 0px">
                <div class="row">
                  <div class="col-md-12">
                    <usa-legend>
                      <strong>Which Critical Infrastructure Sector(s) does your organization most
                        closely
                        align with?</strong>
                    </usa-legend>
                  </div>
                </div>
                <!-- Infrastructure and Sub -->
                <div class="row pb-4 flex-bottom">

                  <!-- Infrastructure -->
                  <div class="col-md-6">
                    <!-- Field Label -->
                    <usa-label for="v_critical_infrastrcuture_sector--combo-input"><strong class="red">*
                      </strong><strong>Sector</strong></usa-label>

                    <!-- Angular validation -->
                    <div class="red" aria-atomic="true" role="alert">
                      <p class="mb-0"
                        ng-if="formVal.v_critical_infrastrcuture_sector_input.$touched && c.rscOnboardingFactory.v_critical_infrastrcuture_sector.value == ''">
                        Error - Sector is required</p>
                    </div>

                    <!-- Input Element -->
                    <usa-combo-box id="v_critical_infrastrcuture_sector">
                      <usa-combo-box-select model="c.rscOnboardingFactory.v_critical_infrastrcuture_sector.value">
                        <usa-combo-box-option
                          ng-repeat="row in c.rscOnboardingFactory.v_critical_infrastrcuture_sector.options track by $index"
                          value="{{row.value}}" label="{{row.label}}">{{row.label}}
                        </usa-combo-box-option>
                      </usa-combo-box-select>
                      <usa-combo-box-input name="v_critical_infrastrcuture_sector_input" is-required="true">
                      </usa-combo-box-input>
                    </usa-combo-box>

                  </div>

                  <!-- Sub sector -->
                  <div
                    ng-if="c.rscOnboardingFactory.v_critical_infrastrcuture_sub_sector.options[c.rscOnboardingFactory.v_critical_infrastrcuture_sector.value].length > 0"
                    class="col-md-6">
                    <!-- Field Label -->
                    <usa-label for="v_critical_infrastrcuture_sub_sector">
                      <strong>Sub-Sector</strong></usa-label>

                    <!-- Input Element -->
                    <usa-combo-box id="v_critical_infrastrcuture_sub_sector">
                      <usa-combo-box-select model="c.rscOnboardingFactory.v_critical_infrastrcuture_sub_sector.value"
                        watch-model="c.rscOnboardingFactory.v_critical_infrastrcuture_sector.value">
                        <usa-combo-box-option
                          ng-repeat="row in c.rscOnboardingFactory.v_critical_infrastrcuture_sub_sector.options[c.rscOnboardingFactory.v_critical_infrastrcuture_sector.value] track by $index"
                          value="{{row.value}}" label="{{row.label}}">{{row.label}}
                        </usa-combo-box-option>
                      </usa-combo-box-select>
                      <usa-combo-box-input></usa-combo-box-input>
                    </usa-combo-box>

                  </div>

                </div>
              </fieldset>

              <!-- Horizontal Rule -->
              <hr />

            </div>
          </div>

          <!-- Section 2 -->
          <div class="row">
            <div class="col-md-12">

              <!-- Heading -->
              <div class="row pt-8">
                <div class="col-md-12">
                  <h2 class="template-h2 mb-4">
                    Organization Point of Contact Information
                  </h2>
                </div>
              </div>

              <!-- POC Name -->
              <div class="row pb-4 flex-bottom">

                <!-- First Name -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="v_entity_poc_name"><strong class="red">*
                    </strong><strong>Organization Point of Contact First
                      Name</strong></usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0"
                      ng-if="formVal.v_entity_poc_name.$touched && formVal.v_entity_poc_name.$error.required">
                      Error - Organization Point of Contact First
                      Name is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="v_entity_poc_name" name="v_entity_poc_name"
                    ng-model="c.rscOnboardingFactory.v_entity_poc_name.value" required aria-required="true"
                    ng-readonly="c.data.user.first != ''">
                  </usa-text-input>
                </div>

                <!-- Last Name -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="v_entity_poc_last_name"><strong class="red">*
                    </strong><strong>Organization Point of Contact Last
                      Name</strong></usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0"
                      ng-if="formVal.v_entity_poc_last_name.$touched && formVal.v_entity_poc_last_name.$error.required">
                      Error - Organization Point of Contact Last
                      Name is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="v_entity_poc_last_name" name="v_entity_poc_last_name"
                    ng-model="c.rscOnboardingFactory.v_entity_poc_last_name.value" required aria-required="true"
                    ng-readonly="c.data.user.last != ''">
                  </usa-text-input>
                </div>
              </div>

              <!-- POC Phone and Email -->
              <div class="row pb-4 flex-bottom">
                <div class="col-md-6">

                  <!-- Field Label -->
                  <usa-label for="v_entity_phone"><strong class="red">* </strong><strong>Organization
                      Point of Contact
                      Work Phone
                      Number</strong></usa-label>
                  <usa-hint id="telHint">For example, 123-456-7890</usa-hint>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0" ng-if="formVal.v_entity_phone.$touched && formVal.v_entity_phone.$error.required">
                      Error - Organization
                      Point of Contact
                      Work Phone
                      Number is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="v_entity_phone" name="v_entity_phone"
                    ng-model="c.rscOnboardingFactory.v_entity_phone.value" required aria-required="true" type="tel"
                    inputmode="numeric" usa-input-mask="___-___-____" pattern="\\d{3}-\\d{3}-\\d{4}"
                    aria-describedby="telHint"></usa-text-input>

                </div>

                <!-- Email -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="v_entity_email"><strong class="red">* </strong><strong>Organization
                      Point of Contact
                      Email</strong></usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0" ng-if="formVal.v_entity_email.$touched && formVal.v_entity_email.$error.required">
                      Error - Organization
                      Point of Contact
                      Email is required</p>
                    <p class="mb-0"
                      ng-if="formVal.v_entity_email.$touched && !formVal.v_entity_email.$error.required &&!formVal.v_entity_email.$valid">
                      Error - Organization
                      Point of Contact
                      Email is invalid</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="v_entity_email" name="v_entity_email"
                    ng-model="c.rscOnboardingFactory.v_entity_email.value" required aria-required="true" type="email"
                    ng-readonly="c.data.user.email != ''">
                  </usa-text-input>

                </div>
              </div>

            </div>
          </div>

        </form>

      </div>

      <!-- Footer -->
      <div class="template-footer-box mb-8">

        <!-- Submit -->
        <div class="row">
          <div class="col-md-12">
            <div class="pull-right">
              <usa-button aria-label="Submit account creation request" ng-click="c.validateSubmit()">
                Submit
              </usa-button>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</div>

<!--  variant="large" -->
<div ng-if="false">
  <usa-modal id="force-modal" is-visible="c.modalDefaultVis" aria-labelledby="force-modal-heading"
    aria-describedby="force-modal-description" force-action="true" variant="large">
    <usa-modal-header id="force-modal-heading">
      Please acknowledge the terms of agreement.
    </usa-modal-header>
    <usa-modal-body class="usa-prose modal-body">
      <div id="force-modal-description">

        <!-- Terms of Use -->
        <div ng-bind-html="c.data.terms[0]['terms.template']"></div>

      </div>
    </usa-modal-body>
    <usa-modal-footer>
      <usa-button-group>
        <usa-button-group-item>
          <usa-button variant="secondary" ng-click="c.queueModal(2)">
            Cancel
          </usa-button>
        </usa-button-group-item>
        <usa-button-group-item>
          <usa-button variant="primary" ng-click="c.acceptTerms()">
            Continue
          </usa-button>
        </usa-button-group-item>
      </usa-button-group>
    </usa-modal-footer>
  </usa-modal>
</div>`,
        },
        {
            $id: '4331cf6b87746a10ee0cb848cebb35d6',
            id: 'terms_of_use',
            htmlTemplate: `<!-- Blue Box -->
<div class="template-blue-box">

    <!-- Terms of Use -->
    <div ng-bind-html="c.data.terms[0]['terms.template']"></div>

</div>`,
        },
    ],
})

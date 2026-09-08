import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['eedfab06477166108d277d88c26d433b'],
    name: 'RSC - CYHY Enrollment',
    clientScript: Now.include('./sp_widget_rsc_cyhy_enrollment/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_cyhy_enrollment/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_cyhy_enrollment/template.html'),
    customCss: Now.include('./sp_widget_rsc_cyhy_enrollment/style.scss'),
    id: 'rsc_cyhy_enrollment',
    linkScript: Now.include('./sp_widget_rsc_cyhy_enrollment/link-script.js'),
    roles: ['snc_external'],
    angularProviders: [
        '7217481247f166108d277d88c26d4391',
        '26da2ac147d5ae108d277d88c26d43c9',
        '16ca6e97878baa50ee0cb848cebb35b9',
    ],
    templates: [
        {
            $id: '248e09d1474c72508d277d88c26d4393',
            id: 'cyhy_terms_of_use',
            htmlTemplate: `<!-- Blue Box -->
<div class="template-blue-box">

    <!-- Terms of Use -->
    <div ng-bind-html="c.data.terms[0]['terms.template']"></div>

</div>`,
        },
        {
            $id: '286e3fc647b166108d277d88c26d434d',
            id: 'cyhy_enrollment_page_1',
            htmlTemplate: `<!-- pg1 -->
<div class="p-8 bg-white-shadow">
  <div class="row">
    <div class="col-md-12">

      <!-- Header -->
      <div class="row pb-8">
        <div class="col-md-12">
          <h1 class="template-h1">
            Cyber Hygiene Services
          </h1>
        </div>
      </div>

      <div class="row pb-8">
        <div class="col-md-12">
          <p class="mb-2">
            <strong>Vulnerability Scanning</strong>
          </p>
          <p>CISA's <usa-link href="http://cisa.gov/cyber-hygiene-services" target="_blank">Cyber Hygiene
              (CyHy) Vulnerability
              Scanning </usa-link>service continuously monitors and assesses internet-accessible network
            assets to evaluate their host and vulnerability status. Organizations that enroll in CISA's CyHy
            services typically reduce their risk and exposure by 40% within the first 12 months; most see
            improvements in the first 90 days. CISA’s scanning is about more than pinpointing
            vulnerabilities; it’s about expanding your awareness about your organization’s dynamic
            boundaries. From basic asset awareness to daily alerts on urgent findings, you’ll be in a better
            place to make risk-informed decisions.
          </p>
          <p>
            Required fields are marked with an asterisk (<strong class="red">*</strong>)
          </p>
        </div>
      </div>

      <div class="row pb-8">
        <div class="col-md-12">
          <usa-alert variant="warning" role="alert" aria-live="assertive">
            <usa-alert-heading role="heading" heading-level="2">
              <strong>Before continuing, do you have authority to authorize scanning?</strong>
            </usa-alert-heading>
            <usa-alert-text>
              Confirm you have authority to authorize scanning of networks and systems. This authorization
              should be signed by the Chief Information Officer, Chief Information Security Officer, or
              similar official with ownership of and/or authority over the organization’s resources at the
              IP addresses the organization has requested CISA to scan. Please be aware that your progress
              will be lost if you exit before submitting.
            </usa-alert-text>
          </usa-alert>
        </div>
      </div>

      <usa-step-counter type="noLabel">
        <usa-step-indicator-list>
        </usa-step-indicator-list>
        <usa-step-indicator-header current="1" total="2" heading-level="2">
          <strong>Scanning Details</strong>
        </usa-step-indicator-header>
      </usa-step-counter>

      <!-- Invalid fields -->
      <div class="row pb-4" ng-if="c.incompleteFields && c.pageValidation(1).length > 0">
        <div class="col-sm-12">
          <usa-alert variant="error" role="alert" aria-live="assertive">
            <usa-alert-heading role="heading" aria-level="2" id="incompleteFieldsError"> The following
              required
              fields
              are invalid or incomplete:
            </usa-alert-heading>
            <usa-alert-text>
              <div class="row pb-4">
                <div class="col-sm-12">
                  <usa-unordered-list>
                    <li ng-repeat="field in c.pageValidation(1) track by $index">
                      <span>
                        {{c.form[field].label}}
                      </span>
                    </li>
                  </usa-unordered-list>
                </div>
              </div>
            </usa-alert-text>
          </usa-alert>
        </div>
      </div>

      <!-- Blue box -->
      <div class="template-blue-box mb-8">
        <form name="formVal" novalidate>

          <!-- Section 1 Header -->
          <div class="row">
            <div class="col-md-12">
              <h3 class="template-h2 pb-4">
                Technical Point of Contact(s)
              </h3>
              <p>
                Please provide a technical point of contact at
                <strong>{{c.form.v_entity_name.value}}</strong> for the CISA team to follow-up with. We
                also encourage you to add a secondary tech POC (if you have not already) to provide
                continuity, visibility, and assist with or request any needs defined in the role below.
              </p>
              <p>
                A technical point of contact serves as the authoritative representative for your
                organization for CISA to follow up with, submit change requests (adjust POC’s, scan date
                and time, scan scope, ad-hoc scan requests, etc.), and send scan result reports to.
              </p>
            </div>
          </div>

          <!-- Section 1 Body -->
          <div class="row">
            <div class="col-md-12">

              <!-- First Last Name -->
              <div class="row pb-4 flex-bottom">

                <!-- First Name -->
                <div class="col-md-6">

                  <!-- Field Label -->
                  <usa-label for="technical_poc_first_name">
                    <strong class="red">* </strong>
                    <strong>Technical Point of
                      Contact
                      First Name</strong>
                  </usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0"
                      ng-if="formVal.technical_poc_first_name.$touched && c.form.technical_poc_first_name.isInvalid">
                      Error - Technical Point of
                      Contact
                      First Name is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="technical_poc_first_name" name="technical_poc_first_name"
                    ng-model="c.form.technical_poc_first_name.value" required>
                  </usa-text-input>

                </div>

                <!-- Last Name -->
                <div class="col-md-6">

                  <!-- Field Label -->
                  <usa-label for="technical_poc_last_name">
                    <strong class="red">*
                    </strong>
                    <strong>Technical
                      Point of Contact
                      Last Name</strong>
                  </usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0"
                      ng-if="formVal.technical_poc_last_name.$touched && c.form.technical_poc_last_name.isInvalid">
                      Error - Technical
                      Point of Contact
                      Last Name is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="technical_poc_last_name" name="technical_poc_last_name"
                    ng-model="c.form.technical_poc_last_name.value" required>
                  </usa-text-input>

                </div>
              </div>

              <!-- Email Phone Number -->
              <div class="row pb-4 flex-bottom">

                <!-- Email -->
                <div class="col-md-6">

                  <!-- Field Label -->
                  <usa-label for="technical_poc_email">
                    <strong class="red">*
                    </strong>
                    <strong>Technical Point
                      of
                      Contact
                      Email</strong>
                  </usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0"
                      ng-if="formVal.technical_poc_email.$touched && formVal.technical_poc_email.$error.required">
                      Error - Technical Point
                      of
                      Contact
                      Email is required</p>
                    <p class="mb-0"
                      ng-if="formVal.technical_poc_email.$touched && !formVal.technical_poc_email.$error.required &&!formVal.technical_poc_email.$valid">
                      Error - Technical Point
                      of
                      Contact
                      Email is invalid</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="technical_poc_email" name="technical_poc_email"
                    ng-model="c.form.technical_poc_email.value" required aria-required="true" type="email">
                  </usa-text-input>

                </div>

                <!-- Phone Number -->
                <div class="col-md-6">

                  <!-- Field Label -->
                  <usa-label for="technical_poc_phone">
                    <strong class="red">*
                    </strong>
                    <strong>Technical
                      Point of Contact Work
                      Phone Number</strong>
                  </usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0"
                      ng-if="formVal.technical_poc_phone.$touched && formVal.technical_poc_phone.$error.required">
                      Error - Technical
                      Point of Contact Work
                      Phone Number is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="technical_poc_phone" name="technical_poc_phone"
                    ng-model="c.form.technical_poc_phone.value" required aria-required="true" type="tel"
                    inputmode="numeric" usa-input-mask="___-___-____" pattern="\\d{3}-\\d{3}-\\d{4}">
                  </usa-text-input>

                </div>
              </div>

              <!-- Add Second POC -->
              <div class="row">
                <div class="col-md-12">

                  <usa-checkbox>
                    <usa-checkbox-input id="second_technical_poc" name="second_technical_poc"
                      ng-model="c.form.second_technical_poc.value">
                    </usa-checkbox-input>
                    <usa-checkbox-label for="second_technical_poc">Add secondary technical point of
                      contact
                    </usa-checkbox-label>
                  </usa-checkbox>

                </div>
              </div>

              <div ng-if="c.form.second_technical_poc.value == true">

                <!-- Secondary First / Last Name -->
                <div class="row pb-4 flex-bottom">

                  <!-- First Name -->
                  <div class="col-md-6">

                    <!-- Field Label -->
                    <usa-label for="technical_poc_2_first_name">
                      <strong class="red">*
                      </strong>
                      <strong>Secondary
                        Technical Point of
                        Contact
                        First Name</strong>
                    </usa-label>

                    <!-- Angular validation -->
                    <div class="red" aria-atomic="true" role="alert">
                      <p class="mb-0"
                        ng-if="formVal.technical_poc_2_first_name.$touched && c.form.technical_poc_2_first_name.isInvalid">
                        Error - Secondary
                        Technical Point of
                        Contact
                        First Name is required</p>
                    </div>

                    <!-- Input Element -->
                    <usa-text-input id="technical_poc_2_first_name" name="technical_poc_2_first_name"
                      ng-model="c.form.technical_poc_2_first_name.value" required>
                    </usa-text-input>

                  </div>

                  <!-- Last Name -->
                  <div class="col-md-6">

                    <!-- Field Label -->
                    <usa-label for="technical_poc_2_last_name">
                      <strong class="red">*
                      </strong>
                      <strong>Secondary Technical
                        Point of Contact
                        Last Name</strong>
                    </usa-label>

                    <!-- Angular validation -->
                    <div class="red" aria-atomic="true" role="alert">
                      <p class="mb-0"
                        ng-if="formVal.technical_poc_2_last_name.$touched && c.form.technical_poc_2_last_name.isInvalid">
                        Error - Secondary Technical
                        Point of Contact
                        Last Name is required</p>
                    </div>

                    <!-- Input Element -->
                    <usa-text-input id="technical_poc_2_last_name" name="technical_poc_2_last_name"
                      ng-model="c.form.technical_poc_2_last_name.value" required>
                    </usa-text-input>

                  </div>
                </div>

                <!-- Email Phone Number -->
                <div class="row pb-4 flex-bottom">

                  <!-- Email -->
                  <div class="col-md-6">

                    <!-- Field Label -->
                    <usa-label for="technical_poc_2_email">
                      <strong class="red">*
                      </strong>
                      <strong>Secondary
                        Technical
                        Point
                        of
                        Contact
                        Email</strong>
                    </usa-label>

                    <!-- Angular validation -->
                    <div class="red" aria-atomic="true" role="alert">
                      <p class="mb-0"
                        ng-if="formVal.technical_poc_2_email.$touched && formVal.technical_poc_2_email.$error.required">
                        Error - Secondary
                        Technical
                        Point
                        of
                        Contact
                        Email is required</p>
                      <p class="mb-0"
                        ng-if="formVal.technical_poc_2_email.$touched && !formVal.technical_poc_2_email.$error.required &&!formVal.technical_poc_2_email.$valid">
                        Error - Secondary
                        Technical
                        Point
                        of
                        Contact
                        Email is invalid</p>
                    </div>

                    <!-- Input Element -->
                    <usa-text-input id="technical_poc_2_email" name="technical_poc_2_email"
                      ng-model="c.form.technical_poc_2_email.value" required aria-required="true" type="email">
                    </usa-text-input>

                  </div>

                  <!-- Phone Number -->
                  <div class="col-md-6">

                    <!-- Field Label -->
                    <usa-label for="technical_poc_2_phone">
                      <strong class="red">*
                      </strong>
                      <strong>Secondary Technical
                        Point of Contact Work
                        Phone Number</strong>
                    </usa-label>

                    <!-- Angular validation -->
                    <div class="red" aria-atomic="true" role="alert">
                      <p class="mb-0"
                        ng-if="formVal.technical_poc_2_phone.$touched && formVal.technical_poc_2_phone.$error.required">
                        Error - Secondary Technical
                        Point of Contact Work
                        Phone Number is required</p>
                    </div>

                    <!-- Input Element -->
                    <usa-text-input id="technical_poc_2_phone" name="technical_poc_2_phone"
                      ng-model="c.form.technical_poc_2_phone.value" required aria-required="true" type="tel"
                      inputmode="numeric" usa-input-mask="___-___-____" pattern="\\d{3}-\\d{3}-\\d{4}">
                    </usa-text-input>

                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Section Separator -->
          <div class="row">
            <div class="col-md-12">
              <hr />
            </div>
          </div>

          <!-- Section 2 Header -->
          <div class="row">
            <div class="col-md-12">
              <h3 class="template-h2 pb-4">
                Distribution Email and Password Delivery
              </h3>
              <p>We recommend your organization <strong>create/use a distribution list email
                  address</strong> to receive our reports. This allows your organization to manage the
                recipients of our report. We will only deliver reports to a single address.</p>
            </div>
          </div>

          <!-- Section 2 Body -->
          <div class="row">
            <div class="col-md-12">

              <!-- Email -->
              <div class="row pb-8">
                <div class="col-md-12">

                  <!-- Field Label -->
                  <usa-label for="distro_email">
                    <strong class="red">* </strong>
                    <strong>Distribution
                      Email</strong>
                  </usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0" ng-if="formVal.distro_email.$touched && formVal.distro_email.$error.required">
                      Error - Distribution Email is required</p>
                    <p class="mb-0"
                      ng-if="formVal.distro_email.$touched && !formVal.distro_email.$error.required &&!formVal.distro_email.$valid">
                      Error - Distribution Email is invalid</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="distro_email" name="distro_email" ng-model="c.form.distro_email.value" required
                    aria-required="true" type="email">
                  </usa-text-input>

                </div>
              </div>

              <!-- Encrypted Password -->
              <div class="row">
                <div class="col-md-12">

                  <p>Your report will be encrypted with a password which we will provide to you</p>

                  <!-- FieldSet -->
                  <usa-fieldset id="pw_delivery">
                    <usa-legend>
                      <strong class="red">* </strong>
                      <strong>How would you like this
                        password delivered</strong>
                    </usa-legend>
                    <usa-hint>Select one</usa-hint>

                    <!-- Angular validation -->
                    <div class="red" aria-atomic="true" role="alert">
                      <p class="mb-0" ng-if="formVal.password_delivery.$touched && c.form.password_delivery.isInvalid">
                        Error - How would you like this
                        password delivered is required</p>
                    </div>

                    <!-- Password Delivery -->
                    <div class="row flex">
                      <div class="col-md-6 parent-flex">
                        <usa-radio class="parent-flex">
                          <usa-radio-input id="tech_poc_password_delivery" name="password_delivery"
                            ng-model="c.form.password_delivery.value" value="tech_poc" variant="tile" required
                            aria-required="true" ng-blur="formVal.password_delivery.$setTouched()">
                          </usa-radio-input>
                          <usa-radio-label for="tech_poc_password_delivery" class="child-flex"> Technical
                            point of contact email </usa-radio-label>
                        </usa-radio>
                      </div>
                      <div class="col-md-6">
                        <usa-radio>
                          <usa-radio-input id="dist_password_delivery" name="password_delivery" value="distro_poc"
                            variant="tile" ng-model="c.form.password_delivery.value" required aria-required="true"
                            ng-blur="formVal.password_delivery.$setTouched()">
                          </usa-radio-input>
                          <usa-radio-label for="dist_password_delivery"> Distribution email
                          </usa-radio-label>
                        </usa-radio>
                      </div>
                    </div>

                  </usa-fieldset>

                </div>
              </div>

            </div>
          </div>

          <!-- Section Separator -->
          <div class="row">
            <div class="col-md-12">
              <hr />
            </div>
          </div>

          <!-- Section 3 Header -->
          <div class="row">
            <div class="col-md-12">
              <h3 class="template-h2 pb-4">
                Requested Scan Date
              </h3>
            </div>
          </div>

          <!-- Section 3 Body -->
          <div class="row">
            <div class="col-md-12">

              <!-- Field Label -->
              <usa-label for="u_requested_scan_start_date">
                <strong>
                  When should scan(s) begin
                </strong>
              </usa-label>
              <usa-hint id="u_requested_scan_start_date-hint">
                If you have a need to start scanning on or after a specific date please enter the date
                below. Otherwise, please leave the field blank and scanning will commence as soon as
                your request is processed by our team.
              </usa-hint>

              <!-- Angular validation -->
              <div class="red" aria-atomic="true" role="alert">
                <p class="mb-0" ng-if="c.dateFlag">
                  Error - When should scan(s) begin date is invalid
                </p>
              </div>

              <!-- Input Element -->
              <usa-date-picker>
                <usa-date-picker-input id="u_requested_scan_start_date" type="date"
                  ng-model="c.form.u_requested_scan_start_date.value" min="{{c.today}}"
                  aria-describedby="u_requested_scan_start_date-hint" ng-blur="c.dateCheck()">
                </usa-date-picker-input>
              </usa-date-picker>

            </div>
          </div>

          <!-- Section Separator -->
          <div class="row">
            <div class="col-md-12">
              <hr />
            </div>
          </div>

          <!-- Section 4 Header -->
          <div class="row">
            <div class="col-md-12">
              <h3 class="template-h2 pb-4">
                Identification of Your Public-Facing Networks and Systems
              </h3>
              <p>
                <strong>
                  Enter your organization's internet-facing, static IPv4 addresses to be
                  vulnerability scanned. Please separate each address with a comma or line break.
                  Before continuing, click "Verify Format" to confirm the format for each address is
                  correct.
                </strong>
              </p>
            </div>
          </div>

          <!-- Section 4 Body -->
          <div class="row">
            <div class="col-md-12">

              <!-- Verification Banner -->
              <div ng-if="c.form.verified.value">
                <div class="row pb-4">
                  <div class="col-md-12">

                    <usa-alert variant="success" role="status" aria-live="polite">
                      <usa-alert-heading role="heading" aria-level="4" class="cyhy-verification">
                        <strong>IPv4 Address Format Valid</strong>
                      </usa-alert-heading>
                    </usa-alert>

                  </div>
                </div>
              </div>

              <!-- IP Collection -->
              <div ng-if="!c.form.verified.value">
                <div class="row pb-4">
                  <div class="col-md-12">

                    <!-- Field Label -->
                    <usa-label for="ip_addresses">
                      <strong class="red">* </strong>
                      <strong>IPv4
                        Addresses</strong>
                    </usa-label>
                    <usa-hint>Formats: CIDR notation (e.g. x.x.x.0/24), IP range(e.g.
                      x.x.x.1-x.x.x.200), or individual IPs (e.g. x.x.x.1) with one entry per
                      line:
                    </usa-hint>

                    <!-- Angular validation -->
                    <div class="red" aria-atomic="true" role="alert">
                      <p class="mb-0" ng-if="formVal.ip_addresses.$touched && c.form.ip_addresses.isInvalid">
                        Error - IPv4 Addresses is required
                      </p>
                      <p class="mb-0" ng-if="formVal.ip_addresses.$touched && c.invalids.length > 0">
                        Error - {{c.invalids.length}} format errors found. Please correct and
                        verify before
                        proceeding
                      </p>
                      <p class="mb-0"
                        ng-if="c.incompleteFields && c.form.verified.value == false && c.invalids.length == 0">
                        Error - Please click "Verify Format" before
                        proceeding
                      </p>
                    </div>

                    <!-- Input Element -->
                    <usa-textarea id="ip_addresses" name="ip_addresses" ng-model="c.form.ip_addresses.value" required
                      aria-required="true">
                    </usa-textarea>

                  </div>
                </div>
              </div>

              <!-- Verified IP Table -->
              <div ng-if="c.form.verified.value">
                <div class="row pb-8">
                  <div class="col-md-12">

                    <!-- Auto Scroll -->
                    <div class="table-scroll">
                      <table usa-table="standard" class="w-full mx-auto">
                        <caption class="sr-only">
                          Verified IP Addresses
                        </caption>
                        <thead>
                          <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr ng-repeat="row in c.results track by $index">
                            <th scope="row">
                              {{row.token}}
                            </th>
                            <td>
                              {{row.type}}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
              </div>

              <!-- Verify Button -->
              <div class="row">
                <div class="col-md-12 flex">

                  <!-- Verify Format -->
                  <usa-button type="button" ng-disabled="c.form.ip_addresses.isInvalid" ng-if="!c.form.verified.value"
                    ng-click="c.validateAll()" class="mr-4">Verify
                    Format
                  </usa-button>

                  <!-- Throw Error -->
                  <usa-button type="button" ng-if="c.form.verified.value" ng-click="c.form.verified.value = false">
                    Edit IPv4 Addresses
                  </usa-button>

                </div>
              </div>

            </div>
          </div>

        </form>

      </div>

      <!-- Footer -->
      <div class="template-footer-box mb-8">

        <!-- Next -->
        <div class="row">
          <div class="col-md-12">
            <div class="pull-right">
              <usa-button aria-label="Advance to the next page" ng-click="c.paginate(1,true)">
                Next</usa-button>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</div>


<!--  IP Verification Modal -->
<usa-modal id="force-modal" is-visible="c.modalDefaultVis" aria-labelledby="force-modal-heading"
  aria-describedby="force-modal-description" force-action="true" variant="large">
  <usa-modal-header id="force-modal-heading">
    IP Address Format Errors Found
  </usa-modal-header>
  <usa-modal-body class="usa-prose modal-body">
    <div id="force-modal-description">

      <!-- Alert -->
      <div class="row pb-4">
        <div class="col-md-12">
          <usa-alert variant="error" slim role="alert" aria-live="assertive">
            <usa-alert-text>
              <strong>{{c.invalids.length}} format errors found.</strong> Please edit and correct the IP
              address format errors below, then verify again.
            </usa-alert-text>
          </usa-alert>
        </div>
      </div>

      <!-- Messaging -->
      <div class="row">
        <div class="col-md-12">
          <p>
            If many corrections are needed, you can download a .csv file containing all submitted addresses.
            Only ones with an "error type" require correcting. Once fixed, copy only the IP addresses and
            paste back into the IPv4 Addresses field. This is optional, but can help streamline the
            process.
          </p>
        </div>
      </div>

      <!-- Download -->
      <div class="row">
        <div class="col-md-12">
          <usa-button ng-click="c.downloadCSV()">Download .CSV</usa-button>
        </div>
      </div>

      <!-- Table -->
      <div class="row">
        <div class="col-md-12">
          <table usa-table="standard" class="w-full mx-auto">
            <caption class="sr-only">
              Unverified IP Addresses
            </caption>
            <thead>
              <tr>
                <th scope="col">IP Address Format Errors</th>
                <th scope="col">Error Type</th>
              </tr>
            </thead>
            <tbody>
              <tr ng-repeat="row in c.results | filter:{valid:false} track by $index">
                <th scope="row">{{row.token}}</th>
                <td>{{row.reason}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </usa-modal-body>
  <usa-modal-footer>
    <usa-button-group>
      <usa-button-group-item>
        <usa-button variant="primary" ng-click="c.focusIP()">
          <img src="uswds_edit.svg" alt="uswds_edit icon" class="edit-pencil"> Edit Addresses
        </usa-button>
      </usa-button-group-item>
    </usa-button-group>
  </usa-modal-footer>
</usa-modal>`,
        },
        {
            $id: '873558ef877e6a10ee0cb848cebb3564',
            id: 'cyhy_enrollment_page_2',
            htmlTemplate: `<!-- pg2 -->
<div class="p-8 bg-white-shadow">
  <div class="row">
    <div class="col-md-12">

      <!-- Header -->
      <div class="row pb-8">
        <div class="col-md-12">
          <h1 class="template-h1">
            Cyber Hygiene Services
          </h1>
        </div>
      </div>

      <div class="row pb-8">
        <div class="col-md-12">
          <p>
            Required fields are marked with an asterisk (<strong class="red">*</strong>)
          </p>
        </div>
      </div>

      <usa-step-counter type="noLabel">
        <usa-step-indicator-list>
        </usa-step-indicator-list>
        <usa-step-indicator-header current="2" total="2" heading-level="2">
          <strong>Authorization</strong>
        </usa-step-indicator-header>
      </usa-step-counter>

      <div class="row pb-8">
        <div class="col-md-12">
          <p>Please read and review the authorization letter, then sign. Return to the previous page if any
            vulnerability scan details need to be changed. If you need to update your saved organization's
            information below, please email <a href="mailto:vulnerability@cisa.dhs.gov"
              aria-label="Email vulnerability@cisa.dhs.gov">vulnerability@cisa.dhs.gov</a>
          </p>
        </div>
      </div>

      <!-- Invalid fields -->
      <div class="row pb-4" ng-if="c.incompleteFields && c.pageValidation(2).length > 0">
        <div class="col-sm-12">
          <usa-alert variant="error" role="alert" aria-live="assertive">
            <usa-alert-heading role="heading" aria-level="2" id="incompleteFieldsError"> The following
              required
              fields
              are invalid or incomplete:
            </usa-alert-heading>
            <usa-alert-text>
              <div class="row pb-4">
                <div class="col-sm-12">
                  <usa-unordered-list>
                    <li ng-repeat="field in c.pageValidation(2) track by $index">
                      <span>
                        {{c.form[field].label}}
                      </span>
                    </li>
                  </usa-unordered-list>
                </div>
              </div>
            </usa-alert-text>
          </usa-alert>
        </div>
      </div>

      <!-- Blue box -->
      <div class="template-blue-box mb-8">
        <form name="formVal" novalidate>

          <!-- Section 1 Header -->
          <div class="row pb-8">
            <div class="col-md-12">
              <h3 class="template-h2">
                Review and Sign
              </h3>
            </div>
          </div>

          <!-- Section 1 Body -->
          <div class="row">
            <div class="col-md-12">

              <!-- PDF Box -->
              <div class="row pb-8">
                <div class="col-md-12">

                  <div id="docbox" class="bg-white overflow-y-scroll pdf-box px-8"
                    ng-include="'cyhy_enrollment_acceptance_letter'">
                  </div>

                </div>
              </div>              

              <!-- Signature -->
              <div class="row" usa-focus-out="c.leaveSignature()">
                <div class="col-md-12">

                  <!-- Signature Controls -->
                  <div class="row pb-8">
                    <div class="col-md-12">

                      <usa-fieldset id="sign_below">

                        <!-- Signature Header -->
                        <usa-legend>
                          <strong class="red">* </strong><strong>Signature</strong>
                        </usa-legend>
                        <usa-hint class="pb-2">
                          Please draw or type your signature below and then click "Sign"
                        </usa-hint>

                        <!-- Angular validation -->
                        <div class="red" aria-atomic="true" role="alert">
                          <p class="mb-0" ng-if="c.signatureTouched && c.form.signature.isInvalid">
                            Error - A drawn or typed signature is required. Click Sign after
                            you have provided a signature</p>
                        </div>

                        <!-- Signature accepted -->
                        <div ng-if="!c.form.signature.isInvalid">
                          <usa-alert variant="success" role="status" slim aria-live="polite">
                            <usa-alert-text>
                              <strong>Success: </strong>Signature received
                            </usa-alert-text>
                          </usa-alert>
                        </div>


                        <!-- Drawn Signature -->
                        <div class="row pt-4 px-8">
                          <div class="col-md-12">
                            <usa-label aria-hidden="true">
                              <strong>
                                Draw your signature here
                              </strong>
                            </usa-label>
                            <canvas id="signature_pad" aria-hidden="true"></canvas>
                          </div>
                        </div>

                        <!-- Alt Signature -->
                        <div class="controls px-8">

                          <div class="row flex-bottom pb-4">
                            <div class="col-lg-6 col-md-8 col-sm-10 col-xs-12">
                              <usa-label for="signature_type">
                                <strong>
                                  Type your signature here
                                </strong>
                              </usa-label>
                              <usa-text-input type="text" id="signature_type" placeholder="Type your name..."
                                ng-model="c.form.typed_signature.value">
                              </usa-text-input>
                            </div>
                          </div>

                        </div>

                      </usa-fieldset>

                    </div>
                  </div>

                  <!-- Signature type alt and Clear button -->
                  <div class="row flex">
                    <div class="col-md-12">

                      <usa-button ng-click="c.renderName()" class="mb-4">
                        Sign
                      </usa-button>
                      <usa-button ng-click="c.clearSignature()" ng-disabled="c.form.signature.isInvalid" class="mb-4">
                        Clear
                      </usa-button>

                    </div>
                  </div>

                </div>
              </div>

              <!-- Auth First/Last Name -->
              <div class="row pb-4 flex-bottom">

                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="authorized_first_name">
                    <strong>
                      Authorizing
                      Official First Name
                    </strong>
                  </usa-label>

                  <!-- Input Element -->
                  <usa-text-input id="authorized_first_name" name="authorized_first_name"
                    ng-model="c.form.authorized_first_name.value" readonly>
                  </usa-text-input>
                </div>

                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="authorized_last_name">
                    <strong>
                      Authorizing
                      Official Last Name
                    </strong>
                  </usa-label>

                  <!-- Input Element -->
                  <usa-text-input id="authorized_last_name" name="authorized_last_name"
                    ng-model="c.form.authorized_last_name.value" readonly>
                  </usa-text-input>
                </div>
              </div>

              <!-- Title / Email -->
              <div class="row pb-4 flex-bottom">

                <!-- Title -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="authorized_title"><strong class="red">* </strong><strong>Authorizing
                      Official Title</strong></usa-label>

                  <!-- Angular validation -->
                  <div class="red" aria-atomic="true" role="alert">
                    <p class="mb-0" ng-if="formVal.authorized_title.$touched && c.form.authorized_title.isInvalid">
                      Error - Authorizing Official Title is required</p>
                  </div>

                  <!-- Input Element -->
                  <usa-text-input id="authorized_title" name="authorized_title" ng-model="c.form.authorized_title.value"
                    required>
                  </usa-text-input>
                </div>

                <!-- Email -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="authorized_email">
                    <strong>
                      Authorizing
                      Official
                      Email
                    </strong>
                  </usa-label>

                  <!-- Input Element -->
                  <usa-text-input id="authorized_email" name="authorized_email" ng-model="c.form.authorized_email.value"
                    type="email" readonly>
                  </usa-text-input>
                </div>

              </div>

              <!-- Phone Number / Date -->
              <div class="row pb-4 flex-bottom">

                <!-- Phone Number -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="authorized_phone">
                    <strong>
                      Authorizing
                      Official Phone
                      Number
                    </strong>
                  </usa-label>
                  <usa-hint id="telHint">For example, 123-456-7890</usa-hint>

                  <!-- Input Element -->
                  <usa-text-input id="authorized_phone" name="authorized_phone" ng-model="c.form.authorized_phone.value"
                    readonly type="tel" inputmode="numeric" usa-input-mask="___-___-____" pattern="\\d{3}-\\d{3}-\\d{4}"
                    aria-describedby="telHint"></usa-text-input>
                </div>

                <!-- Date -->
                <div class="col-md-6">
                  <!-- Field Label -->
                  <usa-label for="authorized_date">
                    <strong>Date</strong>
                  </usa-label>

                  <!-- Input Element -->
                  <usa-date-picker>
                    <usa-date-picker-input id="authorized_date" name="authorized_date" type="date"
                      ng-model="c.form.authorized_date.value" readonly>
                    </usa-date-picker-input>
                  </usa-date-picker>

                </div>

              </div>

            </div>
          </div>

          <!-- Section Separator -->
          <div class="row">
            <div class="col-md-12">
              <hr />
            </div>
          </div>

          <!-- Section 2 Body -->
          <div class="row">
            <div class="col-md-12">

              <!-- Org Name -->
              <div class="row pb-4">
                <div class="col-md-12">

                  <!-- Field Label -->
                  <usa-label for="v_entity_name">
                    <strong>
                      Organization
                      Name
                    </strong>
                  </usa-label>

                  <!-- Input element -->
                  <usa-text-input id="v_entity_name" name="v_entity_name" ng-model="c.form.v_entity_name.value"
                    readonly>
                  </usa-text-input>

                </div>
              </div>

              <!-- Org Address -->
              <div class="row pb-4">
                <div class="col-md-12">

                  <!-- Field Label -->
                  <usa-label for="v_street">
                    <strong>
                      Organization
                      Headquarters Street
                      Address
                    </strong>
                  </usa-label>

                  <!-- Input element -->
                  <usa-text-input id="v_street" name="v_street" ng-model="c.form.v_street.value" readonly>
                  </usa-text-input>

                </div>
              </div>

              <!-- City and County -->
              <div class="row pb-4 flex-bottom">

                <!-- Org City -->
                <div class="col-md-6">

                  <!-- Field Label -->
                  <usa-label for="city">
                    <strong>
                      Organization
                      Headquarters City
                    </strong>
                  </usa-label>

                  <!-- Input Element -->
                  <usa-text-input id="city" name="city" ng-model="c.form.city.value" readonly>
                  </usa-text-input>

                </div>

                <!-- County -->
                <div class="col-md-6">

                  <!-- Field Label -->
                  <usa-label for="county">
                    <strong>
                      Organization
                      Headquarters
                      County
                    </strong>
                  </usa-label>

                  <!-- Angular validation 
                                    <div class="red" aria-atomic="true" role="alert">
                                        <p class="mb-0" ng-if="formVal.county.$touched && c.form.county.isInvalid">
                                            Error - Organization
                                            Headquarters
                                            County is required</p>
                                    </div>-->

                  <!-- Input Element -->
                  <usa-text-input id="county" name="county" ng-model="c.form.county.value" readonly>
                  </usa-text-input>

                </div>
              </div>

              <!-- Zip and State -->
              <div class="row pb-4">

                <!-- Zip -->
                <div class="col-md-6">

                  <!-- Field Label -->
                  <usa-label for="v_zip_code">
                    <strong>
                      Organization
                      Headquarters
                      Zip code
                    </strong>
                  </usa-label>

                  <!-- Input Element -->
                  <usa-text-input id="v_zip_code" name="v_zip_code" ng-model="c.form.v_zip_code.value" readonly>
                  </usa-text-input>

                </div>

                <!-- State -->
                <div class="col-md-6">

                  <!-- Field Label -->
                  <usa-label for="u_state">
                    <strong>
                      Organization
                      Headquarters State/Territory
                    </strong>
                  </usa-label>

                  <!-- Input Element -->
                  <usa-text-input id="u_state" name="u_state" ng-model="c.form.u_state.value" readonly>
                  </usa-text-input>

                </div>

              </div>

              <!-- Country -->
              <div class="row pb-4">

                <!-- Country -->
                <div class="col-md-6">

                  <!-- Field Label -->
                  <usa-label for="country">
                    <strong>
                      Organization
                      Headquarters
                      Country
                    </strong>
                  </usa-label>

                  <!-- Input Element -->
                  <usa-text-input id="country" name="country" ng-model="c.form.country.value" readonly>
                  </usa-text-input>

                </div>

              </div>

            </div>
          </div>

        </form>
      </div>

      <!-- Footer -->
      <div class="template-footer-box mb-8">

        <!-- Next -->
        <div class="row">
          <div class="col-md-12">

            <div class="flex justify-between">

              <div>
                <usa-button aria-label="Return to the previous page" ng-click="c.paginate(0)" variant="outline">
                  Back</usa-button>
              </div>

              <div>
                <usa-button aria-label="Submit your Cyber Hygeine Vulnerability Scanning Enrollment request"
                  ng-click="c.paginate(2, true)">
                  Submit
                </usa-button>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</div>`,
        },
        {
            $id: 'ebf895eb87b2aa10ee0cb848cebb3507',
            id: 'cyhy_enrollment_acceptance_letter',
            htmlTemplate: `<!-- AL -->
<style type="text/css">
    /* * {
        margin: 0;
        padding: 0;
        text-indent: 0;
    } */

    .al-heading {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 14pt;
    }

    .s1 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: italic;
        font-weight: normal;
        text-decoration: none;
        font-size: 11pt;
    }

    #al-wrapper p {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 12pt;
        margin: 0pt;
    }

    .s2 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9.5pt;
        vertical-align: 3pt;
    }

    .s3 {
        color: #0070C0;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 12pt;
    }

    .s4 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 6pt;
        vertical-align: 4pt;
    }

    .s5 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 6pt;
    }

    .s6 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 12pt;
        vertical-align: -4pt;
    }

    .a {
        color: #00F;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: underline;
        font-size: 12pt;
    }

    .s7 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 12pt;
    }

    .h2,
    h2 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 12pt;
    }

    .s8 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: underline;
        font-size: 12pt;
    }

    .s9 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: underline;
        font-size: 16pt;
    }

    .s10 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 16pt;
    }

    .s11 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 16pt;
        vertical-align: 3pt;
    }

    .s12 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 15.5pt;
    }

    .s13 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 12pt;
        vertical-align: -4pt;
    }

    .s14 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 16pt;
    }

    .s15 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: italic;
        font-weight: bold;
        text-decoration: none;
        font-size: 12pt;
    }

    .s16 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: italic;
        font-weight: normal;
        text-decoration: none;
        font-size: 12pt;
    }

    .s17 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
    }

    .s18 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 12pt;
    }

    .s19 {
        color: black;
        font-family: Symbol, serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 12pt;
    }

    .s20 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 11pt;
    }
</style>

<!-- Template Wrapper -->
<div id="al-wrapper" class="row px-8">
    <div class="col-md-12">

        <!-- Heading -->
        <div class="py-8 text-center">
            <h4 class="al-heading">CYBER HYGIENE</h4>
            <p class="s1">Authorization to
                Conduct Continuous Scans of Public-Facing Networks and Systems</p>
        </div>

        <!-- Body -->
        <div class="py-8 px-12 text-justify">
            <p class="pb-8">
                The Cybersecurity and
                Infrastructure Security Agency (CISA) of the Department of Homeland Security (DHS), under authority of
                Title
                XXII of the Homeland Security Act (6 U.S.C. § 651 et seq., esp. 6 U.S.C. § 659) would like to gain
                authorization
                from (<strong>{{c.form.v_entity_name.value}}</strong>)
                <br />
                (<strong>{{c.form.v_entity_name.value}}</strong>) to conduct continuous network and vulnerability
                scanning of
                (<strong>{{c.form.v_entity_name.value}}</strong>) accessible networks
                and systems.
            </p>
            <p class="pb-4">The goals of these activities are to:</p>

            <ol class="pl-12 pb-4">
                <li class="pb-2">
                    <p>
                        Catalog your organization’s publicly accessible networks and systems, including services running
                        and
                        version/patch levels
                    </p>
                </li>
                <li class="pb-2">
                    <p>
                        Identify
                        vulnerabilities on your organization’s publicly accessible networks and systems
                    </p>
                </li>
                <li class="pb-2">
                    <p>
                        Identify potential configuration issues with your organization’s public facing networks and
                        systems
                    </p>
                </li>
                <li class="pb-2">
                    <p>
                        Maintain tactical
                        awareness of the operational risks and cyber health of individual entities
                    </p>
                </li>
                <li class="pb-2">
                    <p>
                        Inform the government’s
                        common operational view of cyberspace
                    </p>
                </li>
                <li class="pb-2">
                    <p>
                        Integrate relevant information, analysis, and vulnerability assessments, in order to identify
                        priorities
                        for protective and support measures regarding potential or actual threats
                    </p>
                </li>
                <li class="pb-2">
                    <p>
                        Provide “early warning”
                        of specific, actionable vulnerabilities to your organization
                    </p>
                </li>
            </ol>

            <p class="pb-6">
                CISA
                activities will originate from IP addresses or other identifiers that will be made known to your
                organization.
            </p>
            <p class="pb-6">
                Scanning will
                be openly attributable to the authorized scanning source, and should be detected by your organization’s
                network
                monitoring solutions. Data will be sent to your organization’s networks and systems corresponding to the
                public
                facing IP addresses, domain names, or other identifiers provided by your organization for scanning. The
                process
                has been designed to be as unobtrusive as possible: scheduling, intensity and frequency have been
                carefully
                planned to minimize the possibility of service disruption.
            </p>
            <p class="pb-6">
                Activities
                under this authorization will be limited to scanning; no attempts to connect to your organization’s
                internal
                network, penetrate your organization’s systems, or monitor your organization’s network traffic will be
                made
                under this authorization.
            </p>
            <p class="pb-6">
                If a
                third-party, such as a cloud service provider, operates or maintains your networks or systems to be
                scanned
                pursuant to this authorization, your organization will ensure compliance with any notification or
                authorization
                requirement that such third party may impose on external vulnerability scanning services. If your
                organization
                is informed that any such third party prohibits external vulnerability scans, you will promptly notify
                the CISA
                point of contact listed below.
            </p>
            <p class="pb-6">
                In a separate
                appendix to this authorization please provide the following information: the point of contact for
                activities
                performed under this authorization; an email address for the delivery of reports; identification
                information for
                your organization’s networks and systems to be scanned pursuant to this authorization; and any other
                relevant
                information. Your organization may provide updates to this information from time to time, in writing,
                using an
                updated appendix or other method. Your organization must promptly update CISA of changes to the
                identifying
                information used to scan your networks and systems pursuant to this authorization.
            </p>
            <p class="pb-6">
                CISA acknowledges that this
                authorization may be withdrawn at any time for any reason.
            </p>
            <p class="pb-6">
                The CISA Point of Contact for this
                activity can be reached at
                <a href="mailto:vulnerability@cisa.dhs.gov" class="a" target="_blank">
                    vulnerability@cisa.dhs.gov
                </a>
                . All notifications, updates, or other communications
                regarding this authorization and any related activity should be sent to this CISA Point of Contact.
            </p>
            <p class="pb-6">
                By signing below, you agree to
                the following:
            </p>

            <ol class="pl-12 pb-4">
                <li class="pb-2">
                    <p>
                        You have authority
                        to authorize scanning of the networks and systems submitted pursuant to this authorization;
                    </p>
                </li>
                <li class="pb-2">
                    <p>
                        You authorize CISA to
                        conduct the scanning activities described above;
                    </p>
                </li>
                <li class="pb-2">
                    <p>
                        You agree to
                        promptly update CISA of changes to the information used to identify the networks and systems to
                        be
                        scanned pursuant to this authorization;
                    </p>
                </li>
                <li class="pb-2">
                    <p>
                        You agree to comply
                        with any notification or authorization requirement that any third- party that operates or
                        maintains your
                        networks or systems may impose on external vulnerability scanning services, notifying CISA if
                        external
                        scanning is later prohibited;
                    </p>
                </li>
                <li class="pb-2">
                    <p>
                        You accept that,
                        while CISA teams will use their best efforts to conduct scans in a way that minimizes risk to
                        your
                        organization’s systems and networks, the scanning activities described above create some risk of
                        degradation in performance to your organization’s systems and networks;</p>
                </li>
                <li class="pb-2">
                    <p>
                        You acknowledge that
                        CISA provides no warranties of any kind relating to any aspect of the assistance provided under
                        this
                        authorization; and
                    </p>
                </li>
                <li class="pb-2">
                    <p>You are authorized to
                        make the above certifications on your organization’s behalf.
                    </p>
                </li>
            </ol>

            <!-- Section Separator -->
            <div class="row">
                <div class="col-md-12">
                    <hr />
                </div>
            </div>

            <!-- Field inputs -->
            <div class="pb-12">
                <p class="pl-8 s10">
                    Signature:
                    <span class="s8" ng-if="!c.form.signature.isInvalid">
                        <img ng-src="{{c.base64}}">
                    </span>
                </p>
                <p class="pl-8 s10">
                    Name:
                    <span class="s8">
                        <strong>{{c.form.authorized_first_name.value}} {{c.form.authorized_last_name.value}}</strong>
                    </span>
                </p>
                <p class="pl-8 s10">
                    Date:
                    <span class="s8">
                        <strong>{{c.today}}</strong>
                    </span>
                </p>
                <p class="pl-8 s10">
                    Title:
                    <span class="s8">
                        <strong>{{c.form.authorized_title.value}}</strong>
                    </span>
                </p>
                <p class="pl-8 s10">
                    Email:
                    <span class="s8">
                        <strong>{{c.form.authorized_email.value}}</strong>
                    </span>
                </p>
                <p class="pl-8 s10">
                    Entity:
                    <span class="s8">
                        <strong>{{c.form.v_entity_name.value}}</strong>
                    </span>
                </p>
                <p class="pl-8 s10">
                    Phone:
                    <span class="s8">
                        <strong>{{c.form.authorized_phone.value}}</strong>
                    </span>
                </p>
                <p class="pl-8 s10">
                    City:
                    <span class="s8">
                        <strong>{{c.form.city.value}}</strong>
                    </span>
                </p>
                <p class="pl-8 s10">
                    County:
                    <span class="s8">
                        <strong>{{c.form.county.value}}</strong>
                    </span>
                </p>
                <p class="pl-8 s10">
                    State:
                    <span class="s8">
                        <strong>{{c.form.u_state.value}}</strong>
                    </span>
                </p>
                <p class="pl-8 s10">
                    Country:
                    <span class="s8">
                        <strong>{{c.form.country.value}}</strong>
                    </span>
                </p>
            </div>

            <!-- Section Separator -->
            <div class="row py-12">
                <div class="col-md-12">
                    <hr />
                </div>
            </div>

            <div class="text-center pb-8">
                <p class="s15">
                    Appendix A
                </p>
                <p class="s16">
                    Authorization to
                    Conduct Continuous Scans of Public-Facing Networks and Systems
                </p>
            </div>


            <p class="pb-12">
                (<strong>{{c.form.v_entity_name.value}}</strong>)
                <span class="s16">
                    provides the following information to facilitate the authorized scanning
                    activities:
                </span>
            </p>

            <p class="pb-4">
                Please provide a <strong>technical point of contact </strong>at
                (<strong>{{c.form.v_entity_name.value}}</strong>)
                <span class="s18">
                    for the CISA team to follow-up with:
                </span>
            </p>

            <p class="pl-8 s10">
                Name:
                <span class="s8">
                    <strong>{{c.form.technical_poc_first_name.value}} {{c.form.technical_poc_last_name.value}}</strong>
                </span>
            </p>
            <p class="pl-8 s10">
                Email:
                <span class="s8">
                    <strong>{{c.form.technical_poc_email.value}}</strong>
                </span>
            </p>
            <p class="pl-8 s10">
                Phone:
                <span class="s8">
                    <strong>{{c.form.technical_poc_phone.value}}</strong>
                </span>
            </p>

            <!-- Section Separator -->
            <div class="row py-12">
                <div class="col-md-12">
                    <hr />
                </div>
            </div>


            <p class="pb-4">Optional secondary <strong>technical point of contact</strong>:</p>
            <p class="pl-8 s10">
                Name:
                <span class="s8">
                    <strong>{{c.form.technical_poc_2_first_name.value}}
                        {{c.form.technical_poc_2_last_name.value}}</strong>
                </span>
            </p>
            <p class="pl-8 s10">
                Email:
                <span class="s8">
                    <strong>{{c.form.technical_poc_2_email.value}}</strong>
                </span>
            </p>
            <p class="pl-8 s10">
                Phone:
                <span class="s8">
                    <strong>{{c.form.technical_poc_2_phone.value}}</strong>
                </span>
            </p>

            <!-- Section Separator -->
            <div class="row py-12">
                <div class="col-md-12">
                    <hr />
                </div>
            </div>

            <p>
                We recommend your organization
                <strong>create/use a distribution list </strong>email address to receive our reports. This allows your
                organization to
                manage the recipients of our report. <i>We will only deliver reports to a single address.</i>
            </p>

            <p class="pl-8 s10">
                Distro email:
                <span class="s8">
                    <strong>{{c.form.distro_email.value}}</strong>
                </span>
            </p>

            <!-- Section Separator -->
            <div class="row py-12">
                <div class="col-md-12">
                    <hr />
                </div>
            </div>

            <p class="pb-4">
                Your report will be encrypted with a password which we will provide to you. <strong>How would you like
                    this
                    password delivered </strong>(select one)?
            </p>

            <div class="pl-8 s10">
                <p><strong>{{c.form.password_delivery.value == 'tech_poc' ? 'Technical POC' : 'Distribution
                        Email'}}</strong>
                </p>
            </div>

            <!-- Section Separator -->
            <div class="row py-12">
                <div class="col-md-12">
                    <hr />
                </div>
            </div>

            <p>
                <strong>
                    When should scans begin?
                </strong>
                (e.g., as soon as possible, or <i>time</i>, Eastern @ <i>mm/dd/yyyy</i>)
            </p>

            <p class="s10 pl-8 pb-4">
                <strong>
                    {{c.getRequestedDate()}}
                </strong>
            </p>

            <!-- Section Separator -->
            <div class="row py-12">
                <div class="col-md-12">
                    <hr />
                </div>
            </div>

            <p>
                <strong>
                    Identification of Your Public-Facing
                    Networks and
                    Systems:
                </strong>
            </p>

            <p class="s20 pb-4">
                Enter your organization’s <b>internet-facing, static IPv4 addresses </b>to be vulnerability scanned in
                one of
                the following formats: CIDR notation (e.g. x.x.x.0/24), IP range (e.g. x.x.x.1-x.x.x.200), or individual
                IPs
                (e.g. x.x.x.1) with one entry per line:
            </p>

            <div class="pl-8">
                <p>
                    <strong>
                        {{c.form.ip_addresses.value}}
                    </strong>
                </p>
            </div>

            <!-- Section Separator -->
            <div class="row py-12">
                <div class="col-md-12">
                    <hr />
                </div>
            </div>

            <!-- Attestation -->
            <div class="row py-8">
                <div class="col-md-12">

                    <usa-fieldset>
                        <usa-legend>
                            <strong class="red">* </strong>
                            <strong>Please review the following before proceeding</strong>
                        </usa-legend>

                        <!-- Angular Validation -->
                        <div class="pb-2" aria-atomic="true" role="alert">
                            <p class="mb-0 red" ng-if="c.attestationError && !c.form.review_attestation.value">
                                Error - By checking this box, you assert that you have read
                                this
                                legal
                                document in full is required
                            </p>
                        </div>

                        <!-- Input -->
                        <usa-checkbox>
                            <usa-checkbox-input id="review_attestation" name="review_attestation"
                                ng-model="c.form.review_attestation.value" usa-focus-out="c.attestationTouched()"
                                required>
                            </usa-checkbox-input>
                            <usa-checkbox-label for="review_attestation">By checking this box, you assert that you have
                                read
                                this
                                legal
                                document in full</usa-checkbox-label>
                        </usa-checkbox>
                    </usa-fieldset>

                </div>
            </div>


        </div>
    </div>
</div>`,
        },
    ],
})

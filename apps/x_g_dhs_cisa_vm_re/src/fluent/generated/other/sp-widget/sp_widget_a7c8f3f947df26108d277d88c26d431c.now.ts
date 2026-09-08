import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['a7c8f3f947df26108d277d88c26d431c'],
    name: 'RSC - CYHY Landing',
    clientScript: Now.include('./sp_widget_rsc_cyhy_landing/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_cyhy_landing/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_cyhy_landing/template.html'),
    customCss: Now.include('./sp_widget_rsc_cyhy_landing/style.scss'),
    id: 'rsc_cyhy_landing',
    linkScript: Now.include('./sp_widget_rsc_cyhy_landing/link-script.js'),
    public: true,
    angularProviders: ['26da2ac147d5ae108d277d88c26d43c9'],
    templates: [
        {
            $id: '52dc33fd47df26108d277d88c26d4302',
            id: 'cyhy_landing',
            htmlTemplate: `<!-- pg0-a -->
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

            <!-- Reduce the Risk of a Successful Cyber Attack -->
            <div class="row pb-8">
                <div class="col-md-12">
                    <h2 class="mb-2">
                        <strong>Reduce the Risk of a Successful Cyber Attack</strong>
                    </h2>
                    <p>Cyber threats are not just possibilities but harsh realities, making
                        proactive and comprehensive cybersecurity imperative for all critical
                        infrastructure. Adversaries use <usa-link href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog">known
                            vulnerabilities and weaknesses</usa-link> to compromise the security of critical
                        infrastructure and other
                        organizations. CISA
                        offers free cybersecurity services to help organizations reduce their exposure to threats by
                        taking a proactive
                        approach to monitoring and mitigating attack vectors.
                    </p>
                </div>
            </div>

            <!-- List of Benefits -->
            <div class="row">
                <div class="col-md-12">
                    <p class="mb-2">
                        By taking advantage of CISA’s Cyber Hygiene services you can:
                    </p>
                    <usa-unordered-list>
                        <li>
                            <p class="mb-2">
                                <strong>Significantly Reduce Risk.</strong>
                            </p>
                            <p>
                                Organizations typically reduce their risk and exposure by 40% within the first 12
                                months.
                                Most see improvements in the first 90 days.
                            </p>
                        </li>
                        <li>
                            <p class="mb-2">
                                <strong>Avoid Surprises.</strong>
                            </p>
                            <p>
                                Because the services look for assets exposed to the internet, they identify
                                vulnerabilities that
                                could otherwise go unmanaged.
                            </p>
                        </li>
                        <li>
                            <p class="mb-2">
                                <strong>Sharpen Your Response.</strong>
                            </p>
                            <p>
                                By combining the vulnerability insights gained with existing threat detection and risk
                                management efforts, enrolled organizations can increase the accuracy and effectiveness
                                of response activities. This
                                means fewer false alarms and less chance of real dangers slipping through the net.
                            </p>
                        </li>
                        <li>
                            <p class="mb-2">
                                <strong>Broaden Your Security Horizon.</strong>
                            </p>
                            <p>
                                CISA’s scanning is about more than pinpointing vulnerabilities; it’s about expanding
                                your organization’s security boundaries. From basic asset awareness to daily alerts on
                                urgent findings, you’ll be in
                                a better place to make risk-informed decisions.
                            </p>
                        </li>
                    </usa-unordered-list>
                </div>
            </div>

            <!-- Enrollment Steps -->
            <div class="row pb-8">
                <div class="col-md-12">

                    <h2 class="mb-2">
                        <strong>To enroll, follow the steps below.</strong>
                    </h2>
                    <p>
                        This ensures we securely have the most accurate information for our Cyber Hygiene services.
                    </p>

                </div>
            </div>

            <!-- Process List  // VIEW: UNAUTHENTICATED \\\\ -->
            <div class="row pb-8" ng-if="c.view == 'alpha'">
                <div class="col-md-12">

                    <usa-process-list>

                        <!-- Authenticate -->
                        <usa-process-list-item>
                            <usa-alert variant="warning" role="alert" aria-live="assertive">
                                <usa-alert-heading role="heading" heading-level="3">
                                    <strong>Create a Login.gov Account</strong>
                                </usa-alert-heading>
                                <usa-alert-text>
                                    <p class="irf-mt-15">
                                        Login.gov is our trusted partner for secure and private access to CISA’s online
                                        services, including Cyber Hygiene. After account creation or upon login, you
                                        will be redirected to the CISA Service Homepage. Navigate to Cyber Services >
                                        Enroll in Cyber Hygiene to resume the enrollment process.
                                    </p>

                                    <usa-button class="irf-mt-10" ng-click="c.pageNav(0)" aria-label="Login or create an account">
                                        Login or create an account
                                    </usa-button>

                                </usa-alert-text>
                            </usa-alert>
                        </usa-process-list-item>

                        <!-- Finish Your Account Registration -->
                        <usa-process-list-item>
                            <p class="mb-2">
                                <strong>Finish Your Account Registration</strong>
                            </p>
                            <p>
                                Complete your organization’s profile, enabling your organization to receive Cyber
                                Hygiene and access other CISA services.
                            </p>
                        </usa-process-list-item>

                        <!-- Complete Enrollement Form -->
                        <usa-process-list-item>
                            <p class="mb-2">
                                <strong>Complete Enrollment Form</strong>
                            </p>
                            <p>
                                Once you’re logged in and have submitted your organization’s profile, you’ll be able to
                                start and complete the Cyber Hygiene enrollment form.
                            </p>
                        </usa-process-list-item>

                    </usa-process-list>
                </div>
            </div>

            <!-- Process List  // VIEW: UNVERIFIED \\\\ -->
            <div class="row pb-8" ng-if="c.view == 'bravo'">
                <div class="col-md-12">

                    <usa-process-list>

                        <!-- Authenticate -->
                        <usa-process-list-item>
                            <usa-alert variant="warning" role="alert" aria-live="assertive">
                                <usa-alert-heading role="heading" heading-level="3">
                                    <strong>Finish Your Account Registration</strong>
                                </usa-alert-heading>
                                <usa-alert-text>
                                    <p class="irf-mt-15">
                                        Complete your organization’s profile, enabling your organization to receive
                                        Cyber
                                        Hygiene and access other CISA services.
                                    </p>

                                    <usa-button class="irf-mt-10" ng-click="c.pageNav(1)" aria-label="Complete Organization Profile">
                                        Complete Organization Profile
                                    </usa-button>

                                </usa-alert-text>
                            </usa-alert>
                        </usa-process-list-item>

                        <!-- Complete Enrollement Form -->
                        <usa-process-list-item>
                            <p class="mb-2">
                                <strong>Complete Enrollment Form</strong>
                            </p>
                            <p>
                                Once you’re logged in and have submitted your organization’s profile, you’ll be able to
                                start and complete the Cyber Hygiene enrollment form.
                            </p>
                        </usa-process-list-item>

                    </usa-process-list>
                </div>
            </div>

            <!-- // VIEW: AUTHENTICATED & VERIFIED \\\\ -->
            <div class="row pb-8" ng-if="c.view == 'charlie'">
                <div class="col-md-12">
                    <usa-alert variant="info" slim role="status" aria-live="polite">
                        <strong>Ready for enrollment</strong>
                        <usa-alert-text>
                            <strong>Note:</strong> User will be redirected to the CYHY Enrollment Form under the current conditions
                        </usa-alert-text>
                    </usa-alert>
                </div>
            </div>

        </div>
    </div>
</div>`,
        },
    ],
})

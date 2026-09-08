import { SPAngularProvider } from '@servicenow/sdk/core'

SPAngularProvider({
    $id: Now.ID['7294a0988709ce506fa97627cebb3583'],
    name: 'rscSave',
    type: 'factory',
    script: `function rscSave(rscNav, $rootScope, rscForm) {
    var save = {},
        nav = rscNav;

    // START Save data
    save.processSave = function() {
        var funcName = "";

        // Only the first and last pages may have custom handling for now. all other pages inbetween can just be sent to one generic function.
        switch (nav.getTemplate()) {
            case "rsc_general_org_info": //function name
                funcName = "rsc_general_org_info";
                break;
            default:
                funcName = "intra_page"; // all other middle pages. will return their name here.
                break;
        }
        return funcName;
    };

    save.formFields = [{
            template: "rsc_security_best_practices",
            column: "u_pw_different",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_pw_strong",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_mfa_enabled",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_backup_data",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_backup_auto",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_backup_access",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_security_features",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_fw_av",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_disable_svcs",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_software_updates",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_trusted_software",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_security_best_practices",
            column: "u_sm_inc_response_plan",
            small: true,
            medium: false,
            large: false,
        },
        {
            template: "rsc_iam",
            column: "u_iam_security",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_iam",
            column: "u_pw_length",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_iam",
            column: "u_log_unsuccessful_login",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_iam",
            column: "u_change_default_pw",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_iam",
            column: "u_strong_mfa",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_iam",
            column: "u_separate_admin",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_iam",
            column: "u_unique_svc_accounts",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_iam",
            column: "u_departing_employee_return",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_device_config",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_hw_software_firmware_approval",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_macros_disabled",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_asset_inventory",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_prohibit_unauth_devices",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_network_diagrams",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_device_configuration_security",
            column: "u_basline_config_documents",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_cia_data",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_data_security",
            column: "u_log_storage",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_log_storage_detect_resp",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_connect_deny_default",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_secure_credential_storage",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_tls_enabled",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_email_tls_dkim",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_data_security",
            column: "u_ttp_list",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_governance_training",
            column: "u_governance_training",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_governance_training",
            column: "u_named_cyber_role",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_governance_training",
            column: "u_annual_cyber_training",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_governance_training",
            column: "u_ot_cyber_training",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_vulnerability_management",
            column: "u_vul_management",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_vulnerability_management",
            column: "u_kev_mitagation",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_vulnerability_management",
            column: "u_security_research_contact",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_vulnerability_management",
            column: "u_public_services_disabled",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_vulnerability_management",
            column: "u_no_public_devices",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_vulnerability_management",
            column: "u_3rd_party_cyber_validation",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_supply_chain_risk_management",
            column: "u_supply_chain_risk",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_supply_chain_risk_management",
            column: "u_security_inc_sla",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_supply_chain_risk_management",
            column: "u_security_vuln_sla",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_supply_chain_risk_management",
            column: "u_vendor_eval_docs",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_incident_response",
            column: "u_inc_response_plan",
            small: false,
            medium: true,
            large: false,
        },
        {
            template: "rsc_incident_response",
            column: "u_asset_recovery_plan",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_incident_response",
            column: "u_cyber_incident_plan",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_incident_response",
            column: "u_inc_reporting_policy",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_incident_response",
            column: "u_regular_backups",
            small: false,
            medium: true,
            large: true,
        },
        {
            template: "rsc_general_org_info",
            column: "u_hq_location",
            small: true,
            medium: true,
            large: true,
        },
    ];

    save.evalCondition = function(field) {
        try {
            var criteria = {
                small: {
                    u_backup_data: rscForm.getValue("u_backup_data") == "yes" ? false : true,
                },
                medium: {
                    u_iam_security: rscForm.getValue("u_iam_security") != "not_started" ? false : true,
                    u_device_config: rscForm.getValue("u_device_config") != "not_started" ? false : true,
                    u_cia_data: rscForm.getValue("u_cia_data") != "not_started" ? false : true,
                    u_governance_training: rscForm.getValue("u_governance_training") != "not_started" ?
                        false :
                        true,
                    u_vul_management: rscForm.getValue("u_vul_management") != "not_started" ?
                        false :
                        true,
                    u_supply_chain_risk: rscForm.getValue("u_supply_chain_risk") != "not_started" ?
                        false :
                        true,
                    u_inc_response_plan: rscForm.getValue("u_inc_response_plan") != "not_started" ?
                        false :
                        true,
                },
            };

            if (rscNav.org_size in criteria) {
                var tempSize = criteria[rscNav.org_size];

                if (field in tempSize) {
					// This field was causing issues in the console. Keep until scoring error can be resolved
					save.dependent[rscNav.org_size][field].condition = tempSize[field];
                    return tempSize[field];
                } else {
                    return true;
                }
            } else {
                return true;
            }
        } catch (err) {
            // Currently expecting an error. Disregard for now
			// console.warn("Error in evalCondition", err);
        }
    };

    save.dependent = {
        small: {
            u_backup_data: {
                points: 2,
                condition: save.evalCondition("u_backup_data"),
                added: false,
                dependents: ["u_backup_auto", "u_backup_access"],
            },
        },
        medium: {
            u_iam_security: {
                points: 7,
                condition: save.evalCondition("u_iam_security"),
                added: false,
                dependents: [
                    "u_pw_length",
                    "u_log_unsuccessful_login",
                    "u_change_default_pw",
                    "u_strong_mfa",
                    "u_separate_admin",
                    "u_unique_svc_accounts",
                    "u_departing_employee_return",
                ],
            },
            u_device_config: {
                points: 6,
                condition: save.evalCondition("u_device_config"),
                added: false,
                dependents: [
                    "u_hw_software_firmware_approval",
                    "u_macros_disabled",
                    "u_asset_inventory",
                    "u_prohibit_unauth_devices",
                    "u_network_diagrams",
                    "u_basline_config_documents",
                ],
            },
            u_cia_data: {
                points: 7,
                condition: save.evalCondition("u_cia_data"),
                added: false,
                dependents: [
                    "u_log_storage",
                    "u_log_storage_detect_resp",
                    "u_connect_deny_default",
                    "u_secure_credential_storage",
                    "u_tls_enabled",
                    "u_email_tls_dkim",
                    "u_ttp_list",
                ],
            },
            u_governance_training: {
                points: 3,
                condition: save.evalCondition("u_governance_training"),
                added: false,
                dependents: [
                    "u_named_cyber_role",
                    "u_annual_cyber_training",
                    "u_ot_cyber_training",
                ],
            },
            u_vul_management: {
                points: 5,
                condition: save.evalCondition("u_vul_management"),
                added: false,
                dependents: [
                    "u_kev_mitagation",
                    "u_security_research_contact",
                    "u_public_services_disabled",
                    "u_no_public_devices",
                    "u_3rd_party_cyber_validation",
                ],
            },
            u_supply_chain_risk: {
                points: 3,
                condition: save.evalCondition("u_supply_chain_risk"),
                added: false,
                dependents: [
                    "u_security_inc_sla",
                    "u_security_vuln_sla",
                    "u_vendor_eval_docs",
                ],
            },
            u_inc_response_plan: {
                points: 4,
                condition: save.evalCondition("u_inc_response_plan"),
                added: false,
                dependents: [
                    "u_asset_recovery_plan",
                    "u_cyber_incident_plan",
                    "u_inc_reporting_policy",
                    "u_regular_backups",
                ],
            },
        },
    };

    // Total number of available points
    save.smallTotal = 13;
    save.medTotal = 43;
    save.largeTotal = 36;

    save.processStatus = function() {
        var pointMatrix = {
            "overall": 0,
            "small": {
                "rsc_security_best_practices": 0,
                "rsc_general_org_info": 0
            },
            "medium": {
                "rsc_iam": 0,
                "rsc_device_configuration_security": 0,
                "rsc_data_security": 0,
                "rsc_governance_training": 0,
                "rsc_vulnerability_management": 0,
                "rsc_supply_chain_risk_management": 0,
                "rsc_incident_response": 0,
                "rsc_general_org_info": 0
            },
            "large": {
                "rsc_iam": 0,
                "rsc_device_configuration_security": 0,
                "rsc_data_security": 0,
                "rsc_governance_training": 0,
                "rsc_vulnerability_management": 0,
                "rsc_supply_chain_risk_management": 0,
                "rsc_incident_response": 0,
                "rsc_general_org_info": 0
            }
        };

        var complete = 0;
        // Iterate over field objects
        for (var i = 0; i < save.formFields.length; i++) {
            var temp = save.formFields[i], // Store the field object in temp
                field = temp.column,
                value = rscForm.getValue(field);

            // Check if field is mandatory for the current org size
            if (temp[rscNav.org_size]) {
                // Check if current value is empty
                if (!save.isEmpty(value)) {
                    // Track completion points for overall score
                    complete++;

                    // Track completion points for invidivual template
                    pointMatrix[rscNav.org_size][temp.template]++;

                    // Check if current org size is a key in save.dependent object
                    if (rscNav.org_size in save.dependent) {
                        var buffer = save.dependent[rscNav.org_size];

                        // Check if current field has some dependent criteria
                        if (field in buffer) {
                            // Update buffer after evalCondition runs and updates the save.dependent object
                            save.evalCondition(field);
                            buffer = save.dependent[rscNav.org_size];

                            // Check if condition is false and if the field has already been marked as added
                            if (buffer[field].condition == true) {
                                // Check if the field has already been accounted for
                                if (buffer[field].added == false) {
                                    // Clear value of dependent fields
                                    for (i in buffer[field].dependents) {
                                        var column = buffer[field].dependents[i];
                                        rscForm.elements[column] = "";

                                        // Track points
                                        complete--;
                                        pointMatrix[rscNav.org_size][temp.template] = parseInt(pointMatrix[rscNav.org_size][temp.template]) - 1;
                                    }
                                }
                                // Track points
                                complete += buffer[field].points;
                                pointMatrix[rscNav.org_size][temp.template] += buffer[field].points;

                                buffer[field].added = true;

                                // Update the dependent object with new information
                                save.dependent[rscNav.org_size] = buffer;

                                // console.warn("Mark field as added and add points", {
                                //     field: field,
                                //     value: value,
                                //     complete: complete,
                                //     added: buffer[field].added,
                                //     condition: buffer[field].condition,
                                // });
                            } else {
                                buffer[field].added = false;
                                // Update the dependent object with new information
                                save.dependent[rscNav.org_size] = buffer;
                            }
                        }
                    }
                }
            }
        }

        switch (rscNav.org_size) {
            case "small":
                pointMatrix.overall = complete / save.smallTotal;
                break;
            case "medium":
                pointMatrix.overall = complete / save.medTotal;
                break;
            case "large":
                pointMatrix.overall = complete / save.largeTotal;
                break;
            default:
                pointMatrix.overall = complete / save.smallTotal;
                break;
        }

        return pointMatrix;
    };

    save.isEmpty = function(input) {
        try {
            if (typeof input == "boolean") {
                //checks if the value is boolean and has a present value
                if (input === true || input === false) {
                    return false;
                } else {
                    return true;
                }
            }

            if (!input)
                //checks if null
                return true;

            if (String(input).length > 0) {
                return false;
            } else {
                return true;
            }
        } catch (ex) {
            //if a crash occurs then the value is empty by default
            return true;
        }
    };

    return save;
}`,
})

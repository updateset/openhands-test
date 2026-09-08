import { SPAngularProvider } from '@servicenow/sdk/core'

SPAngularProvider({
    $id: Now.ID['e2ec38d93bc83e10ceb02a1c95e45a47'],
    name: 'rscSaveWithStatusModal',
    type: 'factory',
    script: `function rscSaveWithStatusModal(rscNavWithStatusModal, $rootScope, rscForm) {
    var save = {},
        nav = rscNavWithStatusModal;

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


    save.evalCondition = function(field) {
        try {
            var criteria = {
                small: {
                    u_backup_data: rscForm.getValue("u_backup_data") == "yes" ? false : true,
                },
                medium: {
                    u_iam_security: rscForm.getValue("u_iam_security") != "Not Started" ? false : true,
                    u_device_config: rscForm.getValue("u_device_config") != "Not Started" ? false : true,
                    u_cia_data: rscForm.getValue("u_cia_data") != "Not Started" ? false : true,
                    u_governance_training: rscForm.getValue("u_governance_training") != "Not Started" ?
                        false :
                        true,
                    u_vul_management: rscForm.getValue("u_vul_management") != "Not Started" ?
                        false :
                        true,
                    u_supply_chain_risk: rscForm.getValue("u_supply_chain_risk") != "Not Started" ?
                        false :
                        true,
                    u_inc_response_plan: rscForm.getValue("u_inc_response_plan") != "Not Started" ?
                        false :
                        true,
                },
            };

            if (rscNavWithStatusModal.org_size in criteria) {
                var tempSize = criteria[rscNavWithStatusModal.org_size];

                if (field in tempSize) {
					// This field was causing issues in the console. Keep until scoring error can be resolved
					save.dependent[rscNavWithStatusModal.org_size][field].condition = tempSize[field];
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
            if (temp[rscNavWithStatusModal.org_size]) {
                // Check if current value is empty
                if (!save.isEmpty(value)) {
                    // Track completion points for overall score
                    complete++;

                    // Track completion points for invidivual template
                    pointMatrix[rscNavWithStatusModal.org_size][temp.template]++;

                    // Check if current org size is a key in save.dependent object
                    if (rscNavWithStatusModal.org_size in save.dependent) {
                        var buffer = save.dependent[rscNavWithStatusModal.org_size];

                        // Check if current field has some dependent criteria
                        if (field in buffer) {
                            // Update buffer after evalCondition runs and updates the save.dependent object
                            save.evalCondition(field);
                            buffer = save.dependent[rscNavWithStatusModal.org_size];

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
                                        pointMatrix[rscNavWithStatusModal.org_size][temp.template] = parseInt(pointMatrix[rscNavWithStatusModal.org_size][temp.template]) - 1;
                                    }
                                }
                                // Track points
                                complete += buffer[field].points;
                                pointMatrix[rscNavWithStatusModal.org_size][temp.template] += buffer[field].points;

                                buffer[field].added = true;

                                // Update the dependent object with new information
                                save.dependent[rscNavWithStatusModal.org_size] = buffer;

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
                                save.dependent[rscNavWithStatusModal.org_size] = buffer;
                            }
                        }
                    }
                }
            }
        }

        switch (rscNavWithStatusModal.org_size) {
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

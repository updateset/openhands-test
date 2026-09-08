(function() {

    var statusModalOptions = [{
        "name": "Fundamental Cybersecurity Practices",
        "template": "rsc_question_introduction",
        "org_size": "large",
        "selected": false,
        "childSelected": true,
        "children": [{
            "name": "Identity Access Management (IAM)",
            "selected": false,
            "template": "rsc_iam",
            "completedPoints": 0,
            "totalPoints": 7
        }, {
            "name": "Device Configuration & Security",
            "selected": false,
            "template": "rsc_device_configuration_security",
            "completedPoints": 0,
            "totalPoints": 6
        }, {
            "name": "Data Security",
            "selected": false,
            "template": "rsc_data_security",
            "completedPoints": 0,
            "totalPoints": 7
        }, {
            "name": "Governance & Training",
            "selected": false,
            "template": "rsc_governance_training",
            "completedPoints": 0,
            "totalPoints": 3
        }, {
            "name": "Vulnerability Management",
            "selected": false,
            "template": "rsc_vulnerability_management",
            "completedPoints": 0,
            "totalPoints": 5
        }, {
            "name": "Supply Chain Risk Management",
            "selected": false,
            "template": "rsc_supply_chain_risk_management",
            "completedPoints": 0,
            "totalPoints": 3
        }, {
            "name": "Incident Response",
            "selected": false,
            "template": "rsc_incident_response",
            "completedPoints": 0,
            "totalPoints": 4
        }]
    }, {
        "name": "Regional Information",
        "template": "rsc_general_org_info",
        "org_size": "large",
        "selected": false,
        "childSelected": true,
        "completedPoints": 0,
        "totalPoints": 1,
        "children": []
    }, {
        "name": "Summary and Resources",
        "template": "rsc_intake_summary",
        "org_size": "large",
        "selected": false,
        "childSelected": false,
        "children": []
    }, {
        "name": "Fundamental Cybersecurity Practices",
        "template": "rsc_question_introduction",
        "org_size": "medium",
        "selected": false,
        "childSelected": true,
        "children": [{
            "name": "Identity Access Management (IAM)",
            "selected": false,
            "template": "rsc_iam",
            "completedPoints": 0,
            "totalPoints": 8
        }, {
            "name": "Device Configuration & Security",
            "selected": false,
            "template": "rsc_device_configuration_security",
            "completedPoints": 0,
            "totalPoints": 7
        }, {
            "name": "Data Security",
            "selected": false,
            "template": "rsc_data_security",
            "completedPoints": 0,
            "totalPoints": 8
        }, {
            "name": "Governance & Training",
            "selected": false,
            "template": "rsc_governance_training",
            "completedPoints": 0,
            "totalPoints": 4
        }, {
            "name": "Vulnerability Management",
            "selected": false,
            "template": "rsc_vulnerability_management",
            "completedPoints": 0,
            "totalPoints": 6
        }, {
            "name": "Supply Chain Risk Management",
            "selected": false,
            "template": "rsc_supply_chain_risk_management",
            "completedPoints": 0,
            "totalPoints": 4
        }, {
            "name": "Incident Response",
            "selected": false,
            "template": "rsc_incident_response",
            "completedPoints": 0,
            "totalPoints": 5
        }]
    }, {
        "name": "Regional Information",
        "template": "rsc_general_org_info",
        "org_size": "medium",
        "selected": false,
        "completedPoints": 0,
        "totalPoints": 1,
        "childSelected": true,
        "children": []
    }, {
        "name": "Summary and Resources",
        "template": "rsc_intake_summary",
        "org_size": "medium",
        "selected": false,
        "childSelected": false,
        "children": []
    }, {
        "name": "Security Best Practices",
        "template": "rsc_security_best_practices",
        "org_size": "small",
        "selected": false,
        "completedPoints": 0,
        "totalPoints": 12,
        "childSelected": true,
        "children": []
    }, {
        "name": "Regional Information",
        "template": "rsc_general_org_info",
        "org_size": "small",
        "selected": false,
        "completedPoints": 0,
        "totalPoints": 1,
        "childSelected": true,
        "children": []
    }, {
        "name": "Summary and Resources",
        "template": "rsc_intake_summary",
        "org_size": "small",
        "selected": false,
        "childSelected": false,
        "children": []
    }];
    data.statusModalOptions = {
        section: JSON.stringify(statusModalOptions)
    };
	data.version = $sp.getParameter('version');
})();
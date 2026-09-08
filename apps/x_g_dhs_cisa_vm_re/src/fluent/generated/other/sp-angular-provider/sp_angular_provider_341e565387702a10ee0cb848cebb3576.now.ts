import { SPAngularProvider } from '@servicenow/sdk/core'

SPAngularProvider({
    $id: Now.ID['341e565387702a10ee0cb848cebb3576'],
    name: 'rscOnboardingFactory',
    type: 'factory',
    script: `function rscOnboardingFactory() {
    var obj = {
        "v_entity_name": {
            "id": "v_entity_name",
            "value": "",
			"required": true,
            "label": 'Organization Name',
            "order": 100
        },
        "website": {
            "id": "website",
            "value": "",
            "required": true,
            "label": 'Organization Website',
            "order": 300
        },
        "v_street": {
            "id": "v_street",
            "value": "",
            "required": true,
            "label": 'Organization Headquarters Street Address',
            "order": 400
        },
        "v_city_town": {
            "id": "v_city_town",
            "value": "",
            "required": true,
            "label": 'Organization Headquarters City',
            "order": 500
        },"v_county": {
            "id": "v_county",
            "value": "",
            "required": true,
            "label": 'Organization Headquarters County',
            "order": 501
        },
        "v_state": {
            "id": "v_state",
            "value": "",
            "options": "", //loaded in via api
            "required": true,
            "label": 'Organization Headquarters State/Territory',
            "order": 700
        },
        "v_zip_code": {
            "id": "v_zip_code",
            "value": "",
            "required": true,
            "label": 'Organization Headquarters Zip code',
            "order": 600
        },
        "v_entity_poc_name": {
            "id": "v_entity_poc_name",
            "value": "",
            "required": true,
            "label": 'Organization Point of Contact First Name',
            "order": 800
        },
		"v_entity_phone": {
            "id": "v_entity_phone",
            "value": "",
            "required": true,
            "label": 'Organization Point of Contact Work Phone Number',
            "order": 850
        },
        "v_entity_poc_last_name": {
            "id": "v_entity_poc_last_name",
            "value": "",
            "required": true,
            "label": 'Organization Point of Contact Last Name',
            "order": 900
        },
        "v_entity_email": {
            "id": "v_entity_email",
            "value": "",
            "required": true,
            "label": 'Organization Point of Contact Email',
            "order": 1000
        },
        "v_entity_customer_segment": {
            "id": "v_entity_customer_segment",
            "value": "",
            "required": true,
            "label": 'Organization Customer Segment',
			"order": 350,
            "options": [{
                    "label": "Federal Government",
                    "value": "fed"
                },
                {
                    "label": "Local Government",
                    "value": "local"
                },
                {
                    "label": "Private Sector",
                    "value": "private"
                },
                {
                    "label": "State Government",
                    "value": "state"
                },
                {
                    "label": "Territorial Government",
                    "value": "territory"
                },
                {
                    "label": "Tribal Government",
                    "value": "tribal"
                },
            ]
        },
        "v_critical_infrastrcuture_sector": {
            "id": "v_critical_infrastrcuture_sector",
            "value": "",
            "required": true,
            "label": 'Sector',
            "order": 700,
            //options might change for reference irf options
            "options": [{
                    "label": "Chemical",
                    "value": "Chemical"
                },
                {
                    "label": "Commercial Facilities",
                    "value": "Commercial Facilities"
                },
                {
                    "label": "Communications",
                    "value": "Communications"
                },
                {
                    "label": "Critical Manufacturing",
                    "value": "Critical Manufacturing"
                },
                {
                    "label": "Dams",
                    "value": "Dams"
                },
                {
                    "label": "Defense Industrial Base",
                    "value": "Defense Industrial Base"
                },
                {
                    "label": "Emergency Services",
                    "value": "Emergency Services"
                },
                {
                    "label": "Energy",
                    "value": "Energy"
                },
                {
                    "label": "Financial Services",
                    "value": "Financial Services"
                },
                {
                    "label": "Food and Agriculture",
                    "value": "Food and Agriculture"
                },
                {
                    "label": "Government Facilities",
                    "value": "Government Facilities"
                },
                {
                    "label": "Healthcare and Public Health",
                    "value": "Healthcare and Public Health"
                },
                {
                    "label": "Information Technology",
                    "value": "Information Technology"
                },
                {
                    "label": "Nuclear Reactors, Materials, and Waste",
                    "value": "Nuclear Reactors, Materials, and Waste"
                },
                {
                    "label": "Transportation Systems",
                    "value": "Transportation Systems"
                },
                {
                    "label": "Unknown",
                    "value": "Unknown"
                },
                {
                    "label": "Water and Wastewater Systems",
                    "value": "Water and Wastewater Systems"
                }
            ]
        },
        "v_critical_infrastrcuture_sub_sector": {
            "id": "v_critical_infrastrcuture_sub_sector",
            "value": "",
            "required": false,
            "label": 'Sub-Sector',
            "options": {
                "Chemical": [{
                    "label": "Agricultural Chemicals",
                    "value": "chemical_agricultural_chemicals"
                }, {
                    "label": "Consumer Products",
                    "value": "chemical_consumer_products"
                }, {
                    "label": "Pharmaceuticals",
                    "value": "chemical_pharmaceuticals"
                }, {
                    "label": "Specialty Chemicals",
                    "value": "chemical_specialty_chemicals"
                }],
                "Commercial Facilities": [{
                    "label": "Entertainment and Media",
                    "value": "commercial_facilities_ent_and_media"
                }, {
                    "label": "Gaming (Casino)",
                    "value": "commercial_facilities_gaming_casino"
                }, {
                    "label": "Lodging",
                    "value": "commercial_facilities_lodging"
                }, {
                    "label": "Outdoor Events",
                    "value": "commercial_facilities_outdoor_events"
                }, {
                    "label": "Public Assembly",
                    "value": "commercial_facilities_public_assembly"
                }, {
                    "label": "Real Estate",
                    "value": "commercial_facilities_real_estate"
                }, {
                    "label": "Retail",
                    "value": "commercial_facilities_retail"
                }],
                "Communications": [{
                    "label": "Broadcasting",
                    "value": "communications_broadcasting"
                }, {
                    "label": "Cable",
                    "value": "communications_cable"
                }, {
                    "label": "Satellite",
                    "value": "communications_satellite"
                }, {
                    "label": "Wireless",
                    "value": "communications_wireless"
                }, {
                    "label": "Wireline",
                    "value": "communications_wireline"
                }],
                "Critical Manufacturing": [{
                        "label": 'Electrical Equipment, Appliance, and Component Manufacturing',
                        "value": 'critical_manufacturing_ee_appliance_compmanufacturing'
                    },
                    {
                        "label": 'Machinery Manufacturing',
                        "value": 'critical_manufacturing_machinery_manufacturing'
                    },
                    {
                        "label": 'Primary Metals Manufacturing',
                        "value": 'critical_manufacturing_primary_metals_manufacturing'
                    },
                    {
                        "label": 'Transportation Equipment Manufacturing',
                        "value": 'critical_manufacturing_transport_equip_manufacturing'
                    }
                ],
                "Dams": [],
                "Defense Industrial Base": [],
                "Emergency Services": [{
                        "label": 'Emergency Management',
                        "value": 'emergency_svc_emergency_management'
                    },
                    {
                        "label": 'Emergency Medical Services',
                        "value": 'emergency_svc_emergency_med_svc'
                    },
                    {
                        "label": 'Fire and Rescue Services',
                        "value": 'emergency_svc_fire_rescue_svc'
                    },
                    {
                        "label": 'Law Enforcement',
                        "value": 'emergency_svc_law_enforcement'
                    },
                    {
                        "label": 'Public Works',
                        "value": 'emergency_svc_public_works'
                    }
                ],
                "Energy": [{
                        "label": 'Electricity',
                        "value": 'energy_electricity'
                    },
                    {
                        "label": 'Gas',
                        "value": 'energy_gas'
                    },
                    {
                        "label": 'Oil',
                        "value": 'energy_oil'
                    }
                ],
                "Financial Services": [{
                        "label": 'Deposit, Consumer Credit, and Payment Systems Products',
                        "value": 'financial_svc_deposit_cc_pay_sys_prod'
                    },
                    {
                        "label": 'Credit and Liquidity Products',
                        "value": 'financial_svc_credit_liquidity_products'
                    },
                    {
                        "label": 'Investment Products',
                        "value": 'financial_svc_investment_products'
                    },
                    {
                        "label": 'Risk Transfer Products',
                        "value": 'financial_svc_risk_transfer_products'
                    }
                ],
                "Food and Agriculture": [],
                "Government Facilities": [{
                        "label": 'Education Facilities',
                        "value": 'gov_facilities_edu_facilities'
                    },
                    {
                        "label": 'Education Facilties - Pre K-12',
                        "value": 'education_facilties_pre_k_12'
                    },
                    {
                        "label": 'Election Infrastructure',
                        "value": 'gov_facilities_election_infra'
                    },
                    {
                        "label": 'National Monuments and Icons',
                        "value": 'gov_facilities_national_monuments_icons'
                    }
                ],
                "Healthcare and Public Health": [{
                        "label": 'Direct Patient Care',
                        "value": 'healthcare_pubhealth_dir_patient_care'
                    },
                    {
                        "label": 'Health Information Technology',
                        "value": 'healthcare_pubhealth_health_infotech'
                    },
                    {
                        "label": 'Health Plans and Payers',
                        "value": 'healthcare_pubhealth_health_plans_payers'
                    },
                    {
                        "label": 'Mass Fatality Management Services',
                        "value": 'healthcare_pubhealth_mass_fatality_mngm_svc'
                    },
                    {
                        "label": 'Medical Materials',
                        "value": 'healthcare_pubhealth_med_materials'
                    },
                    {
                        "label": 'Laboratories, Blood, and Pharmaceuticals',
                        "value": 'healthcare_pubhealth_lab_blood_pharma'
                    },
                    {
                        "label": 'Public Health',
                        "value": 'healthcare_pubhealth_public_health'
                    },
                    {
                        "label": 'Federal Response and Program Offices',
                        "value": 'healthcare_pubhealth_fed_response_prog_offices'
                    }
                ],
                "Information Technology": [{
                        "label": 'IT Products and Services',
                        "value": 'it_products_svc'
                    },
                    {
                        "label": 'Domain Name Resolution Services',
                        "value": 'it_domain_name_resolution_svc'
                    },
                    {
                        "label": 'Internet-based Content, Information, and Communications Services',
                        "value": 'it_internet_info_comm_svc'
                    },
                    {
                        "label": 'Routing, Access, and Connection Services',
                        "value": 'it_routing_access_connection_svc'
                    },
                    {
                        "label": 'Incident Management Capabilities',
                        "value": 'it_incident_management_capabilities'
                    },
                    {
                        "label": 'Identity Management and Associated Trust Support Services',
                        "value": 'it_identity_mgt_associated_trust_support_svc'
                    }
                ],
                "Nuclear Reactors, Materials, and Waste": [],
                "Transportation Systems": [{
                        "label": 'Aviation',
                        "value": 'transport_sys_aviation'
                    },
                    {
                        "label": 'Highway and Motor Carrier',
                        "value": 'transport_sys_highway_motor_carrier'
                    },
                    {
                        "label": 'Postal and Shipping',
                        "value": 'transport_sys_postal_shipping'
                    },
                    {
                        "label": 'Freight Rail',
                        "value": 'transport_sys_freight_rail'
                    },
                    {
                        "label": 'Maritime Transportation System',
                        "value": 'transport_sys_maritime_transport_sys'
                    },
                    {
                        "label": 'Mass Transit and Passenger Rail',
                        "value": 'transport_sys_mass_transit_passenger_rail'
                    },
                    {
                        "label": 'Pipeline Systems',
                        "value": 'transport_sys_pipeline_sys'
                    }
                ],
				"Unknown" : [],
                "Water and Wastewater Systems": [{
                        "label": 'Drinking Water',
                        "value": 'water_wastewater_sys_drinking'
                    },
                    {
                        "label": 'Wastewater',
                        "value": 'water_wastewater_sys_wastewater'
                    }
                ]
            }
        },
        "num_of_employees": {
            "id": "num_of_employees",
            "value": "",
            "required": true,
            "order": 200,
            "label": 'How many employees are in your organization',
            "options": [{
                    "label": "1 to 5",
                    "value": "1_to_5"
                },
                {
                    "label": "6 to 20",
                    "value": "6_to_20"
                },
                {
                    "label": "21 to 50",
                    "value": "21_to_50"
                },
                {
                    "label": "51 to 100",
                    "value": "51_to_100"
                },
                {
                    "label": "101 to 1,000",
                    "value": "101_to_1000"
                },
                {
                    "label": "1001 to 1,999",
                    "value": "1001_to_1999"
                },
                {
                    "label": "2,000+",
                    "value": "2000_plus"
                }
            ]
        }
    };
    return obj;
}`,
})

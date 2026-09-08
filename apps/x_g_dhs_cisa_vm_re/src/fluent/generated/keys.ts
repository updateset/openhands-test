import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '615a36a0f3ce41b8a229b28c761597dc'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'f90f020415de47f6ac8ebfbb89638de9'
                    }
                }
                composite: [
                    {
                        table: 'sys_ui_list_element'
                        id: '002ad2a7877cce50147ec9550cbb35c3'
                        key: {
                            list_id: {
                                id: '042ad2a7877cce50147ec9550cbb35c2'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_import_state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '004fc8e533903690dfa2f432cd5c7bdd'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'level'
                            value: 'section'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0067aebe439b4405991954bf6c2df231'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'u_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '01c82fd887866e10ee0cb848cebb35ee'
                        key: {
                            map: '89c82fd887866e10ee0cb848cebb35e2'
                            target_field: 'first_name'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '01d4ec1c8709ce506fa97627cebb35ae'
                        key: {
                            sp_widget: 'f264ac178773b5106fa97627cebb3510'
                            sp_angular_provider: '7294a0988709ce506fa97627cebb3583'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '02555ae226104fbb9ba5b3380c035abd'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                            element: 'parent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '025bc68be53f4429adb529f0b626c1a9'
                        key: {
                            name: 'u_imp_saml_user_a1kn5tdmak'
                            element: 'sso_source'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '02fa3dee3b107290ceb02a1c95e45a3c'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'column_name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '02fa3dee3b107290ceb02a1c95e45a3d'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'tooltip_body'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '02fa3dee3b107290ceb02a1c95e45a3e'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'show_resource'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '02fa3dee3b107290ceb02a1c95e45a3f'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'version'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '02fa3dee3b107290ceb02a1c95e45a40'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'questionnaire_size'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '02fa3dee3b107290ceb02a1c95e45a41'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'level'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '02fa3dee3b107290ceb02a1c95e45a42'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'template'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '02fa3dee3b107290ceb02a1c95e45a43'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'resource_url'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '0308c932a8594c3ea18ef4a4fb4f6b40'
                        key: {
                            logical_table_name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            col_name_string: 'angular_template'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '038ceb1087c66e10ee0cb848cebb3534'
                        key: {
                            name: 'u_imp_saml_user_ywha2spnin'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03d926ef22934db68e013e7503e3806b'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'organization_size'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '042ad2a7877cce50147ec9550cbb35c2'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '042ad2a7877cce50147ec9550cbb35c3'
                        key: {
                            list_id: {
                                id: '042ad2a7877cce50147ec9550cbb35c2'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_target_sys_id'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '06014e1c876da210ee0cb848cebb3572'
                        key: {
                            sp_widget: '8c7da3f687f44e50147ec9550cbb35f2'
                            sp_angular_provider: 'c56bbfd387156a50ee0cb848cebb3559'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0766c73f48ba4ec4aa2a121b7c2e70d4'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_rest_message_fn'
                        id: '081854d487a1c210ee0cb848cebb352f'
                        key: {
                            rest_message: 'fef7d8d487a1c210ee0cb848cebb3512'
                            function_name: 'Validate'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0987e7b77c8e4e4bb8a1c952b91c4d32'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '099035ec782b4a64915a6a566b3c1336'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0afa3dee3b107290ceb02a1c95e45a3c'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'question'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0afa3dee3b107290ceb02a1c95e45a3d'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'tooltip'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0afa3dee3b107290ceb02a1c95e45a3e'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'angular_template'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0afa3dee3b107290ceb02a1c95e45a3f'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'order'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0afa3dee3b107290ceb02a1c95e45a40'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'questionnaire_template'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0afa3dee3b107290ceb02a1c95e45a41'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0afa3dee3b107290ceb02a1c95e45a42'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'resource_no_url'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0afa3dee3b107290ceb02a1c95e45a43'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'ratings.xml'
                            position: '16'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '0afb7b9b87156a50ee0cb848cebb3547'
                        key: {
                            sp_widget: '62e6675387d16a50ee0cb848cebb3524'
                            sp_angular_provider: 'c56bbfd387156a50ee0cb848cebb3559'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '0b4e3f918709c2106fa97627cebb354c'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'region'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0c2ad2a7877cce50147ec9550cbb35c2'
                        key: {
                            list_id: {
                                id: '042ad2a7877cce50147ec9550cbb35c2'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_import_row'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0cff3c2c8cdf440f8fcac30284d24aed'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'question_type'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0d126bed3b732610ceb02a1c95e45a47'
                        key: {
                            name: 'u_imp_saml_user_ywha2spnin'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '0db863a73b14f210ceb02a1c95e45a5b'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            view: {
                                id: '32cca062473231100c657c2fe16d43ab'
                                key: {
                                    name: 'sys_ref_list'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0ddf900c33cc7a10dfa2f432cd5c7bfd'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'organization_size'
                            value: 'small'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '107bad1e87f44a506fa97627cebb35f4'
                        key: {
                            list_id: {
                                id: '587bad1e87f44a506fa97627cebb35f3'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_import_row'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '11149b05874982106fa97627cebb3547'
                        key: {
                            map: '49049b05874982106fa97627cebb3520'
                            target_field: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '121d2f1c457a4eb69a5eebe0f07cfd5e'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'u_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1478e74cf7a84acaa84304b47f9c0502'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                            element: 'u_parent'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '147bad1e87f44a506fa97627cebb35f4'
                        key: {
                            list_id: {
                                id: '587bad1e87f44a506fa97627cebb35f3'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_import_state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '161b045de6784c5e807fc79209900d83'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'resource_url'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '162a248287f08a50147ec9550cbb35bd'
                        key: {
                            sp_widget: '3944a8178773b5106fa97627cebb3575'
                            sp_angular_provider: 'aa58900687b08a50147ec9550cbb3590'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '174456af873cce50147ec9550cbb3540'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re.rsc_sectors_user'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1819f4983bac7610ceb02a1c95e45af3'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'question_type'
                            position: '21'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '187bad1e87f44a506fa97627cebb35f4'
                        key: {
                            list_id: {
                                id: '587bad1e87f44a506fa97627cebb35f3'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_target_sys_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19285d9bbbd340a4b17255c70f95c719'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'version'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1b9652a3877cce50147ec9550cbb353f'
                        key: {
                            sys_ui_section: {
                                id: 'd79652a3877cce50147ec9550cbb353d'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_sector'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1bff5db410774e219c8ef38c6484b53d'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'u_policy'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '1cb6116f87a12e10d19aa8ed3fbb353f'
                        key: {
                            map: '10b6116f87a12e10d19aa8ed3fbb3536'
                            target_field: 'first_name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1d436a1987fcc650147ec9550cbb355f'
                        key: {
                            sys_security_acl: 'd1436a1987fcc650147ec9550cbb355a'
                            sys_user_role: {
                                id: '4143aa5587fcc650147ec9550cbb35d2'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.rsc_portal_questions_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1d73fa629b2c43c88b2292def9f12d86'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '1d987fb947df26108d277d88c26d43b4'
                        key: {
                            id: 'rsc_cyhy_enrollment_landing'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '1dfb6c6522b649f49bfbf7f5a839eb71'
                        key: {
                            logical_table_name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                            col_name_string: 'parent'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1f9652a3877cce50147ec9550cbb353f'
                        key: {
                            sys_ui_section: {
                                id: 'd79652a3877cce50147ec9550cbb353d'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'template_import_log.message'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '20c35705874982106fa97627cebb356b'
                        key: {
                            sys_ui_section: {
                                id: '68c35705874982106fa97627cebb3569'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_name'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '21f97899c2764d25839ff2396958ff4f'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2368c49f31e84592b4a1bda93f4b74d3'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'version'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '237bed1e87f44a506fa97627cebb350d'
                        key: {
                            map: '6b7bed1e87f44a506fa97627cebb3505'
                            target_field: 'tooltip_body'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '23df900c33cc7a10dfa2f432cd5c7b0e'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'organization_size'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24e0ef96fd584ca0b2125575dd8b1a19'
                        key: {
                            name: 'u_imp_saml_user_a1kn5tdmak'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '254e13172bb94429b340b1ed449e3f85'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25dc4fbf471d82108d277d88c26d43cc'
                        key: {
                            name: 'x_g_dhs_rsc_rsc_import'
                            element: 'u_customer_account_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '265480298709c2106fa97627cebb3532'
                        key: {
                            sys_ui_section: {
                                id: '625480a58709c2106fa97627cebb358a'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'region'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '26672a9d87fcc650147ec9550cbb3537'
                        key: {
                            list_id: {
                                id: 'aa672a9d87fcc650147ec9550cbb3535'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'question'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2729d3257a81473da16778b16d281062'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'u_question_answer_2'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '273acd8939324587bd9d6e05b507169d'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'u_question_answer_text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '27401a2e84ae4e47a9d1b15d6f0289c0'
                        key: {
                            name: 'u_imp_saml_user_a1kn5tdmak'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2832112503a846ab95c2dfa3e07c70bd'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '28c35705874982106fa97627cebb356b'
                        key: {
                            sys_ui_section: {
                                id: '68c35705874982106fa97627cebb3569'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'template_import_log.message'
                            position: '1'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '29f3e39f87916a50ee0cb848cebb35b5'
                        key: {
                            id: 'rsc_questionnaire_summary'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2a672a9d87fcc650147ec9550cbb3537'
                        key: {
                            list_id: {
                                id: 'aa672a9d87fcc650147ec9550cbb3535'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'resource_url'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a7b100576c94af4b11af1855534ad4d'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2adc473694c44fa2a8afff5dd333502d'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'question_answer'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2b441eef873cce50147ec9550cbb3554'
                        key: {
                            sys_security_acl: 'db441eef873cce50147ec9550cbb354d'
                            sys_user_role: {
                                id: '174456af873cce50147ec9550cbb3540'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.rsc_sectors_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2b4f08e533903690dfa2f432cd5c7b5e'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'level'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b559bdfccbe4ed78a461322fed20145'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '2b5bc4e047494a878a263563f54e3937'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b929977984746529d7f0eb6a003a04a'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '2bdd10003b4cf610ceb02a1c95e45acc'
                        key: {
                            sp_widget: 'afdd10003b4cf610ceb02a1c95e45ac4'
                            sp_angular_provider: 'b6fd93ba87b44e50147ec9550cbb3581'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c532e4800564103a5f9f1f781a37cd2'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'points'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2c8eb7d18709c2106fa97627cebb3531'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'region'
                            value: '7'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2e03707a3e22464cb694c6b6e146bd67'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'question_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2e5480298709c2106fa97627cebb3531'
                        key: {
                            sys_ui_section: {
                                id: '625480a58709c2106fa97627cebb358a'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2e672a9d87fcc650147ec9550cbb3537'
                        key: {
                            list_id: {
                                id: 'aa672a9d87fcc650147ec9550cbb3535'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'tooltip_body'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2f441eef873cce50147ec9550cbb356a'
                        key: {
                            sys_security_acl: 'e3441eef873cce50147ec9550cbb3565'
                            sys_user_role: {
                                id: '174456af873cce50147ec9550cbb3540'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.rsc_sectors_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f531f4e22c44021a973d5dc2b5a2a85'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'account'
                            language: 'en'
                        }
                    },
                    {
                        table: 'm2m_sp_theme_css_include'
                        id: '30de6d2947ef16508d277d88c26d43f7'
                        key: {
                            sp_css_include: '2f08d29687502e10ee0cb848cebb354b'
                            sp_theme: 'b7b8605b8773b5106fa97627cebb35e9'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '314e73918709c2106fa97627cebb35eb'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'region'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3228f594877d4684945a045f2786fcf8'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'version'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3273fb2e7992484092383cff7560b290'
                        key: {
                            name: 'u_imp_saml_user_ywha2spnin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '32912f4d42af42c6901d7d00e315f03e'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'questionnaire_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '33fc745d3bc83e10ceb02a1c95e45a96'
                        key: {
                            sp_widget: 'afdd10003b4cf610ceb02a1c95e45ac4'
                            sp_angular_provider: 'e2ec38d93bc83e10ceb02a1c95e45a47'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '34d6ea5d87fcc650147ec9550cbb3514'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '37642bcbf76a4e749bf2a96238555c56'
                        key: {
                            logical_table_name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            col_name_string: 'region'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '37fe7cd2609f4a29aa6bb1d7310682b6'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '3842fcf787316e10a28bc8460cbb353a'
                        key: {
                            id: '10b6116f87a12e10d19aa8ed3fbb3536'
                            table: 'sys_transform_map'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '396f7fc0a24b4d9b83cd71385486a348'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '39f763f920194250b38686f78e3a0658'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'template'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a2351d0116a45bda4b577faa5967854'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'm2m_sp_theme_js_include'
                        id: '3b22201087e1c210ee0cb848cebb3583'
                        key: {
                            sp_js_include: '6e40a49c87a1c210ee0cb848cebb35f6'
                            sp_theme: 'b7b8605b8773b5106fa97627cebb35e9'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3b4e5c4833cc7a10dfa2f432cd5c7bb2'
                        key: {
                            sys_security_acl: 'ff4e5c4833cc7a10dfa2f432cd5c7bae'
                            sys_user_role: {
                                id: 'ef4e5c4833cc7a10dfa2f432cd5c7b44'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.cisa_vm_questionnaire_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '3ddb41c94765e6108d277d88c26d4350'
                        key: {
                            sp_widget: 'b41a321347f8e6108d277d88c26d4339'
                            sp_angular_provider: '26da2ac147d5ae108d277d88c26d43c9'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3f4e5c4833cc7a10dfa2f432cd5c7ba3'
                        key: {
                            sys_security_acl: 'f34e5c4833cc7a10dfa2f432cd5c7ba0'
                            sys_user_role: {
                                id: 'ef4e5c4833cc7a10dfa2f432cd5c7b44'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.cisa_vm_questionnaire_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '40e2a3821c164c7eb849007a89fdaf8d'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'show_resource'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '4143aa5587fcc650147ec9550cbb35d2'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re.rsc_portal_questions_user'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '416ef3d18709c2106fa97627cebb3523'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'region'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '41c795798731a210ee0cb848cebb3575'
                        key: {
                            id: 'rsc_login_page'
                        }
                    },
                    {
                        table: 'm2m_sp_theme_css_include'
                        id: '42be729747f8e6108d277d88c26d4328'
                        key: {
                            sp_css_include: '08ce729747f8e6108d277d88c26d43df'
                            sp_theme: 'b7b8605b8773b5106fa97627cebb35e9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4305e0f4c5544c26a9fe8e1429f35754'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'questionnaire'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '46224ff7194d415498fc857c2eeca0a9'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '46d8ee61037841a2b9ad21f760165ca7'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'region'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4753dfe551274dc5abd85c1414bbf03d'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '479cb920a14844a2a7cb96799c2e77c8'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4858f7723b7fe210ceb02a1c95e45a3c'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'questionnaire_size'
                            value: 'small'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '49a3dfc1874982106fa97627cebb3551'
                        key: {
                            list_id: {
                                id: 'c5a3dfc1874982106fa97627cebb3550'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '49c82fd887866e10ee0cb848cebb35f0'
                        key: {
                            map: '89c82fd887866e10ee0cb848cebb35e2'
                            target_field: 'email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49f6ff4dea314b168f8b9c5234110746'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a031223c5df43e9abea43fa411cf422'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'parent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b1b689288624dc8b071c2b37581ae10'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'questionnaire_template'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b983f723b7fe210ceb02a1c95e45a49'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'questionnaire_size'
                            value: 'medium'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '4bf79b6030f44412ad87c466873ac7ef'
                        key: {
                            logical_table_name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            col_name_string: 'column_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e0b8a8b644a4c4ba8d25989f98bd09e'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'angular_template'
                            language: 'en'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '4fb6eb3e471aaa508d277d88c26d4301'
                        key: {
                            sp_widget: '62e6675387d16a50ee0cb848cebb3524'
                            sp_angular_provider: 'bc1158218749c2106fa97627cebb35f0'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '51126bed3b732610ceb02a1c95e45ab1'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '51436a1987fcc650147ec9550cbb3555'
                        key: {
                            sys_security_acl: '51436a1987fcc650147ec9550cbb3543'
                            sys_user_role: {
                                id: '4143aa5587fcc650147ec9550cbb35d2'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.rsc_portal_questions_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '515ad58e16924d53a906af95aa0f192d'
                        key: {
                            logical_table_name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            col_name_string: 'contact'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '51ac7b8794f044a49b130a249a299e40'
                        key: {
                            logical_table_name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            col_name_string: 'questionnaire_template'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '54c35705874982106fa97627cebb352e'
                        key: {
                            list_id: {
                                id: 'd8c35705874982106fa97627cebb352d'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_import_set'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '556097d4ccd04681907d5347250c71c3'
                        key: {
                            logical_table_name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                            col_name_string: 'sector'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '562a56a7877cce50147ec9550cbb351e'
                        key: {
                            map: '122a56a7877cce50147ec9550cbb351c'
                            target_field: 'sector'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5861b9300a554e879ad581bc63fdc9b5'
                        key: {
                            name: 'u_imp_saml_user_a1kn5tdmak'
                            element: 'first_name'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '587bad1e87f44a506fa97627cebb35f3'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '589943a975cd4387af8292108c39c1f3'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '58c35705874982106fa97627cebb352e'
                        key: {
                            list_id: {
                                id: 'd8c35705874982106fa97627cebb352d'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_target_table'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5982bf4e4c6e4426bb31c15e292efd85'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'column_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '5bf25ce18749c2106fa97627cebb3566'
                        key: {
                            sp_widget: '94131455870d82106fa97627cebb3567'
                            sp_angular_provider: 'bc1158218749c2106fa97627cebb35f0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5c19e55529fe4e8abcb6dc925b504f5c'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5c21f6f92bd44810b8dd9fd4dd31c973'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'region'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5cc35705874982106fa97627cebb352e'
                        key: {
                            list_id: {
                                id: 'd8c35705874982106fa97627cebb352d'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_row_error'
                        }
                    },
                    {
                        table: 'm2m_sp_theme_css_include'
                        id: '5ed8ccc8472f6a108d277d88c26d433f'
                        key: {
                            sp_css_include: '5ce8c00c472f6a108d277d88c26d434a'
                            sp_theme: 'b7b8605b8773b5106fa97627cebb35e9'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '5efa472487f006506fa97627cebb35c9'
                        key: {
                            id: 'rsc_welcome'
                        }
                    },
                    {
                        table: 'sys_rest_message_fn'
                        id: '5efb03a387b46a10ee0cb848cebb35fa'
                        key: {
                            rest_message: '15d81e9b87302a10ee0cb848cebb3521'
                            function_name: 'SUBMIT PRODUCER'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '625480a58709c2106fa97627cebb358a'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '631a48e1d7b449a98d25c04b3d1c0adc'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '63441eef873cce50147ec9550cbb3560'
                        key: {
                            sys_security_acl: '2b441eef873cce50147ec9550cbb355a'
                            sys_user_role: {
                                id: '174456af873cce50147ec9550cbb3540'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.rsc_sectors_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6361a1ac928f48c2b58bd69a2eba6903'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'organization_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6368c8090c184a1ab3d02c9bea295e4a'
                        key: {
                            name: 'u_imp_saml_user_ywha2spnin'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '637bed1e87f44a506fa97627cebb350f'
                        key: {
                            map: '6b7bed1e87f44a506fa97627cebb3505'
                            target_field: 'tooltip'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '657deffca24345bfa61a6f23f9cf62d4'
                        key: {
                            name: 'u_imp_saml_user_ywha2spnin'
                            element: 'user_name'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '668eb65787f02a10ee0cb848cebb35fe'
                        key: {
                            sp_widget: 'b41a321347f8e6108d277d88c26d4339'
                            sp_angular_provider: '341e565387702a10ee0cb848cebb3576'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6751134bf0cc4d10b4558189d7fe39da'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'email'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '67e8d40687b08a50147ec9550cbb351f'
                        key: {
                            sp_widget: '49b6661d87fcc650147ec9550cbb352e'
                            sp_angular_provider: 'aa58900687b08a50147ec9550cbb3590'
                        }
                    },
                    {
                        table: 'sys_rest_message_fn'
                        id: '680ed25387702a10ee0cb848cebb350b'
                        key: {
                            rest_message: '15d81e9b87302a10ee0cb848cebb3521'
                            function_name: 'RSC GET'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '685a2f80c7ec4533894a58519939a170'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '68a00b81870982106fa97627cebb3554'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '68bdf28005c848edb3e88ddbc51c87b1'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '68c35705874982106fa97627cebb3569'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69d6546e11de4083acf1cb3e08f6b85d'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a23d4b6336d4a918b86d1a3cb593ae8'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'u_question'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ad7d3d3aaa840efbc73c26df51847d6'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '6c07194b8715e650ee0cb848cebb35f0'
                        key: {
                            sp_widget: 'd40715c78715e650ee0cb848cebb357a'
                            sp_angular_provider: '26da2ac147d5ae108d277d88c26d43c9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c187579a38745109b9f2bdd4e444935'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'contact'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6c7e7f918709c2106fa97627cebb3523'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'region'
                            value: '5'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6cf7472414bc460d9df4c536578ebd9f'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'tooltip_body'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6d126bed3b732610ceb02a1c95e45aeb'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6e672a9d87fcc650147ec9550cbb3536'
                        key: {
                            list_id: {
                                id: 'aa672a9d87fcc650147ec9550cbb3535'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'column_name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '71855eef873cce50147ec9550cbb357f'
                        key: {
                            list_id: {
                                id: 'fd855eef873cce50147ec9550cbb357d'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'parent'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7219752b04bd43f2b22b4a48212541f1'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'resource_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '72d129016d734441912697add709054d'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '748ba01f8773b5106fa97627cebb3567'
                        key: {
                            id: 'rsc_intake'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '75031bc1874982106fa97627cebb3593'
                        key: {
                            sys_security_acl: 'bd031bc1874982106fa97627cebb358d'
                            sys_user_role: {
                                id: 'a50313c1874982106fa97627cebb3531'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.rsc_us_states_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '75031bc1874982106fa97627cebb35aa'
                        key: {
                            sys_security_acl: 'bd031bc1874982106fa97627cebb35a4'
                            sys_user_role: {
                                id: 'a50313c1874982106fa97627cebb3531'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.rsc_us_states_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '750ac879ecfc408e80163c0d89a1d3a2'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'angular_template'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '758cb09c3bac7610ceb02a1c95e45abe'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'question_type'
                            value: 'state'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76ea59cfa3e44aadabef2cc799ae7e2a'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'tooltip'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78d833b23b7fe210ceb02a1c95e45a2c'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'questionnaire_size'
                            value: 'large'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'm2m_sp_theme_css_include'
                        id: '79bead2947ef16508d277d88c26d4333'
                        key: {
                            sp_css_include: '69bf929e87502e10ee0cb848cebb3548'
                            sp_theme: 'b7b8605b8773b5106fa97627cebb35e9'
                        }
                    },
                    {
                        table: 'sys_rest_message_fn'
                        id: '79ddc85387740e506fa97627cebb350e'
                        key: {
                            rest_message: '7dbd4c5387740e506fa97627cebb352b'
                            function_name: 'Create/Update Case'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a46532b62d840a1893352ff4a34e4a3'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'u_tooltip'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a507259216244ac9843802b8feafef2'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '7ad9b8593bc83e10ceb02a1c95e45a60'
                        key: {
                            sp_widget: 'afdd10003b4cf610ceb02a1c95e45ac4'
                            sp_angular_provider: '0fb9f4193bc83e10ceb02a1c95e45ac8'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '7bbdc4f087e52610ee0cb848cebb3567'
                        key: {
                            sp_widget: 'fc24a0bc87f406506fa97627cebb353f'
                            sp_angular_provider: '26da2ac147d5ae108d277d88c26d43c9'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '7c1223fa87b44e50147ec9550cbb356f'
                        key: {
                            sp_widget: 'f264ac178773b5106fa97627cebb3510'
                            sp_angular_provider: 'b6fd93ba87b44e50147ec9550cbb3581'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '7d0e87af8705f610ee0cb848cebb35a5'
                        key: {
                            sp_widget: 'fc24a0bc87f406506fa97627cebb353f'
                            sp_angular_provider: '78b51f0e4747aa508d277d88c26d431d'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7dafd2773b503610ceb02a1c95e45a51'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '20'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7e69a249cd7a4337b501128f59810d97'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'u_question_answer_1'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e6e3f518709c2106fa97627cebb359e'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'region'
                            value: '4'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f4525d42eaa46c7a534677c9ad3ff25'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'email'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7fae2a293bde3a10ceb02a1c95e45a75'
                        key: {
                            name: 'u_imp_saml_user_a1kn5tdmak'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '802ad2a7877cce50147ec9550cbb35c3'
                        key: {
                            list_id: {
                                id: '042ad2a7877cce50147ec9550cbb35c2'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_target_table'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '80e06d1572714808b0ecb09d543cfe17'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'region'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '819cedfee9704c21b22c410d1a7e335a'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                            element: 'u_sector'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '81f687838ec4472683dcefcd5db3ebaa'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'u_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '82504b09a43c4a93a9f200982fd03c49'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'u_question_answer_2'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '842ad2a7877cce50147ec9550cbb35c3'
                        key: {
                            list_id: {
                                id: '042ad2a7877cce50147ec9550cbb35c2'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_row_error'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '85c564924ec642e0ac863f235b4438b9'
                        key: {
                            logical_table_name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            col_name_string: 'parent'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '85c82fd887866e10ee0cb848cebb35e7'
                        key: {
                            map: '89c82fd887866e10ee0cb848cebb35e2'
                            target_field: 'sso_source'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8692160461b64d76aa8ea282dad446d5'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                            element: 'sector'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '89126bed3b732610ceb02a1c95e45a93'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '89bfb7d18709c2106fa97627cebb3536'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'region'
                            value: '9'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '8ace7bdb172e4b7ba9d008f06bad71db'
                        key: {
                            logical_table_name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            col_name_string: 'account'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '8b1a5c483b0cf610ceb02a1c95e45a42'
                        key: {
                            id: 'rsc_intake_wrapper'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b67b6a3745f42deab38c8302f14d942'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                            element: 'sector'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8bc4389262ee4a48b6c3d2acd9b387ef'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'u_question_answer_1'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8c2ad2a7877cce50147ec9550cbb35c2'
                        key: {
                            list_id: {
                                id: '042ad2a7877cce50147ec9550cbb35c2'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_import_set'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8dc440dbfaa94834b4ce4ac60e6d3f47'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'region'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8e3ba810e09c4fbf85514589396f31c5'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '8e543f5387156a50ee0cb848cebb35d3'
                        key: {
                            sp_widget: '62e6675387d16a50ee0cb848cebb3524'
                            sp_angular_provider: 'b6fd93ba87b44e50147ec9550cbb3581'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8e8ce244cf7e40238db2ef2a318668c0'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'u_column_name'
                        }
                    },
                    {
                        table: 'm2m_sp_theme_css_include'
                        id: '8f889d2087c06650ee0cb848cebb353d'
                        key: {
                            sp_css_include: '8b68592087c06650ee0cb848cebb3580'
                            sp_theme: 'b7b8605b8773b5106fa97627cebb35e9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9001297407db4450811f0551583cf88f'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '907bad1e87f44a506fa97627cebb35f4'
                        key: {
                            list_id: {
                                id: '587bad1e87f44a506fa97627cebb35f3'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_import_set'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '90b5540556544f3eb38e56d90ae30e77'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'account'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '91475573de0e4786a5c1123cee9fdf5e'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'organization_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '93b43fbc3bc4fa10ceb02a1c95e45a07'
                        key: {
                            sys_security_acl: '5fb43fbc3bc4fa10ceb02a1c95e45a01'
                            sys_user_role: {
                                id: 'cbb4bf7c3bc4fa10ceb02a1c95e45aea'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.questionnaire_answers_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '94557a84990c42b39db2595162a6596a'
                        key: {
                            name: 'u_imp_saml_user_a1kn5tdmak'
                            element: 'user_name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '947bad1e87f44a506fa97627cebb35f4'
                        key: {
                            list_id: {
                                id: '587bad1e87f44a506fa97627cebb35f3'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_target_table'
                        }
                    },
                    {
                        table: 'sys_rest_message_fn'
                        id: '94bef65787f02a10ee0cb848cebb354c'
                        key: {
                            rest_message: '15d81e9b87302a10ee0cb848cebb3521'
                            function_name: 'TABLE API'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9505a3648a4944e39d7e801ff2038087'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'qid'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_rest_message_fn'
                        id: '9512568b4731aa108d277d88c26d4342'
                        key: {
                            rest_message: '15d81e9b87302a10ee0cb848cebb3521'
                            function_name: 'RSC SERVICE ENROLLMENT'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '96717f4e7654498ab80a35212b9a84de'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'points'
                        }
                    },
                    {
                        table: 'm2m_sp_theme_css_include'
                        id: '9774cbdb47f8e6108d277d88c26d43cf'
                        key: {
                            sp_css_include: '3c840b1f47f8e6108d277d88c26d43ab'
                            sp_theme: 'b7b8605b8773b5106fa97627cebb35e9'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '987bad1e87f44a506fa97627cebb35f4'
                        key: {
                            list_id: {
                                id: '587bad1e87f44a506fa97627cebb35f3'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_row_error'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '98b6116f87a12e10d19aa8ed3fbb353d'
                        key: {
                            map: '10b6116f87a12e10d19aa8ed3fbb3536'
                            target_field: 'user_name'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '994c512747ed62108d277d88c26d43d6'
                        key: {
                            sp_widget: 'fc24a0bc87f406506fa97627cebb353f'
                            sp_angular_provider: '7cbbd9a347ed62108d277d88c26d432f'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '99c1c1ce471766108d277d88c26d4360'
                        key: {
                            sp_widget: 'a7c8f3f947df26108d277d88c26d431c'
                            sp_angular_provider: '26da2ac147d5ae108d277d88c26d43c9'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a7ebf118709c2106fa97627cebb35ec'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'region'
                            value: '6'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b029d9ac4db4e9da48685b971729cfe'
                        key: {
                            name: 'u_imp_saml_user_ywha2spnin'
                            element: 'user_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '9cb6116f87a12e10d19aa8ed3fbb3541'
                        key: {
                            map: '10b6116f87a12e10d19aa8ed3fbb3536'
                            target_field: 'email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9cc8ab1544d843b6b1faf7af8d1f56ed'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'question'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9d436a1987fcc650147ec9550cbb3576'
                        key: {
                            sys_security_acl: '9d436a1987fcc650147ec9550cbb3564'
                            sys_user_role: {
                                id: '4143aa5587fcc650147ec9550cbb35d2'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.rsc_portal_questions_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d9e73d18709c2106fa97627cebb35be'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'region'
                            value: '8'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '9dd8580687b08a50147ec9550cbb3570'
                        key: {
                            sp_widget: 'f264ac178773b5106fa97627cebb3510'
                            sp_angular_provider: 'aa58900687b08a50147ec9550cbb3590'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9fa2efc6d98b4da3b88aac1105d3f887'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'u_question'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0bd8c59aff3490f910273978e0cf71e'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'u_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a0c6d0a86add42ecbd24fc10a954d43e'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a2a4d9d336fe46d6a64adeb240867aaf'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'column_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a385e48fae7a4a8f8fd9262b003d1278'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'resource_no_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a47bed1e87f44a506fa97627cebb3529'
                        key: {
                            sys_ui_section: {
                                id: 'ec7bed1e87f44a506fa97627cebb3527'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_tooltip_body'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'a50313c1874982106fa97627cebb3531'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re.rsc_us_states_user'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a512abed3b732610ceb02a1c95e45a08'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                        }
                    },
                    {
                        table: 'sys_rest_message_fn'
                        id: 'a56956db87302a10ee0cb848cebb353d'
                        key: {
                            rest_message: '15d81e9b87302a10ee0cb848cebb3521'
                            function_name: 'RSC CREATE'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a616721e509d4d418c4110ebc1701359'
                        key: {
                            name: 'u_imp_saml_user_a1kn5tdmak'
                            element: 'first_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6385161bdbf45a8ae8a20e49cdc8912'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a6672a9d87fcc650147ec9550cbb3537'
                        key: {
                            list_id: {
                                id: 'aa672a9d87fcc650147ec9550cbb3535'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'resource_no_url'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'a77bed1e87f44a506fa97627cebb3508'
                        key: {
                            map: '6b7bed1e87f44a506fa97627cebb3505'
                            target_field: 'column_name'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a7840c54ac924f1b8688cdeca5a58725'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a80a5565abe94f9a836a0c5374e7bb07'
                        key: {
                            name: 'u_imp_saml_user_ywha2spnin'
                            element: 'sso_source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'aa672a9d87fcc650147ec9550cbb3535'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'aa672a9d87fcc650147ec9550cbb3537'
                        key: {
                            list_id: {
                                id: 'aa672a9d87fcc650147ec9550cbb3535'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'tooltip'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa7ecf19b0204b2bbc030d122f7b8be8'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'account'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: 'aab958e887d5ea10ee0cb848cebb35cd'
                        key: {
                            id: 'rsc_index'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'abdd50003b4cf610ceb02a1c95e45aca'
                        key: {
                            sp_widget: 'afdd10003b4cf610ceb02a1c95e45ac4'
                            sp_angular_provider: 'bc1158218749c2106fa97627cebb35f0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae04f88bd49f45789d6ee32be456376d'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                            element: 'u_sector'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'af02c332e1504e57b5831a8ef332fe3d'
                        key: {
                            name: 'u_imp_saml_user_ywha2spnin'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'af323a058795ae10ee0cb848cebb358d'
                        key: {
                            sp_widget: '6de5baf3474d2a108d277d88c26d4302'
                            sp_angular_provider: '26da2ac147d5ae108d277d88c26d43c9'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'af3b220547d5ae108d277d88c26d43c0'
                        key: {
                            sp_widget: '0f6989c987b446506fa97627cebb35ad'
                            sp_angular_provider: '26da2ac147d5ae108d277d88c26d43c9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b18fe81769f54f738d9c47b88981e390'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b34e5c4833cc7a10dfa2f432cd5c7bab'
                        key: {
                            sys_security_acl: '7b4e5c4833cc7a10dfa2f432cd5c7ba7'
                            sys_user_role: {
                                id: 'ef4e5c4833cc7a10dfa2f432cd5c7b44'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.cisa_vm_questionnaire_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b3c455af3b58b210ceb02a1c95e45a18'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'depends_on_value'
                            position: '19'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b42762ba5f8a478face57ea07fd4f8e8'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'u_tooltip_body'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b53914c27bd441709015e13c7fa00af6'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'show_resource'
                            language: 'en'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'b66c43a58736a210ee0cb848cebb3502'
                        key: {
                            sp_widget: 'eedfab06477166108d277d88c26d433b'
                            sp_angular_provider: '7217481247f166108d277d88c26d4391'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b85f4ce533903690dfa2f432cd5c7b5c'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'level'
                            value: 'sub-section'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b9031bc1874982106fa97627cebb3587'
                        key: {
                            sys_security_acl: '39031bc1874982106fa97627cebb3581'
                            sys_user_role: {
                                id: 'a50313c1874982106fa97627cebb3531'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.rsc_us_states_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b9ff5cc833cc7a10dfa2f432cd5c7baf'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'organization_size'
                            value: 'large'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'baa9ebc3029b4eb78571b14d871185fa'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'organization_size'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff31187286470'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff31552723648'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff31322969179'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff3d578586702'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff31325471346'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff31798363417'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff31330036490'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff31954841632'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff31539861422'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff31757143553'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff31554071498'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff31873593586'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff31569286853'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff31991165189'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff31722791621'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff31893871630'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff31732989462'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff3d344560630'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff31778377248'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff31873246273'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff31802563708'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff3d401179418'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff32013078507'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff3d417191814'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff3d134132274'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff3d977681290'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff3d201303783'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff31604648621'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff3d233519160'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff3d713197021'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff3d288635328'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff3d505576649'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff3d662760475'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff3d449674006'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff3d867687650'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff31791847628'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff3d926704489'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff3d992616883'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc91c2a5f334621048dff3d950370254'
                        key: {
                            sys_security_acl: 'bc91c2a5f334621048dff31637375465'
                            sys_user_role: {
                                id: 'b0593b350a0a0aa7001d689e4542dc28'
                                key: {
                                    name: 'public'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bce7486a0ad340b7a855d632cde2c067'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'u_tooltip_body'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bd031bc1874982106fa97627cebb35b4'
                        key: {
                            sys_security_acl: 'f5031bc1874982106fa97627cebb35af'
                            sys_user_role: {
                                id: 'a50313c1874982106fa97627cebb3531'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.rsc_us_states_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd3e6e77fe0a49b2b690aba67b65615b'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'u_tooltip'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bece2d134ade44aea62383baf0b4a2a8'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'u_question_text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: 'bf9d63d447ce22508d277d88c26d4366'
                        key: {
                            id: '89c82fd887866e10ee0cb848cebb35e2'
                            table: 'sys_transform_map'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c00008924ed24043b28a448cc100a8a3'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c0801c266de04020acb553f7e526e8dc'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c0980832e64e4cefb46cf9c60f63aca6'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'u_question_text'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c1126bed3b732610ceb02a1c95e45a75'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c11699a791fc4d46ba188c90ee799a35'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'account'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c2fa3dee3b107290ceb02a1c95e45a3b'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'title'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c3243051a37f48eeb1d6ea2149980245'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'question_answer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c38ceb1087c66e10ee0cb848cebb3535'
                        key: {
                            list_id: {
                                id: '038ceb1087c66e10ee0cb848cebb3534'
                                key: {
                                    name: 'u_imp_saml_user_ywha2spnin'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'import_set_run'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'c5a3dfc1874982106fa97627cebb3550'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c5b863a73b14f210ceb02a1c95e45a5d'
                        key: {
                            list_id: {
                                id: '0db863a73b14f210ceb02a1c95e45a5b'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    view: '32cca062473231100c657c2fe16d43ab'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'column_name'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'c5c82fd887866e10ee0cb848cebb35eb'
                        key: {
                            map: '89c82fd887866e10ee0cb848cebb35e2'
                            target_field: 'user_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c5e36aa9f3e74b88809e59bb8253d597'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'questionnaire_size'
                        }
                    },
                    {
                        table: 'sys_rest_message_fn'
                        id: 'c632dba94729aa108d277d88c26d433d'
                        key: {
                            rest_message: '13129ba54729aa108d277d88c26d433c'
                            function_name: 'Validate'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c6be9d053e6d4b79a0a96dd28838501c'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'tooltip'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c78ceb1087c66e10ee0cb848cebb3535'
                        key: {
                            list_id: {
                                id: '038ceb1087c66e10ee0cb848cebb3534'
                                key: {
                                    name: 'u_imp_saml_user_ywha2spnin'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sso_source'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c85e5c4833cc7a10dfa2f432cd5c7bd1'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c997f018559845788544800a2d6f2e11'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'u_policy'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c99a23e00472453c80d660f5c2d5dcf6'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cb6fc8e533903690dfa2f432cd5c7b47'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'level'
                            value: 'question'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'cb8ceb1087c66e10ee0cb848cebb3534'
                        key: {
                            list_id: {
                                id: '038ceb1087c66e10ee0cb848cebb3534'
                                key: {
                                    name: 'u_imp_saml_user_ywha2spnin'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'cb8ceb1087c66e10ee0cb848cebb3535'
                        key: {
                            list_id: {
                                id: '038ceb1087c66e10ee0cb848cebb3534'
                                key: {
                                    name: 'u_imp_saml_user_ywha2spnin'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'template_import_log'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'cbb4bf7c3bc4fa10ceb02a1c95e45aea'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re.questionnaire_answers_user'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'cc7da3f687f44e50147ec9550cbb35f5'
                        key: {
                            sp_widget: '8c7da3f687f44e50147ec9550cbb35f2'
                            sp_angular_provider: 'aa58900687b08a50147ec9550cbb3590'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'ce5e81a38778ce50147ec9550cbb35b2'
                        key: {
                            sp_widget: '8c7da3f687f44e50147ec9550cbb35f2'
                            sp_angular_provider: 'b6fd93ba87b44e50147ec9550cbb3581'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'cf8ceb1087c66e10ee0cb848cebb3534'
                        key: {
                            list_id: {
                                id: '038ceb1087c66e10ee0cb848cebb3534'
                                key: {
                                    name: 'u_imp_saml_user_ywha2spnin'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'first_name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'cf8ceb1087c66e10ee0cb848cebb3535'
                        key: {
                            list_id: {
                                id: '038ceb1087c66e10ee0cb848cebb3534'
                                key: {
                                    name: 'u_imp_saml_user_ywha2spnin'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'user_name'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: 'd03febc2477166108d277d88c26d43cd'
                        key: {
                            id: 'rsc_cyhy_enrollment'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'd0b6116f87a12e10d19aa8ed3fbb353a'
                        key: {
                            map: '10b6116f87a12e10d19aa8ed3fbb3536'
                            target_field: 'sso_source'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd0c35705874982106fa97627cebb352e'
                        key: {
                            list_id: {
                                id: 'd8c35705874982106fa97627cebb352d'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_import_row'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'd1b272c287f5e210d19aa8ed3fbb354d'
                        key: {
                            name: 'u_imp_saml_user_a1kn5tdmak'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd1b272c287f5e210d19aa8ed3fbb354f'
                        key: {
                            list_id: {
                                id: 'd1b272c287f5e210d19aa8ed3fbb354d'
                                key: {
                                    name: 'u_imp_saml_user_a1kn5tdmak'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'first_name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd1b272c287f5e210d19aa8ed3fbb3550'
                        key: {
                            list_id: {
                                id: 'd1b272c287f5e210d19aa8ed3fbb354d'
                                key: {
                                    name: 'u_imp_saml_user_a1kn5tdmak'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'user_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd222d60df4cb46168f3192808620ea9a'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'qid'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd29779f753dd4d6c83b9a6f2439cfd52'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd34eb3918709c2106fa97627cebb35bf'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'region'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd3b43fbc3bc4fa10ceb02a1c95e45a1c'
                        key: {
                            sys_security_acl: '97b43fbc3bc4fa10ceb02a1c95e45a0c'
                            sys_user_role: {
                                id: 'cbb4bf7c3bc4fa10ceb02a1c95e45aea'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.questionnaire_answers_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd3b43fbc3bc4fa10ceb02a1c95e45a23'
                        key: {
                            sys_security_acl: '5fb43fbc3bc4fa10ceb02a1c95e45a1f'
                            sys_user_role: {
                                id: 'cbb4bf7c3bc4fa10ceb02a1c95e45aea'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.questionnaire_answers_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd3b43fbc3bc4fa10ceb02a1c95e45a2a'
                        key: {
                            sys_security_acl: '5fb43fbc3bc4fa10ceb02a1c95e45a26'
                            sys_user_role: {
                                id: 'cbb4bf7c3bc4fa10ceb02a1c95e45aea'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.questionnaire_answers_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd3bf77158709c2106fa97627cebb35d5'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_us_states'
                            element: 'region'
                            value: '10'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd3fe0ffa0d674577ac10bf55c828fa04'
                        key: {
                            name: 'u_imp_saml_user_a1kn5tdmak'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd4c35705874982106fa97627cebb352e'
                        key: {
                            list_id: {
                                id: 'd8c35705874982106fa97627cebb352d'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_import_state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd4cb9bda13644d738aa132307e0552c5'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'questionnaire'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd5b272c287f5e210d19aa8ed3fbb354f'
                        key: {
                            list_id: {
                                id: 'd1b272c287f5e210d19aa8ed3fbb354d'
                                key: {
                                    name: 'u_imp_saml_user_a1kn5tdmak'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'import_set_run'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'd79652a3877cce50147ec9550cbb353d'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'd8c35705874982106fa97627cebb352d'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd8c35705874982106fa97627cebb352e'
                        key: {
                            list_id: {
                                id: 'd8c35705874982106fa97627cebb352d'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_target_sys_id'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd9126bed3b732610ceb02a1c95e45ace'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd9436a1987fcc650147ec9550cbb353c'
                        key: {
                            sys_security_acl: '95436a1987fcc650147ec9550cbb3536'
                            sys_user_role: {
                                id: '4143aa5587fcc650147ec9550cbb35d2'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.rsc_portal_questions_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd98e08d02b0845c7a3fd374e7a19dfe1'
                        key: {
                            name: 'u_imp_saml_user_ywha2spnin'
                            element: 'sso_source'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd9b272c287f5e210d19aa8ed3fbb354e'
                        key: {
                            list_id: {
                                id: 'd1b272c287f5e210d19aa8ed3fbb354d'
                                key: {
                                    name: 'u_imp_saml_user_a1kn5tdmak'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd9b272c287f5e210d19aa8ed3fbb354f'
                        key: {
                            list_id: {
                                id: 'd1b272c287f5e210d19aa8ed3fbb354d'
                                key: {
                                    name: 'u_imp_saml_user_a1kn5tdmak'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sso_source'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'da0c3dee3b107290ceb02a1c95e45a90'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'points'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'da2a56a7877cce50147ec9550cbb3520'
                        key: {
                            map: '122a56a7877cce50147ec9550cbb351c'
                            target_field: 'parent'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'dad3f41c87ba8210ee0cb848cebb3553'
                        key: {
                            sp_widget: '3944a8178773b5106fa97627cebb3575'
                            sp_angular_provider: '7294a0988709ce506fa97627cebb3583'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'dbaca81ac74a437896e7fab67287e182'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc4a06ec22bb48c39d53eb7028c2b603'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'u_column_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'dc6c78983bac7610ceb02a1c95e45a9d'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'question_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc6ea4532d464669a2f905ea53bfec16'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'contact'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc7433d3a1ad4d56906602f1c8f8b905'
                        key: {
                            name: 'u_imp_saml_user_ywha2spnin'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ddb272c287f5e210d19aa8ed3fbb354f'
                        key: {
                            list_id: {
                                id: 'd1b272c287f5e210d19aa8ed3fbb354d'
                                key: {
                                    name: 'u_imp_saml_user_a1kn5tdmak'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'template_import_log'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'df9652a3877cce50147ec9550cbb353e'
                        key: {
                            sys_ui_section: {
                                id: 'd79652a3877cce50147ec9550cbb353d'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_parent'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e07bed1e87f44a506fa97627cebb352a'
                        key: {
                            sys_ui_section: {
                                id: 'ec7bed1e87f44a506fa97627cebb3527'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e07bed1e87f44a506fa97627cebb352b'
                        key: {
                            sys_ui_section: {
                                id: 'ec7bed1e87f44a506fa97627cebb3527'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: 'e08399838715e650ee0cb848cebb35b2'
                        key: {
                            id: 'rsc_my_questionnaires'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e0a00b81870982106fa97627cebb355c'
                        key: {
                            sys_ui_section: {
                                id: '68a00b81870982106fa97627cebb3554'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e1a577ab8d334c979294bf922eaee69c'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                            element: 'parent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e22a27b344fd4ab0a8f37101436abe3f'
                        key: {
                            name: 'u_imp_saml_user_a1kn5tdmak'
                            element: 'user_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: 'e2587a9f47b8e6108d277d88c26d4373'
                        key: {
                            id: 'rsc_request_account'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e319b8983bac7610ceb02a1c95e45a1c'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'question_type'
                            value: 'boolean'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e406c70a28114010a2b63fe128c017f6'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                            element: 'u_question_answer_text'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e46873723b7fe210ceb02a1c95e45aa7'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'questionnaire_size'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e47bed1e87f44a506fa97627cebb352a'
                        key: {
                            sys_ui_section: {
                                id: 'ec7bed1e87f44a506fa97627cebb3527'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_tooltip'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e47bed1e87f44a506fa97627cebb352b'
                        key: {
                            sys_ui_section: {
                                id: 'ec7bed1e87f44a506fa97627cebb3527'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'template_import_log.message'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e4b41daf3b58b210ceb02a1c95e45a8a'
                        key: {
                            sys_ui_section: {
                                id: '34d6ea5d87fcc650147ec9550cbb3514'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'depends_on'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5083a097eb34fb1bb64eb229ed37003'
                        key: {
                            name: 'u_imp_saml_user_ywha2spnin'
                            element: 'first_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'e50c5da347ed62108d277d88c26d4337'
                        key: {
                            sp_widget: 'b41a321347f8e6108d277d88c26d4339'
                            sp_angular_provider: '7cbbd9a347ed62108d277d88c26d432f'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e64c9771bb7749498d0a084b0500eefb'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'e68158218749c2106fa97627cebb35ea'
                        key: {
                            sp_widget: 'f264ac178773b5106fa97627cebb3510'
                            sp_angular_provider: 'bc1158218749c2106fa97627cebb35f0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e7441eef873cce50147ec9550cbb3575'
                        key: {
                            sys_security_acl: 'af441eef873cce50147ec9550cbb356f'
                            sys_user_role: {
                                id: '174456af873cce50147ec9550cbb3540'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.rsc_sectors_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e76008e5048443cf87e1710d806dbc19'
                        key: {
                            name: 'u_imp_saml_user_ywha2spnin'
                            element: 'first_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7a50b5570564b9ea17b62e49fd5fe6e'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'resource_no_url'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e87bed1e87f44a506fa97627cebb352a'
                        key: {
                            sys_ui_section: {
                                id: 'ec7bed1e87f44a506fa97627cebb3527'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e8a00b81870982106fa97627cebb355b'
                        key: {
                            sys_ui_section: {
                                id: '68a00b81870982106fa97627cebb3554'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'sector'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea535c5d9ffe4ed1b7e62e5921247643'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eac7e544c8c6437cbe698dc46610fcfd'
                        key: {
                            name: 'u_imp_saml_user_ywha2spnin'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ebdf5cc833cc7a10dfa2f432cd5c7bae'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'organization_size'
                            value: 'medium'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec0ae312e44049b4bd88303e0fe5e19a'
                        key: {
                            name: 'u_imp_saml_user_a1kn5tdmak'
                            element: 'sso_source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ec7bed1e87f44a506fa97627cebb3527'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ec7bed1e87f44a506fa97627cebb3529'
                        key: {
                            sys_ui_section: {
                                id: 'ec7bed1e87f44a506fa97627cebb3527'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_question'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ec7bed1e87f44a506fa97627cebb352a'
                        key: {
                            sys_ui_section: {
                                id: 'ec7bed1e87f44a506fa97627cebb3527'
                                key: {
                                    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_column_name'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eed973efa78e4968819a611a9dfa0783'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors'
                            element: 'u_parent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eee500bfba0d41c19ecc642d518d43c9'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_cisa_vm_questionnaire'
                            element: 'contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'eee6675387d16a50ee0cb848cebb3529'
                        key: {
                            sp_widget: '62e6675387d16a50ee0cb848cebb3524'
                            sp_angular_provider: '26da2ac147d5ae108d277d88c26d43c9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ef167a9d49e24128b19ca19a1ccc40ab'
                        key: {
                            name: 'u_imp_saml_user_a1kn5tdmak'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'ef4e5c4833cc7a10dfa2f432cd5c7b44'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re.cisa_vm_questionnaire_user'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'ef7bed1e87f44a506fa97627cebb350a'
                        key: {
                            map: '6b7bed1e87f44a506fa97627cebb3505'
                            target_field: 'question'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'efb43fbc3bc4fa10ceb02a1c95e45a54'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f022c0a571fc42df80b4645e6dcddd1a'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'tooltip_body'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f02af5fbd53842c19033e9c4bbc24078'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'questionnaire_template'
                            language: 'en'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'f26c03a58736a210ee0cb848cebb35ff'
                        key: {
                            sp_widget: 'eedfab06477166108d277d88c26d433b'
                            sp_angular_provider: '26da2ac147d5ae108d277d88c26d43c9'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'f2dd7518876da210ee0cb848cebb3555'
                        key: {
                            sp_widget: '49b6661d87fcc650147ec9550cbb352e'
                            sp_angular_provider: 'c56bbfd387156a50ee0cb848cebb3559'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'f43df95487be8210ee0cb848cebb3587'
                        key: {
                            sp_widget: '3944a8178773b5106fa97627cebb3575'
                            sp_angular_provider: 'b6fd93ba87b44e50147ec9550cbb3581'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f5855eef873cce50147ec9550cbb357f'
                        key: {
                            list_id: {
                                id: 'fd855eef873cce50147ec9550cbb357d'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sector'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f5a214c5cf9f4edc8932ccef22a54a76'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'question'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'f6daeadb878baa50ee0cb848cebb35c5'
                        key: {
                            sp_widget: 'eedfab06477166108d277d88c26d433b'
                            sp_angular_provider: '16ca6e97878baa50ee0cb848cebb35b9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f82130cb32a7440a8c3b4b61c88d47db'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'parent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'fa45a920cda84cf69d1658161173583d'
                        key: {
                            name: 'u_imp_saml_user_a1kn5tdmak'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'fa71ad6553a644799aa46b433e52a339'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_questionnaire_answers'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fd0a583513064714b1e51b2d2ff06360'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_portal_questions'
                            element: 'template'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'fd855eef873cce50147ec9550cbb357d'
                        key: {
                            name: 'x_g_dhs_cisa_vm_re_rsc_sectors'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'fe4e09638778ce50147ec9550cbb35a5'
                        key: {
                            sp_widget: '49b6661d87fcc650147ec9550cbb352e'
                            sp_angular_provider: 'b6fd93ba87b44e50147ec9550cbb3581'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'fee798137a5b4fac90baeeb20053ee66'
                        key: {
                            name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ff4e5c4833cc7a10dfa2f432cd5c7b81'
                        key: {
                            sys_security_acl: 'e74e5c4833cc7a10dfa2f432cd5c7b7c'
                            sys_user_role: {
                                id: 'ef4e5c4833cc7a10dfa2f432cd5c7b44'
                                key: {
                                    name: 'x_g_dhs_cisa_vm_re.cisa_vm_questionnaire_user'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}

var RSCSyncUtil = Class.create();
RSCSyncUtil.prototype = {
    initialize: function() {
        this._record_producer = gs.getProperty('x_g_dhs_cisa_vm_re.rsc_rp_id');
        this._instance = gs.getProperty('x_g_dhs_cisa_vm_re.rsc_url');
        this.pushAttempt = 0;
        this.apiAttempt = 0;
        this.attemptStatus;

        this.lu = new global.GSLog(
            "x_g_dhs_cisa_vm_re.rsc_sync_log_level",
            "RSCSyncUtil"
        );

        this.API = "x_g_dhs_cisa_vm_re.CSD - Ready Set Cyber Integration";
        this.SURVEY_TABLE = "x_aver_cisa_vm_question_answer";
        this.SURVEY_FIELDS = "qid,question_answer_text,questionnaire.version,questionnaire.organization_size,questionnaire.sys_created_on,questionnaire.sys_id,questionnaire.number";
        this.SURVEY_QUERY = "questionnaire.email=" + gs.getUser().getEmail() + "^ORDERBYDESCsys_created_on";
        try {
            var result = sn_fd.FlowAPI.getRunner()
                .subflow('global.get_token')
                .inForeground()
                .withInputs({
                    entity: gs.getProperty('x_g_dhs_cisa_vm_re.oauth_entity'),
                    credentials: gs.getProperty('x_g_dhs_cisa_vm_re.api_credentials'),
                    requestor_id: gs.getProperty('x_g_dhs_cisa_vm_re.oauth_requestor_id'),
                    profile_id: gs.getProperty('x_g_dhs_cisa_vm_re.oauth_entity_profile')
                })
                .timeout(120000)
                .run();

            this.TOKEN = result.getOutputs().token;

            if (!this.TOKEN) {
                this.fatalRest(api + " " + method + " Failure to retrieve RSC OAUTH TOKEN");
            }
        } catch (ex) {
            this.fatalRest(api + " " + method + " Failure to retrieve RSC OAUTH TOKEN");
        }
    },

    call: function(api, method, parameters, body) {
        this.apiAttempt++;

        if (this.apiAttempt <= 5) {
            try {
                var r = new sn_ws.RESTMessageV2(api, method);
                if (parameters) {
                    for (var p = 0; p < parameters.length; p++) {
                        r.setStringParameterNoEscape(parameters[p].key, parameters[p].value);
                    }
                }

                var response = r.execute();
                var responseBody = JSON.parse(response.getBody());
                var httpStatus = response.getStatusCode();
                this.attemptStatus = httpStatus;

                if (body) {
                    r.setRequestBody(body);
                }

                if (response.haveError() || parseInt(httpStatus) >= 300 || parseInt(httpStatus) < 200) {
                    this.lu.logError(api + " " + method + " API Call Failed Error Code: " + response.getErrorCode() + " Message: " + response.getErrorMessage());
                    //Retries the API call
                    return this.call(api, method, parameters, body);
                } else {
                    this.apiAttempt = 0;
                    return {
                        error: false,
                        status: httpStatus,
                        body: responseBody
                    };
                }

            } catch (ex) {
                this.lu.logError(api + " " + method + " API Call Failed Error Message: " + ex.message);
                return this.call(api, method, parameters, body);
            }
        } else {
            this.apiAttempt = 0;

            this.lu.fatal("All attempts to call api:" + api + " method:" + method + " have failed creating incident");
            this.fatalRest(api + " " + method + " Failure exceeded allotted attempts");

            return {
                error: true,
                status: this.attemptStatus,
                body: {}
            };
        }
    },

    verifyReCaptcha: function(token, action, user_ip, user_agent) {
        try {
            var r = new sn_ws.RESTMessageV2('x_g_dhs_cisa_vm_re.Google Recaptcha - Ready Set Cyber', 'Validate');
            r.setStringParameterNoEscape('API_KEY', gs.getProperty('x_g_dhs_cisa_vm_re.rsc_google_api_key'));
            r.setStringParameterNoEscape('PROJECT_ID', gs.getProperty('x_g_dhs_cisa_vm_re.rsc_google_project'));
            r.setHttpTimeout(30000);

            var body = {
                "event": {
                    "token": token,
                    "siteKey": gs.getProperty('x_g_dhs_cisa_vm_re.rsc_google_site_key'),
                    "expectedAction": action,
                    "userAgent": user_agent,
                    "userIpAddress": user_ip
                }
            };

            r.setRequestBody(JSON.stringify(body));

            var response = r.execute();
            var responseBody = response.getBody();

            return responseBody;
        } catch (ex) {
            return {
                error: true,
                msg: ex
            }
        }
    },

    fatalRest: function(short_desc, desc) {
        var inc = new GlideRecord('incident');
        inc.initialize();
        inc.setValue('short_description', short_desc);
        inc.setValue('caller_id', gs.getUserID());
        if (desc) {
            inc.setValue('description', desc);
        }
        inc.insert();
    },

    getCSDTableData: function(query, fields, table) {
        var api = this.API;
        var method = 'TABLE API';

        var parameters = [{
            key: 'instance',
            value: this._instance
        }, {
            key: 'token',
            value: this.TOKEN
        }, {
            key: 'query',
            value: encodeURIComponent(query)
        }, {
            key: 'table',
            value: table
        }, {
            key: 'fields',
            value: fields
        }];

        var result = this.call(api, method, parameters, null);

        return result;
    },

    submitSurvey: function(body) {
        var api = this.API;
        var method = 'RSC CREATE';

        var parameters = [{
            key: 'instance',
            value: this._instance
        }, {
            key: 'token',
            value: this.TOKEN
        }, {
            key: 'body',
            value: JSON.stringify(body)
        }];

        return this.call(api, method, parameters, null);
    },

    getSurveys: function() {
        var api = this.API;
        var method = 'TABLE API';

        var parameters = [{
            key: 'instance',
            value: this._instance
        }, {
            key: 'token',
            value: this.TOKEN
        }, {
            key: 'query',
            value: encodeURIComponent(this.SURVEY_QUERY)
        }, {
            key: 'table',
            value: this.SURVEY_TABLE
        }, {
            key: 'fields',
            value: this.SURVEY_FIELDS
        }];

        var records = this.call(api, method, parameters).body.result;

        var results = {
            "count": 0,
        };

        for (var record in records) {
            var qid = records[record]['qid'];
            var id = records[record]['questionnaire.sys_id'];

            if (results[id] == undefined) {
                results.count++;
                var updated = new GlideDateTime(records[record]['questionnaire.sys_created_on']);
                results[id] = {
                    "number": records[record]['questionnaire.number'],
                    "organization_size": records[record]['questionnaire.organization_size'],
                    "sys_updated_on": updated.getDisplayValue(),
                    "version": records[record]['questionnaire.version'],
                    "answers": {}
                };
            }
            delete records[record]['questionnaire.sys_id'];
            delete records[record]['questionnaire.number'];
            delete records[record]['questionnaire.organization_size'];
            delete records[record]['questionnaire.sys_updated_on'];
            delete records[record]['qid'];

            results[id].answers[qid] = records[record];
        }

        return results;
    },

    submitProducer: function(vars) {
        var api = this.API;
        var method = 'SUBMIT PRODUCER';

        var parameters = [{
            key: 'instance',
            value: this._instance
        }, {
            key: 'token',
            value: this.TOKEN
        }, {
            key: 'sys_id',
            value: this._record_producer
        }, {
            key: 'body',
            value: JSON.stringify(vars)
        }];

        return this.call(api, method, parameters);
    },

    submitEnrollment: function(vars) {
        var api = this.API;
        var method = 'RSC SERVICE ENROLLMENT';

        var parameters = [{
                key: 'instance',
                value: this._instance
            }, {
                key: 'token',
                value: this.TOKEN
            },
            {
                key: 'body',
                value: JSON.stringify(vars)
            }
        ];

        return this.call(api, method, parameters);
    },

    type: "RSCSyncUtil",
};
import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['10b6116f87a12e10d19aa8ed3fbb3536'],
    name: 'u_imp_saml_user_a1kn5tdmak',
    targetTable: 'customer_contact',
    sourceTable: 'u_imp_saml_user_a1kn5tdmak',
    active: true,
    fields: {
        first_name: {
            sourceField: 'first_name',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd hh:mm:ss',
        },
        user_name: {
            sourceField: 'user_name',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd hh:mm:ss',
        },
        email: {
            sourceField: 'email',
            coalesce: true,
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd hh:mm:ss',
        },
        sso_source: {
            sourceField: 'sso_source',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd hh:mm:ss',
        },
    },
    scripts: [
        {
            $id: Now.ID['50b6116f87a12e10d19aa8ed3fbb3547'],
            script: Now.include('./sys_transform_script_50b6116f87a12e10d19aa8ed3fbb3547.js'),
        },
        {
            $id: Now.ID['90b6116f87a12e10d19aa8ed3fbb3544'],
            when: 'onBefore',
            script: Now.include('./sys_transform_script_90b6116f87a12e10d19aa8ed3fbb3544.js'),
        },
    ],
    runScript: true,
    script: Now.include('./sys_transform_map_10b6116f87a12e10d19aa8ed3fbb3536.js'),
    $meta: {
        useEsLatest: true,
    },
})

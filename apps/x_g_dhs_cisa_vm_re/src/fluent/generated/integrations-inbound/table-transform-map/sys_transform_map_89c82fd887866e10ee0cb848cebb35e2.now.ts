import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['89c82fd887866e10ee0cb848cebb35e2'],
    name: 'u_imp_saml_user_ywha2spnin',
    targetTable: 'customer_contact',
    sourceTable: 'u_imp_saml_user_ywha2spnin',
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
        user_name: {
            sourceField: 'email',
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
            $id: Now.ID['05c82fd887866e10ee0cb848cebb35f3'],
            when: 'onBefore',
            script: Now.include('./sys_transform_script_05c82fd887866e10ee0cb848cebb35f3.js'),
        },
        {
            $id: Now.ID['89c82fd887866e10ee0cb848cebb35f6'],
            script: Now.include('./sys_transform_script_89c82fd887866e10ee0cb848cebb35f6.js'),
        },
    ],
    runScript: true,
    script: Now.include('./sys_transform_map_89c82fd887866e10ee0cb848cebb35e2.js'),
    $meta: {
        useEsLatest: true,
    },
})

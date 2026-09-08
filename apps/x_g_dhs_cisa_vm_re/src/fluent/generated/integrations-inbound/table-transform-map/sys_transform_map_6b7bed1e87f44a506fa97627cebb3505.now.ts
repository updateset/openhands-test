import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['6b7bed1e87f44a506fa97627cebb3505'],
    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions',
    targetTable: 'x_g_dhs_cisa_vm_re_rsc_portal_questions',
    sourceTable: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_portal_questions',
    active: true,
    runBusinessRules: true,
    fields: {
        tooltip_body: {
            sourceField: 'u_tooltip_body',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        tooltip: {
            sourceField: 'u_tooltip',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        column_name: {
            sourceField: 'u_column_name',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        question: {
            sourceField: 'u_question',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    runScript: false,
})

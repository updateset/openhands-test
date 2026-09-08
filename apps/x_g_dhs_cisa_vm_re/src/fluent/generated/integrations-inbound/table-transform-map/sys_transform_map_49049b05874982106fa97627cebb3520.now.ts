import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['49049b05874982106fa97627cebb3520'],
    name: 'States',
    targetTable: 'x_g_dhs_cisa_vm_re_rsc_us_states',
    sourceTable: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_us_states',
    active: true,
    runBusinessRules: true,
    fields: {
        name: {
            sourceField: 'u_name',
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

import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['122a56a7877cce50147ec9550cbb351c'],
    name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors',
    targetTable: 'x_g_dhs_cisa_vm_re_rsc_sectors',
    sourceTable: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors',
    active: true,
    runBusinessRules: true,
    fields: {
        sector: {
            sourceField: 'u_sector',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        parent: {
            sourceField: 'u_parent',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    runScript: false,
})

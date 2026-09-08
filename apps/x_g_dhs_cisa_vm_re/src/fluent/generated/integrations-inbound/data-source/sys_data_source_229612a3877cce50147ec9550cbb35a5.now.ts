import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['229612a3877cce50147ec9550cbb35a5'],
    table: 'sys_data_source',
    data: {
        batch_size: 1000,
        connection_timeout: 0,
        connection_url:
            'attachment://sys_data_source:229612a3877cce50147ec9550cbb35a5/x_g_dhs_cisa_vm_re_rsc_sectors.xlsx',
        data_in_single_column: false,
        data_loader: `(function loadData(import_set_table, data_source, import_log, last_success_import_time) {

     // Add your code here to insert data to import_set_table

})(import_set_table, data_source, import_log, last_success_import_time);`,
        discard_arrays: true,
        enable_parallel_loading: false,
        expand_node_children: false,
        file_path: 'x_g_dhs_cisa_vm_re_rsc_sectors.xlsx',
        file_retrieval_method: 'Attachment',
        format: 'Excel',
        glide_keystore: false,
        header_row: 0,
        import_set_table_name: 'u_imp_tmpl_x_g_dhs_cisa_vm_re_rsc_sectors',
        ldapprobe_result_set_rows: 200,
        maximum_rows: 10000,
        name: 'x_g_dhs_cisa_vm_re_rsc_sectors.xlsx (Upl',
        offset: 0,
        oracle_port: '1521',
        oracle_sid: 'orcl',
        parallel_loading_script: `(function loadTasks(parallel_job_loader, data_source, import_log, last_success_import_time) {

	// Invoke third party API, create partitions and insert partitions info in parallel job table

})(parallel_job_loader, data_source, import_log, last_success_import_time);`,
        parsing_script:
            '// The input value can be accessed through the variables named "line", "lineNumber" and "result"// The function uses result variable to return parse result back. (function(line,lineNumber,result) {	// add code here})(line,lineNumber,result);',
        query: 'All Rows from Table',
        query_timeout: 0,
        scp_authentication: 'Username and Password',
        sheet_name: 1,
        sheet_number: 0,
        support_pagination: false,
        type: 'File',
        use_batch_import: false,
        use_import_connection_alias: false,
        use_integrated_authentication: false,
        use_last_run_datetime: false,
        zipped: false,
    },
})

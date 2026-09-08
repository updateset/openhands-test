import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'u_imp_saml_user_ywha2spnin',
    view: default_view,
    columns: ['email', 'first_name', 'import_set_run', 'sso_source', 'template_import_log', 'user_name'],
})

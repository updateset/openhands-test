//This is important for the first ever login, otherwise an empty user may be created
//until a Field Map is defined below - It's recommended to use the same field for coalescing
//as defined in SSO user_field or nameid attribute field
if(action == "insert") {
    //if no coalesce is set, then ignore insert
    if(!coalesceIsSet()) {
        ignore = true;
        gs.log("No coalesce is set, insert is ignored!");
    } 
}

//Returns true is coalesce field has been set for this
//transform map, false otherwise
function coalesceIsSet() {
    var fieldMap = new GlideRecord("sys_transform_entry");
    fieldMap.addQuery("map.name", "u_imp_saml_user_a1kn5tdmak");
    fieldMap.addQuery("coalesce", true);
    fieldMap.query();
    return fieldMap.hasNext();
}

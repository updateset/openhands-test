import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['2e756c0f3bffe210ceb02a1c95e45ad4'],
    table: 'x_g_dhs_cisa_vm_re_rsc_portal_questions',
    name: 'Create New Version',
    actionName: 'sysverb_create_new_version',
    list: {
        showBannerButton: true,
    },
    client: {
        isUi11Compatible: true,
        onClick: 'createNewVersion()',
    },
    workspace: {
        clientScriptV2: `function onClick(g_form) {

}`,
    },
    messages: [],
    script: `function createNewVersion() {
    if (confirm("Are you sure you want new version?")) {
        gsftSubmit(null, g_form.getFormElement(), 'sysverb_create_new_version');
    }
}

if (typeof window === 'undefined') {
    serverCreateNewVersion();
}

function serverCreateNewVersion() {
    var oldToNew = {};
    var oldVersion = parseInt(gs.getProperty('x_g_dhs_cisa_vm_re.rsc_version'));

    var newVersion = oldVersion + 1;
    var oldQuestionsGR = new GlideRecord('x_g_dhs_cisa_vm_re_rsc_portal_questions');
    oldQuestionsGR.addQuery('version', oldVersion);
    oldQuestionsGR.query();
    var recordCount = oldQuestionsGR.getRowCount();

    while (oldQuestionsGR.next()) {
        var oldSysId = oldQuestionsGR.getUniqueValue();
        oldQuestionsGR.setValue('version', newVersion);
        oldToNew[oldSysId] = oldQuestionsGR.insert();
    }
    //parent and depends_on contain values for previous verios so we need to update them
    var newQuestionsGR = new GlideRecord('x_g_dhs_cisa_vm_re_rsc_portal_questions');
    newQuestionsGR.addQuery('version', newVersion);
    newQuestionsGR.query();
    while (newQuestionsGR.next()) {
        if (newQuestionsGR.parent && oldToNew[newQuestionsGR.parent]) {
            newQuestionsGR.setValue('parent', oldToNew[newQuestionsGR.parent]);
        }
        newQuestionsGR.update();
    }

    gs.setProperty('x_g_dhs_cisa_vm_re.rsc_version', newVersion);
    gs.addErrorMessage("Created version " + newVersion + " with " + recordCount + " records");

}`,
    showUpdate: true,
    showInsert: true,
})

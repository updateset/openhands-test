 //Send data to usage analytics.
 //sso_source is 'sso:' followed by the idp sys id. Hence 'sso:' needs to be removed
if (action == 'insert')
    SNC.SecurityEventSender.sendSAMLAutoprovisionGCFEvent('create');
else if (action == 'update' && target.changes())
    SNC.SecurityEventSender.sendSAMLAutoprovisionGCFEvent('update');

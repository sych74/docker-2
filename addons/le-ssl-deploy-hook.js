envName = getParam('envName');
envDomain = getParam('envDomain');
scriptName = getParam('action') == 'uninstall' ? 'undeployLE.sh' : 'deployLE.sh';

//getting first custom domain
customDomains = (getParam('customDomains') || "").replace(/^\s+|\s+$/gm , "").split(/\s*[;,\s]\s*/).shift(); 
domain = customDomains || envDomain;

//executing custom deployment hook script on master node
resp = jelastic.env.control.ExecCmdById(envName, session, getParam('nodeId'), toJSON([{ command:'/bin/bash ' + scriptName}]), true);
return resp;

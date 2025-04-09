function FindProxyForURL(url, host){
 
//bypass proxy for these domains
if (dnsDomainIs(host, "fac.wdcg.de")||
dnsDomainIs(host, "fac.wdcg.de"))
{
return "DIRECT";
}
 
//bypass proxy for these ip addresses
if (shExpMatch(host, "")||
shExpMatch(host, ""))
{
return "PROXY turbo-w7fmcaqk.edge.prod.fortisase.com:9443; DIRECT";
}
return "DIRECT";
}

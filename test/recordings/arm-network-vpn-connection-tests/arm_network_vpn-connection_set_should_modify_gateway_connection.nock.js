// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestGatewayConn\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn\",\r\n  \"etag\": \"W/\\\"cd396252-645b-4a4f-a63b-7bc7102b450b\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"connTag1\": \"connVal1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"445582a9-befc-4a2c-ab7b-a6cd93435546\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayI\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayII\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 0,\r\n    \"sharedKey\": \"abc123\",\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1132',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b536cc95-0345-4e24-b2ba-e1c91ab36237',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4d69456b-4079-46e9-9241-1c906274af04',
  'x-ms-routing-request-id': 'WESTEUROPE:20160129T132310Z:4d69456b-4079-46e9-9241-1c906274af04',
  date: 'Fri, 29 Jan 2016 13:23:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestGatewayConn\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn\",\r\n  \"etag\": \"W/\\\"cd396252-645b-4a4f-a63b-7bc7102b450b\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"connTag1\": \"connVal1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"445582a9-befc-4a2c-ab7b-a6cd93435546\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayI\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayII\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 0,\r\n    \"sharedKey\": \"abc123\",\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1132',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b536cc95-0345-4e24-b2ba-e1c91ab36237',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4d69456b-4079-46e9-9241-1c906274af04',
  'x-ms-routing-request-id': 'WESTEUROPE:20160129T132310Z:4d69456b-4079-46e9-9241-1c906274af04',
  date: 'Fri, 29 Jan 2016 13:23:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestGatewayConn\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn\",\r\n  \"etag\": \"W/\\\"e6457b33-371a-4646-9a08-cc8d49f1f733\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"connTag1\": \"connVal1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"445582a9-befc-4a2c-ab7b-a6cd93435546\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayI\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayII\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E021078A0163F01050D9647F47ED7EF267DBC300D06092A864886F70D01010105000482010063EB415C52351A57407B8421180848B55FFFD871795CF1F521F8D4D125F1A3E8929E1BAEC534B027302C6C89074F68438F79A502A7C36ABCCE0E306AE5E30788E156FCF1B0AC9B296DBF18150C68954BCA513164334206E56397389E588EBD6602BCF59CF254975F6E707C95AD4B08BC26E9C3E739983E71D6F871146919690D3C4571E4AEC10E28E17D194A5CF8B1AEF2EFEC539A7A0376AAB796A92DB06FC67729F34D9AF32D75471A85AD41231A81D5091AA259F74F8167AD25A7216A501043AC35F200AC9D88B2451F87879186659CD101B3E67EF1008EFB3102497918F7021E8440D510E19D12D5DCF72518C5304532BA83105F42890908BD178E03F8F0302B06092A864886F70D010701301406082A864886F70D03070408E1291867329F25BA800839293F55D6F1CFB7\",\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1934',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '308ce3f7-7987-4013-94e0-8fabfa3d76f3',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/308ce3f7-7987-4013-94e0-8fabfa3d76f3?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '35b66b1b-0519-49fb-85d8-1a3ee78df2e0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160129T132311Z:35b66b1b-0519-49fb-85d8-1a3ee78df2e0',
  date: 'Fri, 29 Jan 2016 13:23:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestGatewayConn\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn\",\r\n  \"etag\": \"W/\\\"e6457b33-371a-4646-9a08-cc8d49f1f733\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"connTag1\": \"connVal1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"445582a9-befc-4a2c-ab7b-a6cd93435546\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayI\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayII\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E021078A0163F01050D9647F47ED7EF267DBC300D06092A864886F70D01010105000482010063EB415C52351A57407B8421180848B55FFFD871795CF1F521F8D4D125F1A3E8929E1BAEC534B027302C6C89074F68438F79A502A7C36ABCCE0E306AE5E30788E156FCF1B0AC9B296DBF18150C68954BCA513164334206E56397389E588EBD6602BCF59CF254975F6E707C95AD4B08BC26E9C3E739983E71D6F871146919690D3C4571E4AEC10E28E17D194A5CF8B1AEF2EFEC539A7A0376AAB796A92DB06FC67729F34D9AF32D75471A85AD41231A81D5091AA259F74F8167AD25A7216A501043AC35F200AC9D88B2451F87879186659CD101B3E67EF1008EFB3102497918F7021E8440D510E19D12D5DCF72518C5304532BA83105F42890908BD178E03F8F0302B06092A864886F70D010701301406082A864886F70D03070408E1291867329F25BA800839293F55D6F1CFB7\",\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1934',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '308ce3f7-7987-4013-94e0-8fabfa3d76f3',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/308ce3f7-7987-4013-94e0-8fabfa3d76f3?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '35b66b1b-0519-49fb-85d8-1a3ee78df2e0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160129T132311Z:35b66b1b-0519-49fb-85d8-1a3ee78df2e0',
  date: 'Fri, 29 Jan 2016 13:23:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/308ce3f7-7987-4013-94e0-8fabfa3d76f3?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5d032234-187b-475c-bc07-c05bce9fcb55',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '74223ceb-caf1-41fb-a628-d9e0f710ed2e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160129T132342Z:74223ceb-caf1-41fb-a628-d9e0f710ed2e',
  date: 'Fri, 29 Jan 2016 13:23:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/308ce3f7-7987-4013-94e0-8fabfa3d76f3?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5d032234-187b-475c-bc07-c05bce9fcb55',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '74223ceb-caf1-41fb-a628-d9e0f710ed2e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160129T132342Z:74223ceb-caf1-41fb-a628-d9e0f710ed2e',
  date: 'Fri, 29 Jan 2016 13:23:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestGatewayConn\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn\",\r\n  \"etag\": \"W/\\\"07005302-396a-46f2-b0b6-b27391670020\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"connTag1\": \"connVal1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"445582a9-befc-4a2c-ab7b-a6cd93435546\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayI\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayII\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"abc123\",\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '908a1b4d-306b-4fcc-9d7c-6d7d1e4d99b3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '5a9e02dc-ce54-4fd7-94c0-a352c9e15293',
  'x-ms-routing-request-id': 'WESTEUROPE:20160129T132344Z:5a9e02dc-ce54-4fd7-94c0-a352c9e15293',
  date: 'Fri, 29 Jan 2016 13:23:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestGatewayConn\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn\",\r\n  \"etag\": \"W/\\\"07005302-396a-46f2-b0b6-b27391670020\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"connTag1\": \"connVal1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"445582a9-befc-4a2c-ab7b-a6cd93435546\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayI\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayII\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"abc123\",\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '908a1b4d-306b-4fcc-9d7c-6d7d1e4d99b3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '5a9e02dc-ce54-4fd7-94c0-a352c9e15293',
  'x-ms-routing-request-id': 'WESTEUROPE:20160129T132344Z:5a9e02dc-ce54-4fd7-94c0-a352c9e15293',
  date: 'Fri, 29 Jan 2016 13:23:43 GMT',
  connection: 'close' });
 return result; }]];

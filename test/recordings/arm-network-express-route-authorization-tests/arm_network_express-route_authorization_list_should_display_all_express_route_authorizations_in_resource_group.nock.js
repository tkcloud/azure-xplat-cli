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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"99a26d2f-9fff-4ba4-8c0f-82d1f437f678\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"1b63d9fc-cdfe-47cd-b795-9407a42e7eea\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [\r\n      {\r\n        \"name\": \"test-auth\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n        \"etag\": \"W/\\\"99a26d2f-9fff-4ba4-8c0f-82d1f437f678\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"authorizationKey\": \"39ba42c2-2d5d-4f43-8e6b-f102a22d2a53\",\r\n          \"authorizationUseStatus\": \"Available\"\r\n        }\r\n      }\r\n    ],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"6f8ed8be-fb5f-4e1a-997b-ade09255d13f\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1565',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'dd93c966-3d81-497f-8bf6-37483cfb41e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '34f5e529-63fc-4155-aa1a-792fd68141e3',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T175108Z:34f5e529-63fc-4155-aa1a-792fd68141e3',
  date: 'Mon, 15 Aug 2016 17:51:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations?api-version=2016-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-auth\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n      \"etag\": \"W/\\\"99a26d2f-9fff-4ba4-8c0f-82d1f437f678\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"authorizationKey\": \"39ba42c2-2d5d-4f43-8e6b-f102a22d2a53\",\r\n        \"authorizationUseStatus\": \"Available\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '525',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a24b6836-b76d-43c7-bcc8-755b0b4eeca6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': 'e8616e3a-5fce-45f1-8ebc-079ea3891d70',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T175109Z:e8616e3a-5fce-45f1-8ebc-079ea3891d70',
  date: 'Mon, 15 Aug 2016 17:51:09 GMT' });
 return result; }]];

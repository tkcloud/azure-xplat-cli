// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
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
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/xplatTestsecndIP' under resource group 'xplatTestGCreateFronIp' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '072c44a5-5575-449e-837c-d0f355d48025',
  'x-ms-correlation-request-id': '072c44a5-5575-449e-837c-d0f355d48025',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112331Z:072c44a5-5575-449e-837c-d0f355d48025',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:23:31 GMT',
  connection: 'close',
  'content-length': '178' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/xplatTestsecndIP' under resource group 'xplatTestGCreateFronIp' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '072c44a5-5575-449e-837c-d0f355d48025',
  'x-ms-correlation-request-id': '072c44a5-5575-449e-837c-d0f355d48025',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112331Z:072c44a5-5575-449e-837c-d0f355d48025',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:23:31 GMT',
  connection: 'close',
  'content-length': '178' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestsecndIP\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP\",\r\n  \"etag\": \"W/\\\"5b27d63d-d828-4801-87c8-97d31feff1ae\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"d99549b8-8d19-46d9-a6fd-5531240e7162\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '530',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'bf167c0a-4470-4c20-a5dd-3ca953f5b50a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/bf167c0a-4470-4c20-a5dd-3ca953f5b50a?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1166',
  'x-ms-correlation-request-id': 'bb114c09-bdcd-4f5d-bc84-86b9ed9286d3',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112337Z:bb114c09-bdcd-4f5d-bc84-86b9ed9286d3',
  date: 'Tue, 29 Dec 2015 11:23:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestsecndIP\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP\",\r\n  \"etag\": \"W/\\\"5b27d63d-d828-4801-87c8-97d31feff1ae\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"d99549b8-8d19-46d9-a6fd-5531240e7162\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '530',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'bf167c0a-4470-4c20-a5dd-3ca953f5b50a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/bf167c0a-4470-4c20-a5dd-3ca953f5b50a?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1166',
  'x-ms-correlation-request-id': 'bb114c09-bdcd-4f5d-bc84-86b9ed9286d3',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112337Z:bb114c09-bdcd-4f5d-bc84-86b9ed9286d3',
  date: 'Tue, 29 Dec 2015 11:23:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/bf167c0a-4470-4c20-a5dd-3ca953f5b50a?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8349cbb1-8495-4efa-b7f0-0e520ac45bf2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14919',
  'x-ms-correlation-request-id': 'a09c8ac9-28e5-495d-bc14-62801364d7f2',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112348Z:a09c8ac9-28e5-495d-bc14-62801364d7f2',
  date: 'Tue, 29 Dec 2015 11:23:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/bf167c0a-4470-4c20-a5dd-3ca953f5b50a?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8349cbb1-8495-4efa-b7f0-0e520ac45bf2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14919',
  'x-ms-correlation-request-id': 'a09c8ac9-28e5-495d-bc14-62801364d7f2',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112348Z:a09c8ac9-28e5-495d-bc14-62801364d7f2',
  date: 'Tue, 29 Dec 2015 11:23:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestsecndIP\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP\",\r\n  \"etag\": \"W/\\\"3ee4c889-f721-422b-b6c0-7a67d802b178\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d99549b8-8d19-46d9-a6fd-5531240e7162\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '531',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3ee4c889-f721-422b-b6c0-7a67d802b178"',
  'x-ms-request-id': '14ffce3b-afa0-45b4-ad64-0de4cd491ff5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14918',
  'x-ms-correlation-request-id': '3d008967-0462-4202-8adf-b40106edb123',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112350Z:3d008967-0462-4202-8adf-b40106edb123',
  date: 'Tue, 29 Dec 2015 11:23:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestsecndIP\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP\",\r\n  \"etag\": \"W/\\\"3ee4c889-f721-422b-b6c0-7a67d802b178\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d99549b8-8d19-46d9-a6fd-5531240e7162\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '531',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3ee4c889-f721-422b-b6c0-7a67d802b178"',
  'x-ms-request-id': '14ffce3b-afa0-45b4-ad64-0de4cd491ff5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14918',
  'x-ms-correlation-request-id': '3d008967-0462-4202-8adf-b40106edb123',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112350Z:3d008967-0462-4202-8adf-b40106edb123',
  date: 'Tue, 29 Dec 2015 11:23:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"9eaa0aae-369e-4f46-ac87-f8b5ded8e0be\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"801cfbbc-9746-403a-becd-24a5967f2042\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"9eaa0aae-369e-4f46-ac87-f8b5ded8e0be\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestIp\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1326',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9eaa0aae-369e-4f46-ac87-f8b5ded8e0be"',
  'x-ms-request-id': 'c7bf66e6-f559-44b0-8228-4b05b116695b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14917',
  'x-ms-correlation-request-id': 'd35736f8-879a-4fe9-a93d-a842b48257c4',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112352Z:d35736f8-879a-4fe9-a93d-a842b48257c4',
  date: 'Tue, 29 Dec 2015 11:23:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"9eaa0aae-369e-4f46-ac87-f8b5ded8e0be\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"801cfbbc-9746-403a-becd-24a5967f2042\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"9eaa0aae-369e-4f46-ac87-f8b5ded8e0be\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestIp\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1326',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9eaa0aae-369e-4f46-ac87-f8b5ded8e0be"',
  'x-ms-request-id': 'c7bf66e6-f559-44b0-8228-4b05b116695b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14917',
  'x-ms-correlation-request-id': 'd35736f8-879a-4fe9-a93d-a842b48257c4',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112352Z:d35736f8-879a-4fe9-a93d-a842b48257c4',
  date: 'Tue, 29 Dec 2015 11:23:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestsecndIP\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP\",\r\n  \"etag\": \"W/\\\"3ee4c889-f721-422b-b6c0-7a67d802b178\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d99549b8-8d19-46d9-a6fd-5531240e7162\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '531',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3ee4c889-f721-422b-b6c0-7a67d802b178"',
  'x-ms-request-id': '83f26ba8-4fec-4373-afea-53ee2defe589',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14904',
  'x-ms-correlation-request-id': 'c42e6dbd-b8cc-46a9-ac05-7c4ae4243832',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112353Z:c42e6dbd-b8cc-46a9-ac05-7c4ae4243832',
  date: 'Tue, 29 Dec 2015 11:23:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestsecndIP\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP\",\r\n  \"etag\": \"W/\\\"3ee4c889-f721-422b-b6c0-7a67d802b178\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d99549b8-8d19-46d9-a6fd-5531240e7162\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '531',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3ee4c889-f721-422b-b6c0-7a67d802b178"',
  'x-ms-request-id': '83f26ba8-4fec-4373-afea-53ee2defe589',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14904',
  'x-ms-correlation-request-id': 'c42e6dbd-b8cc-46a9-ac05-7c4ae4243832',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112353Z:c42e6dbd-b8cc-46a9-ac05-7c4ae4243832',
  date: 'Tue, 29 Dec 2015 11:23:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"7cb3d945-e578-4964-a4cc-c9480ddd32e1\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"801cfbbc-9746-403a-becd-24a5967f2042\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"7cb3d945-e578-4964-a4cc-c9480ddd32e1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestIp\"\r\n          }\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatFrontendIpsecnd\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplatFrontendIpsecnd\",\r\n        \"etag\": \"W/\\\"7cb3d945-e578-4964-a4cc-c9480ddd32e1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2007',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '26d3e2cc-ab02-4915-9899-83c56b7007d6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/26d3e2cc-ab02-4915-9899-83c56b7007d6?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1160',
  'x-ms-correlation-request-id': '3078ffa9-c91f-4e10-8497-a6174ea50dd3',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112355Z:3078ffa9-c91f-4e10-8497-a6174ea50dd3',
  date: 'Tue, 29 Dec 2015 11:23:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"7cb3d945-e578-4964-a4cc-c9480ddd32e1\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"801cfbbc-9746-403a-becd-24a5967f2042\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"7cb3d945-e578-4964-a4cc-c9480ddd32e1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestIp\"\r\n          }\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatFrontendIpsecnd\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplatFrontendIpsecnd\",\r\n        \"etag\": \"W/\\\"7cb3d945-e578-4964-a4cc-c9480ddd32e1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestsecndIP\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2007',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '26d3e2cc-ab02-4915-9899-83c56b7007d6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/26d3e2cc-ab02-4915-9899-83c56b7007d6?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1160',
  'x-ms-correlation-request-id': '3078ffa9-c91f-4e10-8497-a6174ea50dd3',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112355Z:3078ffa9-c91f-4e10-8497-a6174ea50dd3',
  date: 'Tue, 29 Dec 2015 11:23:55 GMT',
  connection: 'close' });
 return result; }]];

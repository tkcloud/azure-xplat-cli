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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table-routes?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-route-table-routes' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-request-id': '45be263b-a37d-4f09-8263-6ce71d447d2d',
  'x-ms-correlation-request-id': '45be263b-a37d-4f09-8263-6ce71d447d2d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T163252Z:45be263b-a37d-4f09-8263-6ce71d447d2d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 16:32:52 GMT',
  'content-length': '121' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-route-table-routes?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes\",\"name\":\"xplat-test-route-table-routes\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '221',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-request-id': 'f22061fd-183a-4b69-b0cd-3903071db999',
  'x-ms-correlation-request-id': 'f22061fd-183a-4b69-b0cd-3903071db999',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T163254Z:f22061fd-183a-4b69-b0cd-3903071db999',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 16:32:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/test-route-table' under resource group 'xplat-test-route-table-routes' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '386bc2f8-4d05-4dca-889c-f4ea559cdb70',
  'x-ms-correlation-request-id': '386bc2f8-4d05-4dca-889c-f4ea559cdb70',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T163255Z:386bc2f8-4d05-4dca-889c-f4ea559cdb70',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 16:32:54 GMT',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"93248877-e533-4d1b-ab74-9b9e5d3763ee\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"bd9ccb7d-12fc-4936-a306-ae8bf76284df\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '468',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '61716326-a599-4811-9b43-4a8c159cc3a2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/61716326-a599-4811-9b43-4a8c159cc3a2?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '8480c18f-eb95-42ed-a58b-311e251192f2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T163258Z:8480c18f-eb95-42ed-a58b-311e251192f2',
  date: 'Mon, 15 Aug 2016 16:32:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/61716326-a599-4811-9b43-4a8c159cc3a2?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8a67c8cd-8aaf-4134-b0fb-027754154a99',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': 'cc3bb14e-14ec-435d-9e57-1f01666a474b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T163329Z:cc3bb14e-14ec-435d-9e57-1f01666a474b',
  date: 'Mon, 15 Aug 2016 16:33:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"e583939e-952a-4c2f-abf6-30a8b1377f95\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"bd9ccb7d-12fc-4936-a306-ae8bf76284df\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e583939e-952a-4c2f-abf6-30a8b1377f95"',
  'x-ms-request-id': 'b6be1fbe-f582-4dec-9c8a-f783b2bee56a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14795',
  'x-ms-correlation-request-id': '3c2d10ee-7517-4f5d-bd33-c61144f3c2c8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T163330Z:3c2d10ee-7517-4f5d-bd33-c61144f3c2c8',
  date: 'Mon, 15 Aug 2016 16:33:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"e583939e-952a-4c2f-abf6-30a8b1377f95\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"bd9ccb7d-12fc-4936-a306-ae8bf76284df\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e583939e-952a-4c2f-abf6-30a8b1377f95"',
  'x-ms-request-id': '06947421-3b49-4c6f-ac49-7bbcee688bd5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': 'f28dd8a1-c541-4841-b395-3463b910de6e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T163331Z:f28dd8a1-c541-4841-b395-3463b910de6e',
  date: 'Mon, 15 Aug 2016 16:33:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '278',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b8791e4e-0833-43fe-bff3-2c75c1c03594',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14949',
  'x-ms-correlation-request-id': 'c98cedd9-2437-4ec7-9c05-ae41df1c7716',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T163332Z:c98cedd9-2437-4ec7-9c05-ae41df1c7716',
  date: 'Mon, 15 Aug 2016 16:33:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"df854991-0df1-4523-b2a0-fcb6e35be60e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '32614791-e766-412f-9b1b-c15eb788028e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/32614791-e766-412f-9b1b-c15eb788028e?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-correlation-request-id': 'adebe6b6-4196-4d36-9bf1-eda0a170e1c3',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T163333Z:adebe6b6-4196-4d36-9bf1-eda0a170e1c3',
  date: 'Mon, 15 Aug 2016 16:33:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/32614791-e766-412f-9b1b-c15eb788028e?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fc11bed9-5a82-4a10-b10d-163baee39973',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': '58510595-6c7b-48d9-adac-a1f25ba23f64',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T163404Z:58510595-6c7b-48d9-adac-a1f25ba23f64',
  date: 'Mon, 15 Aug 2016 16:34:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"d8466f31-a89d-42f2-9c69-ad6cb00274d9\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '414',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d8466f31-a89d-42f2-9c69-ad6cb00274d9"',
  'x-ms-request-id': 'f06c088a-95d2-4630-a1c5-7d205e17ec3d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': '3c934281-c296-450b-bbee-7c1af3f1ed94',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T163405Z:3c934281-c296-450b-bbee-7c1af3f1ed94',
  date: 'Mon, 15 Aug 2016 16:34:04 GMT' });
 return result; }]];

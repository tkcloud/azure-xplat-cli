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
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_IOTHUB_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74\",\"name\":\"xplattestiothub74\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABdGaI=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub74.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1595',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-request-id': '19dc64b3-d7d9-42ec-b41c-bc222ebc4f6a',
  'x-ms-correlation-request-id': '19dc64b3-d7d9-42ec-b41c-bc222ebc4f6a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091142Z:19dc64b3-d7d9-42ec-b41c-bc222ebc4f6a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:11:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74\",\"name\":\"xplattestiothub74\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABdGaI=\",\"properties\":{\"provisioningState\":\"Accepted\",\"authorizationPolicies\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"07QHDsmFx2QCTGprtaF+CGmAYj6dDSUXkj2QFeggQeA=\",\"secondaryKey\":\"nyUv2ryt5eht1A+775SbrxpwEh9SpCIeJzR7jdlMzZU=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Qg8Wq30hp87sSAm77A0k6riphIc9NYKU97foIb91i4A=\",\"secondaryKey\":\"DPgT1hTeJxjAXQ7lFajoMi4qjhjXAy4dU3f4n8ooE7E=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"JFX6gu4se6qUPfTW12i9KSDf+YTr7Kl0XAzuXHduc+k=\",\"secondaryKey\":\"QEFM77HuwQOG2kq/mWXX18GSS0PkOMpSFaPk4aRAmjY=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"YTYKxTV88NAXTLBbTlXOGEI6Q7p7fSDrfALN0GN1DAc=\",\"secondaryKey\":\"ZOcvpKpGBP5GEvpDwNB/F21pJ94h+uUQ9eUCunRJI58=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"evXUR+lV/NllbDJKB47wBkvHT833+O5M5Gjxi/qEKh0=\",\"secondaryKey\":\"Ta9o29AEGgl3ag1LevrjqjDKB8kLl9XyiT1BeFnQHcA=\",\"rights\":\"RegistryWrite\"}],\"hostName\":\"xplattestiothub74.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2497',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/ZTUzYTc3N2UtNzkxMC00ZDc0LTgzNDUtNTQyOGMwYTQ2ODc4?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4998',
  'x-ms-request-id': 'c5f142e8-8248-4bed-9f52-e1e906d3442a',
  'x-ms-correlation-request-id': 'c5f142e8-8248-4bed-9f52-e1e906d3442a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091145Z:c5f142e8-8248-4bed-9f52-e1e906d3442a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:11:44 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/ZTUzYTc3N2UtNzkxMC00ZDc0LTgzNDUtNTQyOGMwYTQ2ODc4?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-request-id': 'c7ac6be2-770e-4067-85e7-e0cf8ce37934',
  'x-ms-correlation-request-id': 'c7ac6be2-770e-4067-85e7-e0cf8ce37934',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091215Z:c7ac6be2-770e-4067-85e7-e0cf8ce37934',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:12:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74\",\"name\":\"xplattestiothub74\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABdGas=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub74.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1595',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-request-id': 'c3b4ebee-7324-441c-830e-deebfac5d61a',
  'x-ms-correlation-request-id': 'c3b4ebee-7324-441c-830e-deebfac5d61a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091216Z:c3b4ebee-7324-441c-830e-deebfac5d61a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:12:15 GMT' });
 return result; }]];
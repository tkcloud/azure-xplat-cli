// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12362/providers/Microsoft.Web/serverfarms/armappserviceplantests6076?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12362/providers/Microsoft.Web/serverfarms/armappserviceplantests6076\",\"name\":\"armappserviceplantests6076\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"armappserviceplantests6076\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg12362-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":3,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg12362\",\"reserved\":false,\"mdmId\":\"waws-prod-bay-065_3668\"},\"sku\":{\"name\":\"B1\",\"tier\":\"Basic\",\"size\":\"B1\",\"family\":\"B\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1043',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd53aaeac-ee99-497a-a794-1a010270f6b9',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14857',
  'x-ms-correlation-request-id': 'e9ca0de8-ca6d-483a-93d2-05ab8755f50f',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T215539Z:e9ca0de8-ca6d-483a-93d2-05ab8755f50f',
  date: 'Wed, 21 Sep 2016 21:55:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12362/providers/Microsoft.Web/serverfarms/armappserviceplantests6076?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12362/providers/Microsoft.Web/serverfarms/armappserviceplantests6076\",\"name\":\"armappserviceplantests6076\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"armappserviceplantests6076\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg12362-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":3,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg12362\",\"reserved\":false,\"mdmId\":\"waws-prod-bay-065_3668\"},\"sku\":{\"name\":\"B1\",\"tier\":\"Basic\",\"size\":\"B1\",\"family\":\"B\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1043',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd53aaeac-ee99-497a-a794-1a010270f6b9',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14857',
  'x-ms-correlation-request-id': 'e9ca0de8-ca6d-483a-93d2-05ab8755f50f',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T215539Z:e9ca0de8-ca6d-483a-93d2-05ab8755f50f',
  date: 'Wed, 21 Sep 2016 21:55:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12362/providers/Microsoft.Web/serverfarms/armappserviceplantests6076?api-version=2015-08-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12362/providers/Microsoft.Web/serverFarms/armappserviceplantests6076/operationresults/8ba6d5c8-8e1c-46c1-8736-69307138263f?api-version=2015-08-01',
  'retry-after': '15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '5f89011b-daea-4ebd-b660-196782ce5f3f',
  'x-ms-correlation-request-id': '5f89011b-daea-4ebd-b660-196782ce5f3f',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T215541Z:5f89011b-daea-4ebd-b660-196782ce5f3f',
  date: 'Wed, 21 Sep 2016 21:55:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12362/providers/Microsoft.Web/serverfarms/armappserviceplantests6076?api-version=2015-08-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12362/providers/Microsoft.Web/serverFarms/armappserviceplantests6076/operationresults/8ba6d5c8-8e1c-46c1-8736-69307138263f?api-version=2015-08-01',
  'retry-after': '15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '5f89011b-daea-4ebd-b660-196782ce5f3f',
  'x-ms-correlation-request-id': '5f89011b-daea-4ebd-b660-196782ce5f3f',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T215541Z:5f89011b-daea-4ebd-b660-196782ce5f3f',
  date: 'Wed, 21 Sep 2016 21:55:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12362/providers/Microsoft.Web/serverFarms/armappserviceplantests6076/operationresults/8ba6d5c8-8e1c-46c1-8736-69307138263f?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12362/providers/Microsoft.Web/serverfarms/armappserviceplantests6076\",\"name\":\"armappserviceplantests6076\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"armappserviceplantests6076\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":0,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":0,\"status\":0,\"webSpace\":\"testrg12362-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":1,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg12362\",\"reserved\":false,\"mdmId\":\"waws-prod-bay-065_3668\"},\"sku\":{\"name\":\"F1\",\"tier\":\"Free\",\"size\":\"F1\",\"family\":\"F\",\"capacity\":0}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1042',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c21efd90-1ff5-4e7e-91e2-3f28931a723d',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14865',
  'x-ms-correlation-request-id': 'a935468e-d6a6-42ee-9110-eebc174d932b',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T215612Z:a935468e-d6a6-42ee-9110-eebc174d932b',
  date: 'Wed, 21 Sep 2016 21:56:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12362/providers/Microsoft.Web/serverFarms/armappserviceplantests6076/operationresults/8ba6d5c8-8e1c-46c1-8736-69307138263f?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12362/providers/Microsoft.Web/serverfarms/armappserviceplantests6076\",\"name\":\"armappserviceplantests6076\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"armappserviceplantests6076\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":0,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":0,\"status\":0,\"webSpace\":\"testrg12362-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":1,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg12362\",\"reserved\":false,\"mdmId\":\"waws-prod-bay-065_3668\"},\"sku\":{\"name\":\"F1\",\"tier\":\"Free\",\"size\":\"F1\",\"family\":\"F\",\"capacity\":0}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1042',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c21efd90-1ff5-4e7e-91e2-3f28931a723d',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14865',
  'x-ms-correlation-request-id': 'a935468e-d6a6-42ee-9110-eebc174d932b',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T215612Z:a935468e-d6a6-42ee-9110-eebc174d932b',
  date: 'Wed, 21 Sep 2016 21:56:12 GMT',
  connection: 'close' });
 return result; }]];
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
  process.env['AZURE_ARM_HDI_TEST_LOCATION'] = 'westeurope';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight//clusters/xplatTestHDInsightClusterCreate8208/scriptExecutionHistory/1?api-version=2015-03-01-preview')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"Script with execution id '1' not found for cluster with id 'xplatTestHDInsightClusterCreate8208'\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '128',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '98f49814-799f-4b44-b770-dd33b02a2240',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '44a3c018-255f-41d3-a67d-c3831dedd079',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T085310Z:44a3c018-255f-41d3-a67d-c3831dedd079',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:53:10 GMT' });
 return result; }]];
// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '11ae7815-2cd0-4896-b2f7-da0ca29fc64e',
    name: 'ART SLA Test Tenants 2',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .post('/11ae7815-2cd0-4896-b2f7-da0ca29fc64e/services/networking/virtualnetwork/123/migration?comp=validate')
  .reply(200, "<ValidationMessages xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ValidationMessage><ResourceType>VirtualNetwork</ResourceType><ResourceName>123</ResourceName><Category>Error</Category><Message>The virtual network 123 does not exist.</Message></ValidationMessage></ValidationMessages>", { 'cache-control': 'no-cache',
  'content-length': '341',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.397 (rd_rdfe_stable.160624-1024) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c201a4251c13afafaee23a1f22a0e676',
  date: 'Thu, 07 Jul 2016 21:13:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .post('/11ae7815-2cd0-4896-b2f7-da0ca29fc64e/services/networking/virtualnetwork/123/migration?comp=validate')
  .reply(200, "<ValidationMessages xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ValidationMessage><ResourceType>VirtualNetwork</ResourceType><ResourceName>123</ResourceName><Category>Error</Category><Message>The virtual network 123 does not exist.</Message></ValidationMessage></ValidationMessages>", { 'cache-control': 'no-cache',
  'content-length': '341',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.397 (rd_rdfe_stable.160624-1024) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c201a4251c13afafaee23a1f22a0e676',
  date: 'Thu, 07 Jul 2016 21:13:13 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['cliVmMigr726'];};
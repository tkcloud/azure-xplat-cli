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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestVMSSCreate4329/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2016-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 6\r\n  },\r\n  \"properties\": {\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"xplattest\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplattestvms2sto05770433.blob.core.windows.net/xplat-south-577043389-disk-container\",\r\n            \"https://xplattestvms2sto15770433.blob.core.windows.net/xplat-south-577043389-disk-container\",\r\n            \"https://xplattestvms2sto25770433.blob.core.windows.net/xplat-south-577043389-disk-container\",\r\n            \"https://xplattestvms2sto35770433.blob.core.windows.net/xplat-south-577043389-disk-container\",\r\n            \"https://xplattestvms2sto45770433.blob.core.windows.net/xplat-south-577043389-disk-container\"\r\n          ],\r\n          \"name\": \"xplat-south-577043389-os-disk\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"ReadOnly\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2008-R2-SP1\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"xplat-south-577043389-nic\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"xplat-south-577043389-pip\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestVMSSCreate4329/providers/Microsoft.Network/virtualNetworks/xplat-south-577043389-vnet/subnets/xplat-south-577043389-snet\"},\"loadBalancerBackendAddressPools\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestVMSSCreate4329/providers/Microsoft.Network/loadBalancers/xplat-south-577043389-lb/backendAddressPools/xplat-south-577043389-be\"}],\"loadBalancerInboundNatPools\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestVMSSCreate4329/providers/Microsoft.Network/loadBalancers/xplat-south-577043389-lb/inboundNatPools/xplat-south-577043389-nat\"}]}}]}}]}\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"4c679bec-ed09-4740-9bd6-f70129a5a0bd\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestVMSSCreate4329/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2\",\r\n  \"name\": \"xplattestvms2\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2763',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '3014d6c5-9ec1-4296-9f1a-2f920d7697c9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '881448b9-86fc-4db3-bfbc-af4d119f1adb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T083946Z:881448b9-86fc-4db3-bfbc-af4d119f1adb',
  date: 'Tue, 16 Aug 2016 08:39:46 GMT' });
 return result; }]];

/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

//
// Tests to verify the parsing used to handle the output of the
// darwin 'security' command
//

var _ = require('underscore');
var es = require('event-stream');
var os = require('os');
var util = require('util');
var should = require('should');

var childProcess = require('child_process');

var keychainParser = require('../../../lib/util/authentication/osx-keychain-parser');

var entries = require('../../data/osx-keychain-entries');

describe('security tool output parsing', function () {

  describe('one entry', function () {
    var parsingResult = [];

    before(function (done) {
      var dataSource = es.through();
      var parser = dataSource.pipe(keychainParser());
      parser.on('data', function (data) {
        parsingResult.push(data);
      });

      parser.on('end', function () {
        done();
      });

      dataSource.push(entries.entry1);
      dataSource.push(null);
    });

    it('should have one result', function () {
      parsingResult.should.have.length(1);
    });

    it('should have expected account', function () {
      parsingResult[0].acct.should.equal('a:b:c:d');
    });

    it('should have expected service name', function () {
      parsingResult[0].svce.should.equal('azure');
    });

    it('should have expected description', function () {
      parsingResult[0].desc.should.equal('active directory token');
    });

    it('should not have a password', function () {
      should.not.exist(parsingResult[0].password);
    });
  });

  describe('multiple entries', function () {
    var parsingResult = [];

    before(function (done) {
      var dataSource = es.through();
      var parser = dataSource.pipe(keychainParser());
      parser.on('data', function (data) {
        parsingResult.push(data);
      });

      parser.on('end', function () {
        done();
      });

      dataSource.push(entries.entry2);
      dataSource.push(entries.entry1);
      dataSource.push(null);
    });

    it('should have two results', function () {
      parsingResult.should.have.length(2);
    });

    it('should have expected accounts', function () {
      parsingResult[0].acct.should.equal('e:f:g:h');
      parsingResult[1].acct.should.equal('a:b:c:d');
    })
  });
});

describe('Parsing output of security child process', function () {
  if (os.platform() !== 'darwin') {
    console.log('These tests only run on Mac OSX');
    return;
  }

  var parseResults = [];
  var testUser = 'xplat-test-user';
  var testService = 'xplat test account';
  var testDescription = 'A dummy entry for testing';
  var testPassword = 'Sekret!';

  before(function (done) {
    addExpectedEntry(function (err) {
      if (err) { return done(err); }
      runAndParseOutput(function (err) {
        done(err);
      });
    });
  });

  after(function (done) {
    removeExpectedEntry(function (err) {
      done(err);
    });
  });

  //
  // Helper functions to do each stage of the setup
  //

  function addExpectedEntry(done) {
    var args = [ 
      'add-generic-password',
      '-a', testUser,
      '-D', testDescription,
      '-s', testService,
      '-w', testPassword,
      '-U'
    ];

    childProcess.execFile('/usr/bin/security', args, function (err, stdout, stderr) {
      if (err) {
        console.log('security program failed on add', err, stdout, stderr);
      }
      done(err);
    });
  }

  function runAndParseOutput(done) {
    var parser = keychainParser();

    parser.on('data', function (entry) {
      parseResults.push(entry);
    });
    parser.on('end', function () {
      done();
    });

    var security = childProcess.spawn('/usr/bin/security', ['dump-keychain']);

    security.stdout.pipe(parser);
  }

  function removeExpectedEntry(done) {
    var args = [
      'delete-generic-password',
      '-a', testUser,
      '-s', testService
    ];

    childProcess.execFile('/usr/bin/security', args, function (err, stdout, stderr) {
      if (err) {
        console.log('security program failed on delete', stderr);
      }
      done(err);
    });
  }

  it('should have entries', function () {
    parseResults.length.should.be.greaterThan(0);
  });

  it('should have expected entry', function () {
    var entry = _.findWhere(parseResults, { svce: testService });
    should.exist(entry);
    entry.should.have.properties({
      svce: testService,
      acct: testUser,
      desc: testDescription
    });
  });

  it('should be able to retrieve password for expected entry', function (done) {
    var entry = _.findWhere(parseResults, {svce: testService });

    var args = [
      'find-generic-password',
      '-a', entry.acct,
      '-s', entry.svce,
      '-g'
    ];

    var actualPassword;
    var security = childProcess.spawn('/usr/bin/security', args);
    security.stderr.pipe(es.split()).on('data', function (line) {
      var match = /^password: "(.*)"$/.exec(line);
      if (match) {
        actualPassword = match[1];
      }
    });

    security.on('exit', function () {
      actualPassword.should.equal(testPassword);
      done();
    });
  });
});

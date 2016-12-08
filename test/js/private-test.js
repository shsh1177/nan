/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2016 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

const test     = require('tap').test
    , testRoot = require('path').resolve(__dirname, '..')
    , bindings = require('bindings')({ module_root: testRoot, bindings: 'private' });

test('private', function (t) {
  t.plan(6);
  t.type(bindings.hasPrivateYes, 'function');
  t.type(bindings.hasPrivateNo, 'function');
  t.type(bindings.deletePrivateNo, 'function');
  t.ok(bindings.hasPrivateYes());
  t.ok(bindings.hasPrivateNo());
  t.ok(bindings.deletePrivateNo());
});

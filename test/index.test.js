/**
 * Copyright(c) cnpm and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <m@fengmk2.com> (http://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

const assert = require('assert');
const config = require('../');

describe('test/index.test.js', () => {
  it('should config exists', () => {
    console.log(config);
    assert.deepEqual(Object.keys(config), ['china']);
    assert.equal(config.china.sqlite3.host, 'https://npm.taobao.org/mirrors');
  });
});

// add.test.js
"use strict";

import add from '../add.js';
import { expect, assert } from 'chai';

describe('Test add function', function() {
  it('1 + 1 should equals to 2', function() {   //it.only "only this "
    expect(add(1, 1)).to.be.equal(2);
  });
  // it('1 + 2 should equals to 3', function() {
  //   assert(add("a", "b"));
  // });
});
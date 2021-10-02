// add.test.js
"use strict";

import sum from '../sum.js';
import { expect, assert } from 'chai';

describe('Test sum function', function() {
  it('1 + 1 + 1 should equals to 3', function() {   //it.only "only this "
    expect(sum(...[1,1,1])).to.be.equal(3);
  });

});
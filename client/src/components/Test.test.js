// Test.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Test from './Test';
describe("Test", () => {

  it("our first unit test", () => {
    const wrapper = shallow(<Test />);
  });
});
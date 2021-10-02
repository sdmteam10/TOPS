import * as React from 'react'
import App from './App'
import renderer from 'react-test-renderer';

import "regenerator-runtime/runtime.js";
const regeneratorRuntime = require("regenerator-runtime");

test('Create a snapshot of App', () => {
  const component = renderer.create(
    <App />
  );
  let testSnap = component.toJSON();
  
  expect(testSnap).toMatchSnapshot();
});
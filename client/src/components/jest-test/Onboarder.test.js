// Onboarder.test.js
import React from 'react'
import Onboarder from '../Onboarder'
import renderer from 'react-test-renderer';
import { fireEvent, render } from "@testing-library/react"

//it.only() "only test this <it>."
//it.skip() "not test this <it>."
// done() under expect(){} -  should be only used for async functions

  describe('Test <Onboarder /> component', function() {
    it('Should render', function() {  
      //Render component should be successed.
      const component = renderer.create(
        <Onboarder />
      );
        let testSnap = component.toJSON();
        expect(testSnap).toMatchSnapshot(); 
    })
  })
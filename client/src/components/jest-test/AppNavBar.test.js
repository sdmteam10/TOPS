// AppNavbar.test.js
import React from 'react'
import AppNavBar from '../AppNavBar'
import renderer from 'react-test-renderer';
import { fireEvent, render } from "@testing-library/react"

//it.only() "only test this <it>."
//it.skip() "not test this <it>."
// done() under expect(){} -  should be only used for async functions

  describe('Test <AppNavBar /> component', function() {
    it('Should render', function() {  
      //Render component should be successed.
      const component = renderer.create(
        <AppNavBar />
      );
        let testSnap = component.toJSON();
        expect(testSnap).toMatchSnapshot(); 
    })
  })
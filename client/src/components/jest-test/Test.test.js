// Test.test.js
import React from 'react'
import Test from '../Test'
import renderer from 'react-test-renderer';
import { fireEvent, render } from "@testing-library/react"

//it.only() "only test this <it>."
//it.skip() "not test this <it>."
// done() under expect(){} -  should be only used for async functions

  describe('Test <Test /> component', function() {
    it('Should render', function() {  
      //Render component should be successed.
      const component = renderer.create(
        <Test />
      );
        let testSnap = component.toJSON();
        expect(testSnap).toMatchSnapshot(); 
    })
  
  //Function should capture onChange changes into event.
    it('capture changes', function() {   //it.only() "only test this."

      function setTechniques(event) {
        expect(event.target.value).toEqual("whamo")
        done()
      }
      const { getByPlaceholderText }  = render(
        <div onChange={setTechniques}>
          <input placeholder="test input"/>
        </div>
      )
      fireEvent.change(getByPlaceholderText("test input"));

    })

    //Function should capture onSubmit into event.
    it('capture submit', function() {   

      function submitForm(event) {
        expect(event.target.value).toEqual("")
        
      }
      const { getByPlaceholderText }  = render(
        <form onSubmit={submitForm}>
          <input placeholder="test submit"/>
        </form>
      )
      fireEvent.submit(getByPlaceholderText("test submit"));

    })
    
    //Test removeDuplicate functionality
    it('remove duplicate string array -> abca should output abc', function() {
      const tree = renderer.create(<Test />);
      expect(tree.getInstance().removeDuplicate(["a","b","c","a"])).toEqual(["a","b","c"])
      
    })

  })



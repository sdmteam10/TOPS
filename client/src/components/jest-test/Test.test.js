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

    it('remove duplicate object in array', function() {
      const tree = renderer.create(<Test />)
      expect(tree.getInstance().removeDuplicateOBJ([
      { _id: '614a64afad8de7c962ddd661', name: 'Peer Support', activityNumber: 1, __v: 0 },
      { _id: '614a64daad8de7c962ddd663', name: 'Team Leader Assistance', activityNumber: 2, __v: 0 },
      { _id: '614a64eaad8de7c962ddd665', name: 'Induction', activityNumber: 3, __v: 0 },
      { _id: '614a64f3ad8de7c962ddd667', name: 'Agile Course', activityNumber: 4, __v: 0 },
      { _id: '614a6502ad8de7c962ddd669', name: 'Review Plan', activityNumber: 5, __v: 0 },
      { _id: '614a64f3ad8de7c962ddd667', name: 'Agile Course', activityNumber: 4, __v: 0 },
      { _id: '614a64daad8de7c962ddd663', name: 'Team Leader Assistance', activityNumber: 2, __v: 0 },
      { _id: '614a6513ad8de7c962ddd66b', name: 'Checklists', activityNumber: 6, __v: 0 },
      { _id: '614a651ead8de7c962ddd66d', name: 'Other Teams', activityNumber: 7, __v: 0 },
      { _id: '614a6502ad8de7c962ddd669', name: 'Review Plan', activityNumber: 5, __v: 0 }])).toEqual([
          { _id: '614a64afad8de7c962ddd661', name: 'Peer Support', activityNumber: 1, __v: 0 },
          { _id: '614a64daad8de7c962ddd663', name: 'Team Leader Assistance', activityNumber: 2, __v: 0 },
          { _id: '614a64eaad8de7c962ddd665', name: 'Induction', activityNumber: 3, __v: 0 },
          { _id: '614a64f3ad8de7c962ddd667', name: 'Agile Course', activityNumber: 4, __v: 0 },
          { _id: '614a6502ad8de7c962ddd669', name: 'Review Plan', activityNumber: 5, __v: 0 },
          { _id: '614a6513ad8de7c962ddd66b', name: 'Checklists', activityNumber: 6, __v: 0 },
          { _id: '614a651ead8de7c962ddd66d', name: 'Other Teams', activityNumber: 7, __v: 0 }
        ])
        

    })


  })



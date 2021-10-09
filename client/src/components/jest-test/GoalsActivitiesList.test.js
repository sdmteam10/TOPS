import React from 'react'
import GoalsActivitiesList from '../GoalsActivitiesList'
import renderer from 'react-test-renderer';
import { fireEvent, render } from "@testing-library/react"
import axios from "axios"

axios.defaults.adapter = require('axios/lib/adapters/http');


describe('Test <GoalsActivitiesList /> component', function() {
  //Function should capture onChange changes into event.
  it('capture changes', function() {   //it.only() "only test this."

      function emptyBind(event) {
        expect(event.target.value).toEqual("whama")
        done()      
      }
      const { getByPlaceholderText }  = render(
        <div onChange={emptyBind}>
          <input placeholder="test input"/>
        </div>
      )
      fireEvent.change(getByPlaceholderText("test input"));

    })

    
  //Test removeDuplicate functionality
  it('remove duplicate string array -> abca should output abc', function() {
      const tree = renderer.create(<GoalsActivitiesList />);
      expect(tree.getInstance().removeDuplicate(["a","b","c","c"])).toEqual(["a","b","c"])
      
      
  })
  
  it('remove duplicate object in array', function() {
    const tree = renderer.create(<GoalsActivitiesList />)
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
  
  it('check findAct method', function() {
    const tree = renderer.create(<GoalsActivitiesList />)
    expect(tree.getInstance().findAct(1)).toEqual({})
  
  })
  
  
})
  
      
  
  
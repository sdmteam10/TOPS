import React from 'react'
import ActivityCard from '../ActivityCard'
import renderer from 'react-test-renderer';
import { fireEvent, render } from "@testing-library/react"
import axios from "axios"

axios.defaults.adapter = require('axios/lib/adapters/http');


describe('Test <ActivityCard /> component', function() {
  it('Should render', function() {  
    //Render component should be successed.
    const component = renderer.create(
      <ActivityCard />
    );
      let testSnap = component.toJSON();
      expect(testSnap).toMatchSnapshot(); 
  })
  
})
  
      
  
  
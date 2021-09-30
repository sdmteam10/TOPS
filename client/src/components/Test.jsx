import React, { Component } from 'react'
import Alert from "./Alert";




class Test extends Component {


  state = {
    status: false,
    technique: "",
    tempcodingTests: [],

    //*Q8 user input
    userInputTech: "",
    checked: false,
    codingTests: [],
    inputTechValues: []

  }

  successInfo =  () =>{
    Alert.open({
      alertTip:"Successful submitted. You may make changes and submit again.",
      closeAlert:function(){
          console.log("Alert is closed...");
      }
    });
  } 

  //This method is called by Q8 other checkbox.
  async setOtherTechValue(e){
    await this.setState({
      userInputTech: ""
    })
    if (e) {
      await this.setState ({checked: true})
    }else{
      await this.setState ({checked: false})
    }
 }
 
 async checkLastValue(event){
    this.state.inputTechValues.push(event.target.value)
    await this.setState({userInputTech: this.state.inputTechValues.pop()})

 }

 //Click submit button to submit the form
 submitForm = event => {

  event.preventDefault();
  //Push user input other values seperately when click on submit button
  if (this.state.userInputTech){
    this.state.codingTests.push(this.state.userInputTech)
  }
  console.log(this.state.codingTests)

  //Remove submitted user input other value
  let index = this.state.codingTests.findIndex(e => e === this.state.userInputTech)
  if (index >= 0){
    this.state.codingTests.splice(index,1)}

 }
  
  //For Q8 multi-selection checkbox except the customised input value
  async setTechniques(event) {
    // console.log("This is event", event)
    await this.setState({
      status: event.target.checked
      
     })
     console.log(this.state.status)
    
    await this.setState({technique: event.target.value})
  
    if (this.state.status === true){
        this.state.tempcodingTests.push(this.state.technique)
    } else {
      this.state.tempcodingTests.splice(this.state.tempcodingTests.findIndex(e => e === this.state.technique),1)
    }

    await this.setState({
      codingTests: (this.removeDuplicate(this.state.tempcodingTests))
    })

  }

  removeDuplicate(originalArray) {
    let unique = new Set(originalArray)
    return [...unique]
  }



  render() {
    return (
      <> 
        <div className='container-fluid col-sm-6'>
          <form className="mx-auto mt-md-5 font-monospace" onSubmit={this.submitForm}>
            {/* Q8*/}
            <div className="mb-3">
              <div onChange={this.setTechniques.bind(this)}>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Infrastructure as code" id="flexCheckDefault08"></input>
                  <label className="form-check-label" htmlFor="flexCheckDefault08">
                    i. Infrastructure as code
                  </label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Static code analysis" id="flexCheckDefault09"></input>
                  <label className="form-check-label" htmlFor="flexCheckDefault09">
                    j. Static code analysis
                  </label>
                </div>
              </div>


              <div className="input-group mb-3" onChange={this.checkLastValue.bind(this)}>
                <div className="input-group-text">
                  <input className="form-check-input mt-0" type="checkbox" value="Other" aria-label="Checkbox for following text input" checked={this.state.checked || false} disabled />
                </div>
                <input type="text" className="form-control" placeholder="Please specify.." aria-label="Text input with checkbox" onChange={event => this.setOtherTechValue(event.target.value)}></input>
              </div>
              
            </div> 
            {/* Submit */}
            <div className="mb-3">
              <button className="btn btn-primary" type="submit" onClick={this.successInfo}>Submit form</button>
            </div>    

          </form>
        </div>
      </>
    )
  }
}

export default Test            
import React, { Component } from 'react'
import axios from 'axios'
import { Alert } from 'bootstrap'

class OrgInfo extends Component {

  state = {
    whoIsManager: "",
    whereIsChart: "",
    howWhenAccess: "",
    funds: "",
    vision: "",
    product: "",
    tool: "",
    isInduProgram: null,
    isMentor: null,
    isKnoBase: null,
    isDisabled: true
  }

  // constructor() {
  //   super()
  //   // this.submitForm = this.submitForm.bind(this)
  //   // this.handleChange = this.handleChange.bind(this)
  // }

  submitForm = event => {

    event.preventDefault();
    let info = {
      manager: this.whoIsManager.value,
      orgChart: this.whereIsChart.value,
      howAcc: this.howWhenAccess.value,
      fundInfo: this.funds.value,
      orgVis: this.vision.value,
      proSer: this.product.value,
      tools: this.tool.value,
      iduPro: this.state.isInduProgram,
      mentor: this.state.isMentor,
      knoBas: this.state.isKnoBase
    }



    //console.log('Clicked')
    axios.post('/routes/api/orgInfo/', info)
      .then(res => {
        // 存进state
        console.log('res=>', res);
        console.log('res=>', res.data);
      })
      .catch(err => {
        console.log(err)
      })
  
  }

  // showAlert(){

  // }


  setInduction(event) {
    this.setState({ isInduProgram: event.target.value })
    this.setState({ isDisabled: event.target.value === "true" ? false : true })
  }

  setMentor(event) {
    this.setState({ isMentor: event.target.value })
  }

  setKnowBase(event) {
    this.setState({ isKnoBase: event.target.value })
  }

  

  render() {
    return (
      <>
        <div className='container-fluid'>
          <form className="mx-auto mt-md-5 font-monospace" id="2" onSubmit={this.submitForm}>
            {/* Q1*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">1.	Who is the Manager that the team manager reports to?</label>
              <input type="text" className="form-control" id="validationTextarea" placeholder="i.e. Jim Buchan.." name="whoIsManager" ref={input => this.whoIsManager = input} required></input>

            </div>
            {/* Q2 */}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">2.	Where is an organisational chart available?</label>
              <textarea className="form-control" id="validationTextarea" placeholder="https://.." name="whereIsChart" ref={input => this.whereIsChart = input} required></textarea>
            </div>

            {/* Q3 */}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">3.	Is there an Induction program for new employees? If so how/when can this be accessed?</label>
              <div onChange={this.setInduction.bind(this)}>
                <div className="form-check">
                  <input type="radio" className="form-check-input" id="validationFormCheck2" value={true} name="isInduProgram" required />
                  <label className="form-check-label" htmlFor="validationFormCheck2">Yes</label> {/* Only selecting yes will be toggled to the textbox*/}
                </div>
                <div className="form-check mb-3">
                  <input type="radio" className="form-check-input" id="validationFormCheck2" value={false} name="isInduProgram" required />
                  <label className="form-check-label" htmlFor="validationFormChec3">No</label>
                  <div className="invalid-feedback">More example invalid feedback text</div>
                </div>
              </div>
              <textarea className="form-control" id="validationTextarea" placeholder="https://.." ref={input => this.howWhenAccess = input} disabled={this.state.isDisabled}></textarea>
            </div>
            {/* Q4 */}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">4.	What funds are available for the onboarder to attend formal courses?</label>
              <textarea className="form-control" id="validationTextarea" placeholder="i.e. SDM Voucher" name="funds" ref={input => this.funds = input}></textarea>
            </div>
            {/* Q5*/}
            <div className="mb-3">
              <div onChange={this.setMentor.bind(this)}>
                <label htmlFor="validationTextarea" className="form-label">5.	Is there a qualified suitable mentor available for the new employee?</label>
                <div className="form-check">
                  <input type="radio" className="form-check-input" id="validationFormCheck3" value="true" name="isMentor" />
                  <label className="form-check-label" htmlFor="validationFormCheck4">Yes</label>
                </div>
                <div className="form-check mb-3">
                  <input type="radio" className="form-check-input" id="validationFormCheck3" value="false" name="isMentor" />
                  <label className="form-check-label" htmlFor="validationFormCheck5">No</label>
                  
                </div>
              </div>
            </div>
            {/* Q6*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">6.	How can the organisational vision best be understood? </label>
              <textarea className="form-control" id="validationTextarea" placeholder="i.e. Better team work to best product.." name="vision" ref={input => this.vision = input}></textarea>
            </div>
            {/* Q7*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">7.	How can the product/service offered by the organisation best be understood by a new employee (video, marketing material, market segments etc)</label>
              <textarea className="form-control" id="validationTextarea" placeholder="i.e. Check the youtube channel.." name="product" ref={input => this.product = input}></textarea>
            </div>
            {/* Q8*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">8.   What tools are used for company wide communications?</label>
              <textarea className="form-control" id="validationTextarea" placeholder="i.e. Ms teams, Zoom, Whatsapp.." name="tool" ref={input => this.tool = input}></textarea>
            </div>
            {/* Q9*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">9.  Is there a company wide knowledge base? </label>
              <div onChange={this.setKnowBase.bind(this)}>
                <div className="form-check">
                  <input type="radio" className="form-check-input" id="validationFormCheck2" value="true" name="isKnoBase" />
                  <label className="form-check-label" htmlFor="validationFormCheck2">Yes</label>
                </div>
                <div className="form-check mb-3">
                  <input type="radio" className="form-check-input" id="validationFormCheck3" value="false" name="isKnoBase" />
                  <label className="form-check-label" htmlFor="validationFormCheck3">No</label>
                  <div className="invalid-feedback">More example invalid feedback text</div>
                </div>
              </div>
            </div>
            {/* Submit */}
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">Submit form</button>
 
            </div>
          </form>
        </div>
      </>
    )
  }

}
export default OrgInfo
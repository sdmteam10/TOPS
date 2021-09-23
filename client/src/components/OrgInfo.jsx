import React, { Component } from 'react'
import axios from 'axios'

class OrgInfo extends Component {

  state = {
    whoIsManager: "",
    whereIsChart: "",
    funds: "",
    vision: "",
    product: "",
    tool: ""
  }

  constructor() {
    super()
    // this.submitForm = this.submitForm.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  submitForm = event => {
    // console.log(this.state.whoIsManager)
    // console.log(this.whoIsManager.value)
    event.preventDefault();
    let info = {
      manager: this.whoIsManager.value,
      orgChart: this.whereIsChart.value,
      fundInfo: this.funds.value,
      orgVis: this.vision.value,
      proSer: this.product.value,
      tools: this.tool.value
    }
    // let newOrgInfo = {"manager":"xxx"}
    //let manager = this.name.value

    //console.log('Clicked')
    axios.post('/routes/api/orgInfo/', info)
      .then(res => {
        // 存进state
        console.log('res=>',res);
        console.log('res=>',res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  // handleChange = event => {
  //   console.log(event.target.value)
  //   // this.setState({ whoIsManager: event.target.value})
  //   this.setState({ whereIsChart: event.target.value})
  // }

  render() {
    return (
      <>
        <form className="mx-auto mt-md-5" id="2" onSubmit={this.submitForm}>
          {/* Q1*/}
          <div className="mb-3">
            <label htmlFor="validationTextarea" className="form-label">1.	Who is the Manager that the team manager reports to?</label>
            <input className="form-control" id="validationTextarea" placeholder="Required example textarea" name="whoIsManager" required ref={input=>this.whoIsManager=input} />
          </div>
          {/* Q2 */}
          <div className="mb-3">
            <label htmlFor="validationTextarea" className="form-label">2.	Where is an organisational chart available?</label>
            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" name="whereIsChart" required ref={input=>this.whereIsChart=input}></textarea>
          </div>
          {/* Q3 */}
          <div className="mb-3">
            <label htmlFor="validationTextarea" className="form-label">3.	Is there an Induction program for new employees? If so how/when can this be accessed?</label>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="validationFormCheck2" name="radiostacked1" />
              <label className="form-check-label" htmlFor="validationFormCheck2">Yes</label> {/* Only selecting yes will be toggled to the textbox*/}
            </div>
            <div className="form-check mb-3">
              <input type="radio" className="form-check-input" id="validationFormCheck2" name="radiostacked1" />
              <label className="form-check-label" htmlFor="validationFormChec3">No</label>
              <div className="invalid-feedback">More example invalid feedback text</div>
            </div>
            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" ></textarea>
          </div>
          {/* Q4 */}
          <div className="mb-3">
            <label htmlFor="validationTextarea" className="form-label">4.	What funds are available for the onboarder to attend formal courses?</label>
            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" name="funds" ref={input=>this.funds=input}></textarea>
          </div>
          {/* Q5*/}
          <div className="mb-3">
            <label htmlFor="validationTextarea" className="form-label">5.	Is there a qualified suitable mentor available for the new employee?</label>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="validationFormCheck3" name="radiostacked5"  />
              <label className="form-check-label" htmlFor="validationFormCheck4">Yes</label>
            </div>
            <div className="form-check mb-3">
              <input type="radio" className="form-check-input" id="validationFormCheck3" name="radiostacked5"  />
              <label className="form-check-label" htmlFor="validationFormCheck5">No</label>
              <div className="invalid-feedback">More example invalid feedback text</div>
            </div>
          </div>
          {/* Q6*/}
          <div className="mb-3">
            <label htmlFor="validationTextarea" className="form-label">6.	How can the organisational vision best be understood? </label>
            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" name="vision" ref={input=>this.vision=input}> </textarea>
          </div>
          {/* Q7*/}
          <div className="mb-3">
            <label htmlFor="validationTextarea" className="form-label">7.	How can the product/service offered by the organisation best be understood by a new employee (video, marketing material, market segments etc)</label>
            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" name="product" ref={input=>this.product=input}></textarea>
          </div>
          {/* Q8*/}
          <div className="mb-3">
            <label htmlFor="validationTextarea" className="form-label">8.   What tools are used for company wide communications?</label>
            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" name="tool" ref={input=>this.tool=input}> </textarea>
          </div>
          {/* Q9*/}
          <div className="mb-3">
            <label htmlFor="validationTextarea" className="form-label">9.  Is there a company wide knowledge base? </label>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="validationFormCheck2" name="radiostacked9"  />
              <label className="form-check-label" htmlFor="validationFormCheck2">Yes</label>
            </div>
            <div className="form-check mb-3">
              <input type="radio" className="form-check-input" id="validationFormCheck3" name="radiostacked9"  />
              <label className="form-check-label" htmlFor="validationFormCheck3">No</label>
              <div className="invalid-feedback">More example invalid feedback text</div>
            </div>
            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" ></textarea>
          </div>
          {/* Submit */}
          <div className="mb-3">
            <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
      </>
    )
  }

}
export default OrgInfo
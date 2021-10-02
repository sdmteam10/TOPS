import React, { Component } from 'react'
import axios from 'axios'
import Alert from "./Alert";



class OnboarderInfo extends Component {

  state = {
    teamInfos: []
  }

  componentDidMount() {
    axios.get(`/routes/api/teamInfomation/`)
        .then(res => {
            this.setState({ teamInfos: res.data })
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        console.log(this.state.teamInfos)
}



//Regex match with keywords form teamInfo and question list


  submitForm = event => {

    event.preventDefault();
    let info = {
      // programLan: this.programLan.value,
      // orgChart: this.whereIsChart.value,
      // howAcc: this.howWhenAccess.value,
      // fundInfo: this.funds.value,
      // orgVis: this.vision.value,
      // proSer: this.product.value,
      // tools: this.tool.value,
      // iduPro: this.state.isInduProgram,
      // mentor: this.state.isMentor,
      // knoBas: this.state.isKnoBase
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

  successInfo =  () =>{
    Alert.open({
      alertTip:"Successful submitted. You may make changes and submit again.",
      closeAlert:function(){
          console.log("Alert is closed...");
      }
  });
  }
  
  render() {
    return (
      <>
        <div className='container-fluid col-lg-6'>
          <div></div>



          <div className='font-monospace'>
            <br/>
            <h6 className="text-center"> Level Descriptor </h6>
            <table className="table table-bordered border-primary">
              <thead>
                <tr className="text-center">
                  <th scope="col">1</th>
                  <th scope="col">2</th>
                  <th scope="col">3</th>
                  <th scope="col">4</th>
                  <th scope="col">5</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>None</td>
                  <td>Beginner I’ve read about it and seen others use it</td>
                  <td>Some capability and familiarity</td>
                  <td>Good experience Used frequently in a previous job</td>
                  <td>Expert and very familiar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <form className="mx-auto mt-5 mt-md-5 font-monospace" onSubmit={this.submitForm}>
            {/* Q1*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">1.	How do you describe your level of front-end skills on #?</label>
            </div>
            <div>
              <label htmlFor="customRange1" className="form-label">(1 - 5)</label>
              <input type="range" className="form-range" min="1" max="5" id="customRange1"></input>
            </div>
            {/* Q2*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">2.	How do you describe your level of back-end skills on #?</label>
            </div>
            <div>
              <label htmlFor="customRange2" className="form-label">(1 - 5)</label>
              <input type="range" className="form-range" min="1" max="5" id="customRange2"></input>
            </div>
            {/* Q3*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">3.	How do you describe your ability of database skills on #?</label>
            </div>
            <div>
              <label htmlFor="customRange3" className="form-label">(1 - 5)</label>
              <input type="range" className="form-range" min="1" max="5" id="customRange3"></input>
            </div>
            {/* Q4*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">4.	How do you describe your ability of tool skill on #?</label>
            </div>
            <div>
              <label htmlFor="customRange4" className="form-label">(1 - 5)</label>
              <input type="range" className="form-range" min="1" max="5" id="customRange4"></input>
            </div>
            {/* Q5*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">5.	How do you describe your coding and testing technique on #?</label>
            </div>
            <div>
              <label htmlFor="customRange5" className="form-label">(1 - 5)</label>
              <input type="range" className="form-range" min="1" max="5" id="customRange5"></input>
            </div>
            {/* Q6*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">6.	How do you describe your ability of testing and quality assurance standards on #?</label>
            </div>
            <div>
              <label htmlFor="customRange6" className="form-label">(1 - 5)</label>
              <input type="range" className="form-range" min="1" max="5" id="customRange6"></input>
            </div>
            {/* Q7*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">7.	How do you describe your ability of planning and monitoring process on #?</label>
            </div>
            <div>
              <label htmlFor="customRange7" className="form-label">(1 - 5)</label>
              <input type="range" className="form-range" min="1" max="5" id="customRange7"></input>
            </div>
            {/* Q8*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">8.	How do you describe your ability of team communication on #?</label>
            </div>
            <div>
              <label htmlFor="customRange8" className="form-label">(1 - 5)</label>
              <input type="range" className="form-range" min="1" max="5" id="customRange8"></input>
            </div>
            {/* Q9*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">9.	How do you describe your ability of tool skill on #?</label>
            </div>
            <div>
              <label htmlFor="customRange9" className="form-label">(1 - 5)</label>
              <input type="range" className="form-range" min="1" max="5" id="customRange9"></input>
            </div>
          
            {/* Submit */}
            <div className="mb-3">
              <button className="btn btn-primary btn-lg w-100" type="submit" onClick={this.successInfo}>Submit form</button>
            </div>
          </form>
        </div>
      </>
    )
  }

}
export default OnboarderInfo
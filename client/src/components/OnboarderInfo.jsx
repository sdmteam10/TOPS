import React, { Component } from 'react'
import { Slider } from 'antd'
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

    // this.timer = setTimeout(
    //   () => { this.Alert() },
    //   30000
    // );
  }

  // componentWillUnmount() {
  //   this.timer && clearTimeout(this.timer);
  // }

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

    // alert('Saved successfully, skipping automatically!')
    Alert.open({
      alertTip:"Saved successfully, skipping automatically!",
  });
    window.location.href="/GoalsActivitiesList"
  }

  render() {
    return (
      <>
        <div className='container-fluid col-lg-6'>
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
              <label htmlFor="validationTextarea" className="form-label">1. How do you describe your level of front-end skills on JS?</label>
            </div> 
            <div>
              <label htmlFor="customRange1" className="form-label">(1 - 5)</label>
              <Slider min={1} max={5} id="customRange1" defaultValue="5"></Slider>
            </div>
            {/* Q2*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">2. How do you describe your level of front-end skills on Git and GitHub?</label>
            </div>
            <div>
              <label htmlFor="customRange2" className="form-label">(1 - 5)</label>
              <Slider min={1} max={5} id="customRange2" defaultValue="5"></Slider>
            </div>
            {/* Q3*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">3. How do you describe your level of front-end skills on Mob Programming?</label>
            </div>
            <div>
              <label htmlFor="customRange3" className="form-label">(1 - 5)</label>
              <Slider min={1} max={5} id="customRange3" defaultValue="5"></Slider>
            </div>
            {/* Q4*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">4. How do you describe your level of front-end skills on Ajax?</label>
            </div>
            <div>
              <label htmlFor="customRange4" className="form-label">(1 - 5)</label>
              <Slider min={1} max={5} id="customRange4" defaultValue="5"></Slider>
            </div>
            {/* Q5*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">5. How do you describe your level of back-end skills on Express?</label>
            </div>
            <div>
              <label htmlFor="customRange5" className="form-label">(1 - 5)</label>
              <Slider min={1} max={5} id="customRange5" defaultValue="5"></Slider>
            </div>
            {/* Q6*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">6. How do you describe your level of back-end skills on Node?</label>
            </div>
            <div>
              <label htmlFor="customRange6" className="form-label">(1 - 5)</label>
              <Slider min={1} max={5} id="customRange6" defaultValue="5"></Slider>
            </div>
            {/* Q7*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">7. How do you describe your ability of tool skill on Visual Studio Code?</label>
            </div>
            <div>
              <label htmlFor="customRange7" className="form-label">(1 - 5)</label>
              <Slider min={1} max={5} id="customRange7" defaultValue="5"></Slider>
            </div>
            {/* Q8*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">8. How do you describe your ability of tool skill on Postman?</label>
            </div>
            <div>
              <label htmlFor="customRange8" className="form-label">(1 - 5)</label>
              <Slider min={1} max={5} id="customRange8" defaultValue="5"></Slider>
            </div>
            {/* Q9*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">9. How do you describe your ability of planning and quality assurance standards on #?</label>
            </div>
            <div>
              <label htmlFor="customRange9" className="form-label">(1 - 5)</label>
              <Slider min={1} max={5} id="customRange9" defaultValue="5"></Slider>
            </div>
            {/* Q10*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">10. How do you describe your level of database skills on MongoDB?</label>
            </div>
            <div>
              <label htmlFor="customRange10" className="form-label">(1 - 5)</label>
              <Slider min={1} max={5} id="customRange10" defaultValue="5"></Slider>
            </div>
            {/* Q11*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">11. How do you describe your coding and testing technique on Jest and unit testing?</label>
            </div>
            <div>
              <label htmlFor="customRange11" className="form-label">(1 - 5)</label>
              <Slider min={1} max={5} id="customRange11" defaultValue="5"></Slider>
            </div> 
            {/* Q12*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">12. How do you describe your ability of team communication？</label>
            </div>
            <div>
              <label htmlFor="customRange12" className="form-label">(1 - 5)</label>
              <Slider min={1} max={5} id="customRange12" defaultValue="5"></Slider>
            </div>
            {/* Q13*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">13. How do you describe your ability of the product/service offered by the organisation？</label>
            </div>
            <div>
              <label htmlFor="customRange13" className="form-label">(1 - 5)</label>
              <Slider min={1} max={5} id="customRange13" defaultValue="5"></Slider>
            </div>                                               
           

            <div className="mb-3">
              <button className="btn btn-primary btn-lg w-100" type="submit" onClick={this.successInfo}>Submit form</button>
            </div>
            <br>
            </br>
          </form>
        </div>
      </>
    )
  }

}
export default OnboarderInfo
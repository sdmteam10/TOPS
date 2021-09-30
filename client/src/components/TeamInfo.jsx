import React, { Component } from 'react'
import axios from 'axios'
import Alert from "./Alert";


class TeamInfo extends Component {

  state = {

    status: false,
    checked: false,
    //*Q8 general checkboxes
    technique: "",
    tempcodingTests: [],
    codingTests: [],

    //*Q8 user input
    userInputTech: "",
    techChecked: false,
    inputTechValues: [],

    //*Q10 general checkboxes
    architech: "",
    temparchStyles: [],
    archStyles: [],

    //*Q10 user input
    userInputArch: "",
    archChecked: false,
    inputArchValues: [],

    //*Q12 general checkboxes
    devProcess: "",
    tempagileDeve: [],
    agileDeve: [],

    //*Q10 user input
    userInputDev: "",
    devChecked: false,
    inputDevValues: []
  }



  //This method is called by Q8 customised input checkbox.
    async setOtherTechValue(e){
      await this.setState({
        userInputTech: ""
      })
      if (e) {
        await this.setState ({techChecked: true})
      }else{
        await this.setState ({techChecked: false})
      }
   }
   
   async checkLastTechValue(event){
      this.state.inputTechValues.push(event.target.value)
      await this.setState({userInputTech: this.state.inputTechValues.pop()})
  
   }

     //This method is called by Q10 customised input checkbox.
     async setOtherArchValue(e){
      await this.setState({
        userInputArch: ""
      })
      if (e) {
        await this.setState ({archChecked: true})
      }else{
        await this.setState ({archChecked: false})
      }
   }
   
   async checkLastArchValue(event){
      this.state.inputArchValues.push(event.target.value)
      await this.setState({userInputArch: this.state.inputArchValues.pop()})
  
   }

     //This method is called by Q12 customised input checkbox.
     async setOtherDevValue(e){
      await this.setState({
        userInputDev: ""
      })
      if (e) {
        await this.setState ({devChecked: true})
      }else{
        await this.setState ({devChecked: false})
      }
   }
   
   async checkLastDevValue(event){
      this.state.inputDevValues.push(event.target.value)
      await this.setState({userInputDev: this.state.inputDevValues.pop()})
  
   }

  submitForm = event => {

    event.preventDefault();
    //Push user input other values seperately when click on submit button
    if (this.state.userInputTech) {
      this.state.codingTests.push(this.state.userInputTech)
    }
    if (this.state.userInputArch) {
      this.state.archStyles.push(this.state.userInputArch)
    }
    if (this.state.userInputDev) {
      this.state.agileDeve.push(this.state.userInputDev)
    }
  

    let info = {
      leader: this.leader.value,
      mainTasks: this.maintask.value,
      languages: this.languages.value,
      frameworks: this.frameworks.value,
      conCode: this.codeSharing.value,
      documentation: this.documentation.value,
      teamTools: this.tools.value,
      database: this.database.value,
      ide: this.ide.value,
      vsCtrl: this.vsCtrl.value,
      runners: this.runners.value,
      ciServer: this.ciServer.value,
      depTools: this.depTools.value,
      testingStand: this.testing.value,
      planTechs: this.planTechs.value,
      supMonitor: this.supMonitor.value,
      proMoniter: this.proMoniter.value,
      keepComu: this.keepComu.value,
      teamComu: this.teamComu.value,
      autonomous: this.autonomous.value,
      muchVirtual: this.muchVirtual.value,
      keepVirtually: this.keepVirtually.value,
      aspectsDoc: this.aspectsDoc.value,
      usedTools: this.usedTools.value,

      codingTests: this.state.codingTests,
      archStyles: this.state.archStyles,
      agileDeve: this.state.agileDeve
    }

    //console.log('Clicked')
    axios.post('/routes/api/teamInfomation/', info)
      .then(res => {
        // Write in state
        console.log('res=>', res);
        console.log('res=>', res.data);
      })
      .catch(err => {
        console.log(err)
      })

    //Remove submitted user input other value to avoid duplicates before reload page
    let indexT = this.state.codingTests.findIndex(e => e === this.state.userInputTech)
    let indexA = this.state.archStyles.findIndex(e => e === this.state.userInputArch)
    let indexD = this.state.agileDeve.findIndex(e => e === this.state.userInputDev)
    if (indexT >= 0) {
      this.state.codingTests.splice(indexT, 1)
    }
    if (indexA >= 0) {
      this.state.archStyles.splice(indexA, 1)
    }
    if (indexD >= 0) {
      this.state.agileDeve.splice(indexD, 1)
    }
  }
  
  
  
  //For Q8 multi-selection checkbox except the customised input value
  async setTechniques(event) {
    await this.setState({
      status: event.target.checked
     })
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

   //For Q10 multi-selection checkbox except the customised input value
   async setArchitech(event) {
    await this.setState({
      status: event.target.checked
     })
    
    await this.setState({architech: event.target.value})
  
    if (this.state.status === true){
        this.state.temparchStyles.push(this.state.architech)
    } else {
      this.state.temparchStyles.splice(this.state.temparchStyles.findIndex(e => e === this.state.architech),1)
    }

    await this.setState({
      archStyles: (this.removeDuplicate(this.state.temparchStyles))
    })

  }

    //For Q12 multi-selection checkbox except the customised input value
    async setDev(event) {
    await this.setState({
      status: event.target.checked
      })
    
    await this.setState({devProcess: event.target.value})
  
    if (this.state.status === true){
        this.state.tempagileDeve.push(this.state.devProcess)
    } else {
      this.state.tempagileDeve.splice(this.state.tempagileDeve.findIndex(e => e === this.state.devProcess),1)
    }

    await this.setState({
      agileDeve: (this.removeDuplicate(this.state.tempagileDeve))
    })

  }

  removeDuplicate(originalArray) {
    let unique = new Set(originalArray)
    return [...unique]
  }

  // sayHello() {
  //   console.log("hello")
  // }

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
        <div className='container-fluid col-sm-6'>
          <form className="mx-auto mt-md-5 font-monospace" onSubmit={this.submitForm}>
            {/* Q1*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">1.	Who is the team leader?</label>
              <input type="text" className="form-control" id="validationTextarea" placeholder="i.e. Jim Buchan.." name="leader" ref={input => this.leader = input} ></input>
            </div>
            {/* Q2 */}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">2.	What are the main tasks expected of the new team member?</label>
              <textarea className="form-control" id="validationTextarea" placeholder="Please specify.." name="maintask" ref={input => this.maintask = input} ></textarea>
            </div>
            {/* Q3 */}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">3.	What are the main programming languages the team uses?</label>
              <textarea className="form-control" id="validationTextarea" placeholder="C, Java, C#, Python" name="languages" ref={input => this.languages = input} ></textarea>
            </div>
            {/* Q4 */}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">4.	What frameworks are mainly used by the team?</label>
              <textarea className="form-control" id="validationTextarea" placeholder="i.e. React, VUE" name="frameworks" ref={input => this.frameworks = input}></textarea>
            </div>
            {/* Q5*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">5.	What version control and code sharing mechanism is used by the team to get access to the source code?</label>
              <textarea className="form-control" id="validationTextarea" placeholder="i.e. Git" name="codeSharing" ref={input => this.codeSharing = input}></textarea>
            </div>
            {/* Q6*/}
            <div className="mb-3">
              <div>
                <label htmlFor="validationTextarea" className="form-label">6.	What documentation about the source code design and structure is available and how can it be accessed and added to? </label>
                <textarea className="form-control" id="validationTextarea" placeholder="Please specify.." name="documentation" ref={input => this.documentation = input}></textarea>
              </div>
              <div className="container-fluid">
                <label htmlFor="validationTextarea" className="form-label">a.	What tools are used by the team for this? </label>
                <input className="form-control" id="validationTextarea" placeholder="Please specify.." name="tools" ref={input => this.tools = input}></input>
              </div>
            </div>
            {/* Q7*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">7.	What database is used by the team?</label>
              <textarea className="form-control" id="validationTextarea" placeholder="i.e. MongoDB altas.." name="database" ref={input => this.database = input}></textarea>
            </div>
            {/* Q8*/}
            <div className="mb-3">
              <div onChange={this.setTechniques.bind(this)}>
                <label htmlFor="validationTextarea" className="form-label">8.	What are the main coding and testing techniques regularly used by the team?</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Continuous Integration" id="flexCheckDefault"  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    a. Continuous Integration
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Continuous Deployment" id="flexCheckDefault01"  />
                  <label className="form-check-label" htmlFor="flexCheckDefault01">
                    b. Continuous Deployment
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="DevOps" id="flexCheckDefault02"></input>
                  <label className="form-check-label" htmlFor="flexCheckDefault02">
                    c. DevOps
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Test-driven Development" id="flexCheckDefault03"></input>
                  <label className="form-check-label" htmlFor="flexCheckDefault03">
                    d. Test-driven Development
                  </label>
                </div>              
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Behaviour Driven Development" id="flexCheckDefault04"></input>
                  <label className="form-check-label" htmlFor="flexCheckDefault04">
                    e. Behaviour Driven Development
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Pair programming" id="flexCheckDefault05"></input>
                  <label className="form-check-label" htmlFor="flexCheckDefault05">
                    f. Pair programming
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Mob programming" id="flexCheckDefault06"></input>
                  <label className="form-check-label" htmlFor="flexCheckDefault06">
                    g. Mob programming
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Feature flags" id="flexCheckDefault07"></input>
                  <label className="form-check-label" htmlFor="flexCheckDefault07">
                    h. Feature flags
                  </label>
                </div>  
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
              <div className="input-group mb-3" onChange={this.checkLastTechValue.bind(this)}>
                <div className="input-group-text">
                  <input className="form-check-input mt-0" type="checkbox" value="Other" aria-label="Checkbox for following text input" checked={this.state.techChecked || false} disabled />
                </div>
                <input type="text" className="form-control" placeholder="Please specify others.." aria-label="Text input with checkbox" onChange={event => this.setOtherTechValue(event.target.value)}></input>
              </div> 
            </div>     
            {/* Q9*/}
            <div>
              <div className="mb-3">
                <label htmlFor="validationTextarea" className="form-label">9.	What tools are used by the team to support coding and testing? </label>
                <div className="container-fluid">
                  <div>
                    <label htmlFor="validationTextarea" className="form-label">a.	What IDE?</label>
                    <input type="text" className="form-control" id="validationTextarea" placeholder="i.e. Visual Studio.." name="ide" ref={input => this.ide = input} ></input>
                    <div>
                      <label htmlFor="validationTextarea" className="form-label">b.	What version control?</label>
                      <input type="text" className="form-control" id="validationTextarea" placeholder="i.e. GitHub.." name="vsCtrl" ref={input => this.vsCtrl = input} ></input>
                    </div>
                    <div>
                      <label htmlFor="validationTextarea" className="form-label">c.	What test runners?</label>
                      <input type="text" className="form-control" id="validationTextarea" placeholder="i.e. Jest, Cypress.." name="runners" ref={input => this.runners = input} ></input>
                    </div>
                    <div>
                      <label htmlFor="validationTextarea" className="form-label">d.	What continuous integration servers?</label>
                      <input type="text" className="form-control" id="validationTextarea" placeholder="i.e. CircleCI.." name="ciServer" ref={input => this.ciServer = input} ></input>
                    </div>
                    <div>
                      <label htmlFor="validationTextarea" className="form-label">e.	What Deployment tools</label>
                      <input type="text" className="form-control" id="validationTextarea" placeholder="i.e. Octopus.." name="depTools" ref={input => this.depTools = input} ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Q10*/}
            <div className="mb-3">
              <div onChange={this.setArchitech.bind(this)}>
                <label htmlFor="validationTextarea" className="form-label">10. What are the main architectural styles used in the code base?</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Layered" id="flexCheckDefault"></input>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    a. Layered
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Event Driven" id="flexCheckDefault01"></input>
                  <label className="form-check-label" htmlFor="flexCheckDefault01">
                    b. Event Driven
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Microservices" id="flexCheckDefault02"></input>
                  <label className="form-check-label" htmlFor="flexCheckDefault02">
                    c. Microservices
                  </label>
                </div>
              </div>
              <div className="input-group mb-3" onChange={this.checkLastArchValue.bind(this)}>
                <div className="input-group-text">
                  <input className="form-check-input mt-0" type="checkbox" value="Other" aria-label="Checkbox for following text input" checked={this.state.archChecked || false} disabled />
                </div>
                <input type="text" className="form-control" placeholder="Please specify others.." aria-label="Text input with checkbox" onChange={event => this.setOtherArchValue(event.target.value)}></input>
              </div>
            </div>
            {/* Q11*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">11.	What unit testing and other testing and quality assurance standards are expected by the team?</label>
              <textarea className="form-control" id="validationTextarea" placeholder="i.e. Code reviews.." name="testing" ref={input => this.testing = input}></textarea>
            </div>
            {/* Q12*/}
            <div className="mb-3">
              <div onChange={this.setDev.bind(this)}>
                <label htmlFor="validationTextarea" className="form-label">12.	What Agile development process is adopted by the team?</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Scrum" id="flexCheckDefault"></input>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    a. Scrum
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Kanban" id="flexCheckDefault01"></input>
                  <label className="form-check-label" htmlFor="flexCheckDefault01">
                    b. Kanban
                  </label>
                </div>
       
              </div>    
              <div className="input-group mb-3" onChange={this.checkLastDevValue.bind(this)}>
                <div className="input-group-text">
                  <input className="form-check-input mt-0" type="checkbox" value="Other" aria-label="Checkbox for following text input" checked={this.state.devChecked || false} disabled />
                </div>
                <input type="text" className="form-control" placeholder="Please specify others.." aria-label="Text input with checkbox" onChange={event => this.setOtherDevValue(event.target.value)}></input>
              </div>          
            </div>
            {/* Q13*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">13.	What planning techniques are used by the team?</label>
              <textarea className="form-control" id="validationTextarea" placeholder="i.e. Road Map.." name="planTechs" ref={input => this.planTechs = input}></textarea>
            </div>
            {/* Q14*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">14.	How is progress monitored?</label>
              <textarea className="form-control" id="validationTextarea" placeholder="i.e. Trello Board.." name="proMoniter" ref={input => this.proMoniter = input}></textarea>
            </div>
            {/* Q15*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">15.	What tools are used by the team to support the planning and monitoring process?</label>
              <textarea className="form-control" id="validationTextarea" placeholder="i.e. Jira.." name="supMonitor" ref={input => this.supMonitor = input}></textarea>
            </div>
            {/* Q16*/}
            <div className="mb-3">
              <div>
                <label htmlFor="validationTextarea" className="form-label">16.	How do the team keep in touch and communicate? </label>
                <textarea className="form-control" id="validationTextarea" placeholder="i.e. Frequent formal and informal meetings.." name="keepComu" ref={input => this.keepComu = input}></textarea>
              </div>
              <div className="container-fluid">
                <label htmlFor="validationTextarea" className="form-label">a.	What tools are used to support team communication</label>
                <input className="form-control" id="validationTextarea" placeholder="i.e. Slack, Discord, MS teams.." name="teamComu" ref={input => this.teamComu = input}></input>
              </div>
            </div>
            {/* Q17*/}
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">17. How autonomous is the team?</label>
              <textarea className="form-control" id="validationTextarea" placeholder="i.e. Progress improvement up to the team" name="autonomous" ref={input => this.autonomous = input}></textarea>
            </div>
            {/* Q18*/}
            <div className="mb-3">
              <div>
                <label htmlFor="validationTextarea" className="form-label">18.	How much of the team work is done in a virtual environment? </label>
                <textarea className="form-control" id="validationTextarea" placeholder="i.e. Most of our time.." name="muchVirtual" ref={input => this.muchVirtual = input}></textarea>
              </div>
              <div className="container-fluid">
                <label htmlFor="validationTextarea" className="form-label">a.	What tools are used to keep in touch virtually?</label>
                <input className="form-control" id="validationTextarea" placeholder="i.e. MS Teams, Zoom.." name="keepVirtually" ref={input => this.keepVirtually = input}></input>
              </div>
            </div>
            {/* Q19*/}
            <div className="mb-3">
              <div>
                <label htmlFor="validationTextarea" className="form-label">19.	What aspects of requirements, design, coding and testing are documented? </label>
                <textarea className="form-control" id="validationTextarea" placeholder="i.e. High level requirements, mock-ups, code structure, refactoring, etc." name="aspectsDoc" ref={input => this.aspectsDoc = input}></textarea>
              </div>
              <div className="container-fluid">
                <label htmlFor="validationTextarea" className="form-label">a.	What tools are used for this?</label>
                <input className="form-control" id="validationTextarea" placeholder="i.e. Confluence.." name="usedTools" ref={input => this.usedTools = input}></input>
              </div>
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

export default TeamInfo            
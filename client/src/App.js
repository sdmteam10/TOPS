import './App.css'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Onboarder from './components/Onboarder'
import Designer from './components/Designer'
import GoalsActivitiesList from './components/GoalsActivitiesList'
import AppNavBar from './components/AppNavBar'
import TitleActivity from './components/TitleActivity'
import TitleOrgInfo from './components/TitleOrgInfo';
import TitleTeamInfo from './components/TitleTeamInfo'
import OrgInfo from './components/OrgInfo'
import TeamInfo from './components/TeamInfo'
import OnboarderInfo from './components/OnboarderInfo'
import TitleHome from './components/TitleHome';
import Test from './components/Test'
import TitleOnboarderInfo from './components/TitleOnboarderInfo'
import React from 'react';




function App() {
  let pathname = window.location.pathname
  let titleDesc

  if (pathname === '/Goals' ) {
    titleDesc = <TitleActivity />
  } else if (pathname === '/GoalsActivitiesList') {
    titleDesc = <TitleActivity />
  } else if (pathname === '/OrgInfo' ) {
    titleDesc = <TitleOrgInfo />
  } else if (pathname === '/Home' || pathname === '/') {
    titleDesc = <TitleHome />
  } else if (pathname === '/TeamInfo') {
    titleDesc = <TitleTeamInfo /> 
  } else if (pathname === '/OnboarderInfo') {
    titleDesc = <TitleOnboarderInfo />
  }

  return (
    
    <>
      <AppNavBar />
      {titleDesc}
      <div className='container-md' style={{height: '500px'}}>
        {/* 路由入口 */}
        <Router>
          <Switch>
            {/* 路由规则 */}
            <Route path="/" component={Home} exact />
            <Route path="/Home" component={Home} />
            <Route path="/Onboarder" component={Onboarder} />
            <Route path="/Designer" component={Designer} />
            <Route path="/GoalsActivitiesList" component={GoalsActivitiesList} />
            <Route path="/OrgInfo" component={OrgInfo} />
            <Route path="/TeamInfo" component={TeamInfo} />
            <Route path="/Test" component={Test} />
            <Route path="/OnboarderInfo" component={OnboarderInfo} />
            
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default App;


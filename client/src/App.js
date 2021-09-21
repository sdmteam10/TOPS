import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import GoalsList from './components/GoalsList'
import AppNavBar from './components/AppNavBar'
import TitleActivity from './components/TitleActivity';

function App() {
  return (
    
    <>
      <AppNavBar />
      <TitleActivity />
      <div className='container-md' style={{height: '500px'}}>
        {/* 路由入口 */}
        <Router>
          <Switch>
            {/* 路由规则 */}
            <Route path="/" component={Home} exact />
            <Route path="/Goals" component={GoalsList} />
          </Switch>
        </Router>
      </div>
    </>
  )}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavBar from './components/AppNavBar'
import GoalsList from './components/GoalsList'

function App() {
  return (
    <div className="App">
       <AppNavBar />
      <header><GoalsList /></header>
    </div>
  );
}

export default App;

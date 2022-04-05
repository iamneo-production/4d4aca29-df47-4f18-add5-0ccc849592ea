import Signup from './Components/feSignup1';
import Login from './Components/feLogin1';
import {Switch,Route} from 'react-router-dom';
import AdminLogin from './Components/feLogin2';
import AdminSignup from './Components/feSignup2';

function App() {

  return (
    <div className="App">
       <Switch>
        <Route path="/" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/adminlogin" exact component={AdminLogin}/>
        <Route path="/adminsignup" exact component ={AdminSignup}/>
        <Route path="/" component={Signup}/>
      </Switch>
        </div>
  );
}

export default App;

import View from './Components/View Orders';
import Signup from './Components/Signup';
import Login from './Components/Login';
import {Switch,Route} from 'react-router-dom';
import AdminLogin from './Components/AdminLogin'

function App() {
  return (
    <div className="App">
       <Switch>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/adminlogin" exact component={AdminLogin}/>
        <Route path="/" component={Signup}/>
      </Switch>
        </div>
  );
}

export default App;

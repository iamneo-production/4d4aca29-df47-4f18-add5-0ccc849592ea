import View from './Components/View Orders';
import Signup from './Components/Signup';
import Login from './Components/Login';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Switch>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/" component={Signup}/>
      </Switch>
        </div>
  );
}

export default App;

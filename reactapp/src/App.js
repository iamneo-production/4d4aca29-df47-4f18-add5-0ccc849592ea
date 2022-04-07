import React, {Component} from 'react';
import './App.css';
import _n from './components/navbar2';
import _r from './components/order';
import H from './components/home';
import E from './components/edit';
import O from './components/orders';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';
class App extends Component{
  render(){
    return(
      <Router>
      
    <div>
      <Switch>
      <Route exact path="/home">
        <_n/>
        <br/>
        <br/>
        <H/>
      </Route>
      <Route path="/cart">
      <_r></_r>
      </Route>
      <Route path="/edit">
      <E></E>
      </Route>
      <Route path="/logout">
      <_n />
      <br/>
        <br/>
        <H/>
      </Route>
      <Route exact path="/">
      <_n/>
        <br/>
        <br/>
        <H/>
      </Route>
      <Route exact path="/order">
      <_r/>
      </Route>
      <Route exact path="/orders">
        <_n/>
      <O/>
      </Route>
      </Switch>
    </div>
    </Router>
    );
  }
}
export default App;

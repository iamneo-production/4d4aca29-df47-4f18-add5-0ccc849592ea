import './App.css';
import Home from './components/home';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

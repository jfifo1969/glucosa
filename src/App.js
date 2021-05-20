import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

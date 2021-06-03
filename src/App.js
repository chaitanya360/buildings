import "./App.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blocks from "./components/Blocks";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/block/:id" component={Blocks}></Route>
      </Switch>
    </Router>
  );
}

export default App;

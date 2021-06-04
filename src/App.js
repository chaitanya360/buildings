import "./App.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blocks from "./components/Blocks";
import Floors from "./components/Floors";
import Flats from "./components/Flats";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:blockId/:floorId/flat/:flatId" component={Flats}></Route>
        <Route path="/block/:blockId/:floorId" component={Floors}></Route>
        <Route path="/block/:id" component={Blocks}></Route>
      </Switch>
    </Router>
  );
}

export default App;

import "./App.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blocks from "./components/Blocks";
import Floors from "./components/Floors";
import Flats from "./components/Flats";
import { CompareProvider } from "./components/compareContext";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
  position: "bottom center",
  timeout: 4000,
  offset: "30px",
  transition: "scale",
};

window.onorientationchange = function () {
  var orientation = window.orientation;
  switch (orientation) {
    case 0:
    case 90:
    case -90:
      window.location.reload();
      console.log("-90");
      break;
  }
};

function App() {
  return (
    <>
      <div>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <CompareProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />

                <Route
                  path="/:blockId/:floorId/flat/:flatId"
                  component={Flats}
                />
                <Route path="/block/:blockId/:floorId" component={Floors} />
                <Route path="/block/:id" component={Blocks} />
              </Switch>
            </Router>
          </CompareProvider>
        </AlertProvider>
      </div>
    </>
  );
}

export default App;

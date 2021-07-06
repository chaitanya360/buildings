import "./App.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blocks from "./components/Blocks";
import Floors from "./components/Floors";
import Flats from "./components/Flats";
import { CompareProvider } from "./components/compareContext";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { setBookedFlats } from "./data";
import { useEffect } from "react";
import { db } from "./firebase_config";
import VirtualTour from "./components/VirtualTour";

const alertOptions = {
  position: "bottom center",
  timeout: 4000,
  offset: "30px",
  transition: "scale",
};

function App() {
  useEffect(() => {
    // Retriving the flats information from db

    db.collection("BookedFlats")
      .get()
      .then((snap) => {
        snap.forEach((value) => {
          const data = value.data();
          if (data) {
            const flats = [];
            Object.keys(data).forEach(function (key) {
              if (data[key]) flats.push(parseInt(key));
            });
            setBookedFlats(flats);
          }
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <CompareProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/:blockId/:floorId/flat/:flatId" component={Flats} />
              <Route path="/block/:blockId/:floorId" component={Floors} />
              <Route path="/block/:id" component={Blocks} />
            </Switch>
          </Router>
        </CompareProvider>
      </AlertProvider>
    </div>
  );
}

export default App;

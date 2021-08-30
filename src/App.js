import "./App.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blocks from "./components/Blocks";
import Floors from "./components/Floors";
import Flats from "./components/Flats";
import { CompareProvider } from "./components/compareContext";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Clubhouse from "./components/Clubhouse";
import { useEffect, useState } from "react";

import {
  setBookedBlocks,
  setBookedFlats,
  setMortgagedFlats,
  setUnderConstructionBlocks,
} from "./data";
import { db } from "./firebase_config";
import Loading from "./components/Loading";

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
      break;
    default:
      return;
  }
};

const getDataFromDB = (setReceivedData) => {
  db.collection("BookedFlats")
    .get()
    .then((snap) => {
      snap.forEach((value) => {
        const data = value.data();
        setBookedFlats(data);
        setReceivedData(true);
      });
    });

  db.collection("UnderContructionBlocks")
    .get()
    .then((snap) => {
      snap.forEach((value) => {
        const data = value.data();
        setUnderConstructionBlocks(data);
        setReceivedData(true);
      });
    });

  db.collection("BookedBlocks")
    .get()
    .then((snap) => {
      if (snap.metadata.fromCache) {
        alert("Database Reached Failed");
        setReceivedData(true);
      }
      snap.forEach((value) => {
        const data = value.data();
        setBookedBlocks(data);
        setReceivedData(true);
      });
    });

  db.collection("MortgagedFlats")
    .get()
    .then((snap) => {
      if (snap.metadata.fromCache) {
        alert("Database Reached Failed");
        setReceivedData(true);
      }
      snap.forEach((value) => {
        const data = value.data();
        setMortgagedFlats(data);
        setReceivedData(true);
      });
    });
};

function App() {
  const [displayFullScreenMsg, setDisplayFullScreenMsg] = useState(false);
  const [receivedData, setReceivedData] = useState(false);

  useEffect(() => {
    getDataFromDB(setReceivedData);
    if (!displayFullScreenMsg && !document.fullscreen)
      setDisplayFullScreenMsg(true);
  }, []);
  return receivedData ? (
    <>
      <div>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <CompareProvider>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home
                    receivedData={receivedData}
                    displayFullScreenMsg={displayFullScreenMsg}
                    setDisplayFullScreenMsg={setDisplayFullScreenMsg}
                  />
                </Route>

                <Route
                  path="/:blockId/:floorId/flat/:flatId"
                  component={Flats}
                />
                <Route path="/block/:blockId/:floorId" component={Floors} />
                <Route path="/block/:id" component={Blocks} />
                <Route exact path="/clubhouse" component={Clubhouse} />
              </Switch>
            </Router>
          </CompareProvider>
        </AlertProvider>
      </div>
    </>
  ) : (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Loading />
    </div>
  );
}

export default App;

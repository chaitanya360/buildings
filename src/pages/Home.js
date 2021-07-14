import React, { useEffect, useState } from "react";
import VectorBlocks from "../components/VectorBlocks";
import styles from "./pages.module.css";

import {
  setBookedBlocks,
  setBookedFlats,
  setUnderConstructionBlocks,
} from "../data";
import { db } from "../firebase_config";
import Loading from "../components/Loading";
import FullScreenModeAlert from "../components/FullScreenModeAlert";

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
};

function getFullscreenElement() {
  return (
    document.fullscreenElement || //standard property
    document.webkitFullscreenElement || //safari/opera support
    document.mozFullscreenElement || //firefox support
    document.msFullscreenElement
  ); //ie/edge support
}

function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen().catch(console.log);
  }
}

function Home(props) {
  const [displayFullScreenMsg, setDisplayFullScreenMsg] = useState(false);

  const [receivedData, setReceivedData] = useState(false);
  useEffect(() => {
    getDataFromDB(setReceivedData);
    if (!document.fullscreen) setDisplayFullScreenMsg(true);
  }, []);

  return receivedData ? (
    <>
      <div className={styles.home}>
        <VectorBlocks />
      </div>
      {displayFullScreenMsg && (
        <FullScreenModeAlert
          handleYes={() => {
            toggleFullscreen();
            setDisplayFullScreenMsg(false);
          }}
          handleNo={() => setDisplayFullScreenMsg(false)}
        />
      )}
    </>
  ) : (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Loading />
    </div>
  );
}

export default Home;

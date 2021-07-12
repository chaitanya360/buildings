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

const getDataFromDB = (setReceivedData) => {
  const recieved = false;
  db.collection("BookedFlats")
    .get()
    .then((snap) => {
      snap.forEach((value) => {
        const data = value.data();
        setBookedFlats(data);
        setReceivedData(true);
      });
    })
    .catch((error) => console.log(error));

  db.collection("UnderContructionBlocks")
    .get()
    .then((snap) => {
      snap.forEach((value) => {
        const data = value.data();
        setUnderConstructionBlocks(data);
        setReceivedData(true);
      });
    })
    .catch((error) => console.log(error));

  db.collection("BookedBlocks")
    .get()
    .then((snap) => {
      snap.forEach((value) => {
        const data = value.data();
        setBookedBlocks(data);
        setReceivedData(true);
      });
    })
    .catch((error) => console.log(error));
};

function Home(props) {
  const [receivedData, setReceivedData] = useState(false);

  useEffect(() => {
    // openFullscreen();
    getDataFromDB(setReceivedData);
  }, []);

  return receivedData ? (
    <div className={styles.home}>
      <VectorBlocks />
    </div>
  ) : (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Loading />
    </div>
  );
}

export default Home;

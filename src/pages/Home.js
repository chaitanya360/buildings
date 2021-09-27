import React from "react";
import VectorBlocks from "../components/VectorBlocks";
import styles from "./pages.module.css";

import Loading from "../components/Loading";
import FullScreenModeAlert from "../components/FullScreenModeAlert";

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

function Home({ receivedData, setDisplayFullScreenMsg, displayFullScreenMsg }) {
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

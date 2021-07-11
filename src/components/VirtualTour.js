import React, { useState } from "react";
import { colors, sizes } from "../utility";
import { getAbsoluteFlatNum, hideElement } from "../utility/functions";
import styles from "./components.module.css";
import Loading from "./Loading";

const Icon = ({ name, width = "40px", onClick }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <img
          width="100%"
          height="100%"
          src={`${process.env.PUBLIC_URL}/images/icons/${name}.svg`}
          alt="location icon"
        />
      </div>
    </>
  );
};

const Header = ({ handleClose, title }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#005E5F",
        opacity: "0.9",
        padding: "5px",
        color: "white",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        width: "100vw",
        paddingLeft: "20px",
        height: "40px",
      }}
    >
      <div className={styles.compare_title} style={{ fontSize: "22px" }}>
        {title + " "} (Virtual Tour)
      </div>
      <div style={{ marginRight: "10px" }}>
        <Icon name="close" onClick={handleClose} width="30px" />
      </div>
    </div>
  );
};

const getSrc = (modelId) => {
  switch (modelId) {
    case 1:
      return "https://kuula.co/share/collection/7kmcW?fs=1&vr=1&sd=1&autorotate=0.16&thumbs=1&info=0&logo=bWVkaWEvMTE1NjUyLzYwZWEtZTQwYS1jYWMwLTExOTEucG5n";

    case 2:
      return "https://kuula.co/share/collection/7kmcQ?fs=1&vr=1&sd=1&autorotate=0.16&thumbs=1&info=0&logo=bWVkaWEvMTE1NjUyLzYwZWEtZTQwYS1jYWMwLTExOTEucG5n";

    case 3:
      return "https://kuula.co/share/collection/7kmKh?fs=1&vr=1&sd=1&autorotate=0.16&thumbs=1&info=0&logo=bWVkaWEvMTE1NjUyLzYwZWEtZTQwYS1jYWMwLTExOTEucG5n";

    case 4:
      return "https://kuula.co/share/collection/7kmK4?fs=1&vr=1&sd=1&autorotate=0.16&thumbs=1&info=0&logo=bWVkaWEvMTE1NjUyLzYwZWEtZTQwYS1jYWMwLTExOTEucG5n";

    case 5:
      return "https://kuula.co/share/collection/7kmKm?fs=1&vr=1&sd=1&autorotate=0.16&thumbs=1&info=0&logo=bWVkaWEvMTE1NjUyLzYwZWEtZTQwYS1jYWMwLTExOTEucG5n";

    case 6:
      return "https://kuula.co/share/collection/7kmKf?fs=1&vr=1&sd=1&autorotate=0.16&thumbs=1&info=0&logo=bWVkaWEvMTE1NjUyLzYwZWEtZTQwYS1jYWMwLTExOTEucG5n";
  }
};

function VirtualTour({ blockId, floorId, flatId, handleClose, modelId }) {
  hideElement("nav_btn");
  hideElement("home_btn");

  const [loading, setLoading] = useState(true);

  return (
    <div
      className={styles.compare_wrapper}
      style={{
        position: "absolute",
        zIndex: "99",
        height: "100%",
      }}
    >
      {loading && <Loading />}
      <div
        className={styles.compare_body}
        style={{
          width: window.innerWidth,
          height: window.innerHeight,
          overflow: "unset",
        }}
      >
        <Header
          handleClose={handleClose}
          title={"Flat " + getAbsoluteFlatNum(blockId, floorId, flatId)}
        />
        <div
          style={{
            height: "100%",
            width: window.innerWidth,
            display: "block",
            margin: 0,
            marginTop: "40px",
            // paddingBottom: window.innerWidth > 900 ? "5vh" : "1vh",
            backgroundColor: "black",
          }}
        >
          <iframe
            style={{
              width: "100vw",
              height: "100%",
              border: "none",
              maxWidth: "100%",
              margin: "0px",
              paddingBottom: "40px",
              visibility: loading ? "hidden" : "unset",
            }}
            onLoad={() => setLoading(false)}
            frameBorder="0"
            allowFullScreen
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            scrolling="no"
            src={getSrc(modelId)}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VirtualTour;

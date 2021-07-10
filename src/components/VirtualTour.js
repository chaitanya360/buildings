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

const GetVirtualTourFlat = ({ blockId, floorId, flatId }) => {
  if (
    blockId === "blocka" &&
    floorId === "floor8" &&
    (flatId === "flat2" || flatId === "flat3")
  )
    return (
      <iframe
        width="100%"
        height="100%"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          maxWidth: "100%",
          margin: "0px",
        }}
        frameBorder="0"
        allowFullScreen
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        scrolling="no"
        src="https://btvrprojects.s3.ap-south-1.amazonaws.com/2+BHK+Merge/index.htm"
      ></iframe>
    );
  else if (
    blockId === "blocka" &&
    floorId === "floor8" &&
    (flatId === "flat1" || flatId === "flat8")
  )
    return (
      <iframe
        width="100%"
        height="100%"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          maxWidth: "100%",
          margin: "0px",
        }}
        frameBorder="0"
        allowFullScreen
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        scrolling="no"
        src="https://btvrprojects.s3.ap-south-1.amazonaws.com/RUNWAL_MERGE+TOURS/index.htm"
      ></iframe>
    );
  else
    return (
      <center>
        <h1 style={{ margin: "20px", color: "rgba(0,0,0,0.9)  " }}>
          Currently only available in{" "}
          <span style={{ color: "tomato" }}>A801,A802,A803,A808</span>
        </h1>
      </center>
    );
};

function VirtualTour({ blockId, floorId, flatId, handleClose }) {
  hideElement("nav_btn");
  hideElement("home_btn");

  return (
    <div
      className={styles.compare_wrapper}
      style={{
        position: "absolute",
        zIndex: "99",
        height: "100%",
      }}
    >
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
            paddingBottom: window.innerWidth > 900 ? "5vh" : "1vh",
          }}
        >
          <GetVirtualTourFlat
            blockId={blockId}
            flatId={flatId}
            floorId={floorId}
          />
        </div>
      </div>
    </div>
  );
}

export default VirtualTour;

import React, { useState } from "react";
import { colors, sizes } from "../utility";
import {
  getAbsoluteFlatNum,
  getFlatNum,
  hideElement,
} from "../utility/functions";
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
        backgroundColor: colors.light_green,
        fontSize: sizes.ex_large,
        padding: "5px",
        color: "white",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className={styles.compare_title} style={{ fontSize: "22px" }}>
        {title + " "} (ISO)
      </div>
      <div style={{ marginRight: "10px" }}>
        <Icon name="close" onClick={handleClose} width="30px" />
      </div>
    </div>
  );
};

function ISOview({
  handleClose,
  flatId = "flat1",
  blockId = "blocka",
  floorId = "floor1",
}) {
  const [loading, setLoading] = useState(true);

  hideElement("nav_btn");
  hideElement("home_btn");

  const src =
    floorId == "floor1"
      ? `${blockId}/first/iso/${getFlatNum(flatId)}`
      : `${blockId}/typical/iso/${getFlatNum(flatId)}`;

  return (
    <div className={styles.compare_wrapper}>
      <div
        className={styles.compare_body}
        style={{
          width: window.innerWidth,
          height: window.innerHeight,
          overflow: "hidden",
        }}
      >
        <Header
          handleClose={handleClose}
          title={"Flat " + getAbsoluteFlatNum(blockId, floorId, flatId)}
        />
        {loading && <Loading />}
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="gredient_bg"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/flats/${src}.png`}
            onLoad={() => setLoading(false)}
            visibility={loading ? "hidden" : "visible"}
            style={{
              width: "auto",
              height: window.innerWidth > 900 ? "80%" : "50vh",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ISOview;

import React, { useState } from "react";
import { colors, sizes } from "../utility";
import { getAbsoluteFlatNum, getFlatNum } from "../utility/functions";
import styles from "./components.module.css";
import Loading from "./Loading";
import Image from "./Image";

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
        backgroundColor: colors.blue,
        fontSize: sizes.ex_large,
        padding: "10px",
        color: "white",
        justifyContent: "space-between",
      }}
    >
      <div className={styles.compare_title}>{title + " "} (ISO)</div>
      <Icon name="close" onClick={handleClose} />
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
  const src =
    floorId == "floor1"
      ? `${blockId}/first/iso/${getFlatNum(flatId)}`
      : `${blockId}/typical/iso/${getFlatNum(flatId)}`;

  return (
    <div className={styles.compare_wrapper}>
      <div
        className={styles.compare_body}
        style={{
          marginTop: window.innerWidth > 900 ? "0px" : "0px",
          width: window.innerWidth > 900 ? "900px" : "100%",
          height: window.innerWidth > 900 ? "95%" : "fit-content",
          overflow: "unset",
        }}
      >
        <Header
          handleClose={handleClose}
          title={"Flat " + getAbsoluteFlatNum(blockId, floorId, flatId)}
        />
        {loading && <Loading />}
        <div
          style={{
            height: window.innerWidth > 900 ? "90%" : "50vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/flats/${src}.png`}
            onLoad={() => setLoading(false)}
            visibility={loading ? "hidden" : "visible"}
            style={{ height: "80%", width: "auto", margin: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ISOview;

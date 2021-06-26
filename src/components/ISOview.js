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
      <div className={styles.compare_title}>{title + " "} ISO</div>
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

  return (
    <div className={styles.compare_wrapper}>
      <div
        className={styles.compare_body}
        style={{
          marginTop: window.innerWidth > 900 ? "0" : "70px",
          width: window.innerWidth > 900 ? "800px" : "100%",
        }}
      >
        <Header
          handleClose={handleClose}
          title={"Flat " + getAbsoluteFlatNum(blockId, floorId, flatId)}
        />
        {loading && <Loading />}
        <Image
          src={`${blockId}/${getFlatNum(flatId)}`}
          style={{
            padding: "10px",
            margin: "auto",
          }}
          onLoad={() => setLoading(false)}
          visibility={loading ? "hidden" : "visible"}
        />
      </div>
    </div>
  );
}

export default ISOview;

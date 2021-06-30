import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../utility";
import styles from "./components.module.css";

function HomeButton({ zIndex = 2 }) {
  return (
    <Link to="/">
      <div
        style={{
          padding: "4px 15px",
          position: "fixed",
          top: "10px",
          left: "1vw",
          zIndex: 1,
          borderRadius: "5px",
          border: "2px solid white",
          maxWidth: "90px",
        }}
        className={styles.home_btn}
      >
        Go To Master Layout
      </div>
    </Link>
  );
}

export default HomeButton;

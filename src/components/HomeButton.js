import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./components.module.css";

function HomeButton({ zIndex = 2 }) {
  return (
    <Link to="/">
      <div
        style={{
          padding: "4px 15px",
          color: "white",
          position: "fixed",
          top: "10px",
          left: "1vw",
          zIndex: zIndex,
          borderRadius: "5px",
          border: "2px solid white",
        }}
        className={styles.home_btn}
      >
        Go To Site
      </div>
    </Link>
  );
}

export default HomeButton;

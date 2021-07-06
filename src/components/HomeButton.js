import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../utility";
import styles from "./components.module.css";

const Icon = ({ open = false }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/icons/${"up_arrow"}.svg`}
      alt="location icon"
      style={{
        zIndex: 3,
        transformOrigin: "center",
        transition: "transform 0.5s",
        transform: open ? "rotate(270deg)" : "rotate(90deg)",
        width: "auto",
        height: "10px",
      }}
    />
  );
};

function HomeButton({ zIndex = 2 }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="home_btn">
      <div
        style={{
          display: "flex",
          top: "0px",
          left: 0,
          width: "fit-content",
          position: "absolute",
          alignItems: "center",
          zIndex: 1,
          transition: "transform 0.4s",
          cursor: "pointer",

          transform: isOpen ? "translateX(0%)" : "translateX(-90%)",
        }}
      >
        <Link to="/">
          <span
            style={{
              display: "block",
              width: "fit-content",
              position: "relative",
              backgroundColor: colors.blue,
              color: "white",
              padding: "10px 10px",
              // margin: "0px 2px",
            }}
          >
            Go to Master Layout
          </span>
        </Link>
        <div
          style={{
            padding: "10px 2px",
            backgroundColor: "tomato",
            color: "white",
          }}
          className={styles.home_btn}
          onClick={() => setIsOpen((old) => !old)}
        >
          <Icon open={isOpen} />
        </div>
      </div>
    </div>
  );
}

export default HomeButton;

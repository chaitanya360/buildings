import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../utility";

function HomeButton() {
  return (
    <div className="home_btn">
      <div
        style={{
          display: "flex",
          top: "5px",
          left: "10px",
          width: "fit-content",
          position: "absolute",
          alignItems: "center",
          zIndex: 1,
          cursor: "pointer",
        }}
      >
        <Link to="/">
          <span
            className="hoverBtn"
            style={{
              display: "block",
              width: "fit-content",
              position: "relative",
              backgroundColor: colors.light_green,
              color: "white",
              padding: "10px 10px",
              borderRadius: "3px",
              fontSize: "0.8rem",
            }}
          >
            Go to Master Layout
          </span>
        </Link>
      </div>
    </div>
  );
}

export default HomeButton;

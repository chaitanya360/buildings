import React from "react";
import { colors } from "../utility";
import styles from "./components.module.css";

function NavigationButton({
  prev = false,
  next = false,
  handleOnClick,
  hasNext = false,
  hasPrev = false,
}) {
  return (
    <div
      style={{
        right: next ? "0" : "default",
        left: prev ? "0" : "default",
        backgroundColor: colors.light_blue,
        borderRadius: "30px",
        width: "50px",
        height: "50px",
        padding: "10px",
        position: "absolute",
        top: "20%",
        transform: "translateY(-50%)",
        marginInline: "50px",
        cursor: "pointer",
        zIndex: "9999",
        display: (prev && hasPrev) || (next && hasNext) ? "block" : "none",
      }}
      className={styles.nav_button}
      onClick={handleOnClick}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {prev && (
          <path
            d="M25 13.75H9.7875L16.775 6.7625L15 5L5 15L15 25L16.7625 23.2375L9.7875 16.25H25V13.75Z"
            fill="white"
          />
        )}
        {next && (
          <path
            d="M15 5L13.2375 6.7625L20.2125 13.75H5V16.25H20.2125L13.2375 23.2375L15 25L25 15L15 5Z"
            fill="white"
          />
        )}
      </svg>
    </div>
  );
}

export default NavigationButton;

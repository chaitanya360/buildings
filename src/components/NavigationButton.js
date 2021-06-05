import React, { useContext } from "react";
import { colors } from "../utility";
import { compareContext } from "./compareContext";
import styles from "./components.module.css";

function NavigationButton({
  prev = false,
  next = false,
  handleOnClick,
  hasNext = false,
  hasPrev = false,
  right = "0",
  left = "0",
}) {
  const [compareItemsIds, setCompareItemsId, showCompare, setShowCompare] =
    useContext(compareContext);
  return (
    <div
      style={{
        right: next ? right : "default",
        left: prev ? left : "default",
        backgroundColor: colors.light_blue,
        borderRadius: "30px",
        width: "50px",
        height: "50px",
        padding: "10px",
        position: "absolute",
        top: "5%",
        transform: "translateY(-50%)",
        marginInline: "50px",
        cursor: "pointer",
        zIndex: "2",
        display:
          ((prev && hasPrev) || (next && hasNext)) && !showCompare
            ? "block"
            : "none",
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

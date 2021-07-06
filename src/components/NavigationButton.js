import React, { useContext } from "react";
import { colors } from "../utility";
import { compareContext } from "./compareContext";

function NavigationButton({
  prev = false,
  next = false,
  handleOnClick,
  hasNext = false,
  hasPrev = false,
  right = "0",
  left = "0",
  isBlocks = false,
}) {
  const compareValues = useContext(compareContext);
  return (
    <div className="nav_btn">
      <div
        style={{
          right: next ? right : "default",
          left: prev ? left : "default",
          backgroundColor: colors.light_blue,
          borderRadius: "30px",
          width: "50px",
          height: "50px",
          // padding: "10px",
          position: "absolute",
          top: isBlocks ? "20%" : "90%",
          transform: "translateY(-50%)",
          marginInline: isBlocks || window.innerWidth < 900 ? "10px" : "50px",
          cursor: "pointer",

          zIndex: "2",
          display:
            ((prev && hasPrev) || (next && hasNext)) && !compareValues[2]
              ? "flex"
              : "none",
          justifyContent: "center",
          alignItems: "center",
          objectFit: "cover",
        }}
        onClick={handleOnClick}
      >
        <div>
          {prev && (
            <div style={{ height: "100%", transform: "translate(-3px,2px)" }}>
              <img
                width="100%"
                src={`${process.env.PUBLIC_URL}/images/icons/prev.svg`}
                alt="location icon"
                height="100%"
              />
            </div>
          )}
          {next && (
            <div style={{ height: "100%", transform: "translate(2px,2px)" }}>
              <img
                width="100%"
                src={`${process.env.PUBLIC_URL}/images/icons/next.svg`}
                alt="location icon"
                height="100%"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavigationButton;

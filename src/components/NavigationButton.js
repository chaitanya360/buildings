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
          backgroundColor: colors.light_green,
          borderRadius: "10px",
          width: "50px",
          height: "50px",
          // padding: "10px",
          position: "absolute",
          top: isBlocks ? "30%" : "90%",
          transform: "translateY(-50%)",
          marginInline:
            isBlocks || document.body.clientWidth < 900 ? "10px" : "50px",
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
        className="hoverBtn"
      >
        <div>
          {prev && (
            <div style={{ transform: "translate(-1px,1px)" }}>
              <img
                style={{
                  transform: "rotate(-90deg)",
                  height: "100%",
                  width: "auto",
                }}
                src={`${process.env.PUBLIC_URL}/images/icons/up_arrow.svg`}
                alt="location icon"
              />
            </div>
          )}
          {next && (
            <div style={{ transform: "translate(2px,2px)" }}>
              <img
                style={{
                  transform: "rotate(90deg)",
                  height: "100%",
                  width: "auto",
                }}
                src={`${process.env.PUBLIC_URL}/images/icons/up_arrow.svg`}
                alt="location icon"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavigationButton;

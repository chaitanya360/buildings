import React from "react";
import { colors } from "../utility";

function FullScreenModeAlert({ handleYes, handleNo }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      ></div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: "0px",
          left: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "9999",
        }}
      >
        <div
          style={{
            width: "fit-content",
            display: "flex",
            flexDirection: "column",
            color: "black",
            backgroundColor: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center", padding: "10px 5px" }}></div>

          <div
            style={{
              textAlign: "center",
              lineHeight: "30px",
              fontSize: "1.2rem",
            }}
          >
            For Better Experience <br />
            Enter Fullscreen Mode ?
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px 60px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: colors.light_green,
                color: colors.white,
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "3px",
              }}
              onClick={handleYes}
            >
              Yes
            </div>
            <div
              style={{
                backgroundColor: colors.light_green,
                color: colors.white,
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "3px",
                marginLeft: "40px",
              }}
              onClick={handleNo}
            >
              No
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullScreenModeAlert;

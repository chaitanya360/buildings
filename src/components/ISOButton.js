import React from "react";
import { colors, sizes } from "../utility";

function ISOButton({ handleOnClick }) {
  return (
    <div
      onClick={handleOnClick}
      style={{
        // backgroundColor: colors.pink,
        backgroundColor: "#2352d4e0",

        padding: "5px 20px",
        color: "white",
        margin: "10px",
        zIndex: "2",
        borderRadius: "5px",
        fontSize: sizes.regular,
        cursor: "pointer",
      }}
    >
      ISO View
    </div>
  );
}

export default ISOButton;

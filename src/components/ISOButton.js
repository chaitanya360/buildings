import React from "react";
import { colors, sizes } from "../utility";

function ISOButton({ handleOnClick }) {
  return (
    <div
      onClick={handleOnClick}
      style={{
        backgroundColor: colors.light_green,
        cursor: "pointer",
        padding: "5px 20px",
        color: "white",
        margin: "10px",
        zIndex: "2",
        borderRadius: "5px",
        fontSize: sizes.regular,
      }}
    >
      ISO View
    </div>
  );
}

export default ISOButton;

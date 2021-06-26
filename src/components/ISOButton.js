import React from "react";
import { colors, sizes } from "../utility";

function ISOButton({ handleOnClick }) {
  return (
    <div
      onClick={handleOnClick}
      style={{
        backgroundColor: colors.pink,
        padding: "2px 15px",
        color: "white",
        left: "50%",
        transform: "translate(-50%)",

        position: "absolute",
        top: "93%",
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

import React from "react";
import { colors, sizes } from "../utility";

function VirtualTourButton({ handleOnclick }) {
  return (
    <div
      onClick={handleOnclick}
      style={{
        backgroundColor: colors.light_green,
        cursor: "pointer",
        padding: "5px 20px",
        color: "white",
        margin: "0px 10px",
        zIndex: "2",
        borderRadius: "5px",
        fontSize: sizes.regular,
      }}
    >
      Virtual Tour
    </div>
  );
}

export default VirtualTourButton;

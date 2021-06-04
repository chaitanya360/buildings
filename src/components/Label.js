import React from "react";
import { colors, sizes } from "../utility";

function Label({ label }) {
  return (
    <div
      style={{
        position: "absolute",
        left: "10%",
        top: "30px",
        backgroundColor: colors.blue,
        color: "white",
        fontSize: sizes.large,
        paddingInline: "30px",
        paddingBlock: "5px",
        borderRadius: "5px",
        zIndex: "0000",
      }}
    >
      {label}
    </div>
  );
}

export default Label;

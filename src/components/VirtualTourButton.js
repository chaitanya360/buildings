import React from "react";
import { Link } from "react-router-dom";
import { colors, sizes } from "../utility";

function VirtualTourButton({ handleOnclick }) {
  // to be added in future
  // just add 'to' attribute in link tag
  // and also add component in app.js page with route = <to>
  return (
    <div
      onClick={handleOnclick}
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
      Virtual Tour
    </div>
  );
}

export default VirtualTourButton;

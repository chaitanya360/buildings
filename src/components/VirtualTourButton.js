import React from "react";
import { Link } from "react-router-dom";
import { colors, sizes } from "../utility";

function VirtualTourButton({
  blockId = "some",
  floorId = "thing",
  flatId = "temp",
}) {
  // to be added in future
  // just add 'to' attribute in link tag
  // and also add component in app.js page with route = <to>
  return (
    <Link to={`/${blockId}/${floorId}/${flatId}/virtual_tour`}>
      <div
        style={{
          backgroundColor: colors.pink,
          padding: "5px 20px",
          color: "white",
          left: "50%",
          transform: "translate(-50%)",

          position: "absolute",
          top: "90%",
          zIndex: "2",
          borderRadius: "5px",
          fontSize: sizes.regular,
        }}
      >
        Virtual Tour
      </div>
    </Link>
  );
}

export default VirtualTourButton;

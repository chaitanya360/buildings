import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../utility";
import { isFloorBooked } from "../utility/functions";
import { useAlert } from "react-alert";

const VectorFloor = forwardRef(
  ({ blockId, floorId, d, handleOnClick, isVisible = false }, ref) => {
    const [hoverColor, setHoverColor] = useState("transparent");
    const alert = useAlert();
    return (
      <Link
        to={
          isFloorBooked(blockId, floorId) || document.body.clientWidth < 900
            ? `/block/${blockId}/`
            : `/block/${blockId}/${floorId}`
        }
        ref={ref}
      >
        <path
          visibility={isVisible ? "visible" : "hidden"}
          // className="floor"

          id={floorId}
          d={d}
          onMouseOver={() =>
            setHoverColor(
              isFloorBooked(blockId, floorId) ? colors.booked : colors.available
            )
          }
          onMouseLeave={() => setHoverColor("transparent")}
          fill={hoverColor}
          stroke={hoverColor !== "transparent" ? "black" : "none"}
          onClick={
            isFloorBooked(blockId, floorId)
              ? () => alert.show("Floor is not available")
              : handleOnClick
          }
        />
      </Link>
    );
  }
);

export default VectorFloor;

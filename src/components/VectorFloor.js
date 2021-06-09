import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../utility";
import { isFloorBooked } from "../utility/functions";
import { useAlert } from "react-alert";

const VectorFloor = forwardRef(({ blockId, floorId, d }, ref) => {
  const [hoverColor, setHoverColor] = useState("transparent");
  const alert = useAlert();
  return (
    <Link
      to={
        isFloorBooked(blockId, floorId)
          ? `/block/${blockId}/`
          : `/block/${blockId}/${floorId}`
      }
      ref={ref}
    >
      <path
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
        onClick={() =>
          isFloorBooked(blockId, floorId)
            ? alert.show("Floor is not available")
            : ""
        }
      />
    </Link>
  );
});

export default VectorFloor;

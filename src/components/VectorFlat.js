import React, { forwardRef, useState } from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { colors } from "../utility";
import { getAbsoluteFlatNum, isFlatAvailable } from "../utility/functions";

const VectorFlat = forwardRef(
  ({ blockId, floorId, floorIndex, flat, handleOnClick }, ref) => {
    const [hoverColor, setHoverColor] = useState("transparent");
    const alert = useAlert();
    return (
      <Link
        to={
          !isFlatAvailable(getAbsoluteFlatNum(blockId, floorId, flat.id)) ||
          window.innerWidth < 900
            ? `/block/${blockId}/${floorId}/`
            : `/${blockId}/${floorId}/flat/${floorIndex + 1}`
        }
        ref={ref}
      >
        <path
          className="flat"
          id={flat.id}
          d={floorId === "floor1" ? flat.firstFloorD : flat.d}
          onMouseOver={() =>
            setHoverColor(
              !isFlatAvailable(getAbsoluteFlatNum(blockId, floorId, flat.id))
                ? colors.booked
                : colors.available
            )
          }
          onMouseLeave={() => setHoverColor("transparent")}
          fill={hoverColor}
          stroke={hoverColor !== "transparent" ? "black" : "none"}
          onClick={
            !isFlatAvailable(getAbsoluteFlatNum(blockId, floorId, flat.id))
              ? () => alert.show("Flat is not available")
              : handleOnClick
          }
        />
      </Link>
    );
  }
);

export default VectorFlat;

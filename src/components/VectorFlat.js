import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../utility";
import {
  getAbsoluteFlatNum,
  isFlatAvailable,
  isFlatMortgaged,
} from "../utility/functions";

const VectorFlat = forwardRef(
  ({ blockId, floorId, floorIndex, flat, handleOnClick }, ref) => {
    const [hoverColor, setHoverColor] = useState("transparent");
    return (
      <Link
        // to={
        //   !isFlatAvailable(getAbsoluteFlatNum(blockId, floorId, flat.id)) ||
        //   document.body.clientWidth < 900
        //     ? `/block/${blockId}/${floorId}/`
        //     : `/${blockId}/${floorId}/flat/${floorIndex + 1}`
        // }
        to={
          document.body.clientWidth < 900
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
              isFlatMortgaged(getAbsoluteFlatNum(blockId, floorId, flat.id))
                ? colors.morgaged
                : isFlatAvailable(getAbsoluteFlatNum(blockId, floorId, flat.id))
                ? colors.available
                : colors.booked
            )
          }
          onMouseLeave={() => setHoverColor("transparent")}
          fill={hoverColor}
          stroke={hoverColor !== "transparent" ? "black" : "none"}
          // onClick={
          //   !isFlatAvailable(getAbsoluteFlatNum(blockId, floorId, flat.id))
          //     ? () => alert.show("Flat is not available")
          //     : handleOnClick
          // }
          onClick={handleOnClick}
        />
      </Link>
    );
  }
);

export default VectorFlat;

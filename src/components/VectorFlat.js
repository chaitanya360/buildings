import React, { forwardRef, useState } from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { colors } from "../utility";
import { getAbsoluteFlatNum, isFlatAvailable } from "../utility/functions";

const VectorFlat = forwardRef(({ blockId, floorId, floorIndex, flat }, ref) => {
  const [hoverColor, setHoverColor] = useState("transparent");
  const alert = useAlert();
  return (
    <Link
      to={
        isFlatAvailable(getAbsoluteFlatNum(blockId, floorId, flat.id))
          ? `/${blockId}/${floorId}/flat/${floorIndex + 1}`
          : `/block/${blockId}/${floorId}/`
      }
      ref={ref}
    >
      <path
        className="flat"
        id={flat.id}
        d={flat.d}
        onMouseOver={() =>
          setHoverColor(
            !isFlatAvailable(getAbsoluteFlatNum(blockId, floorId, flat.id))
              ? colors.booked
              : colors.available
          )
        }
        onMouseLeave={() => setHoverColor("transparent")}
        fill={hoverColor}
        onClick={() =>
          !isFlatAvailable(getAbsoluteFlatNum(blockId, floorId, flat.id))
            ? alert.show("Flat is not available")
            : ""
        }
      />
    </Link>
  );
});

export default VectorFlat;

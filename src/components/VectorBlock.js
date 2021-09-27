import React, { forwardRef, useState } from "react";

import "tippy.js/dist/backdrop.css";
import "tippy.js/animations/shift-away.css";
import { Link } from "react-router-dom";
import { isBlockBooked, isBlockUnderConstruction } from "../utility/functions";
import { colors } from "../utility";

const VectorBlock = forwardRef(
  ({ id, d, handleOnClick, isBooked, setBlockId }, ref) => {
    const [hoverColor, setHoverColor] = useState("transparent");
    const isClubhouse = id === "clubhouse";
    return document.body.clientWidth < 900 ? (
      <path
        id={id}
        d={d}
        ref={ref}
        onMouseOver={() =>
          setHoverColor(
            isBlockBooked(id)
              ? colors.booked
              : isBlockUnderConstruction(id)
              ? colors.unavailable
              : colors.available
          )
        }
        onMouseLeave={() => setHoverColor("transparent")}
        fill={hoverColor}
        onClick={(id) => handleOnClick(id)}
        strokeWidth={"2px"}
        stroke={hoverColor !== "transparent" ? "black" : "none"}
      />
    ) : (
      <Link
        to={
          isClubhouse
            ? `/clubhouse`
            : isBooked || isBlockUnderConstruction(id)
            ? ""
            : `/block/${id}`
        }
      >
        <path
          id={id}
          d={d}
          ref={ref}
          onMouseOver={() => {
            setHoverColor(
              isBlockBooked(id)
                ? colors.booked
                : isBlockUnderConstruction(id)
                ? colors.unavailable
                : colors.available
            );
            setBlockId(id);
          }}
          onMouseLeave={() => setHoverColor("transparent")}
          fill={hoverColor}
          strokeWidth={"2px"}
          stroke={hoverColor !== "transparent" ? "black" : "none"}
        />
      </Link>
    );
  }
);

export default VectorBlock;

import React, { forwardRef, useState } from "react";

import "tippy.js/dist/backdrop.css";
import "tippy.js/animations/shift-away.css";
import { Link } from "react-router-dom";
import { isBlockBooked } from "../utility/functions";
import { colors } from "../utility";

const VectorBlock = forwardRef(({ id, d, handleOnClick, isBooked }, ref) => {
  const [hoverColor, setHoverColor] = useState("transparent");

  return window.innerWidth < 900 ? (
    <path
      id={id}
      d={d}
      ref={ref}
      onMouseOver={() =>
        setHoverColor(isBlockBooked(id) ? colors.booked : colors.available)
      }
      onMouseLeave={() => setHoverColor("transparent")}
      fill={hoverColor}
      fillOpacity={0.3}
      onClick={(id) => handleOnClick(id)}
    />
  ) : (
    <Link to={isBooked ? "" : `/block/${id}`}>
      <path
        id={id}
        d={d}
        ref={ref}
        onMouseOver={() =>
          setHoverColor(isBlockBooked(id) ? colors.booked : colors.available)
        }
        onMouseLeave={() => setHoverColor("transparent")}
        fill={hoverColor}
        fillOpacity={0.3}
      />
    </Link>
  );
});

export default VectorBlock;

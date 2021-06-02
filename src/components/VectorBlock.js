import React, { forwardRef } from "react";

import "tippy.js/dist/backdrop.css";
import "tippy.js/animations/shift-away.css";
import { Link } from "react-router-dom";

const VectorBlock = forwardRef(({ id, d }, ref) => {
  return (
    <Link to={`/block/${id}`}>
      <path id={id} d={d} ref={ref} />
    </Link>
  );
});

export default VectorBlock;

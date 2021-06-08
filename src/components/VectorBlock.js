import React, { forwardRef } from "react";

import "tippy.js/dist/backdrop.css";
import "tippy.js/animations/shift-away.css";
import { Link } from "react-router-dom";

const VectorBlock = forwardRef(({ id, d, handleOnClick }, ref) => {
  return window.innerWidth < 900 ? (
    <path id={id} d={d} ref={ref} onClick={handleOnClick} />
  ) : (
    <Link to={`/block/${id}`}>
      <path id={id} d={d} ref={ref} />
    </Link>
  );
});

export default VectorBlock;

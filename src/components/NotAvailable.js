import React from "react";
import { colors, sizes } from "../utility";

function NotAvailable({ title }) {
  return (
    <div
      style={{
        backgroundColor: colors.booked,
        position: "absolute",
        width: "100vw",
        height: "100vh",
        display: "block",
        color: "white",
        paddingTop: "100px",
        fontSize: sizes.large,
      }}
    >
      {title + " "}is not available
    </div>
  );
}

export default NotAvailable;

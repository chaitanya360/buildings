import React from "react";
import { sizes } from "../utility";

const DetailsButton = ({ text, compareCount = 0, onClick }) => {
  return (
    <div
      style={{
        textAlign: "left",
        margin: "10px",
        padding: "5px 10px",
        border: "2px solid white",
        width: "fit-content",
        borderRadius: "5px",
        fontSize: sizes.medium,
        display: "inline-block",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {text}
      {text === "Compare" && (
        <span
          style={{
            fontSize: sizes.small,
            backgroundColor: "white",
            borderRadius: "15px",
            color: "black",
            margin: "5px",
            paddingInline: "5px",
          }}
        >
          {compareCount}
        </span>
      )}
    </div>
  );
};

export default DetailsButton;

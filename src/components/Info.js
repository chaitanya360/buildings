import React from "react";
import { colors, sizes } from "../utility";
import { getBlockName } from "../utility/functions";

function Info({
  title = "Block A",
  items = ["3bhk and 2bhks", "234Sqft - 3023Sqft", "234 units"],
}) {
  return (
    <div
      style={{
        backgroundColor: colors.light_blue,
        paddingInline: "20px",
        paddingBlock: "10px",
        color: "white",
        display: "block",
        borderRadius: "3px",
      }}
    >
      <div
        style={{
          borderBottom: "2px solid white",
          paddingBlock: "10px",
          display: "flex",
          paddingLeft: "10px",
          paddingRight: "50px",
        }}
      >
        <img
          width="15px"
          src={`${process.env.PUBLIC_URL}/images/icons/location.svg`}
          alt="location icon"
        />
        <div
          style={{
            fontSize: sizes.medium,
            marginInline: "10px",
          }}
        >
          {title}
        </div>
      </div>
      {items.map((item) => (
        <div style={{ marginBlock: "10px" }}>{item}</div>
      ))}
    </div>
  );
}

export default Info;

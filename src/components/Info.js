import React from "react";
import { colors, sizes } from "../utility";

const getFloorNum = (floorNum) => {
  switch (floorNum) {
    case 1:
      return "1st Floor";
    case 2:
      return "2nd Floor";
    case 3:
      return "3rd Floor";
    default:
      return floorNum + "th Floor";
  }
};

const getBlockName = (blockId) => {
  switch (blockId) {
    case "blocka":
      return "A Block";
    case "blockb":
      return "B Block";
    case "blockc":
      return "C Block";
    case "blockd":
      return "D Block";
    case "blocke":
      return "E Block";
    default:
      return "Unknown Block";
  }
};

function Info({ blockId = "blocka", isFloor = false, floorNum = 0 }) {
  return (
    <div
      style={{
        backgroundColor: colors.light_blue,
        padding: "20px",
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
        }}
      >
        <img
          width="15px"
          src={`${process.env.PUBLIC_URL}/images/icons/location.svg`}
          alt="location icon"
        />
        <span style={{ marginInline: "10px", fontSize: sizes.medium }}>
          {isFloor ? getFloorNum(floorNum) : getBlockName(blockId)}
        </span>
      </div>
      <div style={{ marginBlock: "10px", marginRight: "20px" }}>
        3BHK, 2BHK Apartments
      </div>
      <div style={{ marginBlock: "10px" }}>1250 Sft - 1865 Sft</div>
      <div style={{ marginBlock: "10px" }}>Total Flats 244</div>
    </div>
  );
}

export default Info;

import React from "react";
import { Link } from "react-router-dom";
import { colors, sizes } from "../utility";
import {
  getBlockName,
  getExtreameFlatSizesInBlock,
  getTotalFlatsInFloor,
} from "../utility/functions";

function Info({
  title = "blocka",
  items = ["detail1", "detail2", "detail3"],
  style,
  isBooked = false,
}) {
  return (
    <div
      style={{
        backgroundColor: isBooked ? colors.booked : colors.light_blue,
        paddingInline: "10px",
        paddingBlock: "5px",
        color: "white",
        display: window.innerWidth < 900 && !title ? "none" : "block",
        borderRadius: "3px",
        transform: "translateX(10%)",
        ...style,
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
      {isBooked ? (
        <div>Not Available</div>
      ) : (
        <div>
          {items.map((item) => (
            <div style={{ margin: "10px 10px" }} key={item}>
              {item}
            </div>
          ))}
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isBooked && (
          <Link to={`/block/${title}`}>
            <div
              style={{
                width: "fit-content",
                backgroundColor: colors.pink,
                padding: "0px 10px",
                display: window.innerWidth < 900 ? "block" : "none",
                textDecoration: "none",
                color: "white",
              }}
            >
              View
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Info;

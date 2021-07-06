import React from "react";
import { Link } from "react-router-dom";
import { colors, sizes } from "../utility";
import { getFlatNum } from "../utility/functions";

function Info({
  title = "blocka",
  items = ["detail1", "detail2", "detail3"],
  style,
  isBooked = false,
  isFlat = false,
  blockId,
  floorId,
  flatId,
  isUnderConstruction,
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
        transform: "translateX(2%)",
        ...style,
      }}
    >
      <div
        style={{
          borderBottom: "2px solid white",
          paddingBlock: "10px",
          display: "flex",
          paddingLeft: window.innerWidth > 900 ? "10px" : "10px",
          paddingRight: window.innerWidth > 900 ? "50px" : "20px",
        }}
      >
        {!isFlat && (
          <img
            width="15px"
            src={`${process.env.PUBLIC_URL}/images/icons/location.svg`}
            alt="location icon"
          />
        )}
        <div
          style={{
            fontSize: sizes.medium,
            marginInline: "10px",
          }}
        >
          {isFlat && "Flat"} {" " + title}
        </div>
      </div>
      {isBooked ? (
        <div>Not Available</div>
      ) : !isUnderConstruction ? (
        <div>
          {items.map((item) => (
            <div style={{ margin: "10px 10px" }} key={item}>
              {item}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ padding: "10px" }}>Not Open for Sale</div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isBooked && (
          <Link
            to={
              isFlat
                ? `/${blockId}/${floorId}/flat/${getFlatNum(flatId)}`
                : `/block/${blockId}`
            }
          >
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

import React from "react";
import { Link } from "react-router-dom";
import { colors, sizes } from "../utility";
import { getFlatNum, isBlockUnderConstruction } from "../utility/functions";

function Info({
  title = "blocka",
  items = ["detail1", "detail2", "detail3"],
  style,
  isBooked = false,
  isFlat = false,
  blockId,
  floorId,
  flatId,
}) {
  return (
    <div
      style={{
        backgroundColor: isBooked ? colors.bookedInfo : colors.light_green,
        padding: "5px 10px",
        color: "rgba(255,255,255,0.9)",
        display: window.innerWidth < 900 && !title ? "none" : "block",
        borderRadius: "8px",
        transform: "translateX(2%)",
        zIndex: "999",

        ...style,
      }}
    >
      <div
        style={{
          padding: "0px",
          display: "flex",
          borderLeft: "3px solid",
          borderColor: colors.gold,
          margin: "5px 5px",
          marginTop: "10px",
          minWidth: "120px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/location.svg`}
            alt="location icon"
            style={{
              margin: "0px 15px",
              marginRight: "5px",
              height: "20px",
              width: "auto",
            }}
          />
        </div>
        <div
          style={{
            fontSize: "1.2rem",
          }}
        >
          {title}
        </div>
      </div>
      {isBooked ? (
        <div>Not Available</div>
      ) : !isBlockUnderConstruction(blockId) ? (
        <div
          style={{
            marginTop: "20px",
            marginRight: "20px",
            fontWeight: 400,
            fontSize: "1rem",
          }}
        >
          {items.map((item) => (
            <div style={{ margin: "15px 10px" }} key={item}>
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
                backgroundColor: colors.light_green,
                padding: "5px 10px",
                display: window.innerWidth < 900 ? "block" : "none",
                textDecoration: "none",
                color: colors.gold,
                border: "1px solid",
                borderColor: colors.gold,
                borderRadius: "5px",
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

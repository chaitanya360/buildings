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
  isBuilding = false,
  blockId,
  floorId,
  flatId,
  isUnderConstruction,
}) {
  console.log(isBuilding);
  return (
    <div
      style={{
        backgroundColor: isBooked ? colors.booked : colors.light_green,
        paddingInline: "10px",
        paddingBlock: "5px",
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
          paddingLeft: window.innerWidth > 900 ? "10px" : "10px",
          paddingRight: window.innerWidth > 900 ? "30px" : "20px",
          borderLeft: isBuilding || isFlat ? "0px" : "3px solid",
          borderColor: colors.gold,
          margin: "5px 20px",
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
            style={{ marginLeft: "5px", height: "25px", width: "auto" }}
          />
        </div>
        <div
          style={{
            fontSize: "1.4rem",
            margin: "0px 10px",
          }}
        >
          {title}
        </div>
      </div>
      {isBooked ? (
        <div>Not Available</div>
      ) : !isUnderConstruction ? (
        <div style={{ marginTop: "20px", fontWeight: 400, fontSize: "1rem" }}>
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

import React from "react";
import { Link } from "react-router-dom";
import { colors, sizes } from "../utility";
import NotAvailable from "./NotAvailable";

function BuildingInfo({
  title = "blocka",
  items = ["detail1", "detail3"],
  isBooked = false,
  floorId,
}) {
  return (
    <div
      style={{
        zIndex: 999,
        position: "absolute",
        top: "50px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: colors.light_green,
        color: "white",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          paddingInline: "20px",
          borderBottom: "2px solid white",
          paddingBlock: "10px",
          fontSize: sizes.medium,
        }}
      >
        {title}
      </div>
      <div style={{ paddingInline: "20px" }}>
        {items.map((item) => (
          <div>{item}</div>
        ))}
      </div>
      {!isBooked ? (
        <Link to={`${floorId}`}>
          <div
            style={{
              width: "fit-content",
              backgroundColor: colors.pink,
              padding: "0px 10px",
              display: window.innerWidth < 900 ? "flex" : "none",
              textDecoration: "none",
              color: "white",
              lineHeight: "150%",
              alignItems: "center",
              borderRadius: "10px",
              marginLeft: "50%",
              transform: "translateX(-50%)",
              marginBlock: "10px",
            }}
          >
            <div> View</div>
          </div>
        </Link>
      ) : (
        <NotAvailable title={floorId} />
      )}
    </div>
  );
}

export default BuildingInfo;

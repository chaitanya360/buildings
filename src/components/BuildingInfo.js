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
        bottom: "5%",
        left: "15%",
        transform: "translateX(-50%)",
        backgroundColor: colors.light_green,
        color: "white",
        borderRadius: "5px",
        padding: "10px 20px",
        paddingTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
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
              marginRight: "10px",
              height: "25px",
              width: "auto",
            }}
          />
        </div>
        <div
          style={{
            fontSize: sizes.medium,
          }}
        >
          {title}
        </div>
      </div>
      <div style={{ marginTop: "20px", fontWeight: 400, fontSize: "1rem" }}>
        {items.map((item) => (
          <div style={{ margin: "10px 10px" }} key={item}>
            {item}
          </div>
        ))}
      </div>
      {!isBooked ? (
        <Link to={`${floorId}`}>
          <div
            style={{
              width: "fit-content",
              backgroundColor: colors.light_green,
              padding: "5px 10px",
              display: document.body.clientWidth < 900 ? "block" : "none",
              textDecoration: "none",
              color: colors.gold,
              border: "1px solid",
              borderColor: colors.gold,
              borderRadius: "5px",
              margin: "auto",
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

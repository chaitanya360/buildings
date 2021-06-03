import React from "react";
import Collapsible from "react-collapsible";
import { getBlockName } from "../data";
import { colors, sizes } from "../utility";

const ButtonTrigger = ({ show }) => {
  return (
    <div
      style={{
        right: 0,
        transform: "translate(0, -100%)",
        position: "fixed",
        fontSize: sizes.large,
        paddingInline: "20px",
        height: "30px",
        backgroundColor: colors.light_red,
        color: "white",
        cursor: "pointer",
      }}
    >
      {show ? (
        <img
          width="15px"
          height="100%"
          src={`${process.env.PUBLIC_URL}/images/icons/down_arrow.svg`}
          alt="location icon"
        />
      ) : (
        <img
          width="15px"
          height="100%"
          src={`${process.env.PUBLIC_URL}/images/icons/up_arrow.svg`}
          alt="location icon"
        />
      )}
    </div>
  );
};

function BlocksDetails() {
  return (
    <div
      style={{
        width: "400px",
        position: "absolute",
        right: "0px",
        top: "30%",
      }}
    >
      <Collapsible
        trigger={<ButtonTrigger show />}
        triggerWhenOpen={<ButtonTrigger data="-" />}
        open
      >
        <div
          style={{
            padding: "40px 40px",
            backgroundColor: colors.light_blue,
            color: "white",
            fontWeight: 400,
          }}
        >
          <h2
            style={{
              borderBottom: "2px solid white",
              fontWeight: 400,
              paddingBottom: "20px",
            }}
          >
            2 and 3 BHK Premium High-Rise Gated Community Appartments
          </h2>
          <div style={{ margin: "40px 0px", fontWeight: 400 }}>
            <h3 style={{ fontWeight: 400, display: "flex" }}>
              <span>
                <img
                  width="15px"
                  height="100%"
                  src={`${process.env.PUBLIC_URL}/images/icons/location.svg`}
                  alt="location icon"
                />
              </span>
              <span style={{ margin: "20px" }}>
                Gopanpally, Gachibowli, Hyderabad.
              </span>
            </h3>
            <h3
              style={{ color: colors.light_red, fontWeight: 400, padding: "0" }}
            >
              View Map
            </h3>
          </div>
          <div style={{ margin: "30px 0px" }}>
            <h1
              style={{
                borderLeft: "5px solid",
                borderColor: colors.light_red,
                paddingLeft: "20px",
                fontWeight: 500,
              }}
            >
              We Bring you
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: sizes.medium,
              justifyContent: "space-between",
            }}
          >
            <div>
              <div>6</div>
              <div style={{ color: colors.font_light }}>Towers</div>
            </div>
            <div>
              <div>2B+G+30</div>
              <div style={{ color: colors.font_light }}>Floors</div>
            </div>
            <div>
              <div>50,000 Sq.ft</div>
              <div style={{ color: colors.font_light }}>Club House</div>
            </div>
          </div>
        </div>
      </Collapsible>
    </div>
  );
}

function SingleBuildingDetials({ blockId }) {
  return (
    <div
      style={{
        width: "400px",
        position: "absolute",
        right: "0px",
        top: "30%",
      }}
    >
      <div
        style={{
          padding: "40px 40px",
          backgroundColor: colors.light_blue,
          color: "white",
          fontWeight: 400,
        }}
      >
        <div
          style={{
            fontWeight: 400,
            textAlign: "left",
            fontSize: sizes.large,
            display: "flex",
            borderBottom: "2px solid white",
            paddingLeft: "10px",
          }}
        >
          <span style={{ height: "100%", width: "40px", marginRight: "20px" }}>
            <img
              width="25px"
              src={`${process.env.PUBLIC_URL}/images/icons/building.svg`}
              alt="location icon"
              height="100%"
            />
          </span>
          <span style={{ paddingBottom: "20px" }}>{getBlockName(blockId)}</span>
        </div>
      </div>{" "}
      <div
        style={{
          padding: "10px 40px",
          backgroundColor: colors.light_blue,
          color: "white",
          fontWeight: 400,
        }}
      >
        <div
          style={{
            fontWeight: 400,
            textAlign: "left",
            fontSize: sizes.large,
            display: "flex",
            borderBottom: "2px solid white",
            paddingLeft: "10px",
          }}
        >
          <span style={{ fontSize: sizes.medium }}>
            2BHK Appartments | 58 Units
          </span>
        </div>
      </div>
    </div>
  );
}

const FloorsDetails = ({ floorId, blockId }) => {
  return (
    <div
      style={{
        width: "400px",
        position: "absolute",
        backgroundColor: colors.blue,
        padding: "20px 10px",
        right: "0px",
        top: "30%",
        color: "white",
      }}
    >
      <div
        style={{
          fontWeight: 400,
          fontSize: sizes.large,
          borderBottom: "2px solid white",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            paddingLeft: "10px",
          }}
        >
          <span style={{ height: "100%", width: "30px", marginRight: "20px" }}>
            <img
              width="20px"
              src={`${process.env.PUBLIC_URL}/images/icons/building.svg`}
              alt="location icon"
              height="90%"
            />
          </span>
          <span style={{ paddingBottom: "20px" }}>{blockId}</span>
        </div>
        <div
          style={{
            display: "flex",
            paddingLeft: "40px",
          }}
        >
          <span style={{ height: "100%", width: "30px", marginRight: "20px" }}>
            <img
              width="20px"
              src={`${process.env.PUBLIC_URL}/images/icons/floors.svg`}
              alt="floors icon"
              height="90%"
            />
          </span>
          <span style={{ paddingBottom: "20px" }}>{floorId}</span>
        </div>
      </div>
    </div>
  );
};

export { BlocksDetails, SingleBuildingDetials, FloorsDetails };

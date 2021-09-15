import React, { useState } from "react";
import { colors } from "../utility";
import {
  getAbsoluteFlatNum,
  getFlatNum,
  isFlatAvailable,
  isFlatMortgaged,
  showElement,
} from "../utility/functions";
import { FlatDetails } from "./DetailsPanel";
import Image from "./Image";
import Label from "./Label";
import Loading from "./Loading";
import NotAvailable from "./NotAvailable";
import VirtualTourButton from "./VirtualTourButton";
import ISOview from "./ISOview";
import ISOButton from "./ISOButton";
import VirtualTour from "./VirtualTour";

function Flat({
  blockId,
  flatId,
  floorId,
  showDetails,
  setShowDetails,
  specifications,
  size,
  type,
  setShowHomeBtn,
  modelId,
}) {
  const [loading, setLoading] = useState(true);
  const [showIso, setShowIso] = useState(false);
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  const isBooked = !isFlatAvailable(
    getAbsoluteFlatNum(blockId, floorId, flatId)
  );

  const isMortgaged = isFlatMortgaged(
    getAbsoluteFlatNum(blockId, floorId, flatId)
  );

  return (
    <>
      <div
        style={{
          height: window.innerHeight,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.purple,
        }}
      >
        {(isBooked || isMortgaged) && (
          <div
            style={{
              position: "absolute",
              top: "5px",
              right: "110px",
              padding: "5px 10px",
              fontSize: "1.2rem",
              backgroundColor: isBooked
                ? "rgba(250,0,0,0.7)"
                : "rgba(255,255,0,0.7)",
              borderRadius: "5px",
              color: isBooked ? "white" : "black",
              width: "fit-content",
            }}
          >
            {isBooked ? "Not Available" : "Mortgaged"}
          </div>
        )}
        {loading && <Loading />}
        <Label label={"Flat " + getAbsoluteFlatNum(blockId, floorId, flatId)} />
        {showIso && (
          <ISOview
            blockId={blockId}
            flatId={flatId}
            floorId={floorId}
            handleClose={() => {
              showElement("nav_btn");
              showElement("home_btn");
              setShowIso(false);
            }}
          />
        )}
        {showVirtualTour && (
          <VirtualTour
            modelId={modelId}
            blockId={blockId}
            flatId={flatId}
            floorId={floorId}
            handleClose={() => {
              showElement("nav_btn");
              showElement("home_btn");
              setShowVirtualTour(false);
            }}
          />
        )}
        <Image
          src={
            floorId === "floor1"
              ? `${blockId}/first/${getFlatNum(flatId)}`
              : `${blockId}/typical/${getFlatNum(flatId)}`
          }
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: loading ? "0" : "1",
          }}
          onLoad={() => setLoading(false)}
          visibility={loading ? "hidden" : "visible"}
        />
        {(!showDetails || document.body.clientWidth > 900) && (
          <div
            style={{
              display: "flex",
              position: "absolute",
              bottom: window.innerHeight < 500 ? "0px" : "10px",
              left: "50%",
              transform: "translateX(-50%)",
              justifyContent: "space-evenly",
            }}
          >
            <VirtualTourButton handleOnclick={() => setShowVirtualTour(true)} />
            <ISOButton handleOnClick={() => setShowIso(true)} />
          </div>
        )}

        <FlatDetails
          floorId={floorId}
          blockId={blockId}
          flatId={flatId}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          specifications={specifications}
          size={size}
          type={type}
          setShowHomeBtn={setShowHomeBtn}
        />
      </div>
    </>
  );
}

export default Flat;

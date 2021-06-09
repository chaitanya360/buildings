import React from "react";
import {
  getAbsoluteFlatNum,
  getFlatNum,
  isFlatAvailable,
} from "../utility/functions";
import { FlatDetails, FloorsDetails } from "./DetailsPanel";
import Image from "./Image";
import Label from "./Label";
import NotAvailable from "./NotAvailable";

function Flat({
  blockId,
  flatId,
  floorId,
  showDetails,
  setShowDetails,
  specifications,
  size,
  type,
}) {
  return isFlatAvailable(getAbsoluteFlatNum(blockId, floorId, flatId)) ? (
    <div
      style={{
        height: window.innerHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple",
      }}
    >
      <Label label={"Flat " + getAbsoluteFlatNum(blockId, floorId, flatId)} />
      <Image
        src={`${blockId}/${getFlatNum(flatId)}`}
        style={{ padding: "10%" }}
      />
      <FlatDetails
        floorId={floorId}
        blockId={blockId}
        flatId={flatId}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        specifications={specifications}
        size={size}
        type={type}
      />
    </div>
  ) : (
    <NotAvailable title={"Flat"} />
  );
}

export default Flat;

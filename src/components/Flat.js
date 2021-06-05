import React from "react";
import { getFlatNum } from "../utility/functions";
import { FlatDetails, FloorsDetails } from "./DetailsPanel";
import Image from "./Image";
import Label from "./Label";

function Flat({ blockId, flatId, floorId }) {
  return (
    <div
      style={{
        height: "100vh",
        padding: "5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple",
      }}
    >
      <Label label={getFlatNum(flatId)} />
      <Image
        src={`${blockId}/${getFlatNum(flatId)}`}
        style={{ padding: "10%" }}
      />
      <FlatDetails floorId={floorId} blockId={blockId} flatId={flatId} />
    </div>
  );
}

export default Flat;

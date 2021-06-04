import React from "react";
import { getFlatNum } from "../utility/functions";
import Label from "./Label";

function Flat({ blockId, flatId }) {
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
      <div
        style={{
          width: "40%",
        }}
      >
        <img
          width="100%"
          height="100%"
          src={`${process.env.PUBLIC_URL}/images/flats/${blockId}/${getFlatNum(
            flatId
          )}.jpg`}
          alt="flat image"
        />
      </div>
    </div>
  );
}

export default Flat;

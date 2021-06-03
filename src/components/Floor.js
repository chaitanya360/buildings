import React from "react";
import Tippy, { useSingleton } from "@tippyjs/react";
import Info from "./Info";
import { colors } from "../utility";
import { FloorsDetails } from "./DetailsPanel";

function Floor({ blockId = "blocka", floorId }) {
  console.log(blockId);
  return (
    <div
      style={{
        height: "100vh",
        padding: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple",
      }}
    >
      <FloorsDetails floorId={floorId} blockId={blockId} />
      <div style={{ width: "80%" }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/floors/${blockId}.png`}
          alt="floor map"
        />
      </div>
    </div>
  );
}

export default Floor;

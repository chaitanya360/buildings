import React from "react";
import { colors } from "../utility";
import {
  getAbsoluteFlatNum,
  getFlatNum,
  isFlatAvailable,
} from "../utility/functions";
import { FlatDetails } from "./DetailsPanel";
import Image from "./Image";
import Label from "./Label";
import NotAvailable from "./NotAvailable";
import VirtualTourButton from "./VirtualTourButton";

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
}) {
  return isFlatAvailable(getAbsoluteFlatNum(blockId, floorId, flatId)) ? (
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
        <Label label={"Flat " + getAbsoluteFlatNum(blockId, floorId, flatId)} />
        <Image
          src={`${blockId}/${getFlatNum(flatId)}`}
          style={{ padding: "10%" }}
        />
        {(!showDetails || window.innerWidth > 900) && (
          <VirtualTourButton
            blockId={blockId}
            flatId={flatId}
            floorId={floorId}
          />
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
  ) : (
    <NotAvailable title={"Flat"} />
  );
}

export default Flat;

import React, { useState } from "react";
import { colors, sizes } from "../utility";
import {
  getAbsoluteFlatNum,
  getFlatNum,
  isFlatAvailable,
} from "../utility/functions";
import { FlatDetails } from "./DetailsPanel";
import Image from "./Image";
import Label from "./Label";
import Loading from "./Loading";
import NotAvailable from "./NotAvailable";
import VirtualTourButton from "./VirtualTourButton";
import ISOview from "./ISOview";
import ISOButton from "./ISOButton";

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
  const [loading, setLoading] = useState(true);
  const [showIso, setShowIso] = useState(false);

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
        {loading && <Loading />}
        <Label label={"Flat " + getAbsoluteFlatNum(blockId, floorId, flatId)} />
        {showIso && (
          <ISOview
            blockId={blockId}
            flatId={flatId}
            floorId={floorId}
            handleClose={() => setShowIso(false)}
          />
        )}
        <Image
          src={
            floorId == "floor1"
              ? `${blockId}/first/${getFlatNum(flatId)}`
              : `${blockId}/typical/${getFlatNum(flatId)}`
          }
          style={{ padding: "10%" }}
          onLoad={() => setLoading(false)}
          visibility={loading ? "hidden" : "visible"}
        />
        {(!showDetails || window.innerWidth > 900) && (
          <div style={{ display: "flex" }}>
            <VirtualTourButton flatId={flatId} floorId={floorId} />
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
  ) : (
    <NotAvailable title={"Flat"} />
  );
}

export default Flat;

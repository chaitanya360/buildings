import React, { useState } from "react";
import Tippy, { useSingleton } from "@tippyjs/react";
import Info from "./Info";
import { FloorsDetails } from "./DetailsPanel";
import Label from "./Label";
import {
  getAbsoluteFlatNum,
  getFlatNum,
  getFlatsOfTypeInFloor,
  getFloorName,
  getFloorNum,
  isFlatAvailable,
  isFloorBooked,
} from "../utility/functions";
import styles from "./components.module.css";
import { buildings } from "../data";
import VectorFlat from "./VectorFlat";
import NotAvailable from "./NotAvailable";
import { colors } from "../utility";
import Loading from "./Loading";

function Floor({
  floorId,
  flats,
  viewBox = "0 0 824 1293",
  height = "90%",
  blockId = "blocka",
  openDetails,
  setOpenDetails,
}) {
  const [source, target] = useSingleton({
    delay: 0,
    moveTransition: "transform 0.2s ease-out",
  });

  const [loading, setLoading] = useState(true);

  return isFloorBooked(blockId, floorId) ? (
    <NotAvailable title="Floor" />
  ) : (
    <>
      {loading && <Loading />}
      <Label label={getFloorName(getFloorNum(floorId))} />
      <div className={styles.floor} style={{ backgroundColor: colors.purple }}>
        <svg
          height={height}
          viewBox={viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          display={loading ? "none" : "default"}
        >
          <g id="blocka">
            <image
              width="100%"
              xlinkHref={`${process.env.PUBLIC_URL}/images/floors/${blockId}.png`}
              onLoad={() => setLoading(false)}
              visibility={loading ? "hidden" : "visible"}
            />

            <Tippy singleton={source} placement={"left-end"} delay={[100, 0]}>
              <>
                {flats.map((flat, index) => (
                  <Tippy
                    content={
                      <Info
                        title={getAbsoluteFlatNum(blockId, floorId, flat.id)}
                        items={[
                          buildings[blockId].flats[getFlatNum(flat.id) - 1]
                            .type,
                          buildings[blockId].flats[getFlatNum(flat.id) - 1]
                            .size,
                        ]}
                        isBooked={
                          !isFlatAvailable(
                            getAbsoluteFlatNum(blockId, floorId, flat.id)
                          )
                        }
                      />
                    }
                    singleton={target}
                    key={index}
                  >
                    <VectorFlat
                      blockId={blockId}
                      floorId={floorId}
                      floorIndex={index}
                      flat={flat}
                    />
                  </Tippy>
                ))}
              </>
            </Tippy>
          </g>
        </svg>
      </div>
      <FloorsDetails
        units={[
          getFlatsOfTypeInFloor("2 BHK", blockId),
          getFlatsOfTypeInFloor("3 BHK", blockId),
        ]}
        floorId={floorId}
        blockId={blockId}
        openDetails={openDetails}
        setOpenDetails={setOpenDetails}
      />
    </>
  );
}

export default Floor;
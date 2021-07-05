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

  const [details, setDetails] = useState(false);

  const [loading, setLoading] = useState(true);
  return isFloorBooked(blockId, floorId) ? (
    <NotAvailable title="Floor" />
  ) : (
    <>
      {loading && <Loading />}
      <Label label={getFloorName(getFloorNum(floorId))} blockId={blockId} />
      <div className={styles.floor} style={{ backgroundColor: "#8df0f7" }}>
        {details && !openDetails && (
          <Info
            style={{
              position: "absolute",
              top: "12vh",
              left: "10px",
              zIndex: "999",
            }}
            title={getAbsoluteFlatNum(blockId, floorId, details.id)}
            items={[
              buildings[blockId].flats[getFlatNum(details.id) - 1].type,

              floorId === "floor1"
                ? buildings[blockId].flats[getFlatNum(details.id) - 1].size
                : buildings[blockId].flats[getFlatNum(details.id) - 1]
                    .typicalSize,
            ]}
            isBooked={
              !isFlatAvailable(getAbsoluteFlatNum(blockId, floorId, details.id))
            }
            blockId={blockId}
            floorId={floorId}
            flatId={details.id}
            isFlat
          />
        )}
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
              xlinkHref={
                floorId == "floor1"
                  ? `${process.env.PUBLIC_URL}/images/floors/first/${blockId}.png`
                  : `${process.env.PUBLIC_URL}/images/floors/typical/${blockId}.png`
              }
              onLoad={() => setLoading(false)}
              visibility={loading ? "hidden" : "visible"}
            />

            <Tippy
              singleton={source}
              placement={"left-end"}
              delay={[100, 0]}
              interactive={window.innerWidth < 900}
            >
              <>
                {flats.map((flat, index) => (
                  <Tippy
                    content={
                      <Info
                        title={getAbsoluteFlatNum(blockId, floorId, flat.id)}
                        items={[
                          buildings[blockId].flats[getFlatNum(flat.id) - 1]
                            .type,
                          floorId === "floor1"
                            ? buildings[blockId].flats[getFlatNum(flat.id) - 1]
                                .size
                            : buildings[blockId].flats[getFlatNum(flat.id) - 1]
                                .typicalSize,
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
                      handleOnClick={() => {
                        setDetails({ id: flat.id });
                      }}
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
        setDetails={setDetails}
      />
    </>
  );
}

export default Floor;

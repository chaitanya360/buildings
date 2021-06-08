import React from "react";
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
} from "../utility/functions";
import { Link } from "react-router-dom";
import styles from "./components.module.css";
import { buildings } from "../data";

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

  return (
    <>
      <Label label={getFloorName(getFloorNum(floorId))} />
      <div className={styles.floor}>
        <svg
          height={height}
          viewBox={viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="blocka">
            <image
              width="100%"
              xlinkHref={`${process.env.PUBLIC_URL}/images/floors/${blockId}.png`}
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
                      />
                    }
                    singleton={target}
                    key={index}
                  >
                    <Link to={`/${blockId}/${floorId}/flat/${index + 1}`}>
                      <path
                        className="flat"
                        id={flat.id}
                        d={flat.d}
                        fill="transparent"
                      />
                    </Link>
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

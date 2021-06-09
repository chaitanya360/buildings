import React, { useState } from "react";
import Tippy, { useSingleton } from "@tippyjs/react";
import Info from "./Info";
import { SingleBuildingDetails } from "./DetailsPanel";
import { Link } from "react-router-dom";
import Label from "./Label";
import {
  getBlockName,
  getExtreameFlatSizesInBlock,
  getFlatsOfTypeInFloor,
  getFloorName,
  getFloorNum,
  getTotalFlatsInFloor,
  isBlockBooked,
  isFlatAvailable,
  isFloorBooked,
} from "../utility/functions";
import styles from "./components.module.css";
import { colors } from "../utility";
import VectorFloor from "./VectorFloor";
import NotAvailable from "./NotAvailable";

function Block({
  id,
  floors,
  viewBox = "0 0 824 1293",
  height = "90%",

  openDetails,
  setOpenDetails,
}) {
  const [source, target] = useSingleton({
    delay: 0,
    moveTransition: "transform 0.2s ease-out",
  });

  return isBlockBooked(id) ? (
    <NotAvailable title="Block" />
  ) : (
    <>
      <Label label={"Block " + getBlockName(id)} />
      <div style={{ height: "100%", bottom: "0" }}>
        <svg
          height={height}
          viewBox={viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className={styles.block}
        >
          <g id="Block">
            <image
              width="100%"
              xlinkHref={`${process.env.PUBLIC_URL}/images/blocks/${id}.png`}
            />

            <Tippy
              singleton={source}
              placement={"left-end"}
              delay={[100, 0]}
              interactive={window.innerWidth < 900 ? true : false}
            >
              <>
                {floors.map((floor, index) => (
                  <Tippy
                    content={
                      <Info
                        title={getFloorName(getFloorNum(floor.id))}
                        items={[
                          "3bhk and 2bhks",
                          getExtreameFlatSizesInBlock(id)[0] +
                            " - " +
                            getExtreameFlatSizesInBlock(id)[1] +
                            " Sq.Ft.",
                          getTotalFlatsInFloor(id) + " Flats",
                        ]}
                        isBooked={isFloorBooked(id, floor.id)}
                      />
                    }
                    singleton={target}
                    key={index}
                  >
                    <VectorFloor blockId={id} floorId={floor.id} d={floor.d} />
                  </Tippy>
                ))}
              </>
            </Tippy>
          </g>
        </svg>
      </div>
      <SingleBuildingDetails
        blockId={id}
        openDetails={openDetails}
        setOpenDetails={setOpenDetails}
        units={[
          getFlatsOfTypeInFloor("2 BHK", id),
          getFlatsOfTypeInFloor("3 BHK", id),
        ]}
      />
    </>
  );
}

export default Block;

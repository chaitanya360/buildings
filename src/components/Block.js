import React from "react";
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
} from "../utility/functions";
import styles from "./components.module.css";

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

  return (
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

            <Tippy singleton={source} placement={"left-end"} delay={[100, 0]}>
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
                      />
                    }
                    singleton={target}
                    key={index}
                  >
                    <Link to={`/block/${id}/${floor.id}`}>
                      <path
                        className="floor"
                        id={floor.id}
                        d={floor.d}
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

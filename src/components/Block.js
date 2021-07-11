import React, { useState } from "react";
import Tippy, { useSingleton } from "@tippyjs/react";
import Info from "./Info";
import { SingleBuildingDetails } from "./DetailsPanel";
import Label from "./Label";
import {
  getBlockName,
  getExtreameFlatSizesInBlock,
  getFlatsOfTypeInFloor,
  getFloorName,
  getFloorNum,
  getTotalFlatsInFloor,
  isBlockBooked,
  isFloorBooked,
} from "../utility/functions";
import styles from "./components.module.css";
import VectorFloor from "./VectorFloor";
import NotAvailable from "./NotAvailable";
import BuildingInfo from "./BuildingInfo";
import Loading from "./Loading";

function Block({
  id,
  floors,
  viewBox = "0 0 824 1293",
  height = "90%",
  openDetails,
  setOpenDetails,
}) {
  const [details, setDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [source, target] = useSingleton({
    delay: 0,
    moveTransition: "transform 0.2s ease-out",
  });

  return isBlockBooked(id) ? (
    <NotAvailable title="Block" />
  ) : (
    <>
      <Label label={getBlockName(id) + " Block"} />
      {loading && <Loading />}
      <div>
        {details && !openDetails && (
          <BuildingInfo
            title={getFloorName(getFloorNum(details.floorId))}
            isBooked={false}
            items={["3bhk and 2bhks", getTotalFlatsInFloor(id) + " Units"]}
            blockId={id}
            floorId={details.floorId}
          />
        )}
        {/* <HomeButton /> */}
        <svg
          height={height}
          viewBox={viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className={styles.block}
          display={loading ? "none" : "default"}
        >
          <g id="Block">
            <image
              width="100%"
              xlinkHref={`${process.env.PUBLIC_URL}/images/blocks/${id}.png`}
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
                {floors.map((floor, index) => (
                  <Tippy
                    content={
                      <Info
                        title={getFloorName(getFloorNum(floor.id))}
                        items={[
                          id === "blockc" ? "3 and 2bhks" : "3, 3.5 and 2bhks",
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
                    <VectorFloor
                      blockId={id}
                      floorId={floor.id}
                      d={floor.d}
                      handleOnClick={() => {
                        setDetails({ floorId: floor.id });
                      }}
                    />
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
        setDetails={setDetails}
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

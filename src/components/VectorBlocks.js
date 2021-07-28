import Tippy, { useSingleton } from "@tippyjs/react";
import React from "react";
import Info from "./Info";
import VectorBlock from "./VectorBlock";
import { buildingsArray as buildings } from "../data";

import styles from "./components.module.css";
import { useState } from "react";
import { BlocksDetails } from "./DetailsPanel";

import {
  getBlockName,
  getExtreameFlatSizesInBlock,
  getTotalFlatsInFloor,
  isBlockBooked,
} from "../utility/functions";

import Loading from "./Loading";

function VectorBlocks() {
  const [details, setDetails] = useState(false);

  const [loading, setLoading] = useState(true);
  const [blockId, setBlockId] = useState(false);

  const [source, target] = useSingleton({
    delay: 0,
    moveTransition: "transform 0.2s ease-out",
  });

  return (
    <div className={styles.vector_blocks}>
      <BlocksDetails onClick={() => setDetails(false)} />
      {loading && <Loading />}
      {details &&
        (details === "clubhouse" ? (
          <Info
            style={{
              position: "absolute",
              bottom: "10px",
              left: "0%",
              padding: "10px 5px",
            }}
            title={"Club Gothic"}
            blockId={details}
            isBooked={false}
            items={["30,000 Sq.Ft."]}
          />
        ) : (
          <Info
            style={{
              position: "absolute",
              bottom: "10px",
              left: "0%",
              padding: "10px 5px",
            }}
            title={"Block " + getBlockName(details)}
            blockId={details}
            isBooked={isBlockBooked(details)}
            items={[
              "2 BHK, 3 BHK and 3.5 BHK ",
              getExtreameFlatSizesInBlock(details)[0] +
                " - " +
                getExtreameFlatSizesInBlock(details)[1] +
                " Sq.Ft.",
              getTotalFlatsInFloor(details) * 12 + " Flats",
            ]}
          />
        ))}
      <svg
        height="100%"
        viewBox="0 0 2326 1348"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid slice"
        display={loading ? "none" : "default"}
      >
        <g>
          <image
            width="100%"
            xlinkHref={`${process.env.PUBLIC_URL}/images/bg.jpg`}
            onClick={() => setDetails(false)}
            onLoad={() => setLoading(false)}
            visibility={loading ? "hidden" : "visible"}
          />

          <Tippy
            singleton={source}
            placement={
              document.body.clientWidth < 900 ? "top-start" : "left-start"
            }
            trigger="focusin mouseenter"
            delay={[0, 100]}
            interactive={document.body.clientWidth < 900 ? true : false}
          >
            <>
              {buildings.map((building) => (
                <Tippy
                  content={
                    building.id === "clubhouse" ? (
                      <Info
                        isBooked={false}
                        blockId={"clubhouse"}
                        title={"Club Gothic"}
                        items={["30,000 Sq.Ft."]}
                      />
                    ) : (
                      <Info
                        isBooked={isBlockBooked(blockId)}
                        blockId={blockId}
                        title={getBlockName(building.id) + " Block"}
                        items={[
                          building.id === "blockc"
                            ? "2 BHK and 3 BHK"
                            : "2 BHK, 3 BHK and 3.5 BHK ",
                          getExtreameFlatSizesInBlock(building.id)[0] +
                            " - " +
                            getExtreameFlatSizesInBlock(building.id)[1] +
                            " Sq.Ft.",
                          getTotalFlatsInFloor(building.id) * 12 + " Flats",
                        ]}
                      />
                    )
                  }
                  singleton={target}
                  key={building.id}
                  animation={true}
                >
                  <VectorBlock
                    id={building.id}
                    d={building.d}
                    key={building.id}
                    handleOnClick={() => setDetails(building.id)}
                    setBlockId={setBlockId}
                  />
                </Tippy>
              ))}
            </>
          </Tippy>
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
          ></pattern>
        </defs>
      </svg>
    </div>
  );
}

export default VectorBlocks;

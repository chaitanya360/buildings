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

function VectorBlocks(props) {
  const [details, setDetails] = useState(false);

  const [source, target] = useSingleton({
    delay: 0,
    moveTransition: "transform 0.2s ease-out",
  });

  return (
    <div className={styles.vector_blocks}>
      <BlocksDetails onClick={() => setDetails(false)} />

      {details && (
        <Info
          style={{
            position: "absolute",
            top: "10px",
            left: "10%",
            padding: "10px 20px",
          }}
          title={"Block " + getBlockName(details)}
          isBooked={isBlockBooked(details)}
          items={[
            "3bhk and 2bhks",
            getExtreameFlatSizesInBlock(details)[0] +
              " - " +
              getExtreameFlatSizesInBlock(details)[1] +
              " Sq.Ft.",
            getTotalFlatsInFloor(details) * 12 + " Flats",
          ]}
        />
      )}
      <svg
        height="100%"
        viewBox="0 0 2326 1348"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid slice"
      >
        <g>
          <image
            width="100%"
            xlinkHref={`${process.env.PUBLIC_URL}/images/bg.jpg`}
            onClick={() => setDetails(false)}
          />
          <Tippy
            singleton={source}
            placement={window.innerWidth < 900 ? "top-start" : "left-start"}
            trigger="focusin mouseenter"
            delay={[0, 100]}
            interactive={window.innerWidth < 900 ? true : false}
          >
            <>
              {buildings.map((building) => (
                <Tippy
                  content={
                    <Info
                      title={getBlockName(building.id) + " Block"}
                      items={[
                        "3bhk and 2bhks",
                        getExtreameFlatSizesInBlock(building.id)[0] +
                          " - " +
                          getExtreameFlatSizesInBlock(building.id)[1] +
                          " Sq.Ft.",
                        getTotalFlatsInFloor(building.id) * 12 + " Flats",
                      ]}
                      isBooked={isBlockBooked(building.id)}
                    />
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
                    isBooked={isBlockBooked(building.id)}
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

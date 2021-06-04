import Tippy, { useSingleton } from "@tippyjs/react";
import React from "react";
import Info from "./Info";
import VectorBlock from "./VectorBlock";
import { buildingsArray as buildings } from "../data";

function VectorBlocks(props) {
  const [source, target] = useSingleton({
    delay: 0,
    moveTransition: "transform 0.2s ease-out",
  });

  console.log(buildings);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 2326 1348"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid slice"
    >
      <g id="blocks">
        <image
          width="100%"
          xlinkHref={`${process.env.PUBLIC_URL}/images/bg.jpg`}
        />
        <rect
          id="iso view ultra wide  1"
          y="-1"
          width="2326"
          height="1349"
          fill="url(#pattern0)"
        />
        <Tippy singleton={source} placement={"left-end"}>
          <>
            {buildings.map((building) => (
              <Tippy
                content={<Info blockId={building.id} />}
                singleton={target}
                placement={"auto-end"}
                key={building.id}
                animation={true}
              >
                <VectorBlock
                  id={building.id}
                  d={building.d}
                  key={building.id}
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
  );
}

export default VectorBlocks;

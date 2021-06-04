import React from "react";
import Tippy, { useSingleton } from "@tippyjs/react";
import Info from "./Info";
import { FloorsDetails } from "./DetailsPanel";
import Label from "./Label";
import { getFloorName, getBlockName } from "../utility/functions";
import { Link } from "react-router-dom";

function Floor({
  floorId,
  flats,
  viewBox = "0 0 824 1293",
  height = "90%",
  blockId = "blocka",
}) {
  const [source, target] = useSingleton({
    delay: 0,
    moveTransition: "transform 0.2s ease-out",
  });

  return (
    <>
      <Label label={getBlockName(floorId)} />
      <div
        style={{
          height: "100vh",
          padding: "5%",
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "10vw",
          alignItems: "center",
          backgroundColor: "purple",
        }}
      >
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
                {flats.map((floor, index) => (
                  <Tippy
                    content={
                      <Info isFloor floorNum={getFloorName(index + 1)} />
                    }
                    singleton={target}
                    key={index}
                  >
                    <Link to={`/${blockId}/${floorId}/flat/${index + 1}`}>
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
      <FloorsDetails floorId={floorId} blockId={blockId} />
    </>
  );
}

export default Floor;

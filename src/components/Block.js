import React from "react";
import Tippy, { useSingleton } from "@tippyjs/react";
import Info from "./Info";
import { SingleBuildingDetails } from "./DetailsPanel";
import { Link } from "react-router-dom";
import Label from "./Label";
import { getBlockName, getFloorName } from "../utility/functions";

function Block({ id, floors, viewBox = "0 0 824 1293", height = "90%" }) {
  const [source, target] = useSingleton({
    delay: 0,
    moveTransition: "transform 0.2s ease-out",
  });

  return (
    <>
      <Label label={getBlockName(id)} />
      <div style={{ height: "100vh" }}>
        <svg
          height={height}
          viewBox={viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            position: "fixed",
            bottom: "0",
            width: "100vw",
            display: "flex",
          }}
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
                      <Info isFloor floorNum={getFloorName(index + 1)} />
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
      <SingleBuildingDetails blockId={id} />
    </>
  );
}

export default Block;

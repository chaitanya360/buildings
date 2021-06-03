import React from "react";
import Tippy, { useSingleton } from "@tippyjs/react";
import Info from "./Info";
import { SingleBuildingDetials } from "./DetailsPanel";
import { Link } from "react-router-dom";

function Block({ id, paths, viewBox = "0 0 824 1293", height = "90%" }) {
  const [source, target] = useSingleton({
    delay: 0,
    moveTransition: "transform 0.2s ease-out",
  });

  return (
    <>
      <SingleBuildingDetials blockId={id} />
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
                {paths.map((path, index) => (
                  <Tippy
                    content={<Info isFloor floorNum={index + 1} />}
                    singleton={target}
                    key={index}
                  >
                    <Link to={`/block/${id}/${path.id}`}>
                      <path
                        className="floor"
                        id={path.id}
                        d={path.d}
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
    </>
  );
}

export default Block;

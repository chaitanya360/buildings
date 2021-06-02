import React from "react";
import Tippy, { useSingleton } from "@tippyjs/react";
import Info from "./Info";

function Block({ id, paths, viewBox = "0 0 824 1293", height = "90%" }) {
  const [source, target] = useSingleton({
    delay: 0,
    moveTransition: "transform 0.2s ease-out",
  });

  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "-1",
          overflow: "hidden",
          objectFit: "cover",
        }}
      ></div>
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
                  <path
                    className="floor"
                    id={path.id}
                    d={path.d}
                    fill="transparent"
                  />
                </Tippy>
              ))}
            </>
          </Tippy>
        </g>
      </svg>
    </div>
  );
}

export default Block;

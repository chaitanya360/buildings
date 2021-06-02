import React from "react";
import { buildings } from "../data";
import Block from "./Block";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavigationButton from "./NavigationButton";

let blocks = [
  buildings.blocka,
  buildings.blockb,
  buildings.blockc,
  buildings.blockd,
  buildings.blocke,
];

const getIndex = (id) => {
  switch (id) {
    case "blocka":
      return 0;
    case "blockb":
      return 1;
    case "blockc":
      return 2;
    case "blockd":
      return 3;
    case "blocke":
      return 4;
    default:
      return 0;
  }
};

function Blocks({ match }) {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/blocks/bg.jpg`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <Carousel
        dynamicHeight
        autoPlay={false}
        showIndicators={false}
        showThumbs={false}
        centerMode={false}
        showStatus={false}
        selectedItem={getIndex(match.params.id)}
        renderArrowPrev={(handleClick, hasPrev) => (
          <NavigationButton
            prev
            handleOnClick={handleClick}
            hasPrev={hasPrev}
          />
        )}
        renderArrowNext={(handleClick, hasNext) => (
          <NavigationButton
            next
            handleOnClick={handleClick}
            hasNext={hasNext}
          />
        )}
      >
        {blocks.map((block) => (
          <Block
            id={block.id}
            paths={block.floorPaths}
            viewBox={block.viewBox}
            key={block.id}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Blocks;

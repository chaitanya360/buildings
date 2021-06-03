import React from "react";
import { buildings } from "../data";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavigationButton from "./NavigationButton";
import { colors } from "../utility";
import Floor from "./Floor";

let floors = buildings.blocka.floorPaths;

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

function Floors({ match }) {
  console.log(match);
  return (
    <div
      style={{
        backgroundColor: colors.light_blue,
      }}
    >
      <Carousel
        // dynamicHeight
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
        {floors.map((floor, index) => (
          <Floor blockId={match.params.blockId} floorId={index + 1} />
        ))}
      </Carousel>
    </div>
  );
}

export default Floors;

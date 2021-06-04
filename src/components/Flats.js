import React from "react";
import { buildings } from "../data";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavigationButton from "./NavigationButton";
import { colors } from "../utility";
import Flat from "./Flat";

let floors = buildings.blocka.floors;
let flats = buildings.blocka.flats;

function Flats({ match }) {
  const blockId = match.params.blockId;
  const flatId = match.params.flatId;
  const floorId = match.params.floorId;
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
        selectedItem={0}
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
        {flats.map((flat) => (
          <Flat blockId={blockId} flatId={flat.id} />
        ))}
      </Carousel>
    </div>
  );
}

export default Flats;

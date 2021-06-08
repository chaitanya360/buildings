import React, { useState } from "react";
import { buildings } from "../data";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavigationButton from "./NavigationButton";
import { colors } from "../utility";
import Floor from "./Floor";
import { getFloorNum } from "../utility/functions";

function Floors({ match }) {
  let floors = buildings[match.params.blockId].floors;
  let flats = buildings[match.params.blockId].flats;

  const [openDetails, setOpenDetails] = useState(false);
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
        swipeable={false}
        centerMode={false}
        showStatus={false}
        selectedItem={getFloorNum(match.params.floorId) - 1}
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
        {floors.map((floor) => (
          <Floor
            blockId={match.params.blockId}
            floorId={floor.id}
            floors={buildings[match.params.blockId]}
            flats={flats}
            viewBox={"0 0 1500 870"}
            height="90%"
            openDetails={openDetails}
            setOpenDetails={setOpenDetails}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Floors;

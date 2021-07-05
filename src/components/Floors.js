import React, { useState } from "react";
import { buildings } from "../data";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavigationButton from "./NavigationButton";
import Floor from "./Floor";
import { getFloorNum } from "../utility/functions";
import HomeButton from "./HomeButton";

function Floors({ match }) {
  let floors = buildings[match.params.blockId].floors;
  let flats = buildings[match.params.blockId].flats;

  const [openDetails, setOpenDetails] = useState(false);
  return (
    <>
      {(!openDetails || window.innerWidth > 900) && <HomeButton />}
      <div>
        <Carousel
          // dynamicHeight
          width={window.innerWidth}
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
              viewBox={"0 0 1500 1000"}
              height="90%"
              openDetails={openDetails}
              setOpenDetails={setOpenDetails}
              key={floor.id}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Floors;

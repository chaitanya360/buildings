import React, { useState } from "react";
import { buildings } from "../data";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavigationButton from "./NavigationButton";
import Floor from "./Floor";
import { getFloorNum } from "../utility/functions";
import HomeButton from "./HomeButton";

function Clubhouse() {
  const clubHouseIterator = [1, 2, 3, 4, 5];
  return (
    <>
      <HomeButton />
      <div style={{ backgroundColor: "white" }}>
        <Carousel
          // dynamicHeight
          width={document.body.clientWidth}
          autoPlay={false}
          showIndicators={false}
          showThumbs={false}
          swipeable={false}
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
          {clubHouseIterator.map((element) => (
            <img
              style={{ height: "100vh", width: "auto" }}
              src={`${process.env.PUBLIC_URL}/images/clubhouse/${element}.jpeg`}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Clubhouse;

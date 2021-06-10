import React, { useState } from "react";
import { buildings } from "../data";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavigationButton from "./NavigationButton";
import { colors } from "../utility";
import Flat from "./Flat";
import HomeButton from "./HomeButton";

function Flats({ match }) {
  const flats = buildings[match.params.blockId].flats;

  const blockId = match.params.blockId;
  const flatId = match.params.flatId;
  const floorId = match.params.floorId;
  const [openDetails, setOpenDetails] = useState(
    window.innerWidth < 900 ? false : true
  );

  const [showHomeBtn, setShowHomeBtn] = useState(true);

  return (
    <div
      style={{
        backgroundColor: colors.light_blue,
      }}
    >
      {(!openDetails || window.innerWidth > 900) && showHomeBtn && (
        <HomeButton />
      )}
      <Carousel
        // dynamicHeight
        autoPlay={false}
        showIndicators={false}
        showThumbs={false}
        centerMode={false}
        showStatus={false}
        swipeable={false}
        selectedItem={flatId - 1}
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
          <Flat
            blockId={blockId}
            flatId={flat.id}
            floorId={floorId}
            showDetails={openDetails}
            setShowDetails={setOpenDetails}
            specifications={flat.specifications}
            size={flat.size}
            type={flat.type}
            key={flat.id}
            setShowHomeBtn={setShowHomeBtn}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Flats;
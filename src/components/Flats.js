import React, { useState } from "react";
import { buildings } from "../data";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavigationButton from "./NavigationButton";
import Flat from "./Flat";
import HomeButton from "./HomeButton";

function Flats({ match }) {
  const flats = buildings[match.params.blockId].flats;

  const blockId = match.params.blockId;
  const flatId = match.params.flatId;
  const floorId = match.params.floorId;
  const [openDetails, setOpenDetails] = useState(false);

  const [showHomeBtn, setShowHomeBtn] = useState(true);

  return (
    <div
      className="gredient_bg"
      style={{
        backgroundColor: "#8df0f7",
      }}
    >
      {(!openDetails || document.body.clientWidth > 900) && showHomeBtn && (
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
            specifications={
              floorId === "floor1"
                ? flat.specifications
                : flat.typicalSpecifications
            }
            size={floorId === "floor1" ? flat.size : flat.typicalSize}
            type={flat.type}
            key={flat.id}
            setShowHomeBtn={setShowHomeBtn}
            modelId={flat.modelId}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Flats;

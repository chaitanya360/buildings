import React, { useEffect, useState } from "react";
import { buildings } from "../data";
import Block from "./Block";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavigationButton from "./NavigationButton";
import HomeButton from "./HomeButton";
import { isBlockUnderConstruction } from "../utility/functions";

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
  const [openDetails, setOpenDetails] = useState(false);
  const [availableBlocks, setAvailableBlocks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setAvailableBlocks(
        blocks.filter((block) => !isBlockUnderConstruction(block.id))
      );
    }, 50);
  }, []);

  return (
    <div
      className="gredient_bg"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {(!openDetails || document.body.clientWidth > 900) && <HomeButton />}

      <Carousel
        width="100%"
        autoPlay={false}
        showIndicators={false}
        showThumbs={false}
        centerMode={false}
        swipeable={false}
        showStatus={false}
        selectedItem={getIndex(match.params.id)}
        renderArrowPrev={(handleClick, hasPrev) => (
          <NavigationButton
            prev
            handleOnClick={handleClick}
            hasPrev={hasPrev}
            isBlocks={document.body.clientWidth < 900 && !openDetails}
          />
        )}
        renderArrowNext={(handleClick, hasNext) => (
          <NavigationButton
            next
            handleOnClick={handleClick}
            hasNext={hasNext}
            isBlocks={document.body.clientWidth < 900 && !openDetails}
          />
        )}
      >
        {availableBlocks.map((block) => (
          <div style={{ height: window.innerHeight }} key={block.id}>
            <Block
              id={block.id}
              floors={block.floors}
              viewBox={block.viewBox}
              openDetails={openDetails}
              setOpenDetails={setOpenDetails}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Blocks;

import {
  buildings,
  buildingsArray,
  availableFlats,
  underConstructionBlocks,
  bookedBlocks,
} from "../data";

const getFloorName = (floorNum) => {
  switch (floorNum) {
    case "1":
      return "1st Floor";
    case "2":
      return "2nd Floor";
    case "3":
      return "3rd Floor";
    default:
      return floorNum + "th Floor";
  }
};

const getFloorNum = (floorId) => {
  return floorId.substr(5);
};

const getBlockName = (blockId) => {
  return blockId[blockId.length - 1].toUpperCase();
};

const getFloors = (blockId) => {
  return buildings[blockId].floors;
};

const getBlocks = () => {
  return buildingsArray;
};

const getFlatNum = (flatId) => flatId.substr(4);

const getAbsoluteFlatNum = (blockId, floorId, flatId) => {
  const flatNoInFloor =
    parseInt(getFloorNum(floorId) * 100) + parseInt(getFlatNum(flatId));
  switch (blockId) {
    case "blocka":
      return "A " + flatNoInFloor;
    case "blockb":
      return "B " + flatNoInFloor;

    case "blockc":
      return "C " + flatNoInFloor;

    case "blockd":
      return "D " + flatNoInFloor;

    case "blocke":
      return "E " + flatNoInFloor;
  }
};

// const getAbsoluteFlatNumInBlock = (blockId, floorId, flatId) => {
//   return (
//     (parseInt(getFloorNum(floorId)) - 1) * getTotalFlatsInFloor(blockId) +
//     parseInt(getFlatNum(flatId))
//   );
// };

const getTotalFlatsInFloor = (blockId) => {
  return buildings[blockId].flats.length;
};

const getExtreameFlatSizesInBlock = (blockId) => {
  let smallestSize = 999999;
  let biggestFlatSizeInBlock = 0;
  buildings[blockId].flats.forEach((flat) => {
    if (parseInt(flat.size.substr(0, 4)) < smallestSize) {
      smallestSize = parseInt(flat.size.substr(0, 4));
    }

    if (parseInt(flat.typicalSize.substr(0, 4)) > biggestFlatSizeInBlock) {
      biggestFlatSizeInBlock = parseInt(flat.typicalSize.substr(0, 4));
    }
  });

  return [smallestSize, biggestFlatSizeInBlock];
};

const getFlatsOfTypeInFloor = (type = "3 BHK", blockId) => {
  let count = 0;
  buildings[blockId].flats.forEach((flat) => flat.type === type && count++);
  return count;
};

const isBlockUnderConstruction = (blockId) => {
  return underConstructionBlocks.indexOf(blockId) !== -1;
};

const isFlatAvailable = (flatId, ...rest) => {
  return availableFlats.indexOf(flatId) === -1 ? false : true;
};

const isFloorBooked = () => {
  return false;
};

const isBlockBooked = (blockId) => {
  return bookedBlocks.indexOf(blockId) !== -1;
};

const hideElement = (id) => {
  let element = document.getElementsByClassName(id);
  for (let i = 0; i < element.length; i++) element[i].style.display = "none";
};

const showElement = (id) => {
  let element = document.getElementsByClassName(id);
  for (let i = 0; i < element.length; i++) element[i].style.display = "block";
};

export {
  getFloorName,
  getFloorNum,
  getBlockName,
  getFloors,
  getBlocks,
  getFlatNum,
  getAbsoluteFlatNum,
  getTotalFlatsInFloor,
  getExtreameFlatSizesInBlock,
  getFlatsOfTypeInFloor,
  isFlatAvailable,
  isFloorBooked,
  isBlockBooked,
  isBlockUnderConstruction,
  hideElement,
  showElement,
};

import { buildings, buildingsArray } from "../data";

const getFloorName = (floorNum) => {
  switch (floorNum) {
    case 1:
      return "1st Floor";
    case 2:
      return "2nd Floor";
    case 3:
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

export {
  getFloorName,
  getFloorNum,
  getBlockName,
  getFloors,
  getBlocks,
  getFlatNum,
};

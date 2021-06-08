import { buildings, buildingsArray } from "../data";

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
  let flatsInPrevBlocks = 0;
  switch (blockId) {
    case "blocka":
      return getAbsoluteFlatNumInBlock(blockId, floorId, flatId);
    case "blockb":
      return (
        getTotalFlatsInFloor("blocka") * 12 +
        getAbsoluteFlatNumInBlock(blockId, floorId, flatId)
      );

    case "blockc":
      return (
        (getTotalFlatsInFloor("blocka") + getTotalFlatsInFloor("blockb")) * 12 +
        getAbsoluteFlatNumInBlock(blockId, floorId, flatId)
      );

    case "blockd":
      return (
        (getTotalFlatsInFloor("blocka") +
          getTotalFlatsInFloor("blockb") +
          getTotalFlatsInFloor("blockc")) *
          12 +
        getAbsoluteFlatNumInBlock(blockId, floorId, flatId)
      );

    case "blocke":
      return (
        (getTotalFlatsInFloor("blocka") +
          getTotalFlatsInFloor("blockb") +
          getTotalFlatsInFloor("blockc") +
          getTotalFlatsInFloor("blockd")) *
          12 +
        getAbsoluteFlatNumInBlock(blockId, floorId, flatId)
      );
  }
};

const getAbsoluteFlatNumInBlock = (blockId, floorId, flatId) => {
  return (
    (parseInt(getFloorNum(floorId)) - 1) * getTotalFlatsInFloor(blockId) +
    parseInt(getFlatNum(flatId))
  );
};

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

    if (parseInt(flat.size.substr(0, 4)) > biggestFlatSizeInBlock) {
      biggestFlatSizeInBlock = parseInt(flat.size.substr(0, 4));
    }
  });

  return [smallestSize, biggestFlatSizeInBlock];
};

const getFlatsOfTypeInFloor = (type = "3 BHK", blockId) => {
  let count = 0;
  buildings[blockId].flats.forEach((flat) => flat.type === type && count++);
  return count;
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
};

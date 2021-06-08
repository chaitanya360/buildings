import React, { useState } from "react";
import { useContext } from "react";
import Collapsible from "react-collapsible";
import { colors, sizes } from "../utility";
import Compare from "./Compare";
import {
  getAbsoluteFlatNum,
  getBlockName,
  getBlocks,
  getFlatNum,
  getFloorName,
  getFloorNum,
  getFloors,
  getTotalFlatsInFloor,
} from "../utility/functions";
import { compareContext } from "./compareContext";
import styles from "./components.module.css";
import DetailsButton from "./DetailsButton";
import DropDown from "./DropDown";
import { useAlert } from "react-alert";

const ButtonTrigger = ({ show, setShowDetails, onClick }) => {
  return (
    <div onClick={onClick}>
      <div
        className={styles.btn_trigger}
        onClick={() => {
          show ? setShowDetails(true) : setShowDetails(false);
        }}
      >
        <img
          width="100%"
          height="100%"
          src={`${process.env.PUBLIC_URL}/images/icons/${
            show ? "down_arrow" : "up_arrow"
          }.svg`}
          alt="location icon"
        />
      </div>
    </div>
  );
};

const Features = ({ value, name }) => {
  return (
    <div>
      <div>{value}</div>
      <div style={{ color: colors.font_light }}>{name}</div>
    </div>
  );
};

const ImageItem = ({ block, showFloor = false, floorNum, floors, blocks }) => {
  return (
    <div
      style={{
        fontWeight: 400,
        textAlign: "left",
        fontSize: sizes.regular,
        display: "flex",
        borderBottom: "2px solid white",
        paddingLeft: "10px",
        alignItems: "center",
        paddingBottom: "10px",
      }}
    >
      <span style={{ height: "100%", width: "35px", marginRight: "20px" }}>
        <img
          width="25px"
          src={`${process.env.PUBLIC_URL}/images/icons/building.svg`}
          alt="location icon"
          height="100%"
        />
      </span>
      <span>Block: </span>
      <div
        style={{
          position: "relative",
          marginTop: "-20px",
          marginRight: "40px",
        }}
      >
        <DropDown items={blocks} text={getBlockName(block)} />
      </div>
      {showFloor && (
        <>
          <span
            style={{ height: "100%", width: "35px", marginInline: "30px 20px" }}
          >
            <img
              width="25px"
              src={`${process.env.PUBLIC_URL}/images/icons/floors.svg`}
              alt="location icon"
              height="100%"
            />
          </span>
          <span>Floor:</span>
          <div style={{ position: "relative", marginTop: "-20px" }}>
            <DropDown items={floors} text={floorNum} blockId={block} isFloor />
          </div>
        </>
      )}
    </div>
  );
};

const InfoItem = ({ units = false, floorNum, block, flatNum }) => {
  return (
    <div className={styles.info_item_wrapper}>
      <span>{block} Block</span>
      {units && <span>{units + " "}Units</span>}
      {floorNum && <span>{floorNum}</span>}
      {flatNum && <span>{flatNum}</span>}
    </div>
  );
};

const AppartmentsItem = ({ bhk = "3", units = false, size = false }) => {
  return (
    <div
      style={{
        padding: "20px 10px",
        borderBottom: "2px solid white",
        textAlign: "left",
        fontWeight: 300,
      }}
    >
      <div>
        <span>
          {bhk + " "}BHK Appartment{units && "s"}
        </span>
        {units && (
          <span
            style={{
              marginLeft: "10px",
              paddingInline: "10px",
              borderLeft: "3px solid white",
            }}
          >
            {units} Units
          </span>
        )}
      </div>
      {size && (
        <span style={{ display: "block", padding: "10px 0" }}>
          {size[0]} Sq.ft {units && `- ${size[1]} Sq.ft`}
        </span>
      )}
    </div>
  );
};

const FlatDetailsItem = ({ size = "1234 Sq.ft", type = "13bhk" }) => {
  return (
    <div
      style={{
        padding: "10px 10px",
        borderBottom: "2px solid white",
        textAlign: "left",
        fontWeight: 400,
        display: "flex",
      }}
    >
      <div>
        <span>{type}</span>
      </div>
      <span style={{ marginLeft: "20px" }}>{size}</span>
    </div>
  );
};

const SpecificationsItem = ({
  items = { Drawing: "11 x 12", Bed: "50 x 30" },
}) => {
  return (
    <div style={{ paddingBlock: "20px", borderBottom: "2px solid white" }}>
      <div
        style={{
          borderLeft: "5px solid",
          borderColor: colors.pink,
          paddingLeft: "10px",
          fontWeight: 500,
          textAlign: "left",
          fontSize: sizes.medium,
        }}
      >
        Specifications
      </div>
      <div style={{ textAlign: "left", padding: "20px 20px" }}>
        {Object.entries(items).map(([key, value]) => (
          <div
            style={{
              marginTop: "10px",
              fontSize: sizes.medium,
              fontWeight: 100,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ flex: 1 }}>{key}</span>
            <span style={{ flex: 1 }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

function BuildingsDetails({ onClick }) {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div className={styles.collapsible_wrapper}>
      <Collapsible
        trigger={
          <ButtonTrigger
            show
            setShowDetails={setShowDetails}
            onClick={onClick}
          />
        }
        triggerWhenOpen={<ButtonTrigger setShowDetails={setShowDetails} />}
        open={showDetails}
      >
        <div
          style={{
            backgroundColor: colors.light_blue,
            padding: "40px 40px",
            color: "white",
            fontWeight: 400,
          }}
        >
          <h2
            style={{
              borderBottom: "2px solid white",
              fontWeight: 400,
              paddingBottom: "20px",
            }}
          >
            2 and 3 BHK Premium High-Rise Gated Community Appartments
          </h2>
          <div style={{ margin: "40px 0px", fontWeight: 400 }}>
            <h3 style={{ fontWeight: 400, display: "flex" }}>
              <span>
                <img
                  width="15px"
                  height="100%"
                  src={`${process.env.PUBLIC_URL}/images/icons/location.svg`}
                  alt="location icon"
                />
              </span>
              <span style={{ margin: "20px" }}>
                Your, Beutiful, Address Here.
              </span>
            </h3>
            <h3 style={{ color: colors.pink, fontWeight: 400 }}>View Map</h3>
          </div>
          <div style={{ margin: "30px 0px" }}>
            <h1
              style={{
                borderLeft: "5px solid",
                borderColor: colors.pink,
                paddingLeft: "20px",
                fontWeight: 500,
              }}
            >
              We Bring you
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: sizes.medium,
              justifyContent: "space-between",
            }}
          >
            <Features value="5" name={"towers"} />
            <Features value="60" name={"Floors"} />
            <Features value="444" name={"Flats"} />
          </div>
        </div>
      </Collapsible>
    </div>
  );
}

function SingleBuildingDetails({
  blockId,
  openDetails,
  setOpenDetails,
  units = [23, 23],
}) {
  let blocks = getBlocks()
    .map((block) => block.id)
    .filter((block) => block !== blockId);
  return (
    <div className={styles.collapsible_wrapper}>
      <Collapsible
        trigger={<ButtonTrigger show setShowDetails={setOpenDetails} />}
        triggerWhenOpen={<ButtonTrigger setShowDetails={setOpenDetails} />}
        open={openDetails}
        allowFullScreen={false}
      >
        <div className={styles.details_wrapper}>
          <ImageItem block={getBlockName(blockId)} blocks={blocks} />
          <InfoItem
            block={getBlockName(blockId)}
            units={getTotalFlatsInFloor(blockId)}
          />
          <AppartmentsItem bhk={2} units={units[0]} />
          <AppartmentsItem bhk={3} units={units[1]} />
        </div>
      </Collapsible>
    </div>
  );
}

const FloorsDetails = ({
  floorId,
  blockId,
  openDetails,
  setOpenDetails,
  units,
}) => {
  const floorNum = getFloorNum(floorId);

  const blocks = getBlocks()
    .map((block) => block.id)
    .filter((block) => block !== blockId);
  const floors = getFloors(blockId)
    .map((floor) => floor.id)
    .filter((floor) => floor !== floorId);

  return (
    <div className={styles.collapsible_wrapper}>
      <Collapsible
        trigger={<ButtonTrigger show setShowDetails={setOpenDetails} />}
        triggerWhenOpen={<ButtonTrigger setShowDetails={setOpenDetails} />}
        open={openDetails}
      >
        <div className={styles.details_wrapper}>
          <ImageItem
            block={blockId}
            showFloor
            floorNum={floorNum}
            floors={floors}
            blocks={blocks}
          />
          <InfoItem
            floorNum={getFloorName(floorNum)}
            block={getBlockName(blockId)}
          />
          <AppartmentsItem bhk={2} units={units[0]} />
          <AppartmentsItem bhk={3} units={units[1]} />
        </div>
      </Collapsible>
    </div>
  );
};

const FlatDetails = ({
  floorId,
  blockId,
  flatId,
  showDetails,
  setShowDetails,
  specifications,
  size,
  type,
}) => {
  const alert = useAlert();
  const floorNum = getFloorNum(floorId);

  const [compareItemsIds, setCompareItemsId, showCompare, setShowCompare] =
    useContext(compareContext);

  const blocks = getBlocks()
    .map((block) => block.id)
    .filter((block) => block !== blockId);
  const floors = getFloors(blockId)
    .map((floor) => floor.id)
    .filter((floor) => floor !== floorId);

  const handleAddToCompare = () => {
    let newFlat = true;
    compareItemsIds.forEach((element) => {
      if (element.flatId === flatId && element.blockId === blockId) {
        newFlat = false;
        alert.show("flat is already added to compare");
        return;
      }
    });
    if (newFlat) {
      if (compareItemsIds.length < 4) {
        setCompareItemsId([...compareItemsIds, { flatId, blockId }]);
        alert.show("flat is added for comparison");
      } else alert.show("selected maximum number of flats, press compare");
    }
  };

  const handleComparePressed = () => {
    if (compareItemsIds.length > 1) setShowCompare(true);
    else alert.show("select at least 2 flats");
  };

  return (
    <>
      {showCompare ? (
        <Compare
          setShowCompare={setShowCompare}
          compareItemsIds={compareItemsIds}
          setCompareItemsId={setCompareItemsId}
        />
      ) : (
        <div className={styles.collapsible_wrapper}>
          <Collapsible
            trigger={<ButtonTrigger show setShowDetails={setShowDetails} />}
            triggerWhenOpen={<ButtonTrigger setShowDetails={setShowDetails} />}
            open={showDetails}
          >
            <div className={styles.details_wrapper}>
              <ImageItem
                block={blockId}
                showFloor
                floorNum={floorNum}
                floors={floors}
                blocks={blocks}
              />
              <InfoItem
                floorNum={getFloorName(floorNum)}
                block={getBlockName(blockId)}
                flatNum={getAbsoluteFlatNum(blockId, floorId, flatId)}
              />
              <FlatDetailsItem size={size} type={type} />
              <SpecificationsItem items={specifications} />
              <DetailsButton
                text="Add to Compare"
                compareCount={compareItemsIds}
                onClick={handleAddToCompare}
              />
              <DetailsButton
                text="Compare"
                compareCount={compareItemsIds.length}
                onClick={handleComparePressed}
              />
            </div>
          </Collapsible>
        </div>
      )}
    </>
  );
};

export {
  BuildingsDetails as BlocksDetails,
  SingleBuildingDetails,
  FloorsDetails,
  FlatDetails,
};

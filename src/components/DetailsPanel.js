import React, { useState } from "react";
import { useContext } from "react";
import Collapsible from "react-collapsible";
import { colors, sizes } from "../utility";
import Compare from "./Compare";
import {
  getAbsoluteFlatNum,
  getBlockName,
  getBlocks,
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

const ButtonTrigger = ({ show, setShowDetails, onClick, setDetails }) => {
  !show && setDetails && setDetails(false);
  return (
    <div onClick={onClick}>
      <div
        className={styles.btn_trigger}
        onClick={() => {
          show ? setShowDetails(true) : setShowDetails(false);
        }}
        style={{ backgroundColor: !show ? "transparent" : "#2e7a7be1" }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/${"up_arrow"}.svg`}
          alt="location icon"
          style={{
            width: "30px",
            height: "auto",
            transformOrigin: "center",
            transform: show && "rotate(180deg)",
            transition: "transform 0.5s",
          }}
        />
      </div>
    </div>
  );
};

const Features = ({ value, name }) => {
  return (
    <div style={{ textAlign: "center", marginInline: "15px" }}>
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
        fontSize: "25px",
        display: "flex",
        width: "100%",
        margin: "10px 0",
      }}
    >
      <img
        style={{ width: "25px", height: "auto", marginRight: "10px" }}
        src={`${process.env.PUBLIC_URL}/images/icons/building.svg`}
        alt="location icon"
      />
      <div>Block </div>
      <div
        style={{
          position: "relative",
          display: "inline-block",
          marginRight: "40px",
        }}
      >
        <DropDown items={blocks} text={getBlockName(block)} />
      </div>
      {showFloor && (
        <>
          <img
            style={{ width: "40px", height: "auto", marginRight: "10px" }}
            src={`${process.env.PUBLIC_URL}/images/icons/layers.svg`}
            alt="location icon"
          />
          <div>Floor</div>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginRight: "40px",
            }}
          >
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
        padding: "10px 10px",
        margin: "20px 0px",
        border: "1px solid #4AA5A6",
        borderRadius: "8px",
        textAlign: "left",
        fontWeight: 300,
        fontSize: sizes.medium,
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
              borderLeft: "3px solid",
              borderColor: colors.gold,
            }}
          >
            {units} {units !== "NA" && "Units"}
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
        fontSize: sizes.medium,
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
    <>
      <div style={{ paddingBlock: "20px", borderBottom: "2px solid white" }}>
        <div
          style={{
            width: "fit-content",
            borderLeft: "3px solid",
            borderColor: colors.gold,
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
                fontSize: "1.3rem",
                fontWeight: 300,
                display: "flex",
                justifyContent: "space-between",
              }}
              key={key}
            >
              <span style={{ flex: 1 }}>{key}</span>
              <span style={{ flex: 1 }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
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
            backgroundColor: colors.light_green,
            paddingBottom: "40px",
            borderRadius: "0px 0px 0px 10px",
          }}
        >
          <div
            style={{
              padding: "40px 40px 0px 30px",
              color: "white",
              fontWeight: 400,
            }}
          >
            <h2
              style={{
                fontWeight: 400,
                marginBottom: "20px",
                borderLeft: "4px solid",
                borderColor: colors.gold,
                paddingLeft: "20px",
              }}
            >
              2, 3 and 3.5 BHK Premium Apartments
            </h2>
            <div style={{ margin: "40px 0px", fontWeight: 400 }}>
              <h3 style={{ fontWeight: 400, display: "flex" }}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "30px", width: "auto" }}
                    src={`${process.env.PUBLIC_URL}/images/icons/location.svg`}
                    alt="location icon"
                  />
                </span>
                <span style={{ margin: "20px" }}>
                  Bachupally, Hyderabad, Telangana
                </span>
              </h3>
              <a
                href="https://www.google.com/maps/place/Gothic+Living+Spaces/@17.5445009,78.3704341,299m/data=!3m1!1e3!4m13!1m7!3m6!1s0x0:0x0!2zMTfCsDMyJzQwLjYiTiA3OMKwMjInMTYuMyJF!3b1!8m2!3d17.5446205!4d78.3711929!3m4!1s0x3bcb8dad96cf6afb:0x4aa81dec5b9e78fa!8m2!3d17.544992!4d78.3709538?hl=en"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <h3
                  style={{
                    color: colors.gold,
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  View Map
                </h3>
              </a>
            </div>
            <div style={{ margin: "30px 0px" }}>
              <h1
                style={{
                  borderLeft: "4px solid",
                  borderColor: colors.gold,
                  paddingLeft: "15px",
                  fontWeight: 500,
                }}
              >
                We Bring you
              </h1>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: sizes.medium,
              justifyContent: "space-between",
            }}
          >
            <Features value="5" name={"Towers"} />
            <Features value="12" name={"Floors"} />
            <Features value="444" name={"Flats"} />
            <Features value="30,000 Sq.ft." name={"Clubhouse"} />
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
  setDetails,
}) {
  let blocks = getBlocks().map((block) => block.id);
  // .filter((block) => block !== blockId);

  return (
    <div className={styles.collapsible_wrapper}>
      <Collapsible
        trigger={
          <ButtonTrigger
            show
            setShowDetails={setOpenDetails}
            setDetails={setDetails}
          />
        }
        triggerWhenOpen={
          <ButtonTrigger
            setShowDetails={setOpenDetails}
            setDetails={setDetails}
          />
        }
        open={openDetails}
        allowFullScreen={false}
      >
        <div className={styles.details_wrapper}>
          <ImageItem block={getBlockName(blockId)} blocks={blocks} />
          <InfoItem
            block={getBlockName(blockId)}
            units={getTotalFlatsInFloor(blockId) * 12}
          />
          <AppartmentsItem bhk={2} units={units[0] * 12} />
          <AppartmentsItem bhk={3} units={units[1] * 12} />

          <AppartmentsItem
            bhk={3.5}
            units={
              parseInt(getTotalFlatsInFloor(blockId)) ===
              parseInt(units[0]) + parseInt(units[1])
                ? "NA"
                : (getTotalFlatsInFloor(blockId) - (units[0] + units[1])) * 12
            }
          />
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
  setDetails,
}) => {
  const floorNum = getFloorNum(floorId);

  const blocks = getBlocks().map((block) => block.id);
  // .filter((block) => block !== blockId);
  const floors = getFloors(blockId).map((floor) => floor.id);
  // .filter((floor) => floor !== floorId);
  openDetails && setDetails(false);
  return (
    <div className={styles.collapsible_wrapper} style={{ width: "400px" }}>
      <Collapsible
        trigger={<ButtonTrigger show setShowDetails={setOpenDetails} />}
        triggerWhenOpen={<ButtonTrigger setShowDetails={setOpenDetails} />}
        open={openDetails}
      >
        <div className={styles.details_wrapper} style={{ paddingTop: "40px" }}>
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

          <AppartmentsItem
            bhk={3.5}
            units={
              parseInt(getTotalFlatsInFloor(blockId)) ===
              parseInt(units[0]) + parseInt(units[1])
                ? "NA"
                : getTotalFlatsInFloor(blockId) - (units[0] + units[1])
            }
          />
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
  setShowHomeBtn,
}) => {
  const alert = useAlert();
  const floorNum = getFloorNum(floorId);

  const [compareItemsIds, setCompareItemsId, showCompare, setShowCompare] =
    useContext(compareContext);

  const blocks = getBlocks().map((block) => block.id);
  // .filter((block) => block !== blockId);
  const floors = getFloors(blockId).map((floor) => floor.id);
  // .filter((floor) => floor !== floorId);

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
        setCompareItemsId([...compareItemsIds, { flatId, blockId, floorId }]);
        alert.show("flat is added for comparison");
      } else alert.show("selected maximum number of flats, press compare");
    }
  };

  const handleComparePressed = () => {
    if (compareItemsIds.length > 1) setShowCompare(true);
    else alert.show("select at least 2 flats");
  };

  showCompare ? setShowHomeBtn(false) : setShowHomeBtn(true);

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
              <div style={{ marginTop: "20px" }}>
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

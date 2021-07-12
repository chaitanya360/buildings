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
  hideElement,
  showElement,
} from "../utility/functions";
import { compareContext } from "./compareContext";
import styles from "./components.module.css";
import DetailsButton from "./DetailsButton";
import DropDown from "./DropDown";
import { useAlert } from "react-alert";

const handleDetailsOpen = () => {
  hideElement("nav_btn");
  hideElement("home_btn");
};

const handleDetailsClose = () => {
  showElement("nav_btn");
  showElement("home_btn");
};

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
    <div
      style={{ textAlign: "center", margin: "0px 25px", marginBottom: "20px" }}
    >
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
        fontSize: "20px",
        display: "flex",
        width: "100%",
        margin: "10px 0",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "23px", height: "auto", marginRight: "10px" }}
        src={`${process.env.PUBLIC_URL}/images/icons/building.svg`}
        alt="location icon"
      />
      <div>Block </div>
      <div
        style={{
          position: "relative",
          marginRight: "40px",
        }}
      >
        <DropDown items={blocks} text={getBlockName(block)} />
      </div>
      {showFloor && (
        <>
          <img
            style={{ width: "25px", height: "auto", marginRight: "10px" }}
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
        margin: "15px 20px",
        border: "1px solid #4AA5A6",
        borderRadius: "8px",
        textAlign: "left",
        fontWeight: 300,
        fontSize: sizes.medium,
        width: "90%",
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
              padding: "0px 10px",
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

const FlatDetailsItem = ({ size = "1234 Sq.ft", type = "3bhk" }) => {
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
      <div style={{ padding: "20px 0px", borderBottom: "2px solid white" }}>
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
            paddingBottom: "0px",
            borderRadius: "0px 0px 0px 10px",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            maxHeight: "100vh",
            maxWidth: "100vw",
            paddingRigth: "0px",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={styles.details_wrapper}
        >
          <div
            style={{
              padding: "20px 0px 0px 0px",
              color: "white",
              fontWeight: 400,
              width: window.innerHeight < 500 ? "100vw" : "250px",
            }}
          >
            <h3
              style={{
                fontWeight: 400,
                marginBottom: "20px",
                borderLeft: "4px solid",
                borderColor: colors.gold,
                paddingLeft: "20px",
              }}
            >
              2, 3 and 3.5 BHK Premium Apartments
            </h3>
            <div style={{ margin: "35px 0px", fontWeight: 400 }}>
              <span
                style={{
                  marginLeft: "30px",
                  fontSize: "1.2rem",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Gothic Pentagon Clouds
              </span>

              <h4 style={{ fontWeight: 400, display: "flex" }}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "auto", width: "20px" }}
                    src={`${process.env.PUBLIC_URL}/images/icons/location.svg`}
                    alt="location icon"
                  />
                </span>
                <span style={{ margin: "10px" }}>
                  Bachupally, Hyderabad, Telangana
                </span>
              </h4>
              <a
                href="https://www.google.com/maps/place/Gothic+Living+Spaces/@17.5445009,78.3704341,299m/data=!3m1!1e3!4m13!1m7!3m6!1s0x0:0x0!2zMTfCsDMyJzQwLjYiTiA3OMKwMjInMTYuMyJF!3b1!8m2!3d17.5446205!4d78.3711929!3m4!1s0x3bcb8dad96cf6afb:0x4aa81dec5b9e78fa!8m2!3d17.544992!4d78.3709538?hl=en"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <h4
                  style={{
                    color: colors.gold,
                    fontWeight: 500,
                    marginLeft: "90px",
                  }}
                >
                  View Map
                </h4>
              </a>
            </div>
            <div style={{ width: "100%" }}>
              <div style={{ margin: "10px 0px" }}>
                <h3
                  style={{
                    borderLeft: "4px solid",
                    borderColor: colors.gold,
                    paddingLeft: "15px",
                    fontWeight: 500,
                  }}
                >
                  We Bring you
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "1rem",
                }}
              >
                <div>
                  <Features value="5" name={"Towers"} />
                  <Features value="12" name={"Floors"} />
                </div>
                <div>
                  <Features value="444" name={"Flats"} />
                  <Features value="30,000 Sq.ft." name={"Clubhouse"} />
                </div>
              </div>
            </div>
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
            onClick={handleDetailsOpen}
          />
        }
        triggerWhenOpen={
          <ButtonTrigger
            setShowDetails={setOpenDetails}
            setDetails={setDetails}
            onClick={handleDetailsClose}
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
    <div
      className={styles.collapsible_wrapper}
      style={{ width: window.innerHeight < 500 ? "100vw" : "400px" }}
    >
      <Collapsible
        trigger={
          <ButtonTrigger
            onClick={handleDetailsOpen}
            show
            setShowDetails={setOpenDetails}
          />
        }
        triggerWhenOpen={
          <ButtonTrigger
            onClick={handleDetailsClose}
            setShowDetails={setOpenDetails}
          />
        }
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
            trigger={
              <ButtonTrigger
                onClick={handleDetailsOpen}
                show
                setShowDetails={setShowDetails}
              />
            }
            triggerWhenOpen={
              <ButtonTrigger
                onClick={handleDetailsClose}
                setShowDetails={setShowDetails}
              />
            }
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

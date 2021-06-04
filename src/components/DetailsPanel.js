import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import { colors, sizes } from "../utility";
import {
  getBlockName,
  getBlocks,
  getFloorName,
  getFloorNum,
  getFloors,
} from "../utility/functions";
import styles from "./components.module.css";

const ButtonTrigger = ({ show }) => {
  return (
    <div className={styles.btn_trigger}>
      <img
        width="100%"
        height="100%"
        src={`${process.env.PUBLIC_URL}/images/icons/${
          show ? "down_arrow" : "up_arrow"
        }.svg`}
        alt="location icon"
      />
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

const DropDown = ({ items, text, isFloor, blockId }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        position: "absolute",
        top: "0%",
        marginTop: "7%",
      }}
    >
      <Collapsible
        trigger={
          <span
            style={{
              width: "20px",
              height: "20px",
              display: "block ",
              display: "flex",
              marginInline: "10px 20px",
              cursor: "pointer",
            }}
          >
            {text}
            <img
              width="100%"
              height="100%"
              src={`${process.env.PUBLIC_URL}/images/icons/${"down_arrow"}.svg`}
              alt="location icon"
              style={{ margin: "5px", cursor: "pointer" }}
            />
          </span>
        }
        autoFocus
        triggerWhenOpen={
          <span
            style={{
              width: "20px",
              height: "20px",
              display: "block ",
              display: "flex",
              objectFit: "cover",
              marginInline: "10px 20px",
              cursor: "pointer",
            }}
          >
            {text}

            <img
              width="100%"
              height="100%"
              src={`${process.env.PUBLIC_URL}/images/icons/${"up_arrow"}.svg`}
              alt="location icon"
              style={{ margin: "5px" }}
            />
          </span>
        }
        open={open}
        handleTriggerClick={() => setOpen((old) => !old)}
      >
        <div style={{ position: "relative" }}>
          {items.map((item) => (
            <div
              style={{
                backgroundColor: colors.light_blue,
                width: "100%",
                textAlign: "center",
              }}
            >
              <Link
                to={isFloor ? `/block/${blockId}/${item}` : `/block/${item}`}
              >
                <span
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={() => setOpen((old) => !old)}
                >
                  {isFloor ? getFloorNum(item) : getBlockName(item)}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </Collapsible>
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
            style={{ height: "100%", width: "35px", marginInline: "40px 20px" }}
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

const InfoItem = ({ showUnits = false, units, floorNum, block }) => {
  return (
    <div className={styles.info_item_wrapper}>
      <span>{block} Block</span>
      {showUnits ? units + " Units" : floorNum}
    </div>
  );
};

const AppartmentsItem = ({ bhk = "3", units = "124", size = [1690, 1865] }) => {
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
        <span>{bhk}BHK Appartments</span>
        <span
          style={{
            marginLeft: "10px",
            paddingInline: "10px",
            borderLeft: "3px solid white",
          }}
        >
          {units} Units
        </span>
      </div>
      <span style={{ display: "block", padding: "10px 0" }}>
        {size[0]} Sq.ft - {size[1]} Sq.ft
      </span>
    </div>
  );
};

function BuildingsDetails() {
  return (
    <div className={styles.collapsible_wrapper}>
      <Collapsible
        trigger={<ButtonTrigger show />}
        triggerWhenOpen={<ButtonTrigger />}
        open
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
                Gopanpally, Gachibowli, Hyderabad.
              </span>
            </h3>
            <h3 style={{ color: colors.light_red, fontWeight: 400 }}>
              View Map
            </h3>
          </div>
          <div style={{ margin: "30px 0px" }}>
            <h1
              style={{
                borderLeft: "5px solid",
                borderColor: colors.light_red,
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
            <Features value="6" name={"towers"} />
            <Features value="2B+G+30" name={"Floors"} />
            <Features value="50,000 Sq.ft" name={"Club House"} />
          </div>
        </div>
      </Collapsible>
    </div>
  );
}

function SingleBuildingDetails({ blockId }) {
  let blocks = getBlocks()
    .map((block) => block.id)
    .filter((block) => block !== blockId);
  return (
    <div className={styles.collapsible_wrapper}>
      <Collapsible
        trigger={<ButtonTrigger show />}
        triggerWhenOpen={<ButtonTrigger />}
        open
        allowFullScreen={false}
      >
        <div className={styles.details_wrapper}>
          <ImageItem block={getBlockName(blockId)} blocks={blocks} />
          <InfoItem showUnits units={250} block={getBlockName(blockId)} />
          <AppartmentsItem />
          <AppartmentsItem bhk={2} units={120} size={[1250, 1365]} />
        </div>
      </Collapsible>
    </div>
  );
}

const FloorsDetails = ({ floorId, blockId }) => {
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
        trigger={<ButtonTrigger show />}
        triggerWhenOpen={<ButtonTrigger />}
        open
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
          <AppartmentsItem bhk={3} units={4} size={[3250, 1365]} />
          <AppartmentsItem bhk={2} units={2} size={[1250, 1365]} />
        </div>
      </Collapsible>
    </div>
  );
};

export {
  BuildingsDetails as BlocksDetails,
  SingleBuildingDetails,
  FloorsDetails,
};

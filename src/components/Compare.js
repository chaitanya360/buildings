import React from "react";
import { buildings } from "../data";
import { colors, sizes } from "../utility";
import { getAbsoluteFlatNum, getFlatNum } from "../utility/functions";
import styles from "./components.module.css";
import Image from "./Image";

const Icon = ({ name, width = "40px", onClick }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <img
          width="100%"
          height="100%"
          src={`${process.env.PUBLIC_URL}/images/icons/${name}.svg`}
          alt="location icon"
        />
      </div>
    </>
  );
};

const Header = ({ handleClose }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#005E5F",
        fontSize: sizes.large,
        padding: "10px",
        color: "white",
        justifyContent: "space-between",
      }}
    >
      <div className={styles.compare_title}>Compare Flats</div>
      <Icon name="close" onClick={handleClose} />
    </div>
  );
};

const ItemHeader = ({ handleRemoveItem, flatNum }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span
            style={{
              fontSize: sizes.large,
              color: "#003E3F",

              flex: "1",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Flat no. {flatNum}
          </span>
          <Icon name="trash" width="30px" onClick={handleRemoveItem} />
        </div>
        <div
          style={{
            fontSize: "1.9rem",
            color: "#003E3F",
            fontWeight: 400,
            paddingBlock: "5px",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          Flat Plan
        </div>
      </div>
    </>
  );
};

const DetailItem = ({ detailKey = "Fruit", value = "Mango" }) => {
  return (
    <div
      style={{
        marginBlock: "10px",
        fontSize: sizes.medium,
        paddingInline: "10px",
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "400px",
        color: "white",
      }}
    >
      <div>{detailKey}</div>
      <div style={{ marginLeft: "10vw" }}>{value}</div>
    </div>
  );
};

const Item = ({ blockId, flatId, floorId, details, handleRemoveItem }) => {
  return (
    <div className={styles.compare_item}>
      <ItemHeader
        handleRemoveItem={handleRemoveItem}
        flatNum={getAbsoluteFlatNum(blockId, floorId, flatId)}
      />
      <div>
        <Image
          src={
            floorId === "floor1"
              ? `${blockId}/first/${getFlatNum(flatId)}`
              : `${blockId}/typical/${getFlatNum(flatId)}`
          }
        />
      </div>
      <div
        style={{
          borderTop: "1px solid black",
          paddingTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: sizes.large,
            color: colors.light_green,
            fontWeight: 400,
            paddingBlock: "10px",
            width: "fit-content",
            margin: "auto",
          }}
        >
          Flat Details
        </div>
        <div
          style={{
            width: "fit-content",
            padding: "10px 20px",
            backgroundColor: colors.light_green,
            borderRadius: "10px",
            marginBottom: "40px",
          }}
        >
          {Object.entries(details).map(([key, value]) => (
            <DetailItem detailKey={key} value={value} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

function Compare({ compareItemsIds, setCompareItemsId, setShowCompare }) {
  const handleRemoveItem = (targetItemId) => {
    if (compareItemsIds.length === 1) {
      setCompareItemsId([]);
      setShowCompare(false);
    } else
      setCompareItemsId((ItemsIds) =>
        ItemsIds.filter((item) => item !== targetItemId)
      );
  };

  return (
    <div className={styles.list}>
      <div
        className={styles.compare_wrapper}
        style={{ backgroundColor: colors.light_green }}
      >
        <div
          className={styles.compare_body}
          id="gredient_bg"
          style={{
            width: "98%",
            height: "100%",
            paddingBottom: "50px",
            marginTop: "20px",
          }}
        >
          <Header handleClose={() => setShowCompare(false)} />
          <div
            style={{
              display: "flex",
              overflow: "scroll",
              width: "100%",
              height: "100%",
            }}
            className={styles.no_scroll}
          >
            {compareItemsIds.map((item) => (
              <Item
                key={getAbsoluteFlatNum(
                  item.blockId,
                  item.floorId,
                  item.flatId
                )}
                flatId={item.flatId}
                blockId={item.blockId}
                floorId={item.floorId}
                details={
                  buildings[item.blockId].flats[getFlatNum(item.flatId) - 1]
                    .specifications
                }
                handleRemoveItem={() => handleRemoveItem(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compare;

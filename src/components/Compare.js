import React from "react";
import { colors, sizes } from "../utility";
import { getFlatNum } from "../utility/functions";
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
        backgroundColor: colors.blue,
        fontSize: sizes.ex_large,
        padding: "20px",
        color: "white",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          paddingInline: "20px",
          borderLeft: "5px solid",
          borderColor: colors.pink,
        }}
      >
        Compare Flats
      </div>
      <Icon name="close" onClick={handleClose} />
    </div>
  );
};

const ItemHeader = ({ handleRemoveItem }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Icon name="trash" width="30px" onClick={handleRemoveItem} />
        </div>
        <div
          style={{
            fontSize: sizes.large,
            color: colors.blue,
            fontWeight: 300,
            paddingBlock: "10px",
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
        borderBottom: "1px solid grey",
        paddingInline: "10px",
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "400px",
      }}
    >
      <div style={{ color: colors.font_medium }}>{detailKey}</div>
      <div>{value}</div>
    </div>
  );
};

const Item = ({
  blockId,
  flatNum,
  details,
  handleRemoveItem = { handleRemoveItem },
}) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <ItemHeader handleRemoveItem={handleRemoveItem} />
      <div>
        <Image src={`${blockId}/${flatNum}`} />
      </div>
      <div
        style={{
          borderTop: "1px solid black",
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            fontSize: sizes.large,
            color: colors.blue,
            fontWeight: 300,
            paddingBlock: "10px",
            width: "fit-content",
          }}
        >
          Flat Details
        </div>
        {Object.entries(details).map(([key, value]) => (
          <DetailItem detailKey={key} value={value} />
        ))}
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
    <div className={styles.compare_wrapper}>
      <div className={styles.compare_body}>
        <Header handleClose={() => setShowCompare(false)} />
        <div
          style={{
            display: "flex",
            overflow: "scroll",
          }}
        >
          {compareItemsIds.map((item) => (
            <Item
              flatNum={getFlatNum(item.flatId)}
              blockId={item.blockId}
              details={{
                Drawing: "11 x 12",
                Bed: "12 x 13",
                Kitchen: "14 x 15",
              }}
              handleRemoveItem={() => handleRemoveItem(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Compare;

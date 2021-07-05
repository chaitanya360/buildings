import React from "react";

function VirtualTour(props) {
  const { blockId, floorId, flatId } = props.match.params;
  console.log(blockId, floorId, flatId);

  const GetVirtualTourFlat = () => {
    if (
      blockId === "blocka" &&
      floorId === "floor8" &&
      (flatId === "flat2" || flatId === "flat3")
    )
      return (
        <iframe
          width="100vw"
          height="100vh"
          style={{
            width: "100%",
            height: "100vh",
            border: "none",
            maxWidth: "100%",
          }}
          frameBorder="0"
          allowFullScreen
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          scrolling="no"
          src="https://btvrprojects.s3.ap-south-1.amazonaws.com/2+BHK+Merge/index.htm"
        ></iframe>
      );
    else if (
      blockId === "blocka" &&
      floorId === "floor8" &&
      (flatId === "flat1" || flatId === "flat8")
    )
      return (
        <iframe
          width="100vw"
          height="100vh"
          style={{
            width: "100%",
            height: "100vh",
            border: "none",
            maxWidth: "100%",
          }}
          frameborder="0"
          allowfullscreen
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          scrolling="no"
          src="https://btvrprojects.s3.ap-south-1.amazonaws.com/RUNWAL_MERGE+TOURS/index.htm"
        ></iframe>
      );
    else
      return (
        <center>
          <h1 style={{ margin: "20px", color: "rgba(0,0,0,0.9)  " }}>
            Currently only available in{" "}
            <span style={{ color: "tomato" }}>A801,A802,A803,A808</span>
          </h1>
        </center>
      );
  };

  return <GetVirtualTourFlat />;
}

export default VirtualTour;

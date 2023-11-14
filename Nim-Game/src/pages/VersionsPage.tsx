import React from "react";

const VersionsPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <button style={{ width: "30%", height: "10%" }}>v1</button>
      <button style={{ width: "30%", height: "10%" }}>v2</button>
    </div>
  );
};

export default VersionsPage;

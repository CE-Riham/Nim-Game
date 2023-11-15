import React, { FC } from "react";

type VersionsProps = {
  setCurrentPage: (nextPage: string) => void;
};
const VersionsPage: FC<VersionsProps> = ({ setCurrentPage }) => {
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
      <button
        style={{ width: "30%", height: "10%" }}
        onClick={() => {
          setCurrentPage("VersionOne");
          console.log("Version 1");
        }}
      >
        v1
      </button>
      <button
        style={{ width: "30%", height: "10%" }}
        onClick={() => {
          setCurrentPage("VersionTwo");
          console.log("Version 2");
        }}
      >
        v2
      </button>
    </div>
  );
};

export default VersionsPage;

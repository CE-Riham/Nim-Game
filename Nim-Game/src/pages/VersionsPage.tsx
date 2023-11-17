import React, { FC } from "react";
import { Game } from "../App";

type VersionsProps = {
  setCurrentPage: (nextPage: string) => void;
  setGameSettings: (settings: any) => void;
};
const VersionsPage: FC<VersionsProps> = ({
  setCurrentPage,
  setGameSettings,
}) => {
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
          setCurrentPage("ConfigPage");
          setGameSettings(
            (prevSettings: Game): Game => ({
              ...prevSettings,
              version: "version1",
            })
          );
        }}
      >
        v1
      </button>
      <button
        style={{ width: "30%", height: "10%" }}
        onClick={() => {
          setCurrentPage("ConfigPage");
          setGameSettings(
            (prevSettings: Game): Game => ({
              ...prevSettings,
              version: "version2",
            })
          );
        }}
      >
        v2
      </button>
    </div>
  );
};

export default VersionsPage;

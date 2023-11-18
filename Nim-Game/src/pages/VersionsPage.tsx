import React, { FC } from "react";
import { Game, gameDefault } from "../App";
import TransparentButton from "../components/TransparentButton";

type VersionsProps = {
  setCurrentPage: (nextPage: string) => void;
  setGameSettings: (settings: any) => void;
};
const VersionsPage: FC<VersionsProps> = ({
  setCurrentPage,
  setGameSettings,
}) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img
        src={"/src/assets/versionPage/versionsBackground.svg"}
        style={{
          zIndex: "-1",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
        }}
      />

      {/* Buttons */}
      <div
        style={{
          width: "56%",
          position: "absolute",
          top: "36.5%",
          left: "22%",
          height: "36%",
          justifyContent: "space-between",
          display: "flex",
          zIndex: "2",
        }}
      >
        <button
          style={{
            top: "0",
            width: "46%",
            height: "100%",
            backgroundColor: "transparent",
            border: "0",
          }}
          onMouseEnter={() => {
            console.log("enter");
            // return(<img
            //   src={"/src/assets/versionPage/v1Before.svg"}
            //   style={{
            //     zIndex: "3",
            //     width: "40%",
            //   }}
            // />);
          }}
          onClick={() => {
            setCurrentPage("ConfigPage");
            setGameSettings(
              (prevSettings: Game): Game => ({
                ...prevSettings,
                version: "version1",
              })
            );
          }}
        />

        <button
          style={{
            top: "0",
            width: "46%",
            height: "100%",
            backgroundColor: "transparent",
            border: "0",
          }}
          onMouseEnter={() => {
            console.log("enter");
          }}
          onClick={() => {
            setCurrentPage("ConfigPage");
            setGameSettings(
              (prevSettings: Game): Game => ({
                ...prevSettings,
                version: "version2",
              })
            );
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "89.6%",
          left: "1.2%",
          width: "30%",
          height: "15%",
        }}
      >
        <button
          style={{
            width: "30%",
            height: "52%",
            backgroundColor: "transparent",
            border: "0",
          }}
          onClick={() => {
            setCurrentPage("WelcomePage");
            setGameSettings(gameDefault);
          }}
        ></button>
      </div>
    </div>
  );
};

export default VersionsPage;

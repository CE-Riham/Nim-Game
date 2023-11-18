import React, { FC, useEffect, useState } from "react";
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
  const [isHovered1, setHovered1] = useState(false);
  const [isHovered2, setHovered2] = useState(false);

  const handleMouseEnter1 = () => {
    setHovered1(true);
  };
  const handleMouseLeave1 = () => {
    setHovered1(false);
  };
  const handleMouseEnter2 = () => {
    setHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setHovered2(false);
  };
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
          top: "39%",
          left: "22%",
          height: "36%",
          justifyContent: "space-between",
          display: "flex",
          zIndex: "3",
        }}
      >
        {/* version1 */}
        <button
          style={{
            top: "0",
            width: "46%",
            height: "100%",
            backgroundColor: "transparent",
            border: "0",
            cursor: isHovered1 ? "pointer" : "default",
          }}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
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
        {/* version2 */}
        <button
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          style={{
            top: "0",
            width: "46%",
            height: "100%",
            backgroundColor: "transparent",
            border: "0",
            cursor: isHovered2 ? "pointer" : "default",
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
      {/* back */}
      <div
        style={{
          position: "absolute",
          top: "89.6%",
          left: "1.2%",
          width: "30%",
          height: "15%",
        }}
      >
        <TransparentButton
          width={30}
          height={52}
          onClick={() => {
            setCurrentPage("WelcomePage");
            setGameSettings(gameDefault);
          }}
        ></TransparentButton>
      </div>
      {/* version 1 hover */}
      {!isHovered1 && (
        <img
          src={"/src/assets/versionPage/v1Before.svg"}
          style={{
            zIndex: "3",
            position: "absolute",
            top: "42%",
            left: "26%",
            height: "30%",
          }}
        />
      )}
      {isHovered1 && (
        <img
          src={"/src/assets/versionPage/v1After.svg"}
          style={{
            zIndex: "3",
            position: "absolute",
            top: "42%",
            left: "26%",
            height: "30%",
          }}
          alt="version 1 rules"
        />
      )}

      {/* version 2 hover */}
      {!isHovered2 && (
        <img
          src={"/src/assets/versionPage/v2Before.svg"}
          style={{
            zIndex: "3",
            position: "absolute",
            top: "42%",
            left: "59%",
            height: "30%",
          }}
        />
      )}
      {isHovered2 && (
        <img
          src={"/src/assets/versionPage/v2After.svg"}
          style={{
            zIndex: "3",
            position: "absolute",
            top: "42%",
            left: "59%",
            height: "30%",
          }}
          alt="version 2 rules"
        />
      )}
    </div>
  );
};

export default VersionsPage;

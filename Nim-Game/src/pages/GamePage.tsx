import React, { FC } from "react";
import { Game, gameDefault } from "../App";
import TransparentButton from "../components/TransparentButton";

type GameProps = {
  setCurrentPage: (nextPage: string) => void;
  setGameSettings: (settings: any) => void;
  gameSettings: Game;
};

const GamePage: FC<GameProps> = ({
  setCurrentPage,
  setGameSettings,
  gameSettings,
}) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img
        src={"/src/assets/gamePage/gameBackround.svg"}
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
          width: "36.8%",
          position: "absolute",
          top: "87.8%",
          left: "3.7%",
          height: "8%",
          justifyContent: "space-between",
          display: "flex",
          zIndex: "3",
          backgroundColor: "transparent",
          // border: "2px solid black",
        }}
      >
        {/* Back Button */}
        <TransparentButton
          width={25}
          onClick={() => {
            setCurrentPage("ConfigPage");
          }}
        />
      </div>
      <div
        style={{
          display: "grid",
          flexWrap: "wrap",
          padding: "10px",
          backgroundColor: "transparent",
          width: "35.7%",
          height: "43%",
          top: "33%",
          left: "3.7%",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid black",
        }}
      >
        {/* //version 2 */}
        {gameSettings.version === "version2" &&
          gameSettings.piles.map((numberOfStones: number, index: number) => {
            const pile = [];
            for (let i = 0; i < numberOfStones; i++) {
              pile.push(
                <button
                  key={`${index}-${i}-v2`}
                  onClick={() => {
                    console.log("remove");
                  }}
                >
                  Stone
                </button>
              );
            }
            return (
              <div
                style={{
                  display: "flex",
                  backgroundColor: "red",
                  justifyContent: "center",
                  margin: "10px",
                  padding: "5px",
                  borderBlockColor: "black",
                }}
              >
                {...pile}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GamePage;

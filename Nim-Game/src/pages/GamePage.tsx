import React, { FC } from "react";
import { Game, gameDefault } from "../App";

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
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "20px",
          backgroundColor: "Blue",
          width: "70%",
          height: "70%",
          top: "15%",
          left: "15%",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        //version 2
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

          //version 1
          {gameSettings.version === "version2" &&
          gameSettings.piles.map((numberOfStones: number, index: number) => {
            const pile = [];
            for (let i = 0; i < numberOfStones; i++) {
              pile.push(
                <button
                  key={`${index}-${i}-v1`}
                  onClick={() => {
                    console.log("split");
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


      <button
        style={{ width: "30%", height: "10%" }}
        onClick={() => {
          setCurrentPage("ConfigPage");
        }}
      >
        back
      </button>
    </div>
  );
};

export default GamePage;

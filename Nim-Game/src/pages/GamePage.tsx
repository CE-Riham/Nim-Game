import React, { FC, useState } from "react";
import { Game } from "../App";
import TransparentButton from "../components/TransparentButton";

type GameProps = {
  setCurrentPage: (nextPage: string) => void;
  gameSettings: Game;
  setGameSettings: (settings: any) => void;
};

const GamePage: FC<GameProps> = ({
  setCurrentPage,
  gameSettings,
  setGameSettings,
}) => {
  const [removedPile, setRemovedPile] = useState(-1);
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
      {/* text */}
      <div
        style={{
          width: "13%",
          height: "3.5%",
          position: "absolute",
          top: "16%",
          left: "15.5%",
          paddingTop: "10px",
          display: "flex",
          justifyContent: "center",
          // border: "2px solid black",
        }}
      >
        <h1>
          {gameSettings.turn === true
            ? "Player 1 turn"
            : `${gameSettings.player2} turn`}
        </h1>
      </div>
      {/* Buttons */}
      <div
        style={{
          width: "36.8%",
          position: "absolute",
          top: "87.8%",
          left: "3.7%",
          height: "8%",
          zIndex: "3",
          backgroundColor: "transparent",
          // border: "2px solid black",
        }}
      >
        {/* Back Button */}
        <TransparentButton
          width={25}
          top={0}
          left={0}
          onClick={() => {
            setCurrentPage("ConfigPage");
          }}
        />
        {/* play / next */}
        <TransparentButton
          width={25}
          top={0}
          left={75}
          onClick={() => {
            setRemovedPile(-1);
            if (gameSettings.player2 === "computer") {
              const newPiles = [...gameSettings.piles];
              let pileIndex = -1;
              if (gameSettings.difficulty === "easy") {
                pileIndex = Math.floor(Math.random() * newPiles.length);
              } else if (gameSettings.difficulty === "medium") {
                for (let i = 0; i < newPiles.length; i++) {
                  if (newPiles[i] > 0) {
                    pileIndex = i;
                    break;
                  }
                }
              }
              if (pileIndex !== -1 && newPiles[pileIndex] > 0) {
                let flag = 0;
                for (let i = 0; i < gameSettings.piles.length; i++)
                  flag += gameSettings.piles[i];
                if (flag === 1) {
                  let winner =
                    gameSettings.turn !== true
                      ? "Player 1 win"
                      : `${gameSettings.player2} win`;
                  alert(winner);
                }
                newPiles[pileIndex]--;
                setGameSettings((prevSettings: Game): Game => {
                  return {
                    ...prevSettings,
                    piles: [...newPiles],
                    turn: !prevSettings.turn,
                  };
                });
              }
            } else {
              setGameSettings((prevSettings: Game): Game => {
                return {
                  ...prevSettings,
                  turn: !prevSettings.turn,
                };
              });
            }
          }}
        />
      </div>

      {/* piles */}
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
        }}
      >
        {/* //version 1 */}
        {gameSettings.version === "version1" &&
          gameSettings.piles.map(
            (numberOfStones: number, pileIndex: number) => {
              const tmp = [];
              for (let i = 0; i < numberOfStones; i++) {
                tmp.push(
                  <button
                    key={`${pileIndex}-${i}-v1`}
                    onClick={() => {
                      console.log("remove");
                      if (removedPile === -1 || pileIndex === removedPile) {
                        setRemovedPile(pileIndex);
                        const tmp = [...gameSettings.piles];
                        tmp[pileIndex]--;
                        let flag = 0;
                        for (let i = 0; i < gameSettings.piles.length; i++)
                          flag += gameSettings.piles[i];
                        if (flag === 1) {
                          let winner =
                            gameSettings.turn !== true
                              ? "Player 1 win"
                              : `${gameSettings.player2} win`;
                          alert(winner);
                        }
                        setGameSettings((prevSettings: Game): Game => {
                          return {
                            ...prevSettings,
                            piles: [...tmp],
                          };
                        });
                      } else {
                        alert("Can't remove from more than one pile !!!");
                      }
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
                    // backgroundColor: "red",
                    justifyContent: "center",
                    margin: "10px",
                    padding: "5px",
                    borderBlockColor: "black",
                  }}
                >
                  {...tmp}
                </div>
              );
            }
          )}

          {/* ///////////////////////////////////////////////////////////// */}
          {/* //version 1 */}
        {gameSettings.version === "version2" &&
          gameSettings.piles.map(
            (numberOfStones: number, pileIndex: number) => {
              const tmp = [];
              for (let i = 0; i < numberOfStones; i++) {
                tmp.push(
                  <button
                    key={`${pileIndex}-${i}-v2`}
                    onClick={() => {
                      console.log("remove");
                      if (removedPile === -1 || pileIndex === removedPile) {
                        setRemovedPile(pileIndex);
                        const tmp = [...gameSettings.piles];
                        tmp[pileIndex]--;
                        let flag = 0;
                        for (let i = 0; i < gameSettings.piles.length; i++)
                          flag += gameSettings.piles[i];
                        if (flag === 1) {
                          let winner =
                            gameSettings.turn !== true
                              ? "Player 1 win"
                              : `${gameSettings.player2} win`;
                          alert(winner);
                        }
                        setGameSettings((prevSettings: Game): Game => {
                          return {
                            ...prevSettings,
                            piles: [...tmp],
                          };
                        });
                      } else {
                        alert("Can't remove from more than one pile !!!");
                      }
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
                    // backgroundColor: "red",
                    justifyContent: "center",
                    margin: "10px",
                    padding: "5px",
                    borderBlockColor: "black",
                  }}
                >
                  {...tmp}
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default GamePage;

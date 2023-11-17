import React, { FC, useState } from "react";
import { Game, gameDefault } from "../App";

type ConfigProps = {
  setCurrentPage: (nextPage: string) => void;
  setGameSettings: (settings: any) => void;
  gameSettings: Game;
};

const ConfigPage: FC<ConfigProps> = ({
  setCurrentPage,
  setGameSettings,
  gameSettings,
}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <>
      {gameSettings.player2 === "computer" && (
        <div style={{ backgroundColor: "pink" }}>
          <button
            onClick={() => {
              setGameSettings(
                (prevSettings: Game): Game => ({
                  ...prevSettings,
                  difficulty: "easy",
                })
              );
            }}
          >
            Easy
          </button>
          <button
            onClick={() => {
              setGameSettings(
                (prevSettings: Game): Game => ({
                  ...prevSettings,
                  difficulty: "medium",
                })
              );
            }}
          >
            Medium
          </button>
          <button
            onClick={() => {
              setGameSettings(
                (prevSettings: Game): Game => ({
                  ...prevSettings,
                  difficulty: "hard",
                })
              );
            }}
          >
            Hard
          </button>
        </div>
      )}
      <div style={{ backgroundColor: "red" }}>
        {gameSettings.piles.map((numberOfStones: number, index: number) => {
          return (
            <button
              key={index}
              onClick={() => {
                setGameSettings((prevSettings: Game): Game => {
                  const tmp = [...gameSettings.piles];
                  tmp[index]++;
                  if (tmp[index] === 11) tmp[index] = 1;
                  return {
                    ...prevSettings,
                    piles: [...tmp],
                  };
                });
              }}
            >
              {numberOfStones}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => {
          setGameSettings(
            (prevSettings: Game): Game => ({
              ...prevSettings,
              piles: [...prevSettings.piles, 1],
            })
          );
        }}
      >
        add a pile
      </button>
      <button
        style={{ width: "30%", height: "10%" }}
        onClick={() => {
          setCurrentPage("VersionsPage");
          setGameSettings(gameDefault);
        }}
      >
        back
      </button>
      <button
        onClick={() => {
          setGameSettings(
            (prevSettings: Game): Game => ({
              ...prevSettings,
              player2:
                prevSettings.player2 === "computer" ? "player2" : "computer",
            })
          );
        }}
      >
        {gameSettings.player2 === "computer"
          ? "2 Players"
          : "Play with computer"}
      </button>
      <button
        onClick={() => {
          if (gameSettings.piles.length === 0) {
            alert("There are no piles to start the game!");
          } else setCurrentPage("GamePage");
        }}
      >
        Start playing
      </button>
    </>
  );
};

export default ConfigPage;

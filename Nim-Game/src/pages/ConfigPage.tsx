import React, { FC } from "react";
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
  return (
    <>
      <div>
        {gameSettings.piles.map((numberOfStones: number, index: number) => {
          return (
            <button
              key={index}
              onClick={() => {
                setGameSettings((prevSettings: Game): Game => {
                  const tmp = [...gameSettings.piles];
                  tmp[index]++;
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
      <div>ConfigrationsPage</div>
      <button
        style={{ width: "30%", height: "10%" }}
        onClick={() => {
          setCurrentPage("VersionsPage");
          setGameSettings(gameDefault);
        }}
      >
        back
      </button>
    </>
  );
};

export default ConfigPage;

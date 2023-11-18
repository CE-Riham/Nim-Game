import React, { FC } from "react";
import { Game } from "../App";

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
    <div style={{}}>
      <h2>Game Page</h2>
      <div>
        {gameSettings.piles.map((numberOfStones: number, index: number) => (
          <div key={index} style={{ display: "flex", flexDirection: "row" }}>
            {[...Array(numberOfStones)].map((_, stoneIndex) => (
              <button
                key={stoneIndex}
                onClick={() => {
                  // handlePlayerMove(index);
                }}
                disabled={numberOfStones === 0} // Disable the button if no stones in the pile
              >
                {stoneIndex + 1}
              </button>
            ))}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          // Logic to handle computer's move
          // Update the game state accordingly
          // ...
          // Check for a winner or switch back to the player's turn
          // ...
          // Update the game state if needed
          // setCurrentGameState(newGameState);
        }}
      >
        Computer's Move
      </button>
      <button
        style={{ width: "30%", height: "10%" }}
        onClick={() => {
          // Logic to end the game and navigate to a result page
          setCurrentPage("ResultPage");
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default GamePage;

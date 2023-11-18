import React, { FC, useState } from "react";
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
  const [selectedPile, setSelectedPile] = useState<number | null>(null);
  const [stonesToPull, setStonesToPull] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handlePullStones = () => {
    if (selectedPile !== null && stonesToPull !== null) {
      // Check if the entered value is a valid move
      if (
        stonesToPull > 0 &&
        stonesToPull < gameSettings.piles[selectedPile] &&
        stonesToPull !== gameSettings.piles[selectedPile] / 2
      ) {
        // Implement your logic here to update the game state
        // For example, split the pile into two groups
        const newPiles = [...gameSettings.piles];
        newPiles[selectedPile] -= stonesToPull; // Reduce the stones in the selected pile
        newPiles[selectedPile] = stonesToPull; // Set the first group in the selected pile

        // Insert a new pile with the remaining stones
        newPiles.splice(
          selectedPile + 1,
          0,
          gameSettings.piles[selectedPile] - stonesToPull
        );

        // Update the game state with the new piles
        setGameSettings((prevSettings: Game) => ({
          ...prevSettings,
          piles: newPiles,
        }));

        // Reset error message if move is successful
        setErrorMessage(null);
      } else {
        // Handle invalid move (e.g., display an error message)
        setErrorMessage(
          "Invalid move. Please choose a valid number of stones to pull that is not equal to half of the pile."
        );
      }

      // Reset selectedPile and stonesToPull after the move is handled
      setSelectedPile(null);
      setStonesToPull(null);
    }
  };

  return (
    <div>
      <h2>Game Page</h2>
      <div>
        {gameSettings.piles.map((numberOfStones: number, index: number) => (
          <div key={index} style={{ display: "flex", flexDirection: "row" }}>
            {[...Array(numberOfStones)].map((_, stoneIndex) => (
              <button
                key={stoneIndex}
                onClick={() => {
                  // handlePlayerMove(index);
                  // Set the selected pile and show the input field
                  setSelectedPile(index);
                  setStonesToPull(null);
                  // Reset error message
                  setErrorMessage(null);
                }}
                disabled={numberOfStones === 0} // Disable the button if no stones in the pile
              >
                {stoneIndex + 1}
              </button>
            ))}
            {/* Button to pull stones */}
            <button
              onClick={() => {
                // Show the input field when the button is clicked
                setSelectedPile(index);
                setStonesToPull(null);
                // Reset error message
                setErrorMessage(null);
              }}
            >
              Pull
            </button>
          </div>
        ))}
      </div>

      {/* Input field for pulling stones */}
      {selectedPile !== null && (
        <div>
          <input
            type="number"
            min={1}
            max={gameSettings.piles[selectedPile]}
            value={stonesToPull || ""}
            onChange={(e) => setStonesToPull(Number(e.target.value))}
          />
          <button onClick={handlePullStones}>Done</button>
        </div>
      )}

      {/* Display error message */}
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

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

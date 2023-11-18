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
        stonesToPull <= gameSettings.piles[selectedPile] &&
        stonesToPull !== gameSettings.piles[selectedPile] / 2
      ) {
        // Implement your logic based on the game version
        const newPiles = [...gameSettings.piles];
        newPiles[selectedPile] -= stonesToPull;

        // Update the game state with the new piles
        setGameSettings((prevSettings: Game) => ({
          ...prevSettings,
          piles: newPiles,
        }));

        // Reset error message if move is successful
        setErrorMessage(null);

        // Reset selectedPile and stonesToPull after the move is handled
        setSelectedPile(null);
        setStonesToPull(null);
      } else {
        // Handle invalid move (e.g., display an error message)
        setErrorMessage(
          "Invalid move. Please choose a valid number of stones to pull that is not equal to half of the pile."
        );
      }
    }
  };

  const handleRemoveStone = (pileIndex: number, stoneIndex: number) => {
    if (gameSettings.version === "version2") {
      const newPiles = [...gameSettings.piles];

      if (selectedPile === null) {
        // If no pile is selected, set the selected pile
        setSelectedPile(pileIndex);
      } else if (selectedPile !== pileIndex) {
        // If trying to remove from a different pile, show an error
        setErrorMessage("Incorrect remove. Remove stones from the same pile.");
        return;
      }

      // Reduce the number of stones in the selected pile by 1
      newPiles[pileIndex]--;

      // Update the game state with the new piles
      setGameSettings((prevSettings: Game) => ({
        ...prevSettings,
        piles: newPiles,
      }));

      // Reset error message
      setErrorMessage(null);
    } else {
      // Handle version1 logic (pulling stones)
      if (selectedPile !== null && stonesToPull !== null) {
        // Check if the entered value is a valid move
        if (
          stonesToPull > 0 &&
          stonesToPull < gameSettings.piles[selectedPile] &&
          stonesToPull !== gameSettings.piles[selectedPile] / 2
        ) {
          const newPiles = [...gameSettings.piles];
          newPiles[selectedPile] -= stonesToPull;

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
    }
  };

  const renderPullButton = () => {
    if (gameSettings.version === "version1" && selectedPile !== null) {
      return (
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
      );
    } else if (gameSettings.version === "version1") {
      return (
        <button
          onClick={() => {
            setSelectedPile(selectedPile);
            setStonesToPull(null);
            setErrorMessage(null);
          }}
        >
          Pull
        </button>
      );
    } else {
      // For all other versions, including version2, do not render the pull button
      return null;
    }
  };

  return (
    <div>
      <h2>Game Page</h2>
      <div>
        {gameSettings.piles.map((numberOfStones: number, pileIndex: number) => (
          <div
            key={pileIndex}
            style={{ display: "flex", flexDirection: "row" }}
          >
            {[...Array(numberOfStones)].map((_, stoneIndex) => (
              <button
                key={stoneIndex}
                onClick={() => {
                  // Handle stone removal based on the game version
                  handleRemoveStone(pileIndex, stoneIndex);
                }}
                disabled={numberOfStones === 0}
              >
                {stoneIndex + 1}
              </button>
            ))}
            {/* Button to pull stones */}
            {renderPullButton()}
          </div>
        ))}
      </div>

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

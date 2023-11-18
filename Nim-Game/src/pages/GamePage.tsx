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

  const isLastStoneRemoved = () => {
    const isEmpty = gameSettings.piles.every((pile) => pile === 0);
    console.log("Is last stone removed?", isEmpty);
    return isEmpty;
  };

  const handleWinner = (userWins: boolean) => {
    if (userWins) {
      // user wins
      setErrorMessage("You are winner");
    } else {
      //  user loses
      setErrorMessage("You are loser");
    }
  };
  const handleComputerMove = () => {
    if (gameSettings.version === "version2") {
      const newPiles = [...gameSettings.piles];
      let pileIndex = -1;

      // Easy
      if (gameSettings.difficulty === "easy") {
        pileIndex = Math.floor(Math.random() * newPiles.length);
      }

      // Medium
      else if (gameSettings.difficulty === "medium") {
        for (let i = 0; i < newPiles.length; i++) {
          if (newPiles[i] > 0) {
            pileIndex = i;
            break;
          }
        }
      }

      // Make the move
      if (pileIndex !== -1 && newPiles[pileIndex] > 0) {
        newPiles[pileIndex]--;
      }

      // Update
      setGameSettings((prevSettings: Game) => ({
        ...prevSettings,
        piles: newPiles,
      }));

      if (isLastStoneRemoved()) {
        handleWinner(true);
      }
    }
  };

  const handlePullStones = () => {
    if (selectedPile !== null && stonesToPull !== null) {
      if (
        stonesToPull > 0 &&
        stonesToPull <= gameSettings.piles[selectedPile] &&
        stonesToPull !== gameSettings.piles[selectedPile] / 2
      ) {
        const newPiles = [...gameSettings.piles];
        newPiles[selectedPile] -= stonesToPull;

        // Update
        setGameSettings((prevSettings: Game) => ({
          ...prevSettings,
          piles: newPiles,
        }));

        // Reset
        setErrorMessage(null);

        // Reset
        setSelectedPile(null);
        setStonesToPull(null);
      } else {
        //  invalid move
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
        // If no pile
        setSelectedPile(pileIndex);
      } else if (selectedPile !== pileIndex) {
        // If trying to remove from a different pile
        setErrorMessage("Incorrect remove. Remove stones from the same pile.");
        return;
      }

      newPiles[pileIndex]--;

      setGameSettings((prevSettings: Game) => ({
        ...prevSettings,
        piles: newPiles,
      }));
      if (isLastStoneRemoved()) {
        handleWinner(true);
      }

      // Reset
      setErrorMessage(null);
    } else {
      if (selectedPile !== null && stonesToPull !== null) {
        // Check valid move
        if (
          stonesToPull > 0 &&
          stonesToPull < gameSettings.piles[selectedPile] &&
          stonesToPull !== gameSettings.piles[selectedPile] / 2
        ) {
          const newPiles = [...gameSettings.piles];
          newPiles[selectedPile] -= stonesToPull;

          // Update s
          setGameSettings((prevSettings: Game) => ({
            ...prevSettings,
            piles: newPiles,
          }));

          // Check for a winner
          if (isLastStoneRemoved()) {
            handleWinner(true);
          }

          // Reset
          setErrorMessage(null);
        } else {
          // invalid move
          setErrorMessage(
            "Invalid move. Please choose a valid number of stones to pull that is not equal to half of the pile."
          );
        }

        // Reset
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
                  handleRemoveStone(pileIndex, stoneIndex);
                }}
                disabled={numberOfStones === 0}
              >
                {stoneIndex + 1}
              </button>
            ))}
            {}
            {renderPullButton()}
          </div>
        ))}
      </div>

      {}
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

      <button
        onClick={() => {
          setSelectedPile(null);
          handleComputerMove();
        }}
      >
        Computer's Move
      </button>
      <button
        style={{ width: "30%", height: "10%" }}
        onClick={() => {
          //  result page
          setCurrentPage("ResultPage");
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default GamePage;

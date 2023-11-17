import React, { FC } from 'react'
import { Game } from '../App';

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
      Hi
    </div>
  )
}

export default GamePage

import { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import VersionsPage from "./pages/VersionsPage";
import ConfigurationsPage from "./pages/ConfigPage";
import ConfigPage from "./pages/ConfigPage";

export type Game = {
  piles: number[];
  version: string | null;
  player2: string;
  difficulty: string;
};

export const gameDefault: Game = {
  piles: [],
  version: null,
  player2: "computer",
  difficulty: "easy",
};

function App() {
  const [currentPage, setCurrentPage] = useState("WelcomePage");
  const [gameSettings, setGameSettings] = useState<Game>(gameDefault);

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      {currentPage === "WelcomePage" && (
        <WelcomePage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "VersionsPage" && (
        <VersionsPage
          setCurrentPage={setCurrentPage}
          setGameSettings={setGameSettings}
        />
      )}
      {currentPage === "ConfigPage" && (
        <ConfigPage
          setCurrentPage={setCurrentPage}
          setGameSettings={setGameSettings}
          gameSettings = {gameSettings}
        />
      )}
    </div>
  );
}

export default App;

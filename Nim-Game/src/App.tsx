import { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import VersionsPage from "./pages/VersionsPage";
function App() {
  const [currentPage, setCurrentPage] = useState("WelcomePage");
  const [prevPage, setPrevPage] = useState("WelcomePage");

  const onClick = () => {
    console.log("Start clicked");
    if (prevPage === "WelcomePage") {
      setCurrentPage("VersionsPage");
    }
  };

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      {currentPage === "WelcomePage" && (
        <WelcomePage onClick={onClick}></WelcomePage>
      )}
      {currentPage === "VersionsPage" && <VersionsPage></VersionsPage>}
    </div>
  );
}

export default App;

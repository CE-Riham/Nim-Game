import { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import VersionsPage from "./pages/VersionsPage";
import VersionOne from "./pages/VersionOne";
import VersionTwo from "./pages/VersionTwo";
function App() {
  const [currentPage, setCurrentPage] = useState("WelcomePage");
  const [prevPage, setPrevPage] = useState("WelcomePage");

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      {/* <VersionsPage></VersionsPage> */}
      {currentPage === "WelcomePage" && (
        <WelcomePage
          onClick={() => {
            setCurrentPage("VersionsPage");
          }}
        />
      )}
      {currentPage === "VersionsPage" && (
        <VersionsPage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "VersionOne" && <VersionOne />}
      {currentPage === "VersionTwo" && <VersionTwo />}
    </div>
  );
}

export default App;

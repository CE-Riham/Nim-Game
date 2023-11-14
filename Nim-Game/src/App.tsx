import { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import VersionsPage from "./pages/VersionsPage";
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
        ></WelcomePage>
      )}
      {currentPage === "VersionsPage" && <VersionsPage></VersionsPage>}
    </div>
  );
}

export default App;

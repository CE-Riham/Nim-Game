import { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
function App() {
  const [currentPage, setCurrentPage] = useState("WelcomePage");
  const onClick = () => {
    console.log("Start clicked");
  };
  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <WelcomePage onClick={onClick}></WelcomePage>
    </div>
  );
}

export default App;

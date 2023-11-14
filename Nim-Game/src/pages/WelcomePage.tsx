import React from "react";
import TransparentButton from "../components/TransparentButton";
interface WelcomePageProps {
  onClick: () => void;
}
function WelcomePage({ onClick }: WelcomePageProps) {
  return (
    <div>
      <img
        src={"/src/assets/main.svg"}
        style={{ zIndex: "-1", position: "absolute" }}
      />
      <TransparentButton
        top="500px"
        left="1103px"
        width="300px"
        height="80px"
        onClick={onClick}
      />
    </div>
  );
}
export default WelcomePage;

import React, { FC, useEffect, useState } from "react";
import TransparentButton from "../components/TransparentButton";

type WelcomePageProps = {
  setCurrentPage: (nextPage: string) => void;
};

const WelcomePage: FC<WelcomePageProps> = ({ setCurrentPage }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img
        src={"/src/assets/welcome.svg"}
        style={{
          zIndex: "-1",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
        }}
      />
      <TransparentButton
        left={66}
        width={17}
        top={56}
        height={9}
        onClick={() => {
          setCurrentPage("VersionsPage");
        }}
      />
    </div>
  );
};
export default WelcomePage;

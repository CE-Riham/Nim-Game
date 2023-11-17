import React, { FC } from "react";
type ConfigProps = {
  setCurrentPage: (nextPage: string) => void;
  setGameSettings: (settings: any) => void;
};
const ConfigPage: FC<ConfigProps> = ({ setCurrentPage, setGameSettings }) => {
  return <div>ConfigrationsPage</div>;
};

export default ConfigPage;

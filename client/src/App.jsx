import React, { useState } from "react";
import Dashboard from "./component/Dashboard/Dashboard";
import BlockchainInfo from "./component/BlockchainInfo/BlockchainInfo";

function App() {
  const [screen, setScreen] = useState("dashboard");

  const handleNavigateToBlockchainInfo = () => {
    setScreen("blockchainInfo");
  };

  const handleBackToDashboard = () => {
    setScreen("dashboard");
  };

  return (
    <>
      {screen === "dashboard" && (
        <Dashboard onBlockchainInfoClick={handleNavigateToBlockchainInfo} />
      )}
      {screen === "blockchainInfo" && <BlockchainInfo onBack={handleBackToDashboard} />}
    </>
  );
}

export default App;

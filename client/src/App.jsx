import React, { useState, useEffect } from 'react';


import BlockchainInfo from './component/BlockchainInfo/BlockchainInfo';
import Dashboard from './component/Dashboard/Dashboard';
import Loader from './component/Loader/Loader';

function App() {
  const [screen, setScreen] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading (e.g., API calls, initialization) for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigateToBlockchainInfo = () => {
    setScreen('blockchainInfo');
  };

  const handleBackToDashboard = () => {
    setScreen('dashboard');
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {screen === 'dashboard' && (
        <Dashboard onBlockchainInfoClick={handleNavigateToBlockchainInfo} />
      )}
      {screen === 'blockchainInfo' && (
        <BlockchainInfo onBack={handleBackToDashboard} />
      )}
    </>
  );
}

export default App;

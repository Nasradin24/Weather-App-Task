import React, { useState } from 'react';
import Header from './components/Header';
import Middle from './components/Middle';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  const [showMiddle, setShowMiddle] = useState(false);

  const handleHomeClick = () => {
    setShowMiddle(true);
  };

  const handleCloseClick = () => {
    setShowMiddle(false);
  };

  return (
    <div className='app'>
      <Navbar onHomeClick={handleHomeClick} onCloseClick={handleCloseClick} />
      <div className='content'>
        <Header />
        {showMiddle && <Middle />}
      </div>
      <Footer />
      <Home />
    </div>
  );
}

export default App;

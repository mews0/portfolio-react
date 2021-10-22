import React from 'react';
import './App.css';
import Header from './components/Header';
import PortfolioContainer from './components/PortfolioContainer'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <PortfolioContainer></PortfolioContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
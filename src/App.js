import React from 'react';
import './App.css';
import Header from './components/Header';
import PortfolioContainer from './components/PortfolioContainer'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        {/* PortfolioContainer component renders About component by default.
            Else, it renders either Projects or Contact component
            based on which Nav component (nested in Header component) tab is selected. */}
        <PortfolioContainer></PortfolioContainer> 
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
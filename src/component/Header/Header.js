import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div>
      <header className="header">
        <h2>Chorki's first web series is "Morichika"</h2>
        <p><span className="custom-color">MORICHIKA</span> </p>
        <h3>Total Budget : <span className="custom-color">10000$</span> </h3>
      </header>
    </div>
  );
};

export default Header;
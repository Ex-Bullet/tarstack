import React from 'react';
import plane from '../../assets/airplane.svg';
import './Loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="plane">
        <img src={plane} className="navbar-image" alt="plane" />
      </div>
    </div>
  );
};

export default Loader;

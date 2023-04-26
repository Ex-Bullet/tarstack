import React from 'react';
import './Departure.css';

interface DepartureInfoProps {
  terminal: string;
  gate: string;
}

const DepartureInfo: React.FC<DepartureInfoProps> = ({ terminal, gate }) => {
  return (
    <div className="departure-info">
      <span>Terminal: {terminal}</span>
      <span>Gate: {gate}</span>
    </div>
  );
};

export default DepartureInfo;

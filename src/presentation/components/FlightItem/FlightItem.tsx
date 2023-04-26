import React from 'react';
import FlightStatus from '../FlightStatus/FlightStatus';
import DepartureInfo from '../DepartureInfo/DepartureInfo';
import './FlightItem.css';

interface FlightItemProps {
  flight: any;
}

const FlightItem: React.FC<FlightItemProps> = ({ flight }) => {
  return (
    <div className="flight-item">
      <div className="flight-info">
        <h4>{flight.airline.name}</h4>
        <h4>{flight.flight.number}</h4>
        <span>{flight.flight.iata}</span>
        <FlightStatus status={flight.status} />
      </div>
      <DepartureInfo
        terminal={flight.departure.terminal}
        gate={flight.departure.gate}
      />
    </div>
  );
};

export default FlightItem;

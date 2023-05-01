import React from 'react';
import FlightItem from '../Flight/Flight';
import './FlightList.css';

interface FlightListProps {
  flights: any[];
}

const FlightList: React.FC<FlightListProps> = ({ flights }) => {
  return (
    <div className="container">
      <div className="flight-list">
        {flights.map((flight) => (
          <FlightItem key={flight.flight.iata} flight={flight} />
        ))}
      </div>
    </div>
  );
};

export default FlightList;

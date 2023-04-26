import React from 'react';

interface FlightStatusProps {
  status: string;
}

const FlightStatus: React.FC<FlightStatusProps> = ({ status }) => {
  return <span className={`flight-status ${status}`}>{status}</span>;
};

export default FlightStatus;

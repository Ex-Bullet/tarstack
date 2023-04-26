import React, { useState } from 'react';
import { getFlights } from '../../hooks/getFlights';
import DatePicker from 'react-datepicker';
import Pagination from '../Pagination/Pagination';
import 'react-datepicker/dist/react-datepicker.css';
import './FlightSearch.css';
import { registerLocale } from "react-datepicker";
import { subDays } from 'date-fns';
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)

interface FlightSearchProps {
  onSearch: (flights: any[], totalPages: number) => void;
}

const FlightSearch: React.FC<FlightSearchProps> = ({ onSearch }) => {
  const [airline, setAirline] = useState<string>('');
  const [flightNumber, setFlightNumber] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchFlights = async (page: number) => {
    setIsLoading(true);
    const { flights, totalPages } = await getFlights(
      airline,
      flightNumber,
      date,
      page,
    );

    setTotalPages(totalPages);
    onSearch(flights, totalPages);
    setIsLoading(false);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    searchFlights(pageNumber);
  };

  return (
    <div className="flight-search-container">
      <h1>Flight Search</h1>
      <div className="flight-search">
        <input
          type="text"
          placeholder="Airline"
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
        />
        <input
          type="text"
          placeholder="Flight Number"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
        />
        <DatePicker
          className="datepicker"
          minDate={subDays(new Date(), 0)}
          locale="fr"
          selected={date}
          onChange={(date: Date) => setDate(date)}
        />
      </div>
      <div>
        <button className="button" onClick={() => searchFlights(1)}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default FlightSearch;

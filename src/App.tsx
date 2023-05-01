import { useState, useEffect } from 'react';
import Navbar from './presentation/components/Navbar/Navbar';
import FlightSearch from './presentation/components/FlightSearch/FlightSearch';
import FlightList from './presentation/components/Flights/Flights';
import Loader from './presentation/components/Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [flights, setFlights] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = (fetchedFlights: any[], totalPages: number) => {
    setFlights(fetchedFlights);
    setTotalPages(totalPages);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading && (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}
      <Navbar />
      <div className="container">
        <div className="box">
          <FlightSearch onSearch={handleSearch} />
          <FlightList flights={flights} />
        </div>
      </div>
    </>
  );
};

export default App;

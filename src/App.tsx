import { useState, useEffect } from 'react';
import Navbar from './presentation/components/Navbar/Navbar';
import FlightSearch from './presentation/components/FlightSearch/FlightSearch';
import FlightList from './presentation/components/FlightList/FlightList';
import Loader from './presentation/components/Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [flights, setFlights] = useState<any[]>([]);

  const handleSearch = (fetchedFlights: any[]) => {
    setFlights(fetchedFlights);
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

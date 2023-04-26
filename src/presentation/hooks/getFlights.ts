import axios from 'axios';
import { API_ACCESS_KEY } from './accessKey';

export const getFlights = async (
  airline: string,
  flightNumber: string,
  date: Date,
  page: number,
) => {
  const limit = 10;
  const offset = (page - 1) * limit;

  const response = await axios.get(`http://api.aviationstack.com/v1/flights`, {
    params: {
      access_key: API_ACCESS_KEY,
      airline_name: airline,
      flight_number: flightNumber,
      date: date.toISOString().split('T')[0],
      limit: limit,
      offset: offset,
    },
  });

  const totalPages = Math.ceil(response.data.pagination.total / limit);
  const flights = response.data.data;

  return { flights, totalPages };
};

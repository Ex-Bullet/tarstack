import axios from 'axios';
import { API_ACCESS_KEY } from './accessKey';

export const getFlights = async (
  airline: string,
  flightNumber: string,
  date: Date,
  page: number,
  limit: number = 10,
  offset: number = (page - 1) * limit,
): Promise<{ flights: any[]; totalPages: number }> => {
  const response = await axios.get(`http://api.aviationstack.com/v1/flights`, {
    params: {
      access_key: API_ACCESS_KEY,
      airline_name: airline,
      flight_number: flightNumber,
      date: date.toISOString().split('T')[0],
      limit,
      offset,
    },
  });

  const totalPages = Math.ceil(response.data.pagination.total / limit);
  const flights = response.data.data;

  return { flights, totalPages };
};

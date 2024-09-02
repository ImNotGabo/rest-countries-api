import React from 'react';
import BASE_URL from '../utils/constants';

export default function useFetchCountries() {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountries();
  }, []);

  return countries;
}

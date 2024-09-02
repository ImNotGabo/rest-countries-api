import React from 'react';
import { nanoid } from 'nanoid';

function Countries() {
  const BASE_URL = 'https://restcountries.com/v3.1/all';
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

  return countries.map(({ name, population, region, capital, flags }) => (
    <section key={nanoid()} className='country-card'>
      <img src={flags.png} alt={`Flag of ${name.common}`} className='country-flag' />
      <h3 className='country-name'>{name.common}</h3>
      <h4 className='country-detail'>
        Population: <span>{population.toLocaleString()}</span>
      </h4>
      <h4 className='country-detail'>
        Region: <span>{region}</span>
      </h4>
      <h4 className='country-detail'>
        Capital: <span>{capital ? capital[0] : 'N/A'}</span>
      </h4>
    </section>
  ));
}

export default Countries;

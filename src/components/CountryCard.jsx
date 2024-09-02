import { nanoid } from 'nanoid';
import useFetchCountries from '../hooks/useFetchingCountries';

function CountryCard() {
  const countries = useFetchCountries();

  return (
    <>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {countries.map((country) => {
          const { name, population, region, capital, flags } = country;
          return (
            <div key={nanoid()} className='country-card'>
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
            </div>
          );
        })}
      </section>
    </>
  );
}

export default CountryCard;

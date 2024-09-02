import { nanoid } from 'nanoid';
import useFetchCountries from '../hooks/useFetchingCountries';

function CountryCard() {
  const countries = useFetchCountries();

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10 p-4'>
      {countries.map((country) => {
        const { name, population, region, capital, flags } = country;
        return (
          <article key={nanoid()} className='bg-[#2b3743] rounded-md overflow-hidden shadow-lg w-[350px]'>
            <img src={flags.png} alt={`Flag of ${name.common}`} className='w-full h-[250px] object-cover' />
            <div className='bg-[#2b3743] py-4 px-5'>
              <h3 className='text-lg font-semibold text-white mb-3'>{name.common}</h3>
              <h4 className='text-sm text-gray-200 mb-1'>
                Population: <span className='font-light'>{population.toLocaleString()}</span>
              </h4>
              <h4 className='text-sm text-gray-200 mb-1'>
                Region: <span className='font-light'>{region}</span>
              </h4>
              <h4 className='text-sm text-gray-200'>
                Capital: <span className='font-light'>{capital ? capital[0] : 'N/A'}</span>
              </h4>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default CountryCard;

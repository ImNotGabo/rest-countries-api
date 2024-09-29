import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterByRegion from './components/FilterByRegion';
import CountryCard from './components/CountryCard';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <section className='mx-auto max-w-screen-2xl mb-8 px-4 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center'>
        <SearchBar />
        <FilterByRegion />
      </section>
      <CountryCard />
    </>
  );
}

export default App;


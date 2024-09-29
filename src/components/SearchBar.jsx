const SearchBar = () => {
  return (
    <input
      name='search'
      type='search'
      placeholder='Search for a country...'
      className='w-full md:w-1/3 p-4 rounded-md outline-none bg-[#2B3844] placeholder-[#ffffff] tracking-wide'
    />
  );
};

export default SearchBar;

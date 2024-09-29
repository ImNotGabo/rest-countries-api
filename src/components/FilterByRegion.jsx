const FilterByRegion = () => {
  return (
    <select name='regions' id='regions' className='p-4 rounded-md drop-shadow-md bg-[#2B3844] outline-none w-[300px]'>
      <option value='Filter by Region'>Filter by Region</option>
      <option value='Africa'>Africa</option>
      <option value='Americas'>Americas</option>
      <option value='Asia'>Asia</option>
      <option value='Europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
    </select>
  );
};

export default FilterByRegion;

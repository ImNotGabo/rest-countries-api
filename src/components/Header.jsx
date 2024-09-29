/* eslint-disable react/prop-types */
const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className='bg-[#2B3844] p-6 shadow-md w-full mb-12'>
      <div className='mx-auto max-w-[1500px] flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-white'>Where in the world?</h1>
        <button onClick={setDarkMode} className='text-white flex items-center'>
          {darkMode ? '🌞' : '🌙'}
          <span className='font-semibold'>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

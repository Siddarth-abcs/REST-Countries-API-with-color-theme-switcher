import React, { useState } from 'react';

export const Search = ({ updateUrl }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangeSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Call the function passed as a prop to update the URL with the search term
    !value ? updateUrl('https://restcountries.com/v3.1/all') : updateUrl(`https://restcountries.com/v3.1/name/${value}`);
  };

  return (
    <div class='max-w-md ml-4'>
      <div class="relative flex items-center h-14 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-16 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
    
        <input
          class="peer h-full w-5/6 outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search something.."
          value={searchTerm}
          onChange={handleChangeSearch}
        /> 
      </div>
    </div>
  );
};

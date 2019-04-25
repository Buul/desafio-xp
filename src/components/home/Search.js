import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../ui';

const Home = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const keyHandler = event => {
    if (event.key === 'Enter') onSearch(searchValue);
  };

  const handleChange = event => {
    setSearchValue(event.target.value);
    if (event.key === 'Enter') onSearch(searchValue);
  };

  return (
    <Input
      label="Busque por artistas, álbuns ou músicas"
      name="password"
      value={searchValue}
      onChange={handleChange}
      onKeyUp={keyHandler}
      onBlur={() => {
        onSearch(searchValue);
      }}
    />
  );
};

Home.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Home;

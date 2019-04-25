import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../ui';

const Home = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <Input
      label="Busque por artistas, álbuns ou músicas"
      name="password"
      value={searchValue}
      onChange={handleChange}
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

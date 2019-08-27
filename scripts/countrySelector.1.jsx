import React from 'react';
import Select from 'react-select';

const CountrySelector = props => {
  const { countries, country } = props;

  const options = [];
  countries.map(option =>
    options.push({ value: option.name, label: option.name })
  );
  const selectedCountry = country
    ? {
        value: country,
        label: country
      }
    : null;
  return (
    <Select
      options={options}
      onChange={option => onChange(option.value)}
      value={selectedCountry}
      placeholder="Select Country..."
    />
  );
};
export default CountrySelector;

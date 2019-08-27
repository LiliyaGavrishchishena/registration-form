import React from 'react';
import Select from 'react-select';

const CodeSelector = props => {
  const { codes, code } = props;

  const options = [];
  codes.map(option => options.push({ value: option.name, label: option.name }));
  const selectedcode = code
    ? {
        value: code,
        label: code
      }
    : null;
  return (
    <Select
      options={options}
      onChange={option => onChange(option.value)}
      value={selectedcode}
      placeholder="Select Code..."
    />
  );
};
export default CodeSelector;

import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Country = () => {
  const country = {
    name: 'Brazil',
    capital: 'Brasilia',
    flag: 'https://restcountries.eu/data/bra.svg',
    population: 206135893,
  };
  return (
    <div>{country.name}</div>
  );
};

export default Country.test;

describe('Home', () => {
  test('renders Dragons component', () => {
    render(<Country />);
    expect(screen.getByText('Brazil')).toBeInTheDocument();
  });
});

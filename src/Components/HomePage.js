/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCountries } from '../Redux/Countries';
import './HomePage.css';

const HomePage = () => {
  const [countryName, setCountry] = useState('');

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  useEffect(() => {
    if (!countryName) {
      dispatch(fetchCountries());
    }
  }, [dispatch, countryName]);
  const getCountry = () => {
    if (countryName) {
      dispatch(fetchCountries(countryName));
    }
  };

  return (
    <div>
      <h1>COVID-19 Tracker</h1>
      <input onChange={(e) => setCountry(e.target.value)} type="text" />
      <button type="button" onClick={getCountry}>Search</button>
      <div className="countries">
        {countries.map((country) => (
          <div
            role="button"
            tabIndex={0}
            className="country"
            key={country.country}
            style={{
              backgroundImage: `url(${country.countryInfo.flag})`,
            }}
            onClick={() => {
              navigate('/country/', {
                state: {
                  id: country.country,
                },
              });
            }}
          >
            <h2>{country.country}</h2>
            <p>
              Cases:
              {country.cases}
            </p>
            <p>
              Recovered:
              {country.recovered}
            </p>
            <p>
              Deaths:
              {country.deaths}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

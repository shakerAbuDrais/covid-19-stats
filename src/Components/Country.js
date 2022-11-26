import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../Redux/Countries';

const Country = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  useEffect(() => {
    dispatch(fetchCountries(location.state.id));
  }, [dispatch, location]);
  return (
    <div>
      <div className="countries">
        {countries.map((country) => (
          <div
            className="country"
            key={country.country}
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
export default Country;

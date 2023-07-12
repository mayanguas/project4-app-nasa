import './Apod.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Error from '../Error/Error';
import { today } from '../../data/data';

const Apod = () => {
  console.log(today);
  const [date, setDate] = useState(today);
  const [apod, setApod] = useState();
  const [apodError, setApodError] = useState(false);
  const [apodLoaded, setApodLoaded] = useState(false);

  // planetary/apod?date=${date}&api_key=${nasaApiKey}`;

  const getApodNasa = async () => {
    try {
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=ar93yA7I8ESqwthjtYnprKo4UVfFNojEao5hWfwN`
      );
      setApod(res);
      setApodLoaded(true);
    } catch (error) {
      setApodError('Fetching data from NASA failed', error);
    }
  };

  useEffect(() => {
    getApodNasa();
  }, [date]);

  return (
    <article id="apod-container">
      <div>
        <div>Select a date</div>
        <p>{date}</p>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          max={today}
          min="2015-01-01"
          onChange={(e) => {
            setDate(e.target.value.toLocaleString());
          }}
        />
      </div>
      <div>
        {apodLoaded ? (
          <div>
            <div>
              <img src={apod.data?.url} alt="Image from NASA" />
            </div>
            <div>
              <h2>{apod.data?.title}</h2>
              <p>{apod.data?.explanation}</p>
              {/* A veces el dato del copyright no existe debido a que es público */}
              <p>
                Copyright:{' '}
                {apod.data?.copyright ? apod.data?.copyright : 'Public'}
              </p>
            </div>
          </div>
        ) : (
          'Cargando...'
        )}
      </div>
    </article>
  );
};

export default Apod;

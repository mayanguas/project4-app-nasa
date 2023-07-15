import './Rover.css';
import { useEffect, useState } from 'react';
import { today } from '../../data/data';

import axios from 'axios';
import { ErrorApi, ErrorDate, Loading } from '../Error/Error';

const Rover = () => {
  const [date, setDate] = useState(today);
  const [rover, setRover] = useState();
  const [roverError, setRoverError] = useState(false);
  const [roverLoaded, setRoverLoaded] = useState(false);

  const getRoverNasa = async () => {
    try {
      const res = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=ar93yA7I8ESqwthjtYnprKo4UVfFNojEao5hWfwN`
      );
      setRover(res);
      setRoverLoaded(true);
    } catch (error) {
      setRoverError(true);
    }
  };

  useEffect(() => {
    getRoverNasa();
  }, [date]);

  // Si en la carga de los datos de la API ocurre un error, p. ej. está congestionada aparcerá este template:
  if (roverError) {
    return <ErrorApi />;
  }

  // Si los datos tardan demasiado en cargar aparecerá el siguiente template:
  if (!roverLoaded) {
    return <Loading />;
  }

  return (
    <div>
      <div className="roverInputDate">
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          max={today}
          onChange={(e) => {
            setDate(e.target.value.toLocaleString());
          }}
        />
      </div>
      {rover?.data?.photos.length < 1 ? (
        <ErrorDate />
      ) : (
        <article id="rover-container">
          <div className="roverImage">
            <img
              src={rover?.data?.photos[0].img_src}
              alt={rover?.data?.photos[0].camera.full_name}
            />
          </div>
          <div className="roverDataContainer">
            <div className="roverTitle">
              <h3>Camera: {rover?.data?.photos[0].camera.full_name}</h3>
            </div>

            <p className="roverParagraph">
              {/* En la API del Rover solamente aparecen imágenes, no tiene texto por lo que pongo un texto general para todas las imágenes */}
              NASA's Mars Rover Photos API is designed to collect image data
              taken by the Perseverance, Curiosity, Opportunity and Spirit
              rovers on Mars and make it more readily available to other
              developers, educators and citizen scientists. Each rover has
              several cameras for different purposes: some are for navigation
              and obstacle avoidance, some are for science and environmental
              observation, and some are for documenting descent and landing.
            </p>
          </div>
        </article>
      )}
    </div>
  );
};

export default Rover;

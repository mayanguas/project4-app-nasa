import './Rover.css';
import { useEffect, useState } from 'react';
import { today } from '../../data/data';
import axios from 'axios';

const Rover = () => {
  const [date, setDate] = useState(today);
  const [rover, setRover] = useState();
  const [roverError, setRoverError] = useState(false);
  const [roverLoaded, setRoverLoaded] = useState(false);

  const getRoverNasa = async () => {
    try {
      const res = await axios.get(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=ar93yA7I8ESqwthjtYnprKo4UVfFNojEao5hWfwN'
      );
      setRover(res);
      setRoverLoaded(true);
    } catch (error) {
      setRoverError('Fetching data from NASA failed', error);
    }
  };

  useEffect(() => {
    getRoverNasa();
  }, []);

  console.log('Info del Rover:', rover);

  return (
    <article id="rover-container">
      <div>
        <img
          src={rover.data?.photos[0].img_src}
          alt={rover.data?.photos[0].camera.full_name}
        />
      </div>
      <div>
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
        <h3>Camera: {rover.data?.photos[0].camera.full_name}</h3>
        <p>
          NASA's Mars Rover Photos API is designed to collect image data taken
          by the Perseverance, Curiosity, Opportunity and Spirit rovers on Mars
          and make it more readily available to other developers, educators and
          citizen scientists. Each rover has several cameras for different
          purposes: some are for navigation and obstacle avoidance, some are for
          science and environmental observation, and some are for documenting
          descent and landing.
        </p>
      </div>
    </article>
  );
};

export default Rover;

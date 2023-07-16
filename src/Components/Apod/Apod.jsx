import './Apod.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { today } from '../../data/data';
import { ErrorApi, Loading } from '../Error/Error';
import Modal from '../Modal/Modal';

import { NASA_URL } from '../../data/data';

const Apod = () => {
  console.log(today);
  const [date, setDate] = useState(today);
  const [apod, setApod] = useState();
  const [apodError, setApodError] = useState(false);
  const [apodLoaded, setApodLoaded] = useState(false);

  // Estado para el modal
  const [modal, setModal] = useState(false);

  const getApodNasa = async () => {
    try {
      const res = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${
          import.meta.env.VITE_NASA_API_KEY
        }`
      );
      setApod(res);
      setApodLoaded(true);
    } catch (error) {
      setApodError(true);
    }
  };

  useEffect(() => {
    getApodNasa();
  }, [date]);

  // Si en la carga de los datos de la API ocurre un error aparcerá este template:
  if (apodError) {
    return <ErrorApi />;
  }

  return (
    <article id="apod-container">
      <div id="inputApodDate">
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
          <div className="apodDataContainer">
            {apod.data?.media_type === 'video' ? (
              <iframe
                src={apod.data?.url}
                frameborder="0"
                className="apod-video"
              ></iframe>
            ) : (
              <div className="apodImage">
                <img src={apod.data?.url} alt="Image from NASA" />
                <button
                  onClick={() => setModal(!modal)}
                  className="boton-modal"
                >
                  +
                </button>
              </div>
            )}

            <div className={modal ? 'modal-visible' : 'modal-oculto'}>
              <Modal modal={modal} setModal={setModal} apod={apod} />
            </div>

            <div className="dataApod">
              <div className="photo-title">
                <h2>{apod.data?.title}</h2>
              </div>
              <p>{apod.data?.explanation}</p>
              {/* A veces el dato del copyright no existe debido a que es público */}
              <div className="apodCopyright">
                <p>
                  Copyright:{' '}
                  {apod.data?.copyright ? apod.data?.copyright : 'Public'}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </article>
  );
};

export default Apod;

import './Error.css';

export const Loading = () => {
  return (
    <div className="loading">
      <h2>Loading...</h2>
      <span class="loader"></span>
    </div>
  );
};

export const ErrorApi = () => {
  return (
    <div className="errorApi">
      <div className="errorImageApi">
        <picture>
          <source
            media="(min-width: 700px)"
            srcSet="/assets/images/Error404_big.jpg"
          />
          <source
            media="(min-width: 300px)"
            srcSet="/assets/images/Error404_small.jpg"
          />
          <img src="/assets/images/Error404_small.jpg" alt="" />
        </picture>
      </div>
      <p>
        The use of this API is <span>limited</span>.
      </p>
      <p>
        If you see this message, the limit has been reached,{' '}
        <span>wait a few minutes</span> and try again.
      </p>
    </div>
  );
};

export const ErrorDate = () => {
  return (
    <div className="errorDate">
      <h3>
        Houston we have a <span>problem</span> !
      </h3>
      <div className="errorImage">
        <picture>
          <source
            media="(min-width: 700px)"
            srcSet="/assets/images/Error404_big.jpg"
          />
          <source
            media="(min-width: 300px)"
            srcSet="/assets/images/Error404_small.jpg"
          />
          <img src="/assets/images/Error404_small.jpg" alt="" />
        </picture>
      </div>
      <div className="errorMessage">
        <p>
          There are <span>NO</span> images from this date.
        </p>
        <p className="choose">
          Please choose <span>another one</span>.
        </p>
      </div>
    </div>
  );
};

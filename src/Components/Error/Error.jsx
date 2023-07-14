import './Error.css';

export const Loading = () => {
  return (
    <div className="loading">
      <h2>Loading...</h2>
    </div>
  );
};

export const ErrorApi = () => {
  return (
    <div className="errorApi">
      <h3>
        <p>
          The use of this demo API is <span>limited</span>.
        </p>
        <p>
          If you see this message, the limit has been reached,{' '}
          <span>wait a few minutes</span> and try again.
        </p>
      </h3>
    </div>
  );
};

export const ErrorDate = () => {
  return (
    <div className="errorDate">
      <h3>
        <p>Houston we have a problem!</p>
        <img src="/assets/images/Error404_small.jpg" alt="" />
        <p>
          There are <span>NO</span> images from this date.
        </p>
        <p className="choose">
          Please choose <span>another one</span>.
        </p>
      </h3>
    </div>
  );
};

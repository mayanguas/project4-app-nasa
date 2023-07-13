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
      <h2>
        The use of this demo API is limited.
        <br />
        If you see this message, the limit has been reached, wait a few minutes
        and try again.
      </h2>
    </div>
  );
};

export const ErrorDate = () => {
  return (
    <div className="errorDate">
      <img src="/assets/images/404.jpg" alt="" />
      <h2>
        There are no images from this date.
        <br />
        Please choose another one.
      </h2>
    </div>
  );
};

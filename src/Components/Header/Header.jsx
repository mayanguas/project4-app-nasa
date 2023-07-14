import './Header.css';

const Header = ({ title, subtitle, handleChange }) => {
  return (
    <header>
      <div className="nasa-image">
        <img src="/assets/images/logo-nasa-2.png" alt="NASA logo" />
      </div>
      <div className="title">
        <h1>{title}</h1>
        <h2
          style={
            subtitle === 'APOD'
              ? { color: 'var(--primary-color)' }
              : { color: 'var(--secondary-color)' }
          }
        >
          {subtitle}
        </h2>
      </div>

      <div className="switch-container">
        <p>APOD</p>
        <label className="switch">
          <input type="checkbox" onChange={handleChange} />
          <span className="slider"></span>
        </label>
        <p>ROVER</p>
      </div>
    </header>
  );
};

export default Header;

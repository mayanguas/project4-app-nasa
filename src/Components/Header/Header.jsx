import './Header.css';

const Header = ({ handleChange }) => {
  return (
    <header>
      <div className="nasa-image">
        <img src="/assets/images/logo-nasa-2.png" alt="NASA logo" />
      </div>
      Título
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

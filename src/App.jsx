import { useState } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Apod from './Components/Apod/Apod';
import Rover from './Components/Rover/Rover';
import Footer from './Components/Footer/Footer';

import MainLayout from './layout/MainLayout';

const App = () => {
  const [toggle, setToggle] = useState('APOD');

  return (
    <div id="App">
      <MainLayout>
        <Header
          handleChange={() => {
            toggle === 'APOD' ? setToggle('ROVER') : setToggle('APOD');
          }}
        />
        {toggle === 'APOD' ? <Apod /> : <Rover />}
        <Footer />
      </MainLayout>
    </div>
  );
};

export default App;

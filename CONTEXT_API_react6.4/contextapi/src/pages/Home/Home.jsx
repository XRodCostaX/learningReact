import React, { useContext } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { CounterContext } from '../../context/CounterContext';
import About from '../About/About';
import Products from '../Products/Products';

function Home() {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do Contador: {counter}</p>
      <div>
        <NavBar />
        <About />
        <Products />
      </div>
    </div>
  );
}

export default Home;

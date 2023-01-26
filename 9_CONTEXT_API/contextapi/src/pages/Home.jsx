import { Link } from 'react-router-dom';
import ChangeCounter from '../components/ChangeCounter';
import { useFetch } from '../hooks/useFetch';
import './Home.css';
//  4 - refatorando o hook

import { useCounterContext } from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

function Home() {
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterando state complexos
  const setTitleColor = (colors) => {
    dispatch({ type: colors });
  };

  const { counter } = useCounterContext();
  const url = 'http://localhost:3000/products';
  const { data: items, loading, error } = useFetch(url);
  return (
    <div>
      <h1 style={{ color }}>Produtos</h1>
      <p>valor do contador: {counter}</p>
      {/* change counter */}
      <ChangeCounter />
      {/* // 6 - alterando state complexos */}
      <div>
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>

      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              {/* 4 - rota dinâmica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;

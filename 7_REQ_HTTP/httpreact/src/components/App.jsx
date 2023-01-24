/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';

// - 4 Custom Hooks
import { useFetch } from '../hooks/useFetch';
import './App.css';

function App() {
  // const [products, setProducts] = useState([]);
  // 4 - custom hooks
  const url = 'http://localhost:3000/products';

  const { data: items, httpConfig, loading, error } = useFetch(url);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // 2 - add produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };

    // 5 - refatorando POST
    httpConfig(product, 'POST');

    setName('');
    setPrice('');
  };
  //  8 - desafio 6
  const handleRemove = (id) => {
    httpConfig(id, 'DELETE');
  };
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {`ID: ${product.id}`} - {product.name} - R$ {product.price}
                <button value={product.id} className="deletar" onClick={() => handleRemove(product.id)}>
                  Excluir
                </button>
              </li>
            ))}
        </ul>
      )}

      <div className="add_product">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label htmlFor="price">
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 7 - state de loading no post */}
          {loading && <input disabled type="submit" value="aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
// const res = await fetch(url);
// const data = await res.json();
// setProducts(data);

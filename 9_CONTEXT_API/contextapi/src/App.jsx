import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
// components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

//  Pages
import About from './pages/About';
import Home from './pages/Home';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Search from './pages/Search';

// 1 - config react router

function App() {
  return (
    <div className="App">
      <h1>REACT ROUTER</h1>
      <BrowserRouter>
        {/* 2 Links com react Router */}
        <Navbar />
        {/* ( 9 - search) */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="/search" element={<Search />} />
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/*  7 - No match routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

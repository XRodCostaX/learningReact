import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { CounterContextProvider } from './context/CounterContext';
import './index.css';
// Routes
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2 - criando provider */}
    <CounterContextProvider>
      <RouterProvider router={router} />
    </CounterContextProvider>
  </React.StrictMode>,
);

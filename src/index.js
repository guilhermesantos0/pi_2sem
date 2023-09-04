import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Eventos from './pages/Eventos';
import Historia from './pages/Historia';
import Cursos from './pages/Cursos';
import Localizacao from './pages/Localizacao';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/historia',
    element: <Historia />
  },
  {
    path: "/eventos",
    element: <Eventos />
  },
  {
    path: '/cursos',
    element: <Cursos />
  },
  {
    path: '/localizacao',
    element: <Localizacao />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

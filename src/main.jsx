import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


import { Layout } from './Layout/Layout';
import { Home } from './pages/Home';
import { Order } from './pages/Order';

import './index.css'
import 'normalize.css'


const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />,

    },
    {
      path: "cart",
      element: <Order />,

    }]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

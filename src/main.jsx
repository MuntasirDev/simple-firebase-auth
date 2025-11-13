import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layouts/Root.jsx';
import home from './Components/home/home.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [

      { index: true, Component: home },
      {
        path: 'logIn',
        Component: LogIn
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

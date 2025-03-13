import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './about';
import Skill  from './Skill';
import Contact from './Contact';
import Projects from './Projects';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<About/>
  },
  {
    path:"/Skill",
    element:<Skill/>
  },
  {
    path:"/Projects",
    element:<Projects/>
  },
  {
    path:"/Contact",
    element:<Contact/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






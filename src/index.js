import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/views/Footer';
import Home from './pages/Home';
import Detail from './pages/Detail';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path:'/detail/:user/:repo',
    element: <Detail />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="h-full w-full">
    <div className='flex flex-col h-full xl:w-2/4 w-full sm:w-3/4 p-6 pb-0 mx-auto'>
      <div className='flex-1'>
        <RouterProvider  router={router} />
      </div>
      <Footer />
    </div>
  </div>
);

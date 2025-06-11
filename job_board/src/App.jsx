import { useState } from 'react'
import './App.css'
import HomeLayout from './pages/HomeLayout.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout />
  },
  {
    path:'/about',
    element: (<div><h1> This is about page open now</h1>
    <h1>what are you thinking today?</h1></div>)
  },
])

function App() {
  return <RouterProvider router={router} />
};

export default App

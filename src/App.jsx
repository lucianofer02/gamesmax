import { useContext, useState } from 'react'
import { Route, Routes, Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import '../src/App.css'
import Gamesform from './assets/components/GamesForm/GamesForm'
import Navbar from './assets/components/navbar/Navbar'
import Login from './assets/components/Login/Login'
import Dashboard from './assets/components/dashboard/Dashboard'
import PageNotFound from './assets/components/security/pageNotFound/PageNotFound'
import Cart from './assets/components/Cart/Cart'

const App = () => {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Navigate to="/login" replace/>
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />
  //   },
  //   {
  //     path: "/home",
  //     element: <Dashboard />
  //   },
  //   {
  //     path: "*",
  //     element: <PageNotFound />
  //   }
  // ])
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Navigate to="/login" replace/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Dashboard />} />
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default App;

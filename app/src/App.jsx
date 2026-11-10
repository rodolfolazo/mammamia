import { ToastContainer, Bounce } from "react-toastify";

import Cart from './pages/Cart'
import Home from './pages/Home'
//import Home2 from './pages/Home2'
import Register from './pages/Register'
import Login from './pages/Login'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'



import { Routes, Route } from 'react-router'

import './App.css'

function App() {
  return (
    <>
    <Routes>
        {/*Por ahora son rutas públicas*/}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          {/*<Route index element={<Home2 />} /> */}
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizzas/:id" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        closeOnClick={true}
        transition={Bounce}
        theme="colored"
      />
    </>
  )
}

export default App

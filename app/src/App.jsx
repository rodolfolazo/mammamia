import { ToastContainer, Bounce } from "react-toastify";

import Cart from './pages/Cart'
import Home from './pages/Home'
//import Home2 from './pages/Home2'
import Register from './pages/Register'
import Login from './pages/Login'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Pizza2 from './pages/Pizza2'
import Pizza3 from "./pages/Pizza3";
import MainLayout from './layouts/MainLayout'

import { useAuthContext } from "./features/auth/hooks/useAuthContext";
import { Routes, Route, Navigate } from 'react-router'

import './App.css'

function App() {
  const { token } = useAuthContext()

  return (
    <>
    <Routes>
        {/*Por ahora son rutas públicas*/}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          {/*<Route index element={<Home2 />} /> */}
          <Route path="/login" element={(!token) ? <Login></Login> : <Navigate to="/" />} />
          <Route path="/register" element={(!token) ? <Register></Register> : <Navigate to="/" />} />
          <Route path="/profile" element={(token)? <Profile /> : <Navigate to="/login" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizzas/:id" element={<Pizza />} />
          <Route path="/pizzas2/:id" element={<Pizza2 />} />
          <Route path="/pizzas3/:id" element={<Pizza3 />} />
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

import Cart from './pages/Cart'
//import Home from './pages/Home'
import Home2 from './pages/Home2'
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
    <Routes>
        {/*Por ahora son rutas públicas*/}
        <Route element={<MainLayout />}>
          <Route index element={<Home2 />} />
          {/*<Route index element={<Home />} /> */}
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/001" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  )
}

export default App

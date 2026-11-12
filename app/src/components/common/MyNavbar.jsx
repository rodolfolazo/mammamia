import { useCartContext } from '../../features/cart/hooks/useCartContext'
import { useAuthContext } from '../../features/auth/hooks/useAuthContext'

import { Link, NavLink } from 'react-router'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { formatCurrency } from '../../utils/formatCurrency'

import { IoHomeOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoMdLogIn } from 'react-icons/io'
import { BsCart4 } from 'react-icons/bs'
import { CiLock } from 'react-icons/ci'

const MyNavbar = () => {

  const { total } = useCartContext()
  const { token ,logout } = useAuthContext()

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid style={{ margin: 0 }}>
          <Navbar.Brand as={NavLink} to="/">Pizzería Mammamia</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="text-white text-decoration-none nav-link" to="/"><IoHomeOutline /> Home</NavLink>

            {token && (
              <NavLink className="text-white text-decoration-none nav-link" to="/profile"><CgProfile /> Profile</NavLink>
            )}
            {token && (
              <NavLink onClick={logout} className="text-white text-decoration-none nav-link" to="/login"><AiOutlineLogout /> Logout</NavLink>
            )}
            {!token && (
              <NavLink className="text-decoration-none nav-link" to="/login"><IoMdLogIn /> Login</NavLink>
            )}
            {!token && (
              <NavLink className="text-decoration-none nav-link" to="/register"><CiLock /> Register</NavLink>
            )}
          </Nav>

          {/* Nav derecho */}
          <Nav className="ms-auto">
            <Link className="text-info text-decoration-none nav-link" to="/cart"><BsCart4 /> Total {formatCurrency(total)}</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar

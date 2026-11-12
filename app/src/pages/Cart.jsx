//import { useContext } from "react"
//import { CartContext } from "../features/cart/context/CartContext.jsx"
import { useNavigate } from "react-router"
import { useCartContext } from "../features/cart/hooks/useCartContext"
import { useAuthContext } from "../features/auth/hooks/useAuthContext"


import CartPizza from "../features/cart/components/CartPizza.jsx"
import { utils } from "../utils/index.js"

import { Container, Row, Col, Button } from "react-bootstrap"

const Cart = () => {

  const { cart, setCart, total, setTotal } = useCartContext()
  const { token } = useAuthContext()


  const navigate = useNavigate()

  const handleAdd = (id) => {
    const updatedPizzas = cart.map((p) =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    )
    setCart(updatedPizzas)
  }

  const handleSubtract = (id) => {
    const updatedPizzas = cart.map((p) =>
      p.id === id ? { ...p, quantity: Math.max(0, p.quantity - 1) } : p
    )
    setCart(updatedPizzas)
  }

  const handleRemove = (id) => {
    const updatedPizzas = cart.filter((p) => p.id !== id)
    setCart(updatedPizzas)
  }

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1 ) {
      return
    }

    const updatedPizzas = cart.map((p) =>
      p.id === id ? { ...p, quantity: quantity, totalPrice: p.price * quantity } : p
    )
    setCart(updatedPizzas)
  }

  const handleClearCart = () => {
    setCart([])
    setTotal(0)
    navigate("/")
  }

  // Calculamos el total a partir del estado actual
    const totalPrice = cart.reduce(
      (acc, pizza) => acc + pizza.price * pizza.quantity,
      0
    );

    setTotal(totalPrice)

  return (
    <>
      <Container>
        {cart.map((pizza) => (
          <CartPizza key={pizza.id} {...pizza} handleAdd={handleAdd} handleSubtract={handleSubtract} handleRemove={handleRemove} handleUpdateQuantity={handleUpdateQuantity} />
        ))}
      </Container>
      <Container className="mb-5">
        <Row>
          <Col className="mx-auto" md={3}>
            <p className="text-center">Total: {utils.formatCurrency(total)}</p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          {token &&
            <Col className="text-center" md={2}>
              <Button variant="dark">
                Realizar compra
              </Button>
            </Col>
          }
          <Col className="text-center" md={2}>
            <Button variant="secondary" onClick={handleClearCart}>
              Cancelar compra
            </Button>
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default Cart

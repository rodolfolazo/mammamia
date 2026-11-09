import { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import CartPizza from "../features/cart/components/CartPizza.jsx"
import { utils } from "../utils/index.js"

const Cart = () => {

  const [pizzasInCart, setPizzasInCart] = useState([])


  const fetchPizzas = async () => {
    const url = 'http://localhost:5000/api/pizzas'
    const response = await fetch(url)
    const data = await response.json()

    //Modifico pizzas para incluir la propiedad quantity y precioTotal
    const pizzasInit = data.map((pizza) => ({ ...pizza, quantity: 1 }))
    setPizzasInCart(pizzasInit)
  }

  useEffect(() => {
    fetchPizzas()
  }, [])

  const handleAdd = (id) => {
    const updatedPizzas = pizzasInCart.map((p) =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    )
    setPizzasInCart(updatedPizzas)
  }

  const handleSubtract = (id) => {
    const updatedPizzas = pizzasInCart.map((p) =>
      p.id === id ? { ...p, quantity: Math.max(0, p.quantity - 1) } : p
    )
    setPizzasInCart(updatedPizzas)
  }

  const handleRemove = (id) => {
    const updatedPizzas = pizzasInCart.filter((p) => p.id !== id)
    setPizzasInCart(updatedPizzas)
  }

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1 ) {
      return
    }

    const updatedPizzas = pizzasInCart.map((p) =>
      p.id === id ? { ...p, quantity: quantity, totalPrice: p.price * quantity } : p
    )
    setPizzasInCart(updatedPizzas)
  }

  // Calculamos el total a partir del estado actual
    const totalPrice = pizzasInCart.reduce(
      (acc, pizza) => acc + pizza.price * pizza.quantity,
      0
    );


  return (
    <>
      <Container>
        {pizzasInCart.map((pizza) => (
          <CartPizza key={pizza.id} {...pizza} handleAdd={handleAdd} handleSubtract={handleSubtract} handleRemove={handleRemove} handleUpdateQuantity={handleUpdateQuantity} />
        ))}
      </Container>
      <Container className="mb-5">
        <Row>
          <Col className="mx-auto" md={3}>
            <p className="text-center">Total: {utils.formatCurrency(totalPrice)}</p>
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto text-center" md={3}>
            <Button variant="dark">
              Finalizar compra
            </Button>
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default Cart

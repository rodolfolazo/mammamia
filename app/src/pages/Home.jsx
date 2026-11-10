import { useContext } from 'react'
import { PizzasContext } from '../features/pizzas/context/PizzasContext'


import { Container, Row, Col } from "react-bootstrap";
import heroImage from '../assets/header.jpg'
import Header from '../features/home/components/Header'
import CardPizza from '../features/pizzas/components/CardPizza'

const Home = () => {
  const { pizzas } = useContext(PizzasContext)

  return (
    <div className="flex-fill">
      <Header
        title="Pizzería Mammamia!"
        description="¡Tenemos las mejores pizzas que podrás encontrar!"
        image={heroImage}
      ></Header>
      <main className="mt-3">
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            {pizzas.map((pizza) => (
              <Col key={pizza.id}>
                <CardPizza {...pizza}></CardPizza>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default Home

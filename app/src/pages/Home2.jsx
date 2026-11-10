import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

import heroImage from "../assets/header.jpg";
import Header from "../features/home/components/Header";
import CardPizza from "../features/pizzas/components/CardPizza";
import { usePizzasContext2 } from "../features/pizzas/hooks/usePizzasContext2";

const Home2 = () => {
  const { pizzas, loading, error } = usePizzasContext2();

  return (
    <div className="flex-fill">
      <Header
        title="Pizzería Mammamia!"
        description="¡Tenemos las mejores pizzas que podrás encontrar!"
        image={heroImage}
      />

      <main className="mt-3">
        <Container>
          {loading && <Spinner animation="border" />}

          {error && <Alert variant="danger">{error}</Alert>}

          {!loading && !error && (
            <Row xs={1} md={2} lg={3} className="g-4">
              {pizzas.map((pizza) => (
                <Col key={pizza.id}>
                  <CardPizza {...pizza} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </main>
    </div>
  );
};

export default Home2;

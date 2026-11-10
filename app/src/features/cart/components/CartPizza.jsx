import PropTypes from "prop-types";

import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { utils } from "../../../utils";

const CartPizza = ({ desc, id, img, ingredients, name, price, quantity, handleAdd, handleSubtract, handleRemove, handleUpdateQuantity }) => {
  return (
    <>
      <Row className="align-items-center g-3 border border-dark border-2 rounded-3 p-1 my-3" style={{ marginTop: 0 }}>

        {/* Imagen */}
        <Col xs={12} md={3} style={{ marginTop: 0 }}>
          <Card>
            <Card.Img
              src={img}
              className="cart-pizza__image"
            />
          </Card>
        </Col>

        {/* Información */}
        <Col xs={12} md={2} style={{ marginTop: 0 }} className="text-center">
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{utils.capitalizeFirstLetter(name)}</p>
          <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>{utils.formatCurrency(price)}</p>

        </Col>

        {/* Cantidad */}
        <Col xs={12} md={1} style={{ marginTop: 0 }}>
          <Form.Group>
            <Form.Label style={{fontWeight: 'bold' }}>Cantidad</Form.Label>
            <Form.Control
              type="number"
              min={1}
              max={10}
              value={quantity}
              onChange={(e) => handleUpdateQuantity(id, parseInt(e.target.value))}
            />
          </Form.Group>
        </Col>

        {/* Botones */}
        <Col xs={12} md={2} style={{ marginTop: 0 }}>
          <div className="d-flex gap-2 justify-content-center">
            <Button variant="dark" onClick={() => handleAdd(id)} className="flex-fill">+</Button>
            <Button variant="dark" onClick={() => handleSubtract(id)} className="flex-fill">-</Button>
            <Button variant="dark" onClick={() => handleRemove(id)} className="flex-fill">Del</Button>
          </div>
        </Col>

        {/* Precio total */}
        <Col xs={12} md={2} className="ms-auto" style={{ marginTop: 0 }}>
          <Form.Group>
            <Form.Label style={{fontWeight: 'bold' }}>Precio</Form.Label>
            <Form.Control
              type="text"
              readOnly
              value={utils.formatCurrency(price * quantity)}
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

CartPizza.propTypes = {
  desc: PropTypes.string,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleSubtract: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleUpdateQuantity: PropTypes.func.isRequired,
};

export default CartPizza;

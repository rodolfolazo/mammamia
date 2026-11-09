import PropTypes from "prop-types";

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';

import { FaPizzaSlice } from "react-icons/fa";

import { utils } from '../../../utils/index'

const CardPizza = ({ name, price, img,ingredients }) => {
  return (
    <>
      <Card className="card-pizza">
        <Card.Img variant="top" src={img} className="card-pizza__image" />
        <Card.Title className="border-bottom p-2">{utils.capitalizeFirstLetter(name)}</Card.Title>
        <div className="border-bottom h-25 p-2">
          <Card.Subtitle className="mb-2">Ingredientes: <FaPizzaSlice /> </Card.Subtitle>
          <ListGroup variant="flush">
            {ingredients.map((ingredient, index) => (
              <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="border-bottom p-2 text-center">
          <Card.Subtitle>Precio: {utils.formatCurrency(price)}</Card.Subtitle>
        </div>
        <div className="border-bottom p-2 d-flex justify-content-around">
          <Button variant="light" className="text-dark border">
            Ver más
          </Button>
          <Button variant="dark" className="text-white border">
            Añadir
          </Button>
        </div>
      </Card>
    </>
  )
}

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.string.isRequired,

};

export default CardPizza

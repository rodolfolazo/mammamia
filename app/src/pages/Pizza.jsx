import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router"

import { CartContext } from "../features/cart/context/CartContext.jsx"

import { toast } from "react-toastify";

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


import { FaPizzaSlice } from "react-icons/fa";

import { utils } from '../utils/index.js'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)
  const navigate = useNavigate()
  const { id } = useParams()
  const { cart, setCart } = useContext(CartContext)


  const fetchPizza = async () => {
    const url = `${import.meta.env.VITE_API_URL}/api/pizzas/${id}`
    const response = await fetch(url)
    const data = await response.json()
    setPizza(data)
  }

  useEffect(() => {
    fetchPizza()
  }, [])

  useEffect(() => {
    console.log(pizza)
  }, [pizza])

  const handleVolver = () => {
    navigate("/")
  }

  const { name, price, img, ingredients } = pizza || {};

  const handleAddToCart = (id, name, price, img, ingredients) => {
    toast.success(`${name} añadida al carrito`);

    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { id, name, price, img, ingredients, quantity: 1 }];
      setCart(updatedCart);
    }
    navigate("/")
  };

  return (
    <>
      {pizza &&
        <Card className="card-pizza mx-auto mt-5" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pizza.img} className="card-pizza__image" />
          <Card.Title className="border-bottom p-2">{utils.capitalizeFirstLetter(pizza.name)}</Card.Title>
          <div className="border-bottom h-25 p-2">
            <Card.Subtitle className="mb-2">Ingredientes: <FaPizzaSlice /> </Card.Subtitle>
            <Card.Text>{pizza.ingredients.join(', ')}</Card.Text>
          </div>
          <div className="border-bottom p-2 text-center">
            <Card.Subtitle>Precio: {utils.formatCurrency(pizza.price)}</Card.Subtitle>
          </div>
          <div className="border-bottom p-2 d-flex justify-content-around">
            <Button variant="light" className="text-dark border" onClick={handleVolver}>
              Volver
            </Button>
            <Button variant="dark" className="text-white border" onClick={() => handleAddToCart(id, name, price, img, ingredients)}>
              Añadir
            </Button>
        </div>
      </Card>}
    </>
  )
}

export default Pizza

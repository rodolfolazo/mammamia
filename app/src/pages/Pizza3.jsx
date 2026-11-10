import { useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaPizzaSlice } from "react-icons/fa";

import { utils } from "../utils/index.js";

import { usePizzaById } from "../features/pizzas/hooks/usePizzaById";
import { CartContext } from "../features/cart/context/CartContext.jsx";

const Pizza3 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { pizza, loading, error } = usePizzaById(id);
  const { setCart } = useContext(CartContext);

  const handleAddToCart = (id, name, price, img, ingredients) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevCart,
        { id, name, price, img, ingredients, quantity: 1 },
      ];
    });

    toast.success(`${name} añadida al carrito`);
    navigate("/");
  };

  if (loading) {
    return <p>Cargando pizza...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!pizza) {
    return <p>Pizza no encontrada</p>;
  }

  return (
    <Card className="card-pizza mx-auto mt-5" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={pizza.img}
        className="card-pizza__image"
      />

      <Card.Title className="border-bottom p-2">
        {utils.capitalizeFirstLetter(pizza.name)}
      </Card.Title>

      <div className="border-bottom h-25 p-2">
        <Card.Subtitle className="mb-2">
          Ingredientes: <FaPizzaSlice />
        </Card.Subtitle>
        <Card.Text>{pizza.ingredients.join(", ")}</Card.Text>
      </div>

      <div className="border-bottom p-2 text-center">
        <Card.Subtitle>
          Precio: {utils.formatCurrency(pizza.price)}
        </Card.Subtitle>
      </div>

      <div className="border-bottom p-2 d-flex justify-content-around">
        <Button
          variant="light"
          className="text-dark border"
          onClick={() => navigate("/")}
        >
          Volver
        </Button>

        <Button
          variant="dark"
          className="text-white border"
          onClick={() =>
            handleAddToCart(
              pizza.id,
              pizza.name,
              pizza.price,
              pizza.img,
              pizza.ingredients
            )
          }
        >
          Añadir
        </Button>
      </div>
    </Card>
  );
};

export default Pizza3;

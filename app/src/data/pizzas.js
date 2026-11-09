import napolitana from '../assets/napolitana.jpg'
import spanish from '../assets/spanish.jpg'
//import pepperoni from '../assets/pepperoni.jpg'
import salame from '../assets/salame.jpg'
import fourSeasons from '../assets/4seasons.jpg'
import bacon from '../assets/bacon.avif'
import pollopicante from '../assets/pollopicante.jpg'


export const pizzas =
  [
    {
      desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
      id: "P001",
      img: napolitana,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      name: "napolitana",
      price: 5950,
    },
    {
      desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
      id: "P002",
      img: spanish,
      ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
      name: "española",
      price: 7250,
    },
    {
      desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
      id: "P003",
      img: salame,
      ingredients: ["mozzarella", "tomates", "salame", "orégano"],
      name: "salame",
      price: 5990,
    },
    {
      desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
      id: "P004",
      img: fourSeasons,
      ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
      name: "cuatro estaciones",
      price: 9590,
    },
    {
      desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
      id: "P005",
      img: bacon,
      ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
      name: "bacon",
      price: 6450,
    },
    {
      desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
      id: "P006",
      img: pollopicante,
      ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
      name: "pollo picante",
      price: 8500,
    },
  ];

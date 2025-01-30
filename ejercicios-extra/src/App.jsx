import { useState } from 'react'



const productos = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: 599.99,
    description: "Último modelo con cámara de alta resolución y batería de larga duración.",
    image: "https://example.com/smartphone-xyz.jpg"
  },
  {
    id: 2,
    name: "Laptop UltraBook",
    price: 1299.99,
    description: "Potente y ligera, perfecta para profesionales en movimiento.",
    image: "https://example.com/laptop-ultrabook.jpg"
  },
  {
    id: 3,
    name: "Auriculares NoiseCancel",
    price: 249.99,
    description: "Experimenta un sonido inmersivo con cancelación de ruido activa.",
    image: "https://example.com/auriculares-noisecancel.jpg"
  }
];


import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    </>
  )
}

export default App

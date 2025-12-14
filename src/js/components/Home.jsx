import React from "react";

// include images into your bundle
import wukong from "../../img/Jumbo/black-desert-wukong-1920x1080-1.jpg";
import image2 from "../../img/Jumbo/lostark.jpg";
import image3 from "../../img/Jumbo/baldurs.jpg";

import Navbar from "./Navbar";
import Carousel from "./Carousel";
import { Card } from "./Card";

const Home = () => {
  const images = [wukong, image2, image3];

  const slides = images.map((imagen, index) => {
    return (
      <div
        key={index}
        className={index === 0 ? "carousel-item active" : "carousel-item"}
      >
        <img
          src={imagen}
          className="d-block w-100"
          style={{
            height: "420px",
            objectFit: "contain",
            objectPosition: "center",
          }}
          alt={`Slide ${index + 1}`}
        />
      </div>
    );
  });

  const videojuegos = [
    {
      id: 1,
      nombre: "Black Desert online",
      descripcion:
        "MMORPG de mundo abierto conocido por su combate en tiempo real muy dinámico...",
      imagen: wukong,
      link: "https://www.naeu.playblackdesert.com",
    },
    {
      id: 2,
      nombre: "Lost Ark",
      descripcion:
        "MMORPG con vista isométrica que mezcla mecánicas de ARPG...",
      imagen: image2,
      link: "https://www.playlostark.com",
    },
    {
      id: 3,
      nombre: "Baldurs Gate 3",
      descripcion:
        "RPG narrativo basado en Dungeons & Dragons 5ª edición...",
      imagen: image3,
      link: "https://baldursgate3.game",
    },
    
  ];

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="container-fluid px-0">
          <h1 style={{ color: "#050505ff" }}>Mis juegos mas jugados!</h1>

          <Carousel slides={slides} />
        </div>

        <div className="container-fluid m-2">
          <div className="row g-4">
            {videojuegos.map((parametros) => {
              return <Card key={parametros.id} juego={parametros} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

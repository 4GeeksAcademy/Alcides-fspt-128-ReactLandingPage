import React from "react";

// include images into your bundle
import wukong from "../../img/Jumbo/black-desert-wukong-1920x1080-1.jpg";
import image2 from "../../img/Jumbo/lostark.jpg";
import image3 from "../../img/Jumbo/baldurs.jpg";
import tarkov from "../../img/Tarkov.jpg";
import isaac from "../../img/ISAAC.jpeg";
import valorant from "../../img/Valorant.jpg";

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
			descripcion:"MMORPG de mundo abierto centrado en un combate en tiempo real muy fluido, con gran profundidad en sistemas de vida como comercio, pesca, crafteo y gestión de nodos. Destaca por su apartado gráfico y está más enfocado al progreso individual y al grindeo que a la narrativa.",
			imagen: wukong,
			link:"https://www.naeu.playblackdesert.com" ,
		},
		{
			id: 2,
			nombre: "Lost Ark",
			descripcion:"MMORPG con vista isométrica que combina mecánicas de ARPG con contenido online masivo. Sobresale por su combate rápido y espectacular, un fuerte enfoque en PvE (mazmorras, raids, jefes) y una progresión muy estructurada basada en equipo y actividades diarias y semanales.",
			imagen: image2,
			link:"https://www.playlostark.com" ,
		},
		{
			id: 3,
			nombre: "Baldurs Gate 3",
			descripcion:"RPG narrativo basado en Dungeons & Dragons 5ª edición, centrado en decisiones, diálogos y consecuencias reales. Ofrece combate por turnos muy táctico, gran libertad de acción y una historia profunda con múltiples rutas y finales posibles.",
			imagen: image3,
			link:"https://baldursgate3.game" ,
		},
		{
			id: 4,
			nombre: "Valorant",
			descripcion:"Shooter táctico competitivo 5v5 que mezcla disparos precisos estilo Counter-Strike con habilidades únicas por agente. Muy enfocado al trabajo en equipo, la estrategia y la comunicación, con una fuerte escena competitiva.",
			imagen: valorant,
			link:"https://playvalorant.com" ,
		},
		{
			id: 5,
			nombre: "Escape from Tarkov",
			descripcion:"Shooter en primera persona hardcore y realista que combina combate, supervivencia y gestión de inventario. Cada incursión implica alto riesgo y recompensa, con una curva de aprendizaje exigente y una atmósfera de tensión constante.",
			imagen: tarkov,
			link:"https://www.escapefromtarkov.com" ,
		},
		{
			id: 6,
			nombre: "The binding of Isaac: Rebirth ",
			descripcion:"Roguelike de acción con mazmorras generadas aleatoriamente, alta dificultad y una enorme cantidad de objetos que cambian por completo cada partida. Muy rejugable, con un tono oscuro, grotesco y provocador.",
			imagen: isaac,
			link:"https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/" ,
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

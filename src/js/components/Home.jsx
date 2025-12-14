import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import { Card } from "./Card";

//create your first component
const Home = () => {

	const videojuegos = [
		{
			id: 1,
			nombre: "Black Desert online",
			plataforma: "PC, PS4, XBOX",
			imagenes: "s",
		},
		{
			id: 2,
			nombre: "Lost Ark",
			plataforma: "PC",
			imagen: "x",
		},
		{
			id: 3,
			nombre: "Baldurs Gate 3",
			plataforma: "PC,PS5,XBOX",
			imagen: "s"
		},
		{
			id: 4,
			nombre: "The Binding of Isaac",
			plataforma: "PC,PS5,XBOX,SWITCH,IOS",
			imagen: "x"
		},
	];


	return (
		<>
			<Navbar />
			<Carousel />
			<div className="container-fluid" style={{backgroundColor: "#050505b4"}}>
				<h1 style={{color: "#050505ff"}}>Mis juegos mas jugados!</h1>
				<div className="row g-4">
					{
						videojuegos.map(parametros => {
							return (
							<Card key={parametros.id} />
							)
						})
					}
				</div>
			</div>
		</>
	);
};

export default Home;
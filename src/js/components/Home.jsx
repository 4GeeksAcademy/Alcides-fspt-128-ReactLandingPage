import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

//create your first component
const Home = () => {

	const videojuegos = [{
		id : 1 
		nombre: "Black Desert online",
		plataforma: "PC, PS4, XBOX"
		imagen:
	}];


	return (
		<>
		<Navbar />
		<Carousel />
		<div></div>
		</>
	);
};

export default Home;
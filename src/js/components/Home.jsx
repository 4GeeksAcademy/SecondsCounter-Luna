import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Digit from "./Digit";

//create your first component
const Home = ({ segundos }) => {
	let unidades = segundos % 10;
	let segundosI = segundos / 10;
	let decenas = Math.floor(segundosI % 10);
	let segundosII = segundosI / 10;
	let centenas = Math.floor(segundosII % 10)
	let segundosIII = segundosII / 10;
	let unidadesDeMil = Math.floor(segundosIII % 10);
	let segundosIV = segundosIII / 10;
	let decenasDeMil = Math.floor(segundosIV % 10)
	let segundosV = segundosIV / 10;
	let centenasDeMil = Math.floor(segundosV % 10)
	return (
		<div className="d-flex justify-content-center bg-black p-">
			<Digit num=<i className="fa-solid fa-clock" style={{color: "#ffffff;"}}></i>/>
			<Digit num={centenasDeMil} />
			<Digit num={decenasDeMil} />
			<Digit num={unidadesDeMil} />
			<Digit num={centenas} />
			<Digit num={decenas} />
			<Digit num={unidades} />
		</div>
	);
};

export default Home;
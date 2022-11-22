import React from "react";
import { Link, useHistory  } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
// Para movernos entre paginas en el codigo javascript 
	const history = useHistory ();
	const goto = () =>{
		history.push ("/test")
		
	}


return(
	<div className="text-center mt-5">
		
		<Link to= "/test">Ir a Test</Link>
		<button onClick = {goto}>Ir a test por JS</button>
		
	</div>
);
}
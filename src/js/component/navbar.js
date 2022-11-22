import React,{useContext}  from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
   
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar"  >
			 <div className ="container ">
          		<a className= "navbar-brand text-uppercase"><img style = {{maxWidth:"250px"}} src ="http://dontforgetatowel.com/wp-content/uploads/2012/09/star-wars-logo.png"/></a>
       		 </div>
		<button><Link to="/"><i class="fas fa-backward"></i></Link></button>
			
		<div class="dropdown">
		<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style = {{backgroundColor:"red",borderBlockColor:"rgb(170, 245, 30)"}}>
			<i class="fas fa-heart"></i></button>
			<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{store.favoritos.map((favorito,index) => {return ( <li key={index} class="dropdown-item">{favorito}</li>)})}
			</ul>
		</div>
		</nav>
	);
};

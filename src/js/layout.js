import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ListPlanets } from "./views/planets";
import {People} from "./views/people"
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Inicio from "./views/inicio";

//create your first component
const Layout = () => {


	return (
		<div>
			{/* El BrowserRouter es lo que nos permite movernos pagina por pagina. Es decir, lo primero que debemos hacer es poner eso y para que la pagina cambie segun la url del navegador debe ir dentro del swich con el exact path que es ruta exacta */}
			
			<BrowserRouter> 
			<Navbar />
					<Switch>
						<Route exact path="/">
							<Inicio/>
							
						</Route>
						<Route exact path="/planets">
							<ListPlanets/>
						</Route>
						<Route exact path= "/people">
							<People/>
						</Route>
							
							
				
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

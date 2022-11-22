import React from "react"
import { useState, useEffect, useContext } from "react";
import Card from "./card";
import { Context } from "../store/appContext";


export const ListPlanets = () => {
     const { store, actions } = useContext(Context)

     useEffect(() => {
      actions.getGlobal("planets")
    }, []);
   // La interrogacion es porque al principio result = {} =>retult.results.map () => result.results = undefined.map {} 
   //El interrogante es como un condicional ternario si results existe sigue adelante y si no pues se queda quieto resutlt ? sigue : no sigue.
    return  (

    <div className="divFather row">
        {store.planets.results?.map((element, index) =>{
            return <Card name={element.name} ruta = {"/planets/" +index+1} urlImg= {"https://starwars-visualguide.com/assets/img/planets/"+ (index+2) +".jpg"} />
        })}
    </div>
   
    
       )
}




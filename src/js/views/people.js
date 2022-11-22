import React from "react"
import { useState , useEffect, useContext } from "react";
import Card from "./card";
import { Context } from "../store/appContext";


export const People = () => {
    const { store, actions } = useContext(Context)

     useEffect(() => {
      actions.getGlobal("people")
    }, []);
    return  (
        <div className="divFather row">
            {store.people.results?.map((element, index) =>{
                return <Card name={element.name} ruta = {"/characters/" +index+1} urlImg= {"https://starwars-visualguide.com/assets/img/characters/"+ (index+1) +".jpg"} />
            })}
    </div>
           )

        }

import React, {useContext} from "react"

import { Context } from "../store/appContext";

const Card = (props) => {
  const { store, actions } = useContext(Context);
   
  return (
    
    <div className= "col-2 mx-3 card mt-4 text-center">
   
      <img src= {props.urlImg} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="titulo">{props.name}</h5>
        <div className = "botones">
        <button onClick= {() => {actions.Favorites(props.name)}}><i class="fas fa-heart"></i></button>
        </div>
        
        
      </div>
    </div>

       
    )
}

export default Card



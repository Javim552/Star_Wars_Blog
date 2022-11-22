import React from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css"

const Inicio = () => {

    return (
        <>
            <div className="container text-center">
            <div className="row">
            <div className= "col-5 mx-3 card mt-4">
                    <img src= "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc0NDU3NzM0Mjc5NjY5Mzgy/best-characters-in-star-wars-galaxy-of-heroes.webp " class="card-img-top" alt="..."/>
                    <div className = "mt-4 mb-1">
                    <button><Link to = "/people"><h5>PERSONAJES</h5></Link></button>
    
            </div>
        
        
      </div>
            <div className= "col-5 mx-3 card mt-4">
                    <img src= "https://img.ecartelera.com/noticias/23400/23480-c.jpg" class="card-img-top" alt="..."/>
                    <div className = "mt-3 mb-2">
                    <button><Link to = "/planets"><h5>PLANETAS</h5></Link></button>
    
            </div>
        
        
      </div>
      </div>
      </div>
           
        </>
        
    )

}
export default Inicio




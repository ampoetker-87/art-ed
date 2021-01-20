import React from "react";
import Detailmodal from "./Details"




function Card(props) {

      
    return (
        <div className="card-container">
    <img className="card-img" src={props.img} alt=""/>
    <Detailmodal title={props.title} details={props.details} source={props.source} />    
    </div>)
}




export default Card;

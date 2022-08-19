import React from "react";

function Service(props){
    
    return (
        <div className="service-card">
            <div className="service-title"> {props.title} </div>
            <div className="service-rating"> Rating: {props.rating}</div>
            <div className="service-cost">Cost: {props.cost}</div>
            <div>{window.google}</div>
        </div>
    )
}

export default Service;
import React from "react";
import Service from "./Service";
import serviceList from "../data/services";

function Content(){
    const services = serviceList.map(service => {
        return <Service title={service.name} rating={service.rating} cost={service.cost}  />
    })

    return (
        <div className="services-container">
            <h2>List of Services</h2>
            <div className="services">
                {services}
            </div>
        </div>
    )
}

export default Content;
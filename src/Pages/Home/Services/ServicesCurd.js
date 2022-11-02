import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServicesCurd = ({services}) => {
    const {_id,img, title, price} = services
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className= 'text-2xl text-bold text-orange-600'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-primary">Checkout<FaArrowRight></FaArrowRight></button>
                    </Link>
                </div>      
            </div>
        </div>
    );
};

export default ServicesCurd;
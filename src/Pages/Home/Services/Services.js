
import React, { useEffect, useState } from 'react';
import ServicesCurd from './ServicesCurd';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data=> setServices(data))
    },[])

    return (
        <div>
            <div className='text-center mb-6'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map( services => <ServicesCurd key={services._id}
                    services={services}></ServicesCurd>)
                }
            </div>
        </div>
    );
};

export default Services;
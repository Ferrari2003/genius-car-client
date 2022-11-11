
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ServicesCurd from './ServicesCurd';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('')
    const searchRef = useRef();
    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search])

    const handleSearch = () => {
         setSearch(searchRef.current.value)
    }

    return (
        <div>
            <div className='text-center mb-6'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
               <input className='input input-group-sm' ref={searchRef } type="text" />
                <button onClick={handleSearch}>Search</button>
                <button className='btn btn-info' onClick={()=> setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(services => <ServicesCurd key={services._id}
                        services={services}></ServicesCurd>)
                }
            </div>
        </div>
    );
};

export default Services;
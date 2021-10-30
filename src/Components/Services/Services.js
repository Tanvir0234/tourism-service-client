import React from 'react';
import { Link } from 'react-router-dom';
import useService from '../Hooks/useService';

const Services = () => {
    const {services} = useService([]);
    return (
        <div>
            <div className="container mt-2 ">
            <h1 className="text-center m-4">Our <span className="text-danger">Services</span> </h1>
            <div className="row g-4 mt-2">
                {services.map((service) => (

                    <div key={service.id} className="col-md-6 col-lg-4 col-sm-12">

                        <div className="card h-100 shadow  border rounded-3">

                            <img src={service.image} className="size img-fluid rounded-start w-100" alt="..." />


                            <div className="card-body">
                                <h5 className="card-title text-center">{service.name}</h5>
                                <p className="text-center">{service.description}</p>
                                <h6 className="card-text text-center"> Treatment Fee : {service.price}</h6>
                            </div>

                            <Link to={`/details/${service._id}`}>
                                <button className="btn btn-danger align mx-4 mb-3">See Details </button>
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Services;
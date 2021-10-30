import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useService from '../Hooks/useService';
import banner1 from '../../banner/b-1.jpg'
import banner2 from '../../banner/b-2.jpg'
import banner3 from '../../banner/b-3.jpg'
import './Home.css'

const Home = () => {
    const { services } = useService([]);

    return (

        <div className="mt-2">
            <Carousel className="h-50">
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3 className="banner-title fw-bold">WE PROVIDE TOTAL</h3>
                        <h3 className="banner-title fw-bold">Travel Solution</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3 className="banner-title fw-bold">WE PROVIDE TOTAL</h3>
                        <h3 className="banner-title fw-bold">Travel Solution</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3 className="banner-title fw-bold">WE PROVIDE TOTAL</h3>
                        <h3 className="banner-title fw-bold">Travel Solution</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <h1 className="text-center m-4">Our <span className="text-danger">Services</span> </h1>
            <div className="row g-4 mt-2">
                {services.map((service) => (

                    <div key={service._id} className="col-md-6 col-lg-4 col-sm-12">

                        <div className="card h-100 shadow  border rounded-3">

                            <img src={service.image} className="rounded-start w-100 img-fluid size" alt="..." />


                            <div className="card-body">
                                <h5 className="card-title text-center">{service.name}</h5>
                                <p className="text-center">{service.description}</p>
                                <h6 className="card-text text-center"> Booking Price : {service.price}</h6>
                            </div>

                            <Link to={`/details/${service._id}`}>
                                <button className="btn btn-danger align mx-4 mb-3">See Details </button>
                            </Link>
                        </div>

                    </div>
                )).slice(0, 6)}
            </div>
        </div>

    );
};

export default Home;

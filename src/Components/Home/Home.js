import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useService from '../Hooks/useService';
import banner1 from '../../banner/banner-1.jpg'
import banner2 from '../../banner/be-2.jpg'
import banner3 from '../../banner/ban-3.jpg'
import img1 from "../../images/img-1.png"
import img2 from "../../images/img-2.png"
import img3 from "../../images/img-3.png"
import img4 from "../../images/img-4.png"
import client1 from '../../images/cl-1.png'
import client2 from '../../images/cl-2.jpg'
import client3 from '../../images/cl-3.jpg'
import client4 from '../../images/cl-4.jpg'
import { FaAngleDoubleRight } from "react-icons/fa";



import './Home.css'

const Home = () => {
    const { services } = useService([]);

    return (

        <div className="mb-2">
            <Carousel className="h-50">
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3 className=" text-dark fw-bold">Time To Travel</h3>
                        <h3 className=" fw-bold"></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3 className="banner-title fw-bold">Time To Travel</h3>
                        <h3 className="banner-title fw-bold"></h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3 className="banner-title fw-bold">Time to Travel</h3>
                        <h3 className="banner-title fw-bold"></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="container">
                <div className="row my-5">
                    <div className="col-md-3">
                        <div>
                            <img className="image" src={img1} alt="" />
                            <h2 className="text-center">Guidence</h2>
                            <h6 className="text-center">Expert insight & travel knowledge</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <img className="image" src={img2} alt="" />
                            <h2 className="text-center">Value</h2>
                            <h6 className="text-center">Irresistible rates, offers & benefits</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <img className="image" src={img3} alt="" />
                            <h2 className="text-center">Peace of Mind</h2>
                            <h6 className="text-center">Reassurance to book with confidence</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <img className="image" src={img4} alt="" />
                            <h2 className="text-center">Service</h2>
                            <h6 className="text-center">Beside you every step of the way</h6>
                        </div>
                    </div>
                </div>
            </div>






            <h1 className="text-center m-4">Our <span className="text-danger">Tour</span> Plan </h1>
            <div className="container">
                <div className="row g-4 mt-2">
                    {services.map((service) => (

                        <div key={service._id} className="col-md-6 col-lg-4 col-sm-12">

                            <div className="card h-100 shadow  border rounded-3">

                                <img src={service.image} className="rounded-start w-100 img-fluid size" alt="..." />


                                <div className="card-body">
                                    <h5 className="card-title text-center">{service.name}</h5>
                                    <p className="text-center">{service.description}</p>
                                    <h6 className="card-text text-center"> Booking Price : ${service.price}</h6>
                                </div>

                                <Link to={`/details/${service._id}`}>
                                    <button className="btn btn-danger align mx-4 mb-3">See Details <FaAngleDoubleRight></FaAngleDoubleRight></button>
                                </Link>
                            </div>

                        </div>
                    )).slice(0, 6)}
                </div>
            </div>

            <div className="mt-5 client">
                <h1 className="text-center text-white fw-bold  py-5">Our Happy Client</h1>
                <div className="row ms-5 pb-5 ">
                    <div className="col-lg-3 col-sm-12">
                        <div className="card h-100 w-75">
                            <img className=" client-image ms-5 mt-2 img-top" src={client1} alt="" />
                            <div className="card-body">
                                <p>"Quin is great. Very good drive and nice! Would definitely use joy ride again! So convenient with students without cars!"</p>
                            </div>
                            <p className="text-end pe-3">– Abigail </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="card h-100 w-75">
                            <img className="client-image  ms-5 mt-2 img-top" src={client4} alt="" />
                            <div className="card-body">
                                <p>"I have used them for the Alabama Homecoming Bonfire/Pep Rally. Our kids loved the golf cart ride more than the bon fire. I only had to wait a few minutes and they took us straight to our car. They are an awesome service!!"</p>
                            </div>
                            <p className="text-end pe-3">– Kimberly R</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="card h-100 w-75">
                            <img className="client-image ms-5 mt-2 img-top " src={client2} alt="" />
                            <div className="card-body">
                                <p>"Joyride is awesome to get around campus and to go downtown. And all it costs is what I tip the driver. It's awesome getting to class on time because of joyride"</p>
                            </div>
                            <p className="text-end pe-3">– Matthew </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="card h-100 w-75">
                            <img className="client-image ms-5 mt-2 img-top " src={client3} alt="" />
                            <div className="card-body">
                                <p>"Had so much fun cruising on the streets in the golf cart. It even had seatbelts so we felt safe! I can't wait to go back to Tuscaloosa and use Joyride again!"</p>
                            </div>
                            <p className="text-end pe-3">– Danielle </p>
                        </div>
                    </div>

                </div>
            </div>



        </div>

    );
};

export default Home;

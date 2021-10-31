import React from 'react';
import { FaFacebookF ,FaGoogle,FaTwitterSquare } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (

        <div className=" ">

            <footer className="text-center text-white background" >

                <div className="container">

                    <section className="mt-5">

                        <div className="row text-center d-flex justify-content-center pt-5">

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">About us</a>
                                </h6>
                            </div>



                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Products</a>
                                </h6>
                            </div>



                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Awards</a>
                                </h6>
                            </div>



                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Help</a>
                                </h6>
                            </div>



                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Contact</a>
                                </h6>
                            </div>

                        </div>

                    </section>


                    <hr  />


                    <section className="mb-2">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <p>
                                Travel insurance for all travellers. We have plans for all types of travellers. If you travel regularly for business, take a series of short weekend trips, spend the winter in the US, or need coverage for your upcoming vacation, we have a plan that is right for you
                                </p>
                            </div>
                        </div>
                    </section>



                    <section className="text-center mb-3">
                        <a href="" className="text-white me-4">
                        <FaFacebookF></FaFacebookF>
                        </a>
                        <a href="" className="text-white me-4">
                        <FaTwitterSquare></FaTwitterSquare>
                        </a>
                        <a href="" className="text-white me-4">
                        <FaGoogle></FaGoogle>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>

                </div>



                <div
                    className="text-center p-3 bottom-footer"

                >
                    <p>&copy;2020 Copyright:Reserved</p> 
                    
                </div>

            </footer>

        </div>

    );
};

export default Footer;
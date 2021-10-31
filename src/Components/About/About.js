import React from 'react';
import image from '../../banner/about.jpg'
import './About.css'

const About = () => {
    return (
        <div className="container">
            <div className=" mb-3">
                <h1 className="text-center text-white pt-5">About Us</h1>
                <img className="h-50 about" src={image} alt="" />
            </div>
            <div className="title pb-1 mb-2 mt-2">
                <h2>WELCOME TO OUR</h2>
                <h1 className="text-primary">Travel Agency</h1>
            </div>
            <div>
                <p>Travel is the main thing you purchase that makes you more extravagant”. We, at ‘Organization Name’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.

                    We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.</p>
                  <p>  Since 1975, ‘Jet Set’ has been focused on bringing our customers the best in esteem and quality travel game plans. We are enthusiastic about movement and sharing the world’s marvels on the relaxation travel side, and giving corporate explorers hello there contact administrations to encourage their business travel needs.  </p>
            </div>


        </div>
    );
};

export default About;
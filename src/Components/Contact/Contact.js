import React from 'react';
import image from '../../banner/contact-1.webp'

const Contact = () => {
    return (
        <div className="container">
        <h2 className="text-center pb-3">Contact Us</h2>
        <div className="row mt-3">
            <div className="col-lg-6 col-sm-12">
                <img className="img-fluid" src={image} alt="" />
            </div>
            
            <div className="col-lg-6 col-sm-12 ">
            
                
                <input className="ms-5" type="text" name="" id="" placeholder="Enter Name" /><br /><br />
                <input className="ms-5" type="email" name="" id="" placeholder="Enter Email" /><br /><br />
                <input className="ms-5" type="text" name ="" id="" placeholder="Enter Problem" /><br /><br />
                <input className="ms-5" type="text" name="" id="" placeholder="Mobile Number" /><br /><br />
                <input className="ms-5" type="text" name="" id="" placeholder="Enter Address" /><br /><br />
            
                <input className="ms-5 btn btn-primary" type="submit" value="Booking" />
            
            </div>
        </div>

    </div>
    );
};

export default Contact;
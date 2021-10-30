import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([])
    const [singleService,setSingleService] =useState({})
   
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    useEffect(()=>{
       const foundDetail = details.find(detail=>detail._id === serviceId);
       setSingleService(foundDetail);
    },[details])
    return (
        <div className="container">
            <div className="row g-4">
               <div className="col-lg-6 col-sm-12 mt-5">
                   <h2 className="mt-4">{singleService?.name}</h2>
                   <h6 className="my-3">{singleService?.description}</h6>
                   <h6 className="text-danger">10 Days 9 Nights</h6>
                   <h2>Booking Fee : {singleService?.price}</h2>
                   <Link to="/placeOrder">
                   <button className="btn btn-danger  mt-4 mb-3">  Booking {singleService?.name}</button>
                   </Link>
               </div>
               <div className="col-lg-6 col-sm-12 mt-5">
               <img className="img-fluid w-100 align" src={singleService?.image} alt="" />
               </div>
            </div>

        </div>
    );
};

export default Details;
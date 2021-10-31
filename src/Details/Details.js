import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { useForm } from "react-hook-form";
import useAuth from '../Components/Hooks/useAuth';

const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([])
    const [singleService,setSingleService] =useState({})

    
    const history = useHistory();
    const { register, handleSubmit,reset } = useForm();
    const {user} = useAuth()

   
    useEffect(() => {
        fetch('https://infinite-castle-18932.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(()=>{
       const foundDetail = details.find(detail=>detail._id === serviceId);
       setSingleService(foundDetail);
    },[details])

    const onSubmit = data => {
        fetch("https://infinite-castle-18932.herokuapp.com/placeOrder", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
            if(result.acknowledge){
                alert('order')
                console.log(result)
            }
        });
          
          reset();
          history.push('/myOrders')
      }

    return (
        <div className="container">
            <div className="row g-4">
               <div className="col-lg-4 col-sm-12 mt-5">
                   <h2 className="mt-4">{singleService?.name}</h2>
                   <h6 className="my-3">{singleService?.description}</h6>
                   <h6 className="text-danger">10 Days 9 Nights</h6>
                   <h2>Booking Fee : {singleService?.price}</h2>

                </div>


                {/*--------- Place Order Part------------- */ }

                
               <div className="col-md-4">
               <div className=" d-flex justify-content-center align-items-center ">
            <div className="mt-5 mb-5" >
                <h1 className="text-center">Order Booking</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true})} value={user?.displayName} readOnly placeholder="Your Name" className="p-2 m-2" /> <br />
                    <input {...register("place", { required: true})}  value={singleService?.name} readOnly className="p-2 m-2" /> <br />
                    <input {...register("email", { required: true})} value = {user?.email} readOnly placeholder="Email" className="p-2 m-2"  /><br />
                    <input type="number" {...register("price")} value={singleService?.price} readOnly placeholder="price" className="p-2 m-2"  /><br />
                    <input type="submit"  className="btn btn-danger px-5 mx-4"/><br />
                  
                </form>
               
            </div>
        </div>
               </div>




               
               <div className="col-lg-4 col-sm-12 d-flex justify-content-center align-items-center">
                   <div>
                   <img className="img-fluid w-100 align" src={singleService?.image} alt="" />
                   </div>
               
               </div>
            </div>

        </div>
    );
};

export default Details;
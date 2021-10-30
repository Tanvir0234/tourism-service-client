import React from 'react';
import { useForm } from "react-hook-form";


const PlaceOrder = () => {
    
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/placeOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
        
        reset()
    }
    return (
        <div className="border d-flex justify-content-center align-items-center ">
            <div >
                <h1 className="text-center">Order Booking</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true})} placeholder="Your Name" className="p-2 m-2" /> <br />
                    <input {...register("place", { required: true})} placeholder="Place Name" className="p-2 m-2" /> <br />
                    <input {...register("email", { required: true})} placeholder="Email" className="p-2 m-2"  /><br />
                    <input type="number" {...register("price")} placeholder="price" className="p-2 m-2"  /><br />
                    <input type="submit"  className="btn btn-danger px-5 mx-4" /><br />
                    
                </form>
               
            </div>
        </div>
    );
};

export default PlaceOrder;
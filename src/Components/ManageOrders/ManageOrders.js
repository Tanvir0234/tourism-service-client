import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    

    useEffect(() => {
        fetch("https://infinite-castle-18932.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => {
                
                setOrders(data)
            });
    }, []);

    const handleDelete = (id) => {
        
        fetch(`https://infinite-castle-18932.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
               
                if(data.deletedCount){
                    let answer = window.confirm("Are you sure?");
                    if(answer){
                        const remaining = orders.filter(order =>order._id !== id);
                        setOrders(remaining);
                    }
                    else{
                        setOrders([]) 
                    }
                } 
            });
        
    };
    return (
        <div className="container">
            <div className="m-4">
                <h1 className="text-center">Total Orders {orders?.length}</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Place Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    {orders?.map((order, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.place}</td>
                                <td>$ {order.price}</td>
                            
                                
                                <button
                                    onClick={() => handleDelete(order._id)}
                                    className="btn bg-danger p-2 ms-4"
                                >
                                    <FaTrashAlt></FaTrashAlt>
                                </button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
            

        </div>
    );
};

export default ManageOrders;
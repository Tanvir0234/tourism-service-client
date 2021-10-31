import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import { FaTrashAlt } from "react-icons/fa";

const MyOrders = () => {

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch(`https://infinite-castle-18932.herokuapp.com/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user.email]);

    const handleDelete = (id) => {
        fetch(`https://infinite-castle-18932.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                let answer = window.confirm("Are you sure?");
                if(answer){
                    if(data.deletedCount){
                        
                        const remaining = orders.filter(order =>order._id !== id);
                        setOrders(remaining);
                       
                    } 
                }
                
            });

    };

    return (
        <div className="container">
            <div className="m-4">

                <h1 className="text-center">My Order : {orders.length}</h1>
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

export default MyOrders;
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';

const MyOrders = () => {

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [deleteOrders, setDeleteOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user.email]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = deleteOrders.filter(order => order._id !== id);
                    setDeleteOrders(remaining);
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
                                <td>{order.price}</td>
                                <button
                                    onClick={() => handleDelete(order._id)}
                                    className="btn bg-danger p-2 ms-4"
                                >
                                    Delete
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
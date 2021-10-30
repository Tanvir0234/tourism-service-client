import React, { useState } from 'react';
import AddServisec from '../AddServices/AddServisec';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrders from '../MyOrders/MyOrders';
import './Admin.css'

const Admin = () => {
    const [control, setControl] = useState("myOrders");
    return (
        <div className="admin-container">
        <div className="dashboard">
          <div className="admin-box">
            <div className="row admin-container">
              <div className="col-md-3 ">
                <div className="area p-1">
                  <h6 className="text-center">Dashboard</h6>
                  <div className=" mt-5">
                    <li
                      onClick={() => setControl("myOrders")}
                      className="menu p-2"
                    >
                      My Orders
                    </li>
                    <li
                      onClick={() => setControl("addService")}
                      className="menu p-2"
                    >
                      Add a new service
                    </li>
                    <li
                      onClick={() => setControl("manageOrder")}
                      className="menu p-2"
                    >
                      Manage All Order
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-9 text-center  text-center">
                {control === "myOrders" && <MyOrders></MyOrders>}
                {control === "addService" && <AddServisec></AddServisec>}
                {control === "manageOrder" && <ManageOrders></ManageOrders>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Admin;
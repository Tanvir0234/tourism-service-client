import React from 'react';
import not from '../../images/404.png'

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center ">
            <div className="my-5 mx-5">
                <img className="img-fluid my-5 mx-5" src={not} alt="" />
            </div>
        </div>
    );
};

export default NotFound;
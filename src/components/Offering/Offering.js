import React from 'react';
import { Link } from 'react-router-dom';
import './Offering.css';

const Offering = props => {
    const { _id, name, description, img, totalCost } = props.offering;
    return (
        <div className="offering-body">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                    <h4 className="py-4 text-primary">Cost: ${totalCost}.00</h4>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>

                        <p className="card-text">{description}</p>
                        <Link to={`/booking/${_id}`}><button style={{ borderRadius: "20px" }} className="btn btn-outline-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offering;


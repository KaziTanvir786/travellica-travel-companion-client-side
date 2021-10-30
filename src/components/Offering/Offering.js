import React from 'react';
import { Link } from 'react-router-dom';

const Offering = props => {
    const { _id, name, description, img } = props.offering;
    return (
        <div>
            <div className="card mx-4 p-1">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p><small className="text-secondary">Package ID: {_id}</small></p>
                            <p className="card-text">{description}</p>
                            <Link to={`/booking/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offering;


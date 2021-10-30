import React from 'react';

const SingleBooking = props => {
    const { booking } = props;

    return (
        <div>
            <div style={{ width: "90%" }} className="mx-auto card mb-3">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={booking.offering_img} className="img-fluid rounded-start" alt="Loading..." />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">{booking.offering_name}</h5>
                            <p className="card-text" style={{ textAlign: "justify" }}>{booking.offering_description}</p>
                            <p className="card-text">{booking.offering_totalCured}</p>
                        </div>
                    </div>
                    <div style={{ borderLeft: "2px dashed grey" }} className="col-md-3">
                        <div className="card-body">
                            <h6>Booked By:</h6>
                            <h5 className="card-title">{booking.user_name}</h5>
                            <p className="card-text">{booking.user_address}</p>
                            <p className="card-text">{booking.user_phone}</p>
                        </div>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                        <div className="card-body">
                            <button className="btn btn-outline-danger" onClick={() => props.handleDeleteBooking(booking._id)} style={{ width: "80px", height: "80px", borderRadius: "50%" }}><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBooking;
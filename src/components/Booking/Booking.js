import React, { useEffect, useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const [offerings, setOfferings] = useState([]);
    const { offeringId } = useParams();
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://quiet-cove-10103.herokuapp.com/offerings')
            .then(res => res.json())
            .then(data => setOfferings(data));
    }, []);

    let name = 'N/A';
    let description = 'N/A';
    let img = 'N/A';
    let totalCured = 'N/A';
    let id = 'N/A';

    offerings.map(offering => {
        if (offering._id === offeringId) {
            name = offering.name;
            description = offering.description;
            img = offering.img;
            totalCured = offering.totalCured;
            id = offering._id;
        }
        return '';
    });

    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();

    const handleAddBooking = e => {
        const user_name = nameRef.current.value;
        const user_email = emailRef.current.value;
        const user_address = addressRef.current.value;
        const user_phone = phoneRef.current.value;
        const offering_id = id;
        const offering_name = name;
        const offering_description = description;
        const offering_img = img;
        const offering_totalCured = totalCured;


        const newBooking = { user_name, user_email, user_address, user_phone, offering_id, offering_name, offering_description, offering_img, offering_totalCured };
        fetch('https://quiet-cove-10103.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Package booked successfully');
                    window.location = "/";
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    if (offerings.length !== 0) {
        return (
            <div className="booking mx-auto">
                <div>
                    <img src={img} alt="" />
                    <h3 className="p-4">{name}</h3>
                    <p style={{ textAlign: "justify" }}>{description}</p>
                    <h6 className="text-success">Total {totalCured} patients of {name} have been happily cured by us.</h6>
                </div>
                <br />
                <h2 className="heading mx-auto w-75 my-5">Enter your details and book an appointment</h2>
                <div>
                    <form onSubmit={handleAddBooking} className="row g-3">
                        <div className="col-md-12">
                            <input ref={nameRef} placeholder="Name" required value={user.displayName} type="text" className="form-control" id="inputName" />
                        </div>
                        <div className="col-md-12">
                            <input ref={emailRef} placeholder="Email" required value={user.email} type="email" className="form-control" id="inputEmail" />
                        </div>
                        <div className="col-12">
                            <input ref={addressRef} placeholder="Address" required type="text" className="form-control" id="inputAddress" />
                        </div>
                        <div className="col-12">
                            <input ref={phoneRef} placeholder="Phone" required type="text" className="form-control" id="inputPhone" />
                        </div>
                        <button type="submit" className="btn btn-success w-50 mx-auto my-4 p-3">Book the package now</button>
                    </form>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <Spinner style={{ marginTop: "100px", width: "100px", height: "100px" }} animation="grow" />
            </div>
        );
    }
};

export default Booking;
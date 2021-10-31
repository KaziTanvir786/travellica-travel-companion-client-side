import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SingleBooking from '../SingleBooking/SingleBooking';

const MyCart = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://quiet-cove-10103.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    const myBookings = bookings.filter(booking => booking.user_email === user.email && booking.user_name === user.displayName && booking.status === 'Pending');

    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const uri = `https://quiet-cove-10103.herokuapp.com/bookings/${id}`;
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully.');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings);
                    }
                });
        }
    };

    const handleUpdateCart = booking => {
        const updatedBooking = {
            status: 'Confirmed',
            user_name: booking.user_name,
            user_email: booking.user_email,
            user_phone: booking.user_phone,
            offering_id: booking.offering_id,
            offering_name: booking.offering_name,
            offering_description: booking.offering_description,
            offering_img: booking.offering_img,
            offering_totalCost: booking.offering_totalCost
        };

        const uri = `https://quiet-cove-10103.herokuapp.com/bookings/${booking._id}`;
        fetch(uri, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Booking has beed confirmed successfully.');
                    window.location = "/";
                }
            })
    };

    const startUpdateCart = () => {
        myBookings.map(booking => {
            handleUpdateCart(booking);
            return '';
        })

    }

    if (myBookings.length !== 0) {
        return (
            <div className="offerings-container">
                {
                    myBookings.map(booking => <SingleBooking
                        key={booking._id}
                        booking={booking}
                        handleDeleteBooking={handleDeleteBooking}
                    ></SingleBooking>)
                }

                <div>
                    <button onClick={startUpdateCart} className="btn btn-success">Confirm Booking</button>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <img width="50%" src="https://i.ibb.co/Rb8wnmh/empty-cart.png" alt="" />
            </div>
        );
    }


};

export default MyCart;
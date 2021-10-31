import React, { useEffect, useState } from 'react';
import NoBookingFound from '../NoBookingFound/NoBookingFound';
import SingleBooking from '../SingleBooking/SingleBooking';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://quiet-cove-10103.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
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
    }

    if (bookings.length !== 0) {
        return (
            <div className="offerings-container">
                <h1 className="title mx-auto my-4">All Bookings</h1>
                {
                    bookings.map(booking => <SingleBooking
                        key={booking._id}
                        booking={booking}
                        handleDeleteBooking={handleDeleteBooking}
                    ></SingleBooking>)
                }
            </div>
        );
    }
    else {
        return (
            <NoBookingFound></NoBookingFound>
        )
    }
};

export default ManageBookings;
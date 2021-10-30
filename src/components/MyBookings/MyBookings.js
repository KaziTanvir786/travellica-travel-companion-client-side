import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SingleBooking from '../SingleBooking/SingleBooking';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://quiet-cove-10103.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    const myBookings = bookings.filter(booking => booking.user_email === user.email && booking.user_name === user.displayName);

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
            </div>
        );
    }
    else {
        return (
            <div>
                <h2 className="my-4">No Bookings found!!</h2>
            </div>
        );
    }


};

export default MyBookings;
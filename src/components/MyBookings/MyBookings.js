import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import BookedItem from '../BookedItem/BookedItem';
import NoBookingFound from '../NoBookingFound/NoBookingFound';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://quiet-cove-10103.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    const myBookings = bookings.filter(booking => booking.user_email === user.email && booking.user_name === user.displayName && booking.status === 'Confirmed');

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
    }

    if (myBookings.length !== 0) {
        return (
            <div className="offerings-container">
                <h1 className="title mx-auto my-4">My Bookings</h1>
                {
                    myBookings.map(booking => <BookedItem
                        key={booking._id}
                        booking={booking}
                        handleDeleteBooking={handleDeleteBooking}
                    ></BookedItem>)
                }
            </div>
        );
    }
    else {
        return (
            <div>
                <NoBookingFound></NoBookingFound>
            </div>
        );
    }


};

export default MyBookings;
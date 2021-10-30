import React, { useEffect, useState } from 'react';
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

    return (
        <div className="offerings-container">
            {
                bookings.map(booking => <SingleBooking
                    key={booking._id}
                    booking={booking}
                    handleDeleteBooking={handleDeleteBooking}
                ></SingleBooking>)
            }
        </div>
    );
};

export default ManageBookings;
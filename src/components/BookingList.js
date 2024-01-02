import React, { useState, useEffect } from 'react';
import BookingService from '../service/BookingService';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        BookingService.getAllBookings().then(response => {
            setBookings(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Bookings</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        {booking.date} - {booking.serviceDescription} (Car ID: {booking.carId})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;

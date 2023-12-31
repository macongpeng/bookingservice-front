import React, { useState, useEffect } from 'react';
import BookingService from './BookingService';

const BookingForm = ({ bookingId, setBookingId }) => {
    const [booking, setBooking] = useState({ date: '', serviceDescription: '', carId: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (bookingId) {
            BookingService.updateBooking(bookingId, booking)
                .then(/* handle success */)
                .catch(/* handle error */);
        } else {
            BookingService.createBooking(booking)
                .then(/* handle success */)
                .catch(/* handle error */);
        }
        setBookingId(null);
    };

    useEffect(() => {
        if (bookingId) {
            BookingService.getBookingById(bookingId)
                .then(response => {
                    setBooking(response.data);
                })
                .catch(/* handle error */);
        }
    }, [bookingId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBooking({ ...booking, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Date:
                <input 
                    type="text" 
                    name="date" 
                    value={booking.date} 
                    onChange={handleInputChange} 
                />
            </label>
            <label>
                Service Description:
                <input 
                    type="text" 
                    name="serviceDescription" 
                    value={booking.serviceDescription} 
                    onChange={handleInputChange} 
                />
            </label>
            <label>
                Car ID:
                <input 
                    type="text" 
                    name="carId" 
                    value={booking.carId} 
                    onChange={handleInputChange} 
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default BookingForm;
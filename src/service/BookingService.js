import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/bookings`;

const BookingService = {
    getAllBookings() {
        return axios.get(BASE_URL);
    },
    getBookingById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    },
    createBooking(booking) {
        return axios.post(BASE_URL, booking);
    },
    updateBooking(id, booking) {
        return axios.put(`${BASE_URL}/${id}`, booking);
    },
    deleteBooking(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
};

export default BookingService;
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL + '/cars';

const CarService = {
    getAllCars() {
        return axios.get(BASE_URL);
    },
    getCarById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    },
    createCar(car) {
        return axios.post(BASE_URL, car);
    },
    updateCar(id, car) {
        return axios.put(`${BASE_URL}/${id}`, car);
    },
    deleteCar(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
};

export default CarService;
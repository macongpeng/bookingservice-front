import React, { useState, useEffect } from 'react';
import CarService from '../service/CarService';

const CarForm = ({ carId, setCarId }) => {
    const [car, setCar] = useState({ make: '', model: '', licensePlate: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (carId) {
            CarService.updateCar(carId, car)
                .then(/* handle success */)
                .catch(/* handle error */);
        } else {
            CarService.createCar(car)
                .then(/* handle success */)
                .catch(/* handle error */);
        }
        setCarId(null);
    };

    useEffect(() => {
        if (carId) {
            CarService.getCarById(carId)
                .then(response => {
                    setCar(response.data);
                })
                .catch(/* handle error */);
        }
    }, [carId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCar({ ...car, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Make:
                <input 
                    type="text" 
                    name="make" 
                    value={car.make} 
                    onChange={handleInputChange} 
                />
            </label>
            <label>
                Model:
                <input 
                    type="text" 
                    name="model" 
                    value={car.model} 
                    onChange={handleInputChange} 
                />
            </label>
            <label>
                License Plate:
                <input 
                    type="text" 
                    name="licensePlate" 
                    value={car.licensePlate} 
                    onChange={handleInputChange} 
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CarForm;

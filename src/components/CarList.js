import React, { useState, useEffect } from 'react';
import CarService from '../service/CarService';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        CarService.getAllCars().then(response => {
            setCars(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Cars</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>{car.make} {car.model} - {car.licensePlate}</li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;

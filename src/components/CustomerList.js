import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomerService from '../service/CustomerService';
import './CustomerList.css';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getAllCustomers().then(response => {
            setCustomers(response.data);
        });
    }, []);

    return (
        <div className="customer-list-container">
            <div className="header">
                <h2>Customers</h2>
                <Link to="/customersNew" className="add-new-link">Add New Customer</Link>
            </div>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>{customer.name} - {customer.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;

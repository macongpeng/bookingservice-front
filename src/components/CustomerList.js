import React, { useState, useEffect } from 'react';
import CustomerService from '../service/CustomerService';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getAllCustomers().then(response => {
            setCustomers(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Customers</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>{customer.name} - {customer.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;

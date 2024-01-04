import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomerService from '../service/CustomerService';
import './CustomerList.css';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomers, setSelectedCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = () => {
        CustomerService.getAllCustomers().then(response => {
            setCustomers(response.data);
        });
    };

    const handleCheckboxChange = (customerId) => {
        const updatedSelection = selectedCustomers.includes(customerId)
            ? selectedCustomers.filter(id => id !== customerId)
            : [...selectedCustomers, customerId];
        setSelectedCustomers(updatedSelection);
    };

    const handleDeleteSelected = () => {
        // Assuming deleteCustomer is an async function
        Promise.all(selectedCustomers.map(id => CustomerService.deleteCustomer(id)))
            .then(() => {
                fetchCustomers(); // Refresh the customer list after deletion
                setSelectedCustomers([]); // Reset selected customers
            })
            .catch(error => {
                console.error('Error deleting customers', error);
                // Handle error
            });
    };

    return (
        <div className="customer-list-container">
            <div className="list-header">
                <h2>Customers</h2>
                <Link to="/customer/new" className="add-new-link">Add New Customer</Link>
                {selectedCustomers.length > 0 && (
                    <button onClick={handleDeleteSelected} className="delete-button">Delete</button>
                )}
            </div>
            <ul className="customer-list">
                {customers.map(customer => (
                    <li key={customer.id} className="customer-item">
                        <input
                            type="checkbox"
                            checked={selectedCustomers.includes(customer.id)}
                            onChange={() => handleCheckboxChange(customer.id)}
                        />
                        <div className="customer-info">
                            <Link to={`/customer/edit/${customer.id}`}>{customer.name}</Link>
                            <span> - {customer.email} - {customer.phoneNumber}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;

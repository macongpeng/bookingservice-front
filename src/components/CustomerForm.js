import React, { useState } from 'react';
import CustomerService from '../service/CustomerService';

const CustomerForm = ({ customerId, setCustomerId }) => {
    const [customer, setCustomer] = useState({ name: '', email: '', phoneNumber: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (customerId) {
            CustomerService.updateCustomer(customerId, customer)
                .then(/* handle success */)
                .catch(/* handle error */);
        } else {
            CustomerService.createCustomer(customer)
                .then(/* handle success */)
                .catch(/* handle error */);
        }
        setCustomerId(null);
    };

    useEffect(() => {
        if (customerId) {
            CustomerService.getCustomerById(customerId)
                .then(response => {
                    setCustomer(response.data);
                })
                .catch(/* handle error */);
        }
    }, [customerId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCustomer({ ...customer, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type="text" 
                    name="name" 
                    value={customer.name} 
                    onChange={handleInputChange} 
                />
            </label>
            <label>
                Email:
                <input 
                    type="email" 
                    name="email" 
                    value={customer.email} 
                    onChange={handleInputChange} 
                />
            </label>
            <label>
                Phone Number:
                <input 
                    type="text" 
                    name="phoneNumber" 
                    value={customer.phoneNumber} 
                    onChange={handleInputChange} 
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomerForm;

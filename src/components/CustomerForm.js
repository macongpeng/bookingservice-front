import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import CustomerService from '../service/CustomerService';

const CustomerForm = ({ customerId, setCustomerId }) => {
    const [customer, setCustomer] = useState({ name: '', email: '', phoneNumber: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (isSubmitted) {
            history.push('/customers');
        }
    }, [isSubmitted, history]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (customerId) {
            await CustomerService.updateCustomer(customerId, customer)
                .then(/* handle success */)
                .catch(/* handle error */);
        } else {
            await CustomerService.createCustomer(customer)
                .then(/* handle success */)
                .catch(/* handle error */);
        }
        //setCustomerId(null);
        setIsSubmitted(true);
    };

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

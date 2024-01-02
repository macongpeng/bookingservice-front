import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL + '/customers'; 

const CustomerService = {
    getAllCustomers() {
        return axios.get(BASE_URL);
    },
    getCustomerById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    },
    createCustomer(customer) {
        return axios.post(BASE_URL, customer);
    },
    updateCustomer(id, customer) {
        return axios.put(`${BASE_URL}/${id}`, customer);
    },
    deleteCustomer(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
};

export default CustomerService;

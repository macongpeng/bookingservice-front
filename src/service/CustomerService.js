import axios from 'axios';

const BASE_URL = 'http://localhost:8080/customers'; // Adjust as per your API endpoint

const getAuthHeader = () => {
    const token = localStorage.getItem('jwtToken') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'; 
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  //, { headers: getAuthHeader() }

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

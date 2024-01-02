import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CarList from './components/CarList';
import BookingList from './components/BookingList';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/bookings">Bookings</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/customers">
            <CustomerList />
          </Route>
          <Route path="/cars">
            <CarList />
          </Route>
          <Route path="/bookings">
            <BookingList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
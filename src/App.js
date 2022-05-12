import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';



import Training from './Training';
import Customer from './Customer';
import Addcustomer from './Addcustomer';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Link to="/customer">Customers</Link>{' '}
      <Link to="/training">Trainings</Link>{' '}
      <Link to="/add">Add Customer</Link>{' '}
       <Routes>
        <Route path="/customer" element={<Customer />} />
        <Route path="/training" element={<Training />} />
        <Route path="/add" element={<Addcustomer />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

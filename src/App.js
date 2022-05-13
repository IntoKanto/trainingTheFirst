import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';



import Training from './components/Training';
import Customer from './components/Customer';


function App() {
  return (


    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4'>
            Fitness Center
          </Typography>

        </Toolbar>
      </AppBar>
            <BrowserRouter> 
            <Link to="/customer">Customers</Link>{' '}
            <Link to="/training">Trainings</Link>{' '}
        
            <Routes>
              <Route path="/customer" element={<Customer />} />
              <Route path="/training" element={<Training />} />
              
            </Routes>
          </BrowserRouter>
      
   
    </div>
  );
}

export default App;

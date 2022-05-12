import React from "react";
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState } from "react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Add ({ addcustomer }) {

    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        streetadress: '',
        postcode: '',
        city: '',
        email: '',
        phone: '',
    });

    const save = () => {
        addcustomer(customer);
        setCustomer({
            firstname: '',
            lastname: '',
            streetadress: '',
            postcode: '',
            city: '',
            email: '',
            phone: '',

            });
    }

    const inputChanged = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value});
    }

return (
   <>
    <div>
        <TextField
            name="firstname"
            value={customer.firstname}
            onChange={inputChanged}
            margin="dense"
            label="Firstname"
            fullWidth
            variant="standard"
          />
        <TextField
            name="lastname"
            value={customer.lastname}
            onChange={inputChanged}
            margin="dense"
            label="Lastname"
            fullWidth
            variant="standard"
          />
        <TextField
            name="streetadress"
            value={customer.streetadress}
            onChange={inputChanged}
            margin="dense"
            label="Streetadress"
            fullWidth
            variant="standard"
          />
        <TextField
            name="postcode"
            value={customer.postcode}
            onChange={inputChanged}
            margin="dense"
            label="Postcode"
            fullWidth
            variant="standard"
          />
        <TextField
            name="city"
            value={customer.city}
            onChange={inputChanged}
            margin="dense"
            label="City"
            fullWidth
            variant="standard"
          />
        <TextField
            name="email"
            value={customer.email}
            onChange={inputChanged}
            margin="dense"
            label="email"
            fullWidth
            variant="standard"
          />
        <TextField
            name="phone"
            value={customer.phone}
            onChange={inputChanged}
            margin="dense"
            label="phone"
            fullWidth
            variant="standard"
          />
        <Button onClick={save}>Save</Button>
    </div>


  
   
   
   </>

);

}


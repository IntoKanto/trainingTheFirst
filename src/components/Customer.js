import React from "react";
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState } from "react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Add from "./Addcustomer";
import Edit from "./Editcustomer";
import { IconButton } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import Addtraining from "./Addtraining";





export default function Customer () {

    const [customer, setCustomer] = useState([]);
    const [open, setOpen] = useState(false);
   

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers =()=> {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomer(data.content))
    }


    const deleteC = (customerId) => {
        if(window.confirm('Do you want to delete customer?')) {     //varmistetaan
        fetch(customerId, {
           method: 'DELETE' 
        })
        .then(response  => {
            if (response.ok) {
                setOpen(true);
                fetchCustomers();
            } else {
                alert('Something went wrong');
            }

        })
    }
    }

    const addCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
        method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(customer)
        })
        .then(response => {
            if(response.ok) {
                fetchCustomers();
            } else {
                alert('Something went wrong');
            }
        })
        .catch(err => console.error(err))
    }




        const addTraining = (training) => {
            console.log(training);
            fetch('https://customerrest.herokuapp.com/api/trainings', {
                method: 'POST', headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(training)
            })
            .then(response => {
                if(response.ok) {
                    fetchCustomers();
                } else {
                    alert('Something went wrong')
                }
            })
            .catch(err => console.error(err))
        }
        
    


    
    const updateCustomer = (updatedCustomer, customerId) => {
        fetch(customerId, {
            method: 'PUT', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedCustomer)
        })
        .then(response => {
            if(response.ok) {
                fetchCustomers();
            } else {
                alert('Something went wrong');
            }
        })
        .catch(err => console.error(err))
        
    }

    
    const  columns =[
        {field: 'firstname', sortable: true, filter: true}, 
        {field: 'lastname', sortable: true, filter: true},
        {field: 'streetaddress', sortable: true, filter: true},
        {field: 'postcode', sortable: true, filter:true},
        {field: 'city', sortable: true, filter: true},
        {field: 'email', sortable: true, filter: true},
        {field: 'phone', sortable: true, filter: true},
        {
            headerName:'',
            width: 100,
            field: 'links.1.href',
            cellRenderer: params => <Addtraining addTraining={addTraining} params={params} />
        },
       
        {
            headerName:'',
            width: 100,
            field: 'links.0.href',
           cellRenderer: params => <Edit updateCustomer={updateCustomer} params={params}/>
        },
        {
            width: 100,
            headerName: '',
            field: 'links.0.href',
            cellRenderer: params => <IconButton color="error" onClick={() => deleteC(params.value)}><DeleteIcon /></IconButton>}
    ]
    
    return (
        <>
       
       <div className="ag-theme-material" style={{marginTop:60, height: 600, width: '90%'}}>
                <AgGridReact 
                columnDefs={columns}
                rowData={customer}
                pagination={true}
                paginationPageSize={10}
                suppressCellFocus={true}
                />
            </div>
            <Snackbar 
                open={open}
                message="Customer deleted!"
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
            />
            <Add addCustomer={addCustomer}/>
        </>

    );
}
import React from "react";
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState } from "react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Add from "./Addcustomer";




export default function Customer () {

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers =()=> {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomer(data.content))
    }

    const addcustomer = (customer) => {
        fetch("https://customerrest.herokuapp.com/api/customers",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(customer)
    })
    .then(response => {
        if (response.ok){
            fetchCustomers();
        } else {
            alert.apply("Somethong went wrong");
        }
    })

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
            headerName: 'link',
            field: 'links.href'
        }
        
    ]
    
    return (
        <>
        <Add addcustomer={addcustomer} />
       <div className="ag-theme-material" style={{marginTop:60, height: 600, width: '90%'}}>
                <AgGridReact 
                columnDefs={columns}
                rowData={customer}
                pagination={true}
                paginationPageSize={10}
                suppressCellFocus={true}
                />
            </div>

        </>

    );
}
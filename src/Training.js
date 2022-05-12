import React from "react";
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState } from "react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import dayjs from "dayjs";
import { format, compareAsc } from 'date-fns';
import { duration } from "@mui/material";

export default function Training () {

    
    const [customer, setCustomer] = useState([]);
   
  // const date = dayjs(customer.date).format('D MMMM YYYY HH mm');



    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers =()=> {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setCustomer(data.content))
       
    }

    
    const  columns =[
        {field: 'date', sortable: true, filter: true, 
        valueFormatter: params => dayjs(params.value).format('D MMMM YYYY HH mm') }, 
        {field: 'duration', sortable: true, filter: true},
        {field: 'activity', sortable: true, filter: true},
        
        
    ]
    console.log(customer);
    return (
        <>
       <div className="ag-theme-material" style={{marginTop:60, height: 600, width: '75%'}}>
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
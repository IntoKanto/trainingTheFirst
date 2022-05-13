import React from "react";
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState } from "react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import dayjs from "dayjs";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import EditIcon from '@mui/icons-material/Edit';
import Addtraining from "./Addtraining";


export default function Training () {

    const [training, setTraining] = useState([]);  
    const [open, setOpen] = useState(false);
  // const date = dayjs(customer.date).format('D MMMM YYYY HH mm');



    useEffect(() => {
        fetchTrainings();
    }, []);

    const fetchTrainings =()=> {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTraining(data))
       
    }

    const deleteT = (trainingId) => {
        if(window.confirm('Do you want delete training?')) { //varmistus
        fetch("https://customerrest.herokuapp.com/api/trainings/" + trainingId, {
            method: 'DELETE'
        })
        .then(response => {
            if(response.ok) {
                setOpen(true);
                fetchTrainings();
            } else {
                alert('Something went wrong');
            }
        })
    }
    }

    

    
    const  columns =[
        {field: 'date', sortable: true, filter: true, 
        valueFormatter: params => dayjs(params.value).format('D MMMM YYYY HH mm') }, 
        {field: 'duration', sortable: true, filter: true},
        {field: 'activity', sortable: true, filter: true},
        {
            headerName:'Firstname',
            field:'customer.firstname'
        },
        {
            headerName:'Lastname',
            field: 'customer.lastname'
        },

        {
            width: 100,
            headerName: '',
            field: 'id',
            cellRenderer: params =>  <IconButton color="error" onClick={() => deleteT(params)}><DeleteIcon /></IconButton>
        }
        
        
    ]
 
    return (
        <>
       <div className="ag-theme-material" style={{marginTop:60, height: 600, width: '75%'}}>
                <AgGridReact 
                columnDefs={columns}
                rowData={training}
                pagination={true}
                paginationPageSize={10}
                suppressCellFocus={true}
                />
            </div>
           

            <Snackbar 
                open={open}
                message="Training deleted"
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
            />

        </>

    );
}
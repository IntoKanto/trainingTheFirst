import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";

export default function Edit ( {updateCustomer, params} ) {

  const [open, setOpen] = React.useState(false);
  const [customer, setCustomer] = React.useState({
    firstname: '',
    lastname: '',
    streetaddress: '',
    postcode: '',
    city: '',
    email: '',
    phone: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
    setCustomer({
        firstname: params.data.firstname,
        lastname: params.data.lastname,
        streetaddress: params.data.streetaddress,
        postcode: params.data.postcode,
        city: params.data.city,
        email: params.data.email,
        phone: params.data.phone

    })
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  const handleSave = () => {
   updateCustomer(customer, params.value);
    setOpen(false);
  }

  const inputChanged = (event) => {
    setCustomer({...customer, [event.target.name]: event.target.value})
  }

  
  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>

        <DialogTitle>Edit customer</DialogTitle>

        <DialogContent>
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
              name="streetaddress"
              value={customer.streetaddress}
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
              label="Email"
              fullWidth
              variant="standard"
            />
            <TextField
              name="phone"
              value={customer.phone}
              onChange={inputChanged}
              margin="dense"
              label="Phone"
              fullWidth
              variant="standard"
            />

          
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}


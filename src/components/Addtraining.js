import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from "@mui/material";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';



export default function Addtraining ( { addTraining, params } ) {

  const [open, setOpen] = React.useState(false);
  const [training, setTraining] = React.useState({
   date:'',
   duration: '',
   activity: '',
   customer:''
  });

  const handleClickOpen = () => {
    setTraining({
      date:'',
      duration:'',
      activity:'',
      customer: params.value
    })
    setOpen(true);
  
  };

  
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    addTraining(training);

 
    
    setOpen(false);
  }

  const inputChanged = (event) => {
    setTraining({...training, [event.target.name]: event.target.value})
  }

  

  return (
    <div>
      <IconButton  onClick={handleClickOpen}>
        <FitnessCenterIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>

        <DialogTitle>New training</DialogTitle>

        <DialogContent>
            <TextField
              
              name="date"
              value={training.date}
              onChange={inputChanged}
              margin="dense"
              label="Date"
              fullWidth
              variant="standard"
            />
            <TextField
              name="duration"
              value={training.duration}
              onChange={inputChanged}
              margin="dense"
              label="Duration"
              fullWidth
              variant="standard"
            />
            <TextField
              name="activity"
              value={training.activity}
              onChange={inputChanged}
              margin="dense"
              label="Activity"
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


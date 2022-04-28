import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

// import {addCaseManager} from '../../actions/client';

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

export default function CaseManager() {

    const classes = useStyles();
    // const dispatch = useDispatch();

    const columns = [
        { id: 'seq', label: 'Seq', minWidth: 170 },
        { id: 'name', label: 'Name', minWidth: 100 },
        { id: 'phone',label: 'Phone',minWidth: 170,align: 'center'},
        { id: 'email',label: 'Email',minWidth: 170,align: 'center'},
        { id: 'remove',label: 'Remove',minWidth: 170,align: 'center'},
    ];


    let selectedCaseManagers = [{
        name:'faheem',
        phone:'+923456789',
        email:'faheem@gmail.com'
    }];

    const [formData, updateFormData] = useState(null);


    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    }

    const addNewCaseManager = (e) => {
        e.preventDefault()
        
        console.log("formData for new case manager");
        console.log("formData for new case manager");
        console.log(formData);
        
        // dispatch(addCaseManager(formData))
        // or // we can also get from store
        // .then(addedCaseManager => {
        //     selectedCaseManagers = {...addedCaseManager};
        // })
    }

    const showCaseManagersList = (e) =>  {
        e.preventDefault()
        
        console.log("formData for search case manager");
        console.log("formData for search case manager");
        console.log(formData);
        
        // dispatch(getAllCaseManagers(formData));
    }

  return (
    <>
        <Paper>
            <h5>Case Manager</h5>
            <div className="form-wrapper">
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <TextField type="text" id="firstName" name="FirstName" placeholder="Enter First Name" label="First Name" variant="outlined" onChange={handleChange} />
                    </Grid>

                    <Grid item sm={3}>
                        <TextField type="text" id="lastName" name="LastName" placeholder="Enter Last Name" label="Last Name" variant="outlined" onChange={handleChange} />
                    </Grid>

                    <Grid item sm={3}>
                        <TextField type="text" id="email" name="email" placeholder="Enter Email" label="Email" variant="outlined" onChange={handleChange} />
                    </Grid>

                </Grid>
                
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <TextField type="text" id="phone" name="phone" placeholder="Enter Phone Number" label="Phone" variant="outlined" onChange={handleChange} />
                    </Grid>

                    <Grid item sm={3}>
                        <FormControl variant="outlined" className={classes.formControl} >
                            <InputLabel id="demo-simple-select-filled-label">Phone Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Mobile</MenuItem>
                                <MenuItem value={20}>Home</MenuItem>
                                <MenuItem value={30}>Office</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item sm={2}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            startIcon={<SearchIcon />}
                            onClick={showCaseManagersList}
                        >
                            Search
                        </Button>
                    </Grid>
                    
                    <Grid item sm={4}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            startIcon={<AddIcon />}
                            onClick={addNewCaseManager}
                        >
                            New Case Manager
                        </Button>
                    </Grid>

                </Grid>
            </div>
        </Paper>
        <Paper>
            <h5>Assigned Manager(s)</h5>
            <Grid item sm={12}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {selectedCaseManagers.map((row , index) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            {columns.map(column => {
                                let counter = index + 1;
                                let value = row[column.id] ;

                                if(column.id == 'seq')
                                    value = counter;
                                else if (column.id == 'remove')
                                    value = "-";
                                
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    {value}
                                </TableCell>
                                );
                            })}
                            </TableRow>
                        );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Paper>
        

        <button hidden={true} ref={()=> {}} type={"submit"} />
    </>
  )
}

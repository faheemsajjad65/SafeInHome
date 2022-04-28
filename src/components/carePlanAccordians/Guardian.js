

import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";

import {
    Select,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Button,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core'

import {
    Search,
    Add
} from '@material-ui/icons/'

// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    main:{
        width:"100%",
        padding:"10px",
        marginTop:"15px"
    }
}));

export default function Guardian() {
    const classes = useStyles();

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

  return (
    <>
        <Paper>
            <h5>Guardian</h5>
            <div className="form-wrapper">
                
                        {/* <Grid container spacing={2}>
                            <Grid item sm={3}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label="Own Guardian"
                                />
                            </Grid>

                            <Grid item sm={3}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label="Guardian Service"
                                />
                            </Grid>
                        </Grid> */}

                        <Grid container spacing={3}>
                            <Grid item sm={3}>
                                <TextField type="text" id="firstName" name="FirstName" placeholder="Enter First Name" label="First Name" variant="outlined" />
                            </Grid>

                            <Grid item sm={3}>
                                <TextField type="text" id="lastName" name="LastName" placeholder="Enter Last Name" label="Last Name" variant="outlined" />
                            </Grid>

                            <Grid item sm={3}>
                                <TextField type="text" id="phone" name="phone" placeholder="Enter Phone Number" label="Phone" variant="outlined" />
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item sm={3}>
                                <FormControl variant="outlined" className={classes.formControl} >
                                    <InputLabel id="demo-simple-select-filled-label">Relationship</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Father</MenuItem>
                                        <MenuItem value={20}>Mother</MenuItem>
                                        <MenuItem value={30}>Syster</MenuItem>
                                        <MenuItem value={30}>Brother</MenuItem>
                                        <MenuItem value={30}>Uncle</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item sm={3}>
                                <FormControl variant="outlined" className={classes.formControl} >
                                    <InputLabel id="demo-simple-select-filled-label">Phone Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        
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
                            <Grid item sm={3}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<Search />}
                                    
                                >
                                    Search Guardian
                                </Button>
                            </Grid>
                            
                            <Grid item sm={3}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<Add />}
                                    
                                >
                                    New Guardian
                                </Button>
                            </Grid>

                        </Grid>

                    <button hidden={true} ref={()=> {}} type={"submit"} />
               
            </div>
        </Paper>

        <Paper>
            <h5>Assigned Guardians</h5>
            
            <Grid container spacing={1}>
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
            </Grid>
        </Paper>

        <button hidden={true} ref={()=> {}} type={"submit"} />
    </>
  )
}

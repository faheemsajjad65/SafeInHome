import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from "@material-ui/core/Paper";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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

export default function NaturalSupport() {
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
            <h5>Natural Support</h5>
            <div className="form-wrapper">
                

                        <Grid container spacing={3}>
                            <Grid item sm={3}>
                                <TextField type="text" id="firstName" name="FirstName" placeholder="Enter First Name" label="First Name" variant="outlined" />
                            </Grid>

                            <Grid item sm={3}>
                                <TextField type="text" id="lastName" name="LastName" placeholder="Enter Last Name" label="Last Name" variant="outlined" />
                            </Grid>

                            
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item sm={3}>
                                <TextField type="text" id="phone" name="phone" placeholder="Enter Phone Number" label="Phone" variant="outlined" />
                            </Grid>
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
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item sm={2}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<SearchIcon />}
                                    
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
                                    
                                >
                                    New Natural Support
                                </Button>
                            </Grid>

                        </Grid>

                    <button hidden={true} ref={()=> {}} type={"submit"} />
               
            </div>
        </Paper>

        <Paper>
            <h5>Natural Support Contact(s)</h5>
            
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

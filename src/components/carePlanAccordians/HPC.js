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
    root: {
        '& > *': {
            margin: theme.spacing(1),
          }
    },
    formControl: {
        minWidth: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function HPC() {
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
            <h5>HPC / Paid Backup</h5>
            <div className="form-wrapper">
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <TextField type="text" id="hpcname" name="hpcName" placeholder="Enter HPC Name" label="Name" variant="outlined" />
                    </Grid>

                    <Grid item sm={3}>
                        <TextField type="text" id="organization" name="organization" placeholder="HPC Organization" label="Organization" variant="outlined" />
                    </Grid>

                    <Grid item sm={3}>
                        <TextField type="text" id="email" name="email" placeholder="Enter Email Number" label="Email" variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <TextField type="text" id="phone1" name="phone1" placeholder="(xxx)xxx-xxxx" label="Phone 1" variant="outlined" />
                    </Grid>
                    <Grid item sm={3}>
                        <FormControl variant="outlined" className={classes.formControl} >
                            <InputLabel id="demo-simple-select-filled-label">Phone Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                name="phoneType1"
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

                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <TextField type="text" id="phone2" name="phone2" placeholder="(xxx)xxx-xxxx" label="Phone 2" variant="outlined" />
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
                    <Grid item sm={2}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            startIcon={<SearchIcon />}
                            onClick={() => {}}
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
                            onClick={() => {}}
                        >
                            New HPC
                        </Button>
                    </Grid>

                </Grid>
            </div>
        </Paper>

        <Paper>
            <h5>Assigned HPC</h5>
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

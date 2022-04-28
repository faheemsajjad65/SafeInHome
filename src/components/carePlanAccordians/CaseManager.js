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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles(theme => ({

    formControl: {
        margin: theme.spacing(1),
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

export default function CaseManager() {
    const classes = useStyles();

    const showCaseManagersList = () => {
        console.log("i am here");
        // show dialog 
    }

    const columns = [
        { id: 'seq', label: 'Seq', minWidth: 170 },
        { id: 'name', label: 'Name', minWidth: 100 },
        { id: 'phone',label: 'Phone',minWidth: 170,align: 'center'},
        { id: 'email',label: 'Email',minWidth: 170,align: 'center'},
        { id: 'remove',label: 'Remove',minWidth: 170,align: 'center'},
    ];


    const selectedCaseManagers = [{
        name:'faheem',
        phone:'+923456789',
        email:'faheem@gmail.com'
    }];

  return (
    <>
        <form
            className={classes.form}
            noValidate
            onSubmit={() => {}}
        >
            <Grid container direction="row">
                <Paper className={classes.main} square>
                    <Grid item xs={12}>
                        <Grid container direction={"row"} spacing={3}>
                            <Grid item xs={4}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    name="firstName"
                                    autoComplete="name"
                                    autoFocus
                                    placeholder="First Name"
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{
                                        sx: {
                                            "&::placeholder": {
                                                color: "inherit"
                                            }
                                        }
                                    }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "inherit"
                                        }
                                    }}
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lastName"
                                    placeholder="Last Name"
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{
                                        sx: {
                                            "&::placeholder": {
                                                color: "inherit"
                                            }
                                        }
                                    }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "inherit"
                                        }
                                    }}
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="Email"
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{
                                        sx: {
                                            "&::placeholder": {
                                                color: "inherit"
                                            }
                                        }
                                    }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "inherit"
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"} spacing={3}>
                            <Grid item xs={4}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    fullWidth
                                    id="phone" 
                                    label="Phone"
                                    name="phone"
                                    autoComplete="phone"
                                    placeholder="Phone"
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{
                                        sx: {
                                            "&::placeholder": {
                                                color: "inherit"
                                            }
                                        }
                                    }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "inherit"
                                        }
                                    }}
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <FormControl variant="filled" className={classes.formControl} style={{'margin':"40px 0 0 0"}}>
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

                            <Grid item xs={2} style={{'margin-top':"35px"}}>
                                <Button
                                    color="default"
                                    fullWidth
                                    size="large"
                                    variant="contained"
                                    onClick={()=>showCaseManagersList()}

                                >
                                    Search
                                </Button>
                            </Grid>

                            <Grid item xs={2} style={{'margin-top':"35px"}}>
                                <Button
                                    color="default"
                                    fullWidth
                                    size="large"
                                    variant="contained"
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>

                <Paper className={classes.main} square>
                    <Grid item xs={12}>
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

            </Grid>

            <button hidden={true} ref={()=> {}} type={"submit"} />
        </form>
    </>
  )
}

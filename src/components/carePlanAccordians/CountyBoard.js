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

export default function CountyBoard() {
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
            <h5>County Board</h5>
            <div className="form-wrapper">
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <TextField type="text" id="organization" name="organization" placeholder="Organization Name" label="Name" variant="outlined" />
                    </Grid>

                    <Grid item sm={3}>
                        <TextField type="text" id="phone" name="phone" placeholder="(xxx)xxx-xxxx" label="Phone" variant="outlined" />
                    </Grid>

                    <Grid item sm={3}>
                        <TextField type="text" id="oncall" name="oncall" placeholder="(xxx)xxx-xxxx" label="On-Call" variant="outlined" />
                    </Grid>
                </Grid>
            </div>
        </Paper>

        <Paper>
            <h5>MUI Reporting</h5>
            <div className="form-wrapper">
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <TextField type="text" id="email" name="email" placeholder="Enter Email" label="Email" variant="outlined" />
                    </Grid>

                    <Grid item sm={3}>
                        <TextField type="text" id="phone" name="phone" placeholder="(xxx)xxx-xxxx" label="Phone" variant="outlined" />
                    </Grid>
                </Grid>
            </div>
        </Paper>

        <button hidden={true} ref={()=> {}} type={"submit"} />
    </>
  )
}

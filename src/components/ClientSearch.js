import { TextField, Button } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { getClients } from '../actions/client'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles((theme) => ({
    button: {
      //margin: theme.spacing(1),
    },
}));

export default function ClientSearch() {

    const {register , handleSubmit} = useForm();

    const dispatch = useDispatch();

    const handleSearchForm = (formData) => {
        formData.dob = !formData.dob ? null : new Date(formData.dob)
        dispatch(getClients(formData))
    }

    const classes = useStyles();

    return (

        <div className="form-wrapper">
            <form onSubmit={handleSubmit(handleSearchForm)}>
                <Grid container spacing={3}>
                    <Grid item sm={2}>
                        <TextField {...register("FirstName")} type="text" id="fname" name="FirstName" placeholder="Enter First Name" label="First Name" variant="outlined"/>
                    </Grid>
                    <Grid item sm={2}>
                        <TextField {...register("LastName")} type="text" id="lname" name="LastName" placeholder="Enter Last Name" label="Last Name" variant="outlined"/>
                    </Grid>
                    <Grid item sm={2}>
                        <TextField {...register("dob")} type="text" id="dob" name="dob" placeholder="Enter DOB" label="DOB" variant="outlined"
                        InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <DateRangeIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                    </Grid>
                    <Grid item sm={2}>
                        <TextField {...register("email")} type="text" id="email" name="email" placeholder="Enter Email" label="Email" variant="outlined"/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item sm={4}>
                        <TextField {...register("street")} type="text" id="street" name="street" placeholder="Enter Street" label="Street" variant="outlined"/>
                    </Grid>
                    <Grid item sm={2}>
                        <TextField {...register("city")} type="text" id="city" name="city" placeholder="Enter City" label="City" variant="outlined"/>
                    </Grid>
                    <Grid item sm={2}>
                        <TextField {...register("state")} type="text" id="state" name="state" placeholder="Enter State" label="State" variant="outlined"/>
                    </Grid>
                    <Grid item sm={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<SearchIcon />}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
                
            </form>
        </div>
    )
}
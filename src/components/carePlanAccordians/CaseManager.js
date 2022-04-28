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


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
          }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));

export default function CaseManager() {
    const classes = useStyles();

    const showCaseManagersList = () => {
        console.log("i am here");
        // show dialog 
    }

  return (
    <>
        <form
            className={classes.form}
            noValidate
            onSubmit={() => {}}
        >
            <Grid container direction="row">
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

            </Grid>

            <button hidden={true} ref={()=> {}} type={"submit"} />
        </form>
    </>
  )
}

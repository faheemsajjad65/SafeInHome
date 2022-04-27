import React, {forwardRef, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {getClients} from "../actions/client";


const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            position: "relative",
            height: "100vh",
            width: "100%",
        },
        main: {
            padding: theme.spacing(5, 4, 8),
            width: "100%",
        },
        form: {
            width: "100%",
        },
        btnSubmit: {
            margin: theme.spacing(3, 0, 0),
        }
    })
);
const AssignedClientForm = forwardRef((props,ref) => {
    const { isDarkMode }  = useSelector((state) => state.settings);
    const { user }  = useSelector((state) => state.auth);
    const classes = useStyles();
    const dispatch = useDispatch();
    const {clientId,reset,register,handleSubmit,onSubmit} = props;

    const inputVariant = (isDarkMode ? "filled" : "outlined");

    useEffect(() => {
        // async server request and fill up form
        const userID = clientId ;
        dispatch(getClients({userID})).then(response=>{
            if(!!response && Array.isArray(response) && response.length>0){
                const fetchedClient = response.find(item=>item.userID===parseInt(userID))
                const clientData = {
                    name: fetchedClient?.name ?? "",
                    address: fetchedClient?.address ?? "",
                    dob: fetchedClient?.dob ?? "",
                    email: fetchedClient?.email ?? "",
                    phone: null,
                    group: null,
                    clientComment: fetchedClient?.clientComment ?? ""
                }
                reset({...clientData})
            }
        })

    }, [reset,user]);

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Assigned Client
            </Typography>
            <form
                className={classes.form}
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={6}>
                        <Grid container direction={"column"}>
                            <Grid container direction={"row"} spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        {...register('name')}
                                        disabled={true}
                                        aria-disabled={true}
                                        margin="normal"
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        name="name"
                                        autoComplete="name"
                                        autoFocus
                                        variant={inputVariant}
                                        placeholder="Name"
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

                                <Grid item xs={6}>
                                    <TextField
                                        {...register('address')}
                                        disabled={true}
                                        aria-disabled={true}
                                        margin="normal"
                                        fullWidth
                                        id="address"
                                        label="Address"
                                        name="address"
                                        autoComplete="address"
                                        autoFocus
                                        variant={inputVariant}
                                        placeholder="Address"
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
                            <Grid container direction={"row"} spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        {...register('dob')}
                                        disabled={true}
                                        aria-disabled={true}
                                        margin="normal"
                                        fullWidth
                                        id="dob"
                                        label="DOB"
                                        name="dob"
                                        autoComplete="dob"
                                        autoFocus
                                        variant={inputVariant}
                                        placeholder="DOB"
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

                                <Grid item xs={6}>
                                    <TextField
                                        {...register('email')}
                                        disabled={true}
                                        aria-disabled={true}
                                        margin="normal"
                                        fullWidth
                                        id="email"
                                        label="email"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        variant={inputVariant}
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
                            <Grid container direction={"row"} spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        {...register('phone')}
                                        disabled={true}
                                        aria-disabled={true}
                                        margin="normal"
                                        fullWidth
                                        id="phone"
                                        label="Phone"
                                        name="phone"
                                        autoComplete="phone"
                                        autoFocus
                                        variant={inputVariant}
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

                                <Grid item xs={6}>
                                    <TextField
                                        {...register('group')}
                                        disabled={true}
                                        aria-disabled={true}
                                        margin="normal"
                                        fullWidth
                                        id="group"
                                        label="Group"
                                        name="group"
                                        autoComplete="group"
                                        autoFocus
                                        variant={inputVariant}
                                        placeholder="Group"
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

                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction={"column"} >
                            <Grid item xs={12}>
                                <TextField
                                    {...register('clientComment')}
                                    disabled={false}
                                    aria-disabled={false}
                                    margin="normal"
                                    fullWidth
                                    id="clientComment"
                                    label="Note"
                                    name="clientComment"
                                    autoComplete="clientComment"
                                    autoFocus
                                    multiline
                                    minRows={10}
                                    variant={inputVariant}
                                    placeholder="Note"
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
                    </Grid>
                </Grid>

                <button hidden={true} ref={ref} type={"submit"} />
            </form>
        </>

    );
})
export default AssignedClientForm;
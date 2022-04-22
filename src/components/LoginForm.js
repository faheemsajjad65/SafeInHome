import React, {useCallback, useEffect, useState} from 'react';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import LogoSrc from "../assets/images/logo.svg";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {login} from "../actions/auth";
import {LinearProgress} from "@material-ui/core";

function getProgressBarProps(hasError) {
    return {
        variant: hasError ? "determinate" : "indeterminate",
        value: 100,
        color: hasError ? "secondary" : "primary",
    };
}

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            position: "relative",
            height: "100vh",
            width: "100%",
        },
        loginAvatar: {
          margin: theme.spacing(3)
        },
        main: {
            padding: theme.spacing(5, 5, 8),
            maxWidth: "30rem",
        },
        form: {
            width: "100%",
        },
        btnSubmit: {
            margin: theme.spacing(3, 0, 5),
            padding: theme.spacing(2.4, 0),
            fontSize: "14px"
        },
        forgotLinksWrap: {
           //marginBottom: theme.spacing(2),
        },
        forgotLink: {
            display: "inline-block",
            marginBottom: theme.spacing(2),
            cursor: "pointer"
        },
        progressBar: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
        },
        authContainer: {
            marginTop: theme.spacing(3),
        },
        logo: {
            marginBottom: theme.spacing(7.5),
        },
    })
);

export default function LoginForm() {
    const { isLoggedIn } = useSelector(state => state.auth);
    const { isDarkMode }  = useSelector((state) => state.settings);
    const [hasLoginPending, setHasLoginPending] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();
    const {
        register,
        handleSubmit: rhfHandleSubmit,
        formState: { errors }
    } = useForm();

    const inputVariant = (isDarkMode ? "filled" : "outlined");

    const handleLoginSuccess = useCallback(
        (res) => {
        setHasLoginPending(false);
        if (res instanceof Error) {
            setLoginError(res);
            return;
        }
        return window.history.push("/");
    },[]);

    useEffect(() => {
        if (!isLoggedIn) return;
        handleLoginSuccess();
    }, []);

    const handleLoginFail = useCallback((error) => {
        if (error instanceof Error) {
            setLoginError(error);
        }
        setHasLoginPending(false);
    }, []);

    const handleFormSubmit = (data) => {
        // console.log("submitted data ",data)
        setLoginError(null);
        setHasLoginPending(true);
        dispatch(login(data.username, data.password)).then(
            handleLoginSuccess,
            handleLoginFail
        );
    };

    return (
            <Container component="main" maxWidth="xs">
                {(hasLoginPending || loginError) && (
                    <LinearProgress
                        className={classes.progressBar}
                        {...getProgressBarProps(loginError != null)}
                    />
                )}
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Grid
                        className={classes.container}
                        container
                        alignContent="center"
                        justifyContent={"center"}
                    >
                        {/* <Avatar className={classes.loginAvatar}>
                            <PersonIcon />
                        </Avatar> */}
                        <img className={classes.logo} alt="brand-logo" src={LogoSrc} />
                        
                        <form
                            className={classes.form}
                            noValidate
                            onSubmit={rhfHandleSubmit(handleFormSubmit)}
                        >
                            <Grid container direction="row" spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        {
                                        ...register(
                                            'username',
                                            {
                                                required: "Username is required.",
                                                minLength: {
                                                    value: 3,
                                                    message: "Username length at least 3 digits"
                                                }
                                            })
                                            }
                                        disabled={hasLoginPending}
                                        aria-disabled={hasLoginPending}
                                        margin="normal"
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        autoComplete="username"
                                        autoFocus
                                        variant={inputVariant}
                                        placeholder="Enter Username"
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
                                        error={!!errors?.username}
                                        helperText={`${errors?.username ? errors.username.message : ""}`}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        {
                                            ...register(
                                                'password',
                                                {
                                                    required: "Password is required.",
                                                })
                                        }
                                        disabled={hasLoginPending}
                                        aria-disabled={hasLoginPending}
                                        margin="normal"
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        variant={inputVariant}
                                        placeholder="Enter Password"
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
                                        error={!!errors?.password}
                                        helperText={`${errors?.password ? errors.password.message : ""}`}
                                    />
                                </Grid>
                                <Button
                                    aria-disabled={hasLoginPending}
                                    className={`${classes.btnSubmit} btn-brand`}
                                    color="primary"
                                    disabled={hasLoginPending}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                >
                                    Login
                                </Button>
                                <Grid
                                    className={classes.forgotLinksWrap}
                                    container
                                    direction={"column"}
                                    alignItems={"center"}
                                >
                                    <Grid item>
                                        <Link to={"/"} className={classes.forgotLink}>
                                            Forgot Username?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link to={"/"} className={classes.forgotLink}>
                                            Forgot Password?
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                        
                    </Grid>
                </Box>
            </Container>
    );
}

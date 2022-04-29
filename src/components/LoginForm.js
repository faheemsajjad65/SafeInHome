import React from 'react';
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
import { login } from "../actions/auth";

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
            margin: theme.spacing(6, 0, 5),
            padding: theme.spacing(2.4, 0),
            fontSize: "14px"
        },
        forgotLink: {
            display: "inline-block",
            marginBottom: theme.spacing(2),
            cursor: "pointer",
            '&:hover': {
                color: "#fa03c1",
            }
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
            cursor: "pointer"
        },
        errorMessage: {
            fontSize: "16px",
            textAlign: "center",
            width: "100%",
            margin: "1em 0",
            color: "red",
            '&:hover': {
                color: "#fc7373",
            },
        }
    })
);

export default function LoginForm() {
    const { hasLoginPending, errorMessage, loginAttemptsCount, isLoginBlocked } = useSelector(state => state.auth);
    const { isDarkMode }  = useSelector((state) => state.settings);

    const dispatch = useDispatch();
    const classes = useStyles();
    const {
        register,
        handleSubmit: rhfHandleSubmit,
        formState: { errors }
    } = useForm();

    const inputVariant = (isDarkMode ? "outlined" : "outlined");

    const handleFormSubmit = (data) => {
        const isLastAttempt = loginAttemptsCount >= 2;
        dispatch(login(data.username, data.password,isLastAttempt))
    };

    return (
            <Container component="main" maxWidth="xs">
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
                        <Link to={"/"}>
                            <img className={classes.logo} alt="brand-logo" src={LogoSrc} />
                        </Link>

                        <form
                            className={classes.form}
                            noValidate
                            onSubmit={rhfHandleSubmit(handleFormSubmit)}
                        >
                            <Grid container direction="row">
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
                                        error={!!errors?.username || errorMessage}
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
                                                    minLength: {
                                                        value: 6,
                                                        message: "Password length at least 6 digits"
                                                    }
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
                                        error={!!errors?.password || errorMessage}
                                        helperText={`${errors?.password ? errors.password.message : ""}`}
                                    />
                                </Grid>
                                <Button
                                    aria-disabled={hasLoginPending}
                                    className={classes.btnSubmit}
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
                                    <Grid
                                        container
                                        alignItems={"center"}
                                    >
                                        {
                                            isLoginBlocked && (
                                                <div className={classes.errorMessage}>
                                                    Please retry login after 15 minutes or contact your administrator
                                                </div>
                                            )
                                        }

                                        {
                                            errorMessage && (
                                                <div className={classes.errorMessage}>
                                                    Username or Password is incorrect
                                                </div>
                                            )
                                        }

                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                        
                    </Grid>
                </Box>
            </Container>
    );
}

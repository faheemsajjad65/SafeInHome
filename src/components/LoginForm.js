import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Container from '@mui/material/Container';

export default function LoginForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get('username'),
            password: data.get('password'),
        });
    };

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LoginIcon />
                    </Avatar>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    color: "inherit"
                                }
                            }}
                            variant="outlined"
                            placeholder="Enter Username"
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                                sx: {
                                    "&::placeholder": {
                                        color: "inherit"
                                    }
                                }
                            }}
                        />

                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    color: "inherit"
                                }
                            }}
                            variant="outlined"
                            placeholder="Enter Password"
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                                sx: {
                                    "&::placeholder": {
                                        color: "inherit"
                                    }
                                }
                            }}
                        />


                        {/*<TextField*/}
                        {/*    margin="normal"*/}
                        {/*    fullWidth*/}
                        {/*    id="username"*/}
                        {/*    label="Username"*/}
                        {/*    name="username"*/}
                        {/*    autoComplete="username"*/}
                        {/*    autoFocus*/}
                        {/*/>*/}

                        {/*<TextField*/}
                        {/*    margin="normal"*/}
                        {/*    fullWidth*/}
                        {/*    name="password"*/}
                        {/*    label="Password"*/}
                        {/*    type="password"*/}
                        {/*    id="password"*/}
                        {/*    autoComplete="current-password"*/}
                        {/*/>*/}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 5, mb: 5 }}
                            size="large"
                        >
                            login
                        </Button>
                        <Grid container direction={"column"} alignItems={"center"}>
                            <Grid item >
                                <Link to={"/"}>
                                    Forgot username?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={"/"}>
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );
}
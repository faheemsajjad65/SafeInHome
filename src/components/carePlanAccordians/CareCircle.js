// import React from 'react'

// export default function CareCircle() {
//   return (
//     <div>CareCircle</div>
//   )
// }


import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
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
}));

export default function CareCircle(props,ref) {
  const classes = useStyles();
  const { isDarkMode }  = useSelector((state) => state.settings);
  const [value, setValue] = React.useState(0);
  const {clientId,reset,register,handleSubmit,onSubmit} = props;
  const inputVariant = (isDarkMode ? "filled" : "outlined");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Case Managers" {...a11yProps(0)} />
          <Tab label="Guardian" {...a11yProps(1)} />
          <Tab label="County Board" {...a11yProps(2)} />
          <Tab label="Natural Support" {...a11yProps(3)} />
          <Tab label="Call Tree" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography variant="h6" gutterBottom>
          Case Manager
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
                                {...register('note')}
                                disabled={false}
                                aria-disabled={false}
                                margin="normal"
                                fullWidth
                                id="note"
                                label="Note"
                                name="note"
                                autoComplete="note"
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



      </TabPanel>
      <TabPanel value={value} index={1}>
      Guardian
      </TabPanel>
      <TabPanel value={value} index={2}>
      County Board
      </TabPanel>
      <TabPanel value={value} index={3}>
      Natural Support
      </TabPanel>
      <TabPanel value={value} index={4}>
      Call Tree
      </TabPanel>
    </div>
  );
}
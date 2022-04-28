import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { useSelector } from 'react-redux';
import CaseManager from './CaseManager'
import Guardian from './Guardian';
import HPC from './HPC';

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
        padding: "10px 10px!important",
        width: "100%",
    },
    form: {
        width: "100%",
    },
    btnSubmit: {
        margin: theme.spacing(3, 0, 0),
    }
}));

const CareCircle = forwardRef((props,ref) => {
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
          <Tab label="HPC" {...a11yProps(2)} />
          <Tab label="County Board" {...a11yProps(3)} />
          <Tab label="Natural Support" {...a11yProps(4)} />
          <Tab label="Call Tree" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      
      <TabPanel value={value} index={0}>
        <CaseManager />
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        <Guardian />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <HPC />
      </TabPanel>


      <TabPanel value={value} index={3}>
        County Board
      </TabPanel>
      <TabPanel value={value} index={4}>
        Natural Support
      </TabPanel>
      <TabPanel value={value} index={5}>
        Call Tree
      </TabPanel>
    </div>
  );
});


export default CareCircle;
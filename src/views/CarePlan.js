import React, {useRef, useState} from 'react'
import { withBaseLayout } from '../layouts/Base'
import HealthInformation from '../components/carePlanAccordians/HealthInformation'
import Technology from '../components/carePlanAccordians/Technology'
import AlertConditions from '../components/carePlanAccordians/AlertConditions'
import CarePlanActionsCalender from '../components/carePlanAccordians/CarePlanActionsCalender'
import CarePlanActions from '../components/carePlanAccordians/CarePlanActions'
import PersonalSupportDetails from '../components/carePlanAccordians/PersonalSupportDetails'
import EmergencyPlanning from '../components/carePlanAccordians/EmergencyPlanning'
import CSRepresentative from '../components/carePlanAccordians/CSRepresentative'
import CareCircle from '../components/carePlanAccordians/CareCircle'
import Grid from "@material-ui/core/Grid";
import WizardAccordion from "../components/WizardAccordion";
import AssignedClientForm from "../components/AssignedClientForm";
import Button from "@material-ui/core/Button";
import {useForm} from "react-hook-form";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {useDispatch, useSelector} from "react-redux";
import * as clientService from "../services/client.service";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    main: {
        padding: theme.spacing(5, 4, 8),
        width: "100%",
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: {
        minHeight: "1em"
    },
    content: {
        flexGrow: 1,
        height: '100%',
        overflow: 'hidden',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

function CarePlan() {
    const urlParams = useParams();
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(false);

    const refSubmitButton = useRef(null);
    const {reset,register,handleSubmit} = useForm();

    const handleActiveStep = (panel) => (event, isExpanded) => {
        setActiveStep(isExpanded ? panel : false);
    };

    const handleFormSubmit = (data) => {
        // console.log("submitted data ",data)
        const payload = {
            userID: urlParams?.clientId,
            clientComment: data.clientComment
        }
        clientService.updateClientNote(payload)
            .then(()=>{
                // success
                return Promise.resolve();
            })

    };

    const triggerSubmit = () => {
        // it clicks the hidden submit type button inside each step component to get form value by reference using react-hook-form
        refSubmitButton?.current?.click();
    };

    return (
        <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <WizardAccordion activeStep={activeStep} setActiveStep={handleActiveStep}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className={classes.main} square>
                            {
                                activeStep === "step1" && (
                                    <AssignedClientForm
                                        reset={reset}
                                        register={register}
                                        handleSubmit={handleSubmit}
                                        onSubmit={handleFormSubmit}
                                        ref={refSubmitButton}
                                        clientId={urlParams?.clientId}
                                    />
                                )
                            }

                            {
                                activeStep === "step2" && (
                                    <CareCircle />
                                )
                            }

                            {
                                activeStep === "step3" && (
                                    <CSRepresentative />
                                )
                            }

                            {
                                activeStep === "step4" && (
                                    <EmergencyPlanning />
                                )
                            }

                            {
                                activeStep === "step5" && (
                                    <PersonalSupportDetails />
                                )
                            }

                            {
                                activeStep === "step6" && (
                                    <CarePlanActions />
                                )
                            }

                            {
                                activeStep === "step7" && (
                                    <CarePlanActionsCalender />
                                )
                            }

                            {
                                activeStep === "step8" && (
                                    <AlertConditions />
                                )
                            }

                            {
                                activeStep === "step9" && (
                                    <HealthInformation />
                                )
                            }

                            {
                                activeStep === "step10" && (
                                    <Technology />
                                )
                            }
                        </Paper>



                        {/*navigation buttons*/}

                        <Paper className={classes.main} square>
                            <Grid justifyContent={"flex-end"} container direction={"row"} spacing={2}>
                                <Grid item>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        size="large"
                                        variant="contained"

                                    >
                                        Next
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        onClick={triggerSubmit}
                                    >
                                        Save & Next
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Save & Exit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>
                </Grid>
            </main>
    )
}


export default withBaseLayout(CarePlan)
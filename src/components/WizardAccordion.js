import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AccordionList = [
    {
        stepId: "step1",
        step: "Step 1",
        summary: "Name and Contact",
        detail: "Enter the client name and contact information",
        disabled: false
    },
    {
        stepId: "step2",
        step: "Step 2",
        summary: "Care Circle",
        detail: "Enter Case Managers, Guardians, HPC, County Board and Call Tree Information",
        disabled: false
    },
    {
        stepId: "step3",
        step: "Step 3",
        summary: "CS Rep",
        detail: "Enter Client Services Representative",
        disabled: false
    },
    {
        stepId: "step4",
        step: "Step 4",
        summary: "Emergency Planning",
        detail: "Enter Emergency Contact, Disaster & Emergency Plan Information",
        disabled: true
    },
    {
        stepId: "step5",
        step: "Step 5",
        summary: "Personal/Support Detail",
        detail: "Enter personal/support detail",
        disabled: true
    },
    {
        stepId: "step6",
        step: "Step 6",
        summary: "Care Plan Actions",
        detail: "Define Care Plan Actions for the Client",
        disabled: true
    },
    {
        stepId: "step7",
        step: "Step 7",
        summary: "Care Plan Actions Calender",
        detail: "Enter Care Plan Actions for the Calender",
        disabled: true
    },
    {
        stepId: "step8",
        step: "Step 8",
        summary: "Alert Conditions",
        detail: "Enter Alert Conditions",
        disabled: true
    },
    {
        stepId: "step9",
        step: "Step 9",
        summary: "Health Information",
        detail: "Enter Health Information for Client",
        disabled: true
    },
    {
        stepId: "step10",
        step: "Step 10",
        summary: "Technology",
        detail: "Enter the client name and contact information",
        disabled: true
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function WizardAccordion({activeStep,setActiveStep}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                AccordionList.map((item,idx)=>{
                    return(
                        <Accordion
                            key={idx}
                            disabled={item.disabled}
                            expanded={activeStep === item.stepId}
                            onChange={setActiveStep(item.stepId)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`${item.stepId}-content`}
                                id={`${item.stepId}-header`}
                            >

                                <Typography className={classes.secondaryHeading}>
                                    {item.summary}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Typography className={classes.heading}>{item.step}</Typography>
                                    {item.detail}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    );
}

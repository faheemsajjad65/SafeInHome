import {
    Button,
    createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid as MuiGrid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(3),
            minWidth: "30%",
        },
    })
);

const Modal = ({open,onClose,onSubmit,title,children}) => {
    const classes = useStyles();
    const {
        handleSubmit: rhHandleSubmit,
    } = useForm();

    return (
        <Dialog
            open={open}
            PaperProps={
                {
                    autoComplete: "off",
                    className: classes.root,
                    component: "form",
                    noValidate: true,
                    onSubmit: rhHandleSubmit(onSubmit),
                }
            }
            scroll="paper"
        >
            <DialogTitle disableTypography>
                <Typography component="h1" color="textPrimary" variant="h6">
                    {title}
                </Typography>
            </DialogTitle>
            <DialogContent>
                <MuiGrid container>
                    {children}
                </MuiGrid>
            </DialogContent>
            <DialogActions>
                <Button color="secondary" onClick={onClose} variant="contained">
                    Cancel
                </Button>
                <Button
                    color="primary"
                    type="submit"
                    variant="contained"
                    disabled={true}
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}
export default Modal;

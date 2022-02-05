import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface Iprops {
    handleClose: () => void
    open: any
    val: string
}
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const SnackbarComponent = ({ handleClose, open, val }: Iprops) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                {val === "rushi" ? <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert> : <Alert severity="error" onClose={handleClose}>This is an error message!</Alert>}
            </Snackbar>
        </div>
    );

}
export default SnackbarComponent;

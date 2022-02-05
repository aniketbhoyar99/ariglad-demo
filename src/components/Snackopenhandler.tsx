import React from 'react'
import Button from '@material-ui/core/Button';
import SnackbarComponent from './SnackbarComponent';

const Snackopenhandler = () => {
    const [state, setState] = React.useState<any>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const [val, setval] = React.useState("aniket");

    const handleClick = () => {
        if (val === "aniket"){
            setval("rushi")
        }else{
            setval("amit")
        }
        setState({ ...state, open: true });
    };

    const handleClose = (event?: React.SyntheticEvent,) => {
        setState({ ...state, open: false });
    };
    return (
        <div>
            <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
            </Button>
            {state.open && <SnackbarComponent handleClose={handleClose} open={state.open} val={val}/>}
        </div>
    )
}

export default Snackopenhandler

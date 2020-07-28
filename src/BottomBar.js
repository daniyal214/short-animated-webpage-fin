import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useWebAnimations, { slideInRight } from "@wellyshen/use-web-animations";


const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
}));

export default function BottomBar() {
    const { ref } = useWebAnimations({ ...slideInRight });
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary" className={classes.appBar} ref={ref}>
                <Toolbar>
                    <div className={classes.grow} />
                    <Typography variant="h6">
                        Made By: Muhammad Daniyal
          </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

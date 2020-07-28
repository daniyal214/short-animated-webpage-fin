import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '20px',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            width: theme.spacing(27),
            height: theme.spacing(30),
        },
    },
}));

export default function PaperComp() {
    const classes = useStyles();

    return (
        <div 
        style = {{justifyContent: 'center', alignItems: 'center', display: 'flex' }}
        className={classes.root}>
            <Paper elevation={6} className = "image1">
                <div> 
                    <img src={require("./images/image1.png")} height={200} width={200}  />
                </div>   
            </Paper>

            <Paper elevation={6} className = "image1">
                <div> 
                    <img src={require("./images/image4.png")} height={200} width={200}  />
                </div>   
            </Paper>
            
        </div>
    );
}

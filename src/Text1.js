import React from 'react'
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider, Typography } from '@material-ui/core';
import useWebAnimations, { fadeInLeft } from "@wellyshen/use-web-animations";


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const heading1 = "ANIMATED";
const heading2 = "WEBPAGE";
const text = "Made by Muhammad Daniyal";

function Text1() {

    const { ref, playState, getAnimation } = useWebAnimations({ ...fadeInLeft });

    return (

        <div ref={ref} className="typ1">
            <Typography
                color="secondary"
                className="typ1-heading"
                variant="h1"
            >
                <b>{heading1} </b>
            </Typography>

            <Typography
                color="secondary"
                className="typ1-heading"
                variant="h1"
            >

                <b> {heading2}</b>
            </Typography>
            <Typography
                style={{ paddingLeft: '10px' }}
                color="primary"
                className="typ1-text"
                variant="subtitle1"
                gutterBottom>
                <b>{text}</b>
            </Typography>
        </div>
    )
};
export default Text1;

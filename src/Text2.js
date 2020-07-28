import React from 'react'
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider, Typography } from '@material-ui/core';
import useWebAnimations, { fadeInLeft } from "@wellyshen/use-web-animations";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const heading = "PRODUCTS";
const text = "We have variety of different products as per demand of our costumer.....";

function Text2() {
    const { ref, playState, getAnimation } = useWebAnimations({ ...fadeInLeft });
    return (
        <div ref={ref} className="typ2">
            <Typography
                color="secondary"
                className="typ2-heading"
                variant="h1" >
                <b>{heading}</b>
            </Typography>
            <Typography
                style={{ paddingLeft: '10px' }}
                color="primary"
                className="typ2-text"
                variant="subtitle1" gutterBottom>
                <b>{text}</b>
            </Typography>
        </div>
    )
};
export default Text2;

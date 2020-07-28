import React from 'react'
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider, Typography } from '@material-ui/core';
import useWebAnimations, { fadeInLeft } from "@wellyshen/use-web-animations";


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const heading = "SERVICES";
const text = "Provides satisfactory services to our customers. We always try to meet their ......";

function Text3() {
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
export default Text3;

import React from 'react'
import {Typography } from '@material-ui/core';
import useWebAnimations, { fadeInLeft } from "@wellyshen/use-web-animations";


const heading = "PRODUCTS";
const text = "We have variety of different products as per demand of our costumer.....";

function Text2() {
    const { ref } = useWebAnimations({ ...fadeInLeft });
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

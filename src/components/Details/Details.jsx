import React from 'react';
import { Card, CardHeader, CardText, CardContent, Typography } from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';
import useStyles from './styles';
const Details = () => {

    const classes = useStyles();
    return (
        <Card className={classes.incone}>
            <CardHeader title="Income" variant="h2" />
            <CardContent>
                <Typography variant="h5">
                ₹10,000
                </Typography>
                {/* <Doughnut data="data" /> */}
            </CardContent>
        </Card>
    )
}

export default Details

import React from 'react'
import Details from "./components/Details/Details";
import { Grid } from "@material-ui/core";

import useStyles  from './style';
const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
                <Grid item xs={12} sm={4}>
                    <Details />
                 
                </Grid>
                <Grid item xs={12} sm={4}>
main                 
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details />
                 
                </Grid>
            </Grid>
        </div>
    )
}
export default App;

import {MDCTopAppBar} from '@material/top-app-bar';

import React, {useEffect, useState} from 'react';
import {AppBar, Button, createStyles, IconButton, Theme, Toolbar, Typography, useMediaQuery} from "@material-ui/core";
import {SystemsStatus} from "./SystemsStatus";
import {makeStyles} from "@material-ui/styles";
import MenuIcon from '@material-ui/icons/Menu';
import theme from "../../src/theme";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            background: theme.palette.primary.dark,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            flexWrap: "wrap",
        },
    }),
);


function TopAppBar(props: { pageTitle: String }) {
    const [systemState, setSystemState] = useState('UNKNOWN');
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    let handleSystemState = () => {
        setSystemState('OKAY')
        console.log("UPDATING SYSTEM STATUS: " + systemState)
        //On first render
        //check if connected to the internet
        //check if connected to backend
        //check if connected to frontend
        //check if connected to MongoDB
    }

    useEffect(()=> {
        // The console.log seems to output the default UNKNOWN state first, then the OKAY state. I need to learn effect
        handleSystemState()
    })

    function mobileBreakpoint(code: string) {
        if (matches) {
            return (SystemsStatus(code))
        }
    }

    const classes = useStyles();

    // // Instantiation
    // const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    // const topAppBar = new MDCTopAppBar(topAppBarElement as Element);

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {props.pageTitle}
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <div>

                        {mobileBreakpoint(systemState)}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default TopAppBar;
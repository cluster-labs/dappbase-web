import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import DappKitLogo from '../../assets/img/dappkit_topbar.png'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        display: 'flex',
        minHeight: '48px'
    },
    title: {
        margin: '10px',
        paddingLeft: '20px'
    },
    toolbarEnd: {
        position: 'absolute',
        right: 10,
        color: '#ffffff',
        textTransform: 'none'
    }
}));


export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar elevation="0" className={classes.appbar} color="primary" position="static">
                <Toolbar className={classes.toolbar}>
                    <img src={DappKitLogo} width="116px" height="32px" />
                    {/* <Typography color="textSecondary" variant="h6" className={classes.title}>
                        About
                        </Typography>
                    <Typography color="textSecondary" variant="h6" className={classes.title}>
                        Blog
                        </Typography>
                    <Typography color="textSecondary" variant="h6" className={classes.title}>
                        Team
                        </Typography>
                    <Typography color="textSecondary" variant="h6" className={classes.title}>
                        FAQ
                        </Typography> */}
                    <Button className={classes.toolbarEnd} onClick={() => window.open("https://simpleaswater.gitbook.io/dappkit/")}>
                        <font size="4">Go to Docs</font>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

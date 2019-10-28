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
        textTransform: 'none'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    setInterval(() => {
        if (document.scrollingElement.scrollTop < 30) {
            document.getElementsByClassName("MuiAppBar-positionFixed")[0].classList.remove("MuiPaper-elevation4")
        }
        else {
            document.getElementsByClassName("MuiAppBar-positionFixed")[0].classList.add("MuiPaper-elevation4")
        }
    }, 100)

    return (
        <div className={classes.root}>

            <AppBar className={classes.appbar} color="inherit" position="fixed">
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
                    <Button className={classes.toolbarEnd} color="primary" onClick={() => window.open("mailto:hi@simpleaswater.com")}>
                        <font size="4">Contact</font>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

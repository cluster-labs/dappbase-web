import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    navlink: {
        textDecoration: 'none',
        color: '#909497',
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1)
    },
    root: {
        display: 'flex',
        justifyContent: 'center'
    }
}))

export default function Footer() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className={classes.root}>
            <NavLink to="/support" className={classes.navlink}>
                <Typography variant="body2">
                    Support
                </Typography>
            </NavLink>
            {bull}
            <NavLink to="/tos" className={classes.navlink}>
                <Typography variant="body2">
                    Terms
                </Typography>
            </NavLink>
            {bull}
            <NavLink to="/privacy" className={classes.navlink}>
                <Typography variant="body2">
                    Privacy Policy
                </Typography>
            </NavLink>
        </div>
    )
}

import React from 'react';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import { TextField, Typography, Button } from '@material-ui/core';

import axios from 'axios'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '12px'
    },
    margin: {
        marginTop: theme.spacing(1),
    },
    button: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        fontSize: '1em'
    }
}));

const ValidationTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
            borderColor: 'grey',
            borderWidth: 2,
        },
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
        },
    },
})(TextField);


export default function CustomizedInputs() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        email: '',
        buttonText: ''
    });

    const handleChange = event => {
        setValues({ ...values, 'email': event.target.value });
    };

    const sendEmail = event => {

        setValues({ ...values, 'buttonText': 'WAIT' })

        axios({
            method: 'post',
            url: `https://vaibhavsaini.com:8081/email`,
            data: {
                to: `vasa@towardsblockchain.com`,
                body: `User with email ${values.email} joined the waitlist.`,
                subject: `DappKit: New User added to December Waitlist`
            }
        })
            .then(response => {
                console.log(response)
                setValues({ ...values, 'buttonText': 'DONE' })
            })
            .catch(err => {
                console.log(err)
                setValues({ ...values, 'buttonText': 'TRY AGAIN' })
            })

    }

    return (
        <form noValidate>
            <Typography color="primary" variant="h5">
                <b>Join Beta Waitlist. We Launch in December.</b>
            </Typography>
            <div className={classes.root}>
                <ValidationTextField
                    style={{ boxShadow: '0 0 3px #6b61fc' }}
                    className={classes.margin}
                    label="Enter Email"
                    required
                    variant="outlined"
                    placeholder="you@company.com"
                    id="validation-outlined-input"
                    value={values.email}
                    onChange={handleChange}
                />
                <Button size="large" variant="contained"
                    color="primary" className={classes.button}
                    onClick={sendEmail}>
                    {values.buttonText || 'Request Access'}
                </Button>
            </div>
        </form>
    );
}

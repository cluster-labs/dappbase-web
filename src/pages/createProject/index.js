import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import { Typography, Grid, Button, TextField, Chip, CardContent, CardActions } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    main: {
        padding: '6%',
        textAlign: 'left'
    },
    stepTitle: {
        color: '#676767',
    },
    title: {
        color: '#000000'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400,
        fontSize: '4em'
    },
    InputText: {
        fontSize: 40,
    },
    chip: {
        background: '#B2BABB'
    },
    button: {
        background: '#eeeeee',
        maxWidth: '216px',
        maxHeight: '56px',
        minWidth: '216px',
        minHeight: '56px',
        borderRadius: '10px',
    },
    back: {
        textAlign: "end",
        color: '#676767',
    },
    link: {
        textDecoration: 'none'
    }
}))

export default function CreateProject() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        name: ''
    });

    const handleChange = event => {
        let inputText = event.target.value

        setValues({ ...values, 'name': inputText });
        if (inputText.length >= 4) {
            document.getElementById("button").style.background = "#6b61fc"
            document.getElementById("button").style.color = "#ffffff"
            document.getElementById("standard-error-helper-text").innerHTML = ""
        }
        else {
            document.getElementById("button").style.background = "#eeeeee"
            document.getElementById("button").style.color = "#676767"
            if (inputText.length > 0) {
                document.getElementById("standard-error-helper-text").innerHTML = "Project name must be at least 4 characters long"
            }
            else {
                document.getElementById("standard-error-helper-text").innerHTML = "Project name is required"
            }
        }
    };

    const projectId = `${values.name}-${Math.random().toString(36).substring(5)}`

    return (
        <div className={classes.main}>
            <NavLink to="/start" className={classes.link}>
                <Typography className={classes.back} variant="h6">
                    X
                </Typography>
            </NavLink>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} xl={12} style={{ paddingBottom: '80px' }}>
                    <Typography className={classes.stepTitle} variant="h6">
                        Create a Project (Step 1 of 1)
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={12}>
                    <Typography className={classes.title} variant="h3">
                        Let's start with a name for your Project
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={12}>
                    <b>
                        <TextField
                            id="standard-basic"
                            className={classes.textField}
                            id="standard-error"
                            helperText="Project name is required"
                            InputProps={{
                                classes: {
                                    input: classes.InputText,
                                },
                            }}
                            value={values.name}
                            onChange={handleChange}
                            label="Project name"
                            placeholder="Your Project Name"
                            margin="normal"
                            autoFocus
                        />
                    </b>
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={12}>
                    <Chip className={classes.chip} label={`${values.name}` ? `${projectId}` : "my-awesome-project-id"} disabled />
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={12} style={{ marginTop: '60px' }}>
                    <a href={`/project/${projectId}/auth`} className={classes.link}>
                        <Button id="button" className={classes.button}>
                            Create Project
                        </Button>
                    </a>
                </Grid>
            </Grid>
        </div>
    )
}

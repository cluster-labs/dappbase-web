import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, Paper, Card, CardContent, CardActions } from '@material-ui/core';
import { NavLink } from 'react-router-dom'

import { Android, Code, DesktopMac, People, Cloud, Dns } from '@material-ui/icons'

import TopBar from '../../components/consoleTopbar'
import Footer from '../../components/footer'

import MetamaskImg from '../../assets/img/metamask.svg'
import IPFSImg from '../../assets/img/ipfs.png'
import SolidityImg from '../../assets/img/solidity.svg'
import EthereumImg from '../../assets/img/ethereum.png'

import { createProject } from "../../redux/project/actions";

const useStyles = makeStyles(theme => ({
    main: {
        color: '#ffffff',
        textAlign: '-webkit-left',
        padding: '4%',
    },
    demo: {
        textAlign: '-webkit-left',
        padding: '4%',
    },
    subtitle: {
        color: '#ffffff'
    },
    featureHeading: {
        fontSize: '2em',
    },
    cardImage: {
        margin: theme.spacing(0.9),
        width: '24px'
    },
    /* card: {
        marginTop: '20px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        background: '#ffffff'
    }, */
    card: {
        minWidth: 275,
    },
    navlink: {
        textDecoration: 'none'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    paperTitle: {
        color: '#000000',
        fontSize: '1.5em'
    },
    primaryButton: {
        fontSize: '1em',
        color: '#6b61fc',
        background: '#ffffff',
        marginRight: theme.spacing(2)
    },
    secondaryButton: {
        fontSize: '1em',
        background: '#6b61fc',
    },
    paper: {
        padding: theme.spacing(3, 2)
    },
    roundedContainer: {
        borderRadius: '25px',
        border: '2px solid #eeeeee',
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '160px'
    },
    verticalLine: {
        borderLeft: 'solid #eeeeee',
        height: '26px',
        left: '50%',
        marginLeft: '86px',
        top: '0'
    },
    solidGreyContainer: {
        borderRadius: '25px',
        background: '#eeeeee',
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '160px'
    },
    footer: {
        marginBottom: '40px'
    },
    link: {
        textDecoration: 'none'
    }
})
)

export default function Login() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const handleHoverIn = (id) => {
        document.getElementById(id).classList.add("MuiPaper-elevation4")
    }

    const handleHoverOut = (id) => {
        document.getElementById(id).classList.remove("MuiPaper-elevation4")
    }

    return (
        <div>
            <TopBar />
            <div className={classes.main} style={{ background: '#6b61fc' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} xl={6}>
                        <h1 className={classes.featureHeading}>
                            Welcome to Dappkit!
                        </h1>
                        <Typography className={classes.subtitle} variant="h6">
                            A ledger-agnostic, high-performance infrastructure and libraries for
                            developers to build and scale decentralized applications.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} xl={12}>
                        <NavLink to="/start/new" className={classes.link}>
                            <Button size="large" variant="contained"
                                color="secondary" className={classes.primaryButton}>
                                Create a Project
                            </Button>
                        </NavLink>
                        <a href="https://simpleaswater.gitbook.io/dappkit/" target="_blank" className={classes.link}>
                            <Button size="large" variant="contained"
                                color="secondary" className={classes.secondaryButton}>
                                View Docs
                            </Button>
                        </a>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.demo}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} xl={6}>
                        <NavLink to="/demo" className={classes.navlink}>
                            <Card id="card1" className={classes.card} onMouseOver={() => handleHoverIn("card1")} onMouseOut={() => handleHoverOut("card1")}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Starter kit
        </Typography>
                                    <Typography variant="h5" component="h2">
                                        <b>Explore a demo Project</b>
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        10 mins
        </Typography>
                                    <Typography variant="body2" component="p">
                                        Build decentralized twitter using Metamask, IPFS and Ethereum.
                                </Typography>
                                </CardContent>
                                <CardActions>
                                    <img src={MetamaskImg} className={classes.cardImage} />
                                    <img src={IPFSImg} className={classes.cardImage} />
                                    <img src={SolidityImg} className={classes.cardImage} />
                                    <img src={EthereumImg} style={{ width: '14px' }} />
                                </CardActions>
                            </Card>
                        </NavLink>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} xl={6}>
                        <NavLink to="/faqs" className={classes.navlink}>
                            <Card id="card2" className={classes.card} onMouseOver={() => handleHoverIn("card2")} onMouseOut={() => handleHoverOut("card2")}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Article
                                </Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={12} md={6} xl={6}>
                                            <Typography variant="h6">
                                                <b>Dappkit projects are containers for your dapps</b>
                                            </Typography>
                                            <Typography variant="body2">
                                                Manage your dapp on multiple platforms
                                        </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} xl={6}>
                                            <div className={classes.roundedContainer}>
                                                <div><font color="lightgreen"><Android className={classes.cardImage} /></font></div>
                                                <div><font color="yellow"><Code className={classes.cardImage} /></font></div>
                                                <div><font color="skyblue"><DesktopMac className={classes.cardImage} /></font></div>
                                            </div>
                                            <div className={classes.verticalLine}></div>
                                            <div className={classes.solidGreyContainer}>
                                                <div><People className={classes.cardImage} /></div>
                                                <div><Cloud className={classes.cardImage} /></div>
                                                <div><Dns className={classes.cardImage} /></div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </NavLink>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    )
}

import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Topbar from '../../components/topbar'
import WaitList from '../../components/waitlist'
import { Typography, Grid, Container, Divider, Button, TextField } from '@material-ui/core';

import axios from 'axios'

import FeatureImage from '../../assets/img/undraw_features_overview_jg7a.svg'
import BuildImage from '../../assets/img/undraw_build_2svr.svg'
import TestImage from '../../assets/img/undraw_security_o890.svg'
import DeployImage from '../../assets/img/undraw_launch.svg'

import IPFSImg from '../../assets/img/ipfs.png'
import SwarmImg from '../../assets/img/swarm.jpg'
import EthereumImg from '../../assets/img/ethereum.png'
import OrbitDBImg from '../../assets/img/orbitdb.png'
import EnsImg from '../../assets/img/ens.jpeg'
import IPFSClusterImg from '../../assets/img/ipfs_cluster.png'
import SolidityImg from '../../assets/img/solidity.svg'
import QuorumImg from '../../assets/img/quorum.png'
import MythxImg from '../../assets/img/mythx.png'
import RaidenImg from '../../assets/img/raiden.png'
import NucypherImg from '../../assets/img/nucypher.png'
import InfuraImg from '../../assets/img/infura.png'
import TemporalImg from '../../assets/img/partner_temporal.png'
import PinataImg from '../../assets/img/pinata.png'
import MetamaskImg from '../../assets/img/metamask.svg'
import UportImg from '../../assets/img/uport.png'
import PeergosImg from '../../assets/img/peergos.png'
import KeybaseImg from '../../assets/img/keybase.png'

import AuthIcon from '@material-ui/icons/People'
import StorageIcon from '@material-ui/icons/Cloud'
import DatabaseIcon from '@material-ui/icons/Storage'
import DnsIcon from '@material-ui/icons/Dns'
import HostingIcon from '@material-ui/icons/Public'

import TestingIcon from '@material-ui/icons/MobileFriendly'
import CodeIcon from '@material-ui/icons/Code'
import SecurityIcon from '@material-ui/icons/VerifiedUser'

import EnterpriseIcon from '@material-ui/icons/Business'

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

const useStyles = makeStyles(theme => ({
    main: {
        textAlign: '-webkit-left',
        padding: '4%',
        paddingTop: '5%'
    },
    featureHeading: {
        fontSize: '3.5em',
    },
    featureImage: {
        marginTop: '10%',
        width: '100%'
    },
    buildImage: {
        marginTop: '10%',
        width: '200px'
    },
    testImage: {
        marginTop: '10%',
        width: '200px'
    },
    deployImage: {
        marginTop: '10%',
        width: '200px'
    },
    supported: {
        width: '100px'
        //padding: '20px'
    },
    card: {
        marginTop: '20px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        background: '#ffffff'
    },
    intro: {
        background: 'linear-gradient(to right bottom, #f7a12f 50%, white 52%)',
        paddingBottom: '100px',
        width: (window.innerWidth > 0) ? window.innerWidth : window.screen.width
    },
    item: {
        padding: '40px'
    },
    content: {
        padding: '40px',
        paddingTop: '50px',
    },
    properties: {
        padding: '40px'
    },
    features: {
        background: 'linear-gradient(to left bottom, #ffffff00 50%, #6b61fc 52%)',
        paddingBottom: '100px',
        width: (window.innerWidth > 0) ? window.innerWidth : window.screen.width
    },
    featureGrid: {
        padding: '60px'
    },
    featureGridTitle: {
        fontSize: '2.5em',
    },
    end: {
        background: "#6b61fc",
        padding: '80px',
        //width: (window.innerWidth > 0) ? window.innerWidth : window.screen.width
    },
    purpleCircle: {
        height: '60px',
        width: '60px',
        backgroundColor: '#6b61fc',
        borderRadius: '50%',
        display: 'inlineblock',
        color: '#fff',
        lineHeight: '60px',
        textAlign: 'center',
        fontSize: '28px'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
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

function Home() {

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
            url: `https://simpleaswater.com:8081/email`,
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
        <div>
            <Topbar />
            <div className={classes.main}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} xl={6}>
                        <h1 className={classes.featureHeading}>
                            A Toolkit to Build, Test, Deploy and Monitor Decentralized Apps.
                        </h1>
                        <Typography color="textSecondary" variant="h6">
                            A ledger-agnostic, high-performance infrastructure and libraries for
                            developers to build and scale decentralized applications. <b style={{ color: '#000000' }}>In short, collaborative Firebase for Dapps.</b>
                        </Typography>
                        <br />
                        <WaitList />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} xl={6} style={{ display: 'flex', textAlign: 'center' }}>
                        <img className={classes.featureImage} src={FeatureImage} />
                    </Grid>
                </Grid>
            </div>

            <div className={classes.intro}>
                <Container className={classes.content} maxWidth="lg">
                    <div className={classes.card}>
                        <Grid className={classes.properties} container spacing={3}>
                            <Grid item xs={12} sm={12} md={4} xl={4} style={{ padding: '40px' }}>
                                <Typography color="textPrimary" variant="h6" style={{ padding: '10px', paddingTop: '0px' }}>
                                    Build dapps fast, with easy to integrate, cross-platform modules
                                </Typography>
                                <Typography color="textSecondary" variant="body1" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                                    DappKit gives you functionality like authentication, databases, secure code-samples and hosting so you can move quickly and focus on your users.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} xl={4} style={{ padding: '40px' }}>
                                <Typography color="textPrimary" variant="h6" style={{ padding: '10px', paddingTop: '0px' }}>
                                    Build secure dapps, with toolkit of community-vetted testing tools
                                </Typography>
                                <Typography color="textSecondary" variant="body1" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                                    DappKit gives you community-vetted library of code samples, and testing tools so you can stay secure, in development and production.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} xl={4} style={{ padding: '40px' }}>
                                <Typography color="textPrimary" variant="h6" style={{ padding: '10px', paddingTop: '0px' }}>
                                    One platform, with products that work better together
                                </Typography>
                                <Typography color="textSecondary" variant="body1" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                                    DappKit allows you to use existing tools and projects, while keeping things managable, hence, getting the best out of all the community.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider variant="middle" style={{ marginLeft: '20%', marginRight: '20%', backgroundColor: '#BDC3C7' }} />
                        <Grid container spacing={3} style={{ padding: '40px' }}>
                            <Grid item xs={12} style={{ paddingBottom: '40px' }}>
                                <Typography color="textPrimary" variant="h4">
                                    <b>DappKit Supports</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://www.ethereum.org/">
                                    <img src={EthereumImg} style={{ width: '70px' }} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://ipfs.io/">
                                    <img src={IPFSImg} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://swarm.ethereum.org/">
                                    <img src={SwarmImg} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://ens.domains">
                                    <img src={EnsImg} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://github.com/orbitdb/orbit-db/">
                                    <img src={OrbitDBImg} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://cluster.ipfs.io/">
                                    <img src={IPFSClusterImg} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://solidity.readthedocs.io/en/v0.5.12/">
                                    <img src={SolidityImg} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://www.goquorum.com/">
                                    <img src={QuorumImg} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://mythx.io">
                                    <img src={MythxImg} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://raiden.network/">
                                    <img src={RaidenImg} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://www.nucypher.com/">
                                    <img src={NucypherImg} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://infura.io">
                                    <img src={InfuraImg} className={classes.supported} />
                                </a>
                            </Grid>
                            {/* <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <img src={TemporalImg} className={classes.supported} />
                            </Grid> */}
                            {/* <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <img src={PinataImg} className={classes.supported} />
                            </Grid> */}
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://www.uport.me/">
                                    <img src={UportImg} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://metamask.io/">
                                    <img src={MetamaskImg} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://peergos.org">
                                    <img src={PeergosImg} className={classes.supported} />
                                </a>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} xl={3} style={{ padding: '20px' }}>
                                <a target="_blank" href="https://keybase.io">
                                    <img src={KeybaseImg} className={classes.supported} />
                                </a>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>


            <div className={classes.features}>
                <Container className={classes.content} maxWidth="lg">
                    <div className={classes.card}>
                        <Grid container spacing={3} className={classes.featureGrid}>
                            <Grid item xs={12} >
                                <Typography color="textPrimary" variant="h4" className={classes.featureGridTitle}>
                                    <b style={{ wordBreak: 'break-word' }}>A comprehensive dapp <br />development platform</b>
                                </Typography>
                            </Grid>
                            {/* <Grid item xs={4} style={{ padding: '40px' }}>
                                <img src={BuildImage} className={classes.buildImage} />
                            </Grid> */}
                            {/* <Grid item xs={4} style={{ padding: '40px' }}>
                                <img src={TestImage} className={classes.testImage} />
                            </Grid>
                            <Grid item xs={4} style={{ padding: '40px' }}>
                                <img src={DeployImage} className={classes.deployImage} />
                            </Grid> */}
                            <Grid item xs={12} sm={12} md={4} xl={4} >
                                <Grid container spacing={4}>
                                    <Grid item xs={12} style={{ padding: '40px' }}>
                                        <img src={BuildImage} className={classes.buildImage} />
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: '40px' }}>
                                        <Typography color="textPrimary" variant="h6">
                                            <b>Build dapps fast</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: '20px' }}>
                                        <Grid container spacing={3} style={{ marginLeft: '40px' }}>
                                            <Grid item xs={12} sm={12} md={3} xl={3}>
                                                <div className={classes.purpleCircle}>
                                                    <AuthIcon />
                                                </div>
                                            </Grid>
                                            <Grid style={{ textAlign: 'start', marginLeft: '-10px' }} item xs={12} sm={12} md={9} xl={9}>
                                                <b>Authentication</b><br />
                                                <Typography color="textPrimary" variant="body2" style={{ paddingTop: '6px' }}>
                                                    Authenticate and manage users using multiple auth methods
                                        </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={3} style={{ marginLeft: '40px' }}>
                                            <Grid item xs={12} sm={12} md={3} xl={3}>
                                                <div className={classes.purpleCircle}>
                                                    <StorageIcon />
                                                </div>
                                            </Grid>
                                            <Grid style={{ textAlign: 'start', marginLeft: '-10px' }} item xs={12} sm={12} md={9} xl={9}>
                                                <b>Decentralized Storage</b><br />
                                                <Typography color="textPrimary" variant="body2" style={{ paddingTop: '6px' }}>
                                                    Plug-n-play Decentralized Storage
                                        </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={3} style={{ marginLeft: '40px' }}>
                                            <Grid item xs={12} sm={12} md={3} xl={3}>
                                                <div className={classes.purpleCircle}>
                                                    <DatabaseIcon />
                                                </div>
                                            </Grid>
                                            <Grid style={{ textAlign: 'start', marginLeft: '-10px' }} item xs={12} sm={12} md={9} xl={9}>
                                                <b>Realtime Database</b><br />
                                                <Typography color="textPrimary" variant="body2" style={{ paddingTop: '6px' }}>
                                                    Realtime, peer-to-peer database
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={3} style={{ marginLeft: '40px' }}>
                                            <Grid item xs={12} sm={12} md={3} xl={3}>
                                                <div className={classes.purpleCircle}>
                                                    <DnsIcon />
                                                </div>
                                            </Grid>
                                            <Grid style={{ textAlign: 'start', marginLeft: '-10px' }} item xs={12} sm={12} md={9} xl={9}>
                                                <b>Decentralized Naming System</b><br />
                                                <Typography color="textPrimary" variant="body2" style={{ paddingTop: '6px' }}>
                                                    Start owning your domains, stop leasing
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={3} style={{ marginLeft: '40px' }}>
                                            <Grid item xs={12} sm={12} md={3} xl={3}>
                                                <div className={classes.purpleCircle}>
                                                    <HostingIcon />
                                                </div>
                                            </Grid>
                                            <Grid style={{ textAlign: 'start', marginLeft: '-10px' }} item xs={12} sm={12} md={9} xl={9}>
                                                <b>Hosting</b><br />
                                                <Typography color="textPrimary" variant="body2" style={{ paddingTop: '6px' }}>
                                                    Host your dapp with one click, where users are your infrastructure
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} xl={4}>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} style={{ padding: '40px' }}>
                                        <img src={TestImage} className={classes.buildImage} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography color="textPrimary" variant="h6">
                                            <b>Build secure dapps</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: '20px' }}>
                                        <Grid container spacing={3} style={{ marginLeft: '40px' }}>
                                            <Grid item xs={12} sm={12} md={3} xl={3}>
                                                <div className={classes.purpleCircle}>
                                                    <TestingIcon />
                                                </div>
                                            </Grid>
                                            <Grid style={{ textAlign: 'start', marginLeft: '-10px' }} item xs={12} sm={12} md={9} xl={9}>
                                                <b>Test Lab</b><br />
                                                <Typography color="textPrimary" variant="body2" style={{ paddingTop: '6px' }}>
                                                    Test your dapps, online and offline
                                        </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={3} style={{ marginLeft: '40px' }}>
                                            <Grid item xs={12} sm={12} md={3} xl={3}>
                                                <div className={classes.purpleCircle}>
                                                    <CodeIcon />
                                                </div>
                                            </Grid>
                                            <Grid style={{ textAlign: 'start', marginLeft: '-10px' }} item xs={12} sm={12} md={9} xl={9}>
                                                <b>Community-vetted Code</b><br />
                                                <Typography color="textPrimary" variant="body2" style={{ paddingTop: '6px' }}>
                                                    Use curated community-vetted library of code samples
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={3} style={{ marginLeft: '40px' }}>
                                            <Grid item xs={12} sm={12} md={3} xl={3}>
                                                <div className={classes.purpleCircle}>
                                                    <SecurityIcon />
                                                </div>
                                            </Grid>
                                            <Grid style={{ textAlign: 'start', marginLeft: '-10px' }} item xs={12} sm={12} md={9} xl={9}>
                                                <b>Security</b><br />
                                                <Typography color="textPrimary" variant="body2" style={{ paddingTop: '6px' }}>
                                                    Weather you are in development or production, easily track potential issues
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} xl={4} >
                                <Grid container spacing={4}>
                                    <Grid item xs={12} style={{ padding: '40px' }}>
                                        <img src={DeployImage} className={classes.buildImage} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography color="textPrimary" variant="h6">
                                            <b>Deploy dapps easily</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: '20px' }}>
                                        <Grid container spacing={3} style={{ marginLeft: '40px' }}>
                                            <Grid item xs={12} sm={12} md={3} xl={3}>
                                                <div className={classes.purpleCircle}>
                                                    <EnterpriseIcon />
                                                </div>
                                            </Grid>
                                            <Grid style={{ textAlign: 'start', marginLeft: '-10px' }} item xs={12} sm={12} md={9} xl={9}>
                                                <b>Enterprise-grade Infra</b><br />
                                                <Typography color="textPrimary" variant="body2" style={{ paddingTop: '6px' }}>
                                                    Develop your dapps, without worrying about infrastructure
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} style={{ paddingBottom: '40px', marginTop: '40px' }}>
                                <Divider variant="middle" style={{ marginLeft: '20%', marginRight: '20%', marginBottom: '40px', backgroundColor: '#BDC3C7' }} />
                                <Typography color="textPrimary" variant="h4">
                                    <b>Partners and Clients</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} xl={12} style={{ padding: '20px' }}>
                                <a href="https://temporal.cloud" target="_blank">
                                    <img src={TemporalImg} style={{ width: '200px' }} className={classes.supported} />
                                </a>
                            </Grid>
                        </Grid>

                    </div>
                </Container>
            </div>
            <div className={classes.end}>
                <Typography color="primary" variant="h5" style={{ color: '#ffffff' }}>
                    <b>Join Beta Waitlist. We Launch in December.</b>
                </Typography>
                <div className={classes.root} style={{ marginTop: '20px' }}>
                    <ValidationTextField
                        style={{ backgroundColor: '#ffffff', borderBlockColor: '#ffffff' }}
                        className={classes.margin}
                        label="Enter Email"
                        required
                        variant="outlined"
                        placeholder="you@company.com"
                        id="validation-outlined-input"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <Button size="large" style={{ color: '#6b61fc', backgroundColor: '#ffffff' }}
                        className={classes.button} onClick={sendEmail}>
                        {values.buttonText || 'Request Access'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home
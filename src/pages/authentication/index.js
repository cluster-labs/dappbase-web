import React from "react";
import { Button, Switch, Container, Grid, Typography } from "@material-ui/core/";
import User from "../../assets/img/add_user.png";
import Hero from "../../components/hero/index";
import styles from "./style.module.scss";

import { fetchUsers } from '../../redux/auth/actions'
import { connect } from 'react-redux'

class Index extends React.Component {
  state = {};

  componentWillMount() {
    const { fetchUsers, match } = this.props
    fetchUsers({ projectId: match.params.id })
  }

  onClick = (e, i) => {
    this.setState({ ["checked_" + i]: e.target.checked });
  };
  render() {
    let { users } = this.props
    console.log("USERS: ", users)

    return (
      <React.Fragment>
        <Hero match={this.props.match} onClick={() => { window.open("https://simpleaswater.gitbook.io/dappkit/") }} title="Authentication" subTitle="DID based Authentication methods" buttonText="Go to Docs" background="#2B383F" />
        <Container maxWidth="lg" style={{ marginTop: "-150px", marginBottom: "100px" }}>
          <div className={styles.card}>
            <Grid className={styles.header} container>
              <Grid item xs={4}>
                Address
              </Grid>
              <Grid item xs={4}>
                Auth Method
              </Grid>
              <Grid item xs={4}>
                Created At
              </Grid>
            </Grid>
            {users.length > 0 ?
              users.map((c, i) => (
                <Grid container key={i} className={styles.body_row}>
                  <Grid item xs={4}>
                    <Typography variant="body2">
                      {c.address}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    {c.method}
                  </Grid>
                  <Grid item xs={4}>
                    {c.createdAt}
                  </Grid>
                </Grid>
              ))
              :
              <Grid style={{ margin: '10%' }} container spacing={3}>
                <Grid item xs={4}>
                  <img src={User} width="80%" />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">
                    Authenticate and manage users from a<br /> variety of providers without server-side code.
                    <br /><br />
                    <Button variant="contained" color="primary" onClick={() => { window.open("https://simpleaswater.gitbook.io/dappkit/") }}>
                      {'View the Docs'}&nbsp;&nbsp; <i className="fa fa-external-link" aria-hidden="true" />
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            }
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.auth.users,
  fetchComplete: state.auth.fetchComplete
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: (payload) => dispatch(fetchUsers(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);

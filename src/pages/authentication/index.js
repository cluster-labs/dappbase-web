import React from "react";
import { Switch, Container, Grid } from "@material-ui/core/";

import IMG_BLOCKCHAIN from "../../assets/img/blockchain.png";
import Hero from "../../components/hero/index";
import styles from "./style.module.scss";
class Index extends React.Component {
  state = {};

  onClick = (e, i) => {
    this.setState({ ["checked_" + i]: e.target.checked });
  };
  render() {
    let cards = [
      {
        img: IMG_BLOCKCHAIN,
        title: "Email/Password"
      },
      {
        img: IMG_BLOCKCHAIN,
        title: "Email/Password"
      },
      {
        img: IMG_BLOCKCHAIN,
        title: "Email/Password"
      },
      {
        img: IMG_BLOCKCHAIN,
        title: "Email/Password"
      },
      {
        img: IMG_BLOCKCHAIN,
        title: "Email/Password"
      }
    ];
    return (
      <React.Fragment>
        <Hero title="Authentication" subTitle="Run your mobile backend code without managing servers" background="#2B383F" />
        <Container maxWidth="lg" style={{ marginTop: "-150px" }}>
          <div className={styles.card}>
            <Grid className={styles.header} container>
              <Grid item xs={7}>
                Provider
              </Grid>
              <Grid item xs={5}>
                Status
              </Grid>
            </Grid>
            {cards.map((c, i) => (
              <Grid container key={i} className={styles.body_row}>
                <Grid item xs={7}>
                  <img className={styles.img} src={c.img} />

                  {c.title}
                </Grid>
                <Grid item xs={5}>
                  <Switch
                    onChange={e => this.onClick(e, i)}
                    checked={this.state["checked_" + i]}
                    value="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Grid>
              </Grid>
            ))}
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Index;

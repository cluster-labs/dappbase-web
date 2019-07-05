import React from "react";
import { Switch, Container, Grid } from "@material-ui/core/";

import IMG_BLOCKCHAIN from "../../assets/img/blockchain.png";
import Hero from "../../components/hero/index";
import styles from "./style.module.scss";
class Index extends React.Component {
  state = {
    tab: 0
  };

  onClick = (e, i) => {
    this.setState({ ["checked_" + i]: e.target.checked });
  };
  render() {

    const tabs = [
      {
        title: "How do i get started?",
        subTitle: "View the docs",
        color: "#00B8D4",
        icon: "fa-cog",
        body: <Tab1Body />
      },
      {
        title: "How does AdService work?",
        subTitle: "View the docs",
        color: "#009688",
        icon: "fa-info",
        body: <Tab2Body />
      },
      {
        title: "What can AdMob do for me?",
        subTitle: "View the docs",
        color: "#5C6BC0",
        icon: "fa-smile-o",
        body: <Tab3Body />
      }

    ]

    return (
      <React.Fragment>
        <Hero title="Notifications" subTitle="Earn more from your apps the smart way by showing decentralize ads" background="#2B383F" />
        <Container maxWidth="lg" style={{ marginTop: "-150px", marginBottom: "80px" }}>
          <div className={styles.tabs}>
            <Grid className={styles.header} container>
              {
                tabs.map((t, i) => {
                  return (
                    <Grid key={i} item xs={4}>
                      <div onClick={e => { this.setState({ tab: i }) }} className={`${styles.tabCard}  ${(this.state.tab === i) && styles.active}`} >
                        <span style={{ background: (this.state.tab == i ? "#fff" : t.color), color: (this.state.tab == i ? t.color : "#fff") }} className={styles.iconWrapper}><i className={`fa ${t.icon}`} aria-hidden="true"></i></span>
                        <div>
                          {t.title}
                          <br />
                          <span className={styles.subTitle}> {t.subTitle}</span>
                        </div>
                      </div>
                    </Grid>
                  )
                })
              }



            </Grid>

          </div>
          <div className={styles.card}>
            <Grid className={styles.body} container>
              {tabs[(this.state.tab)].body}
            </Grid>

          </div>
        </Container>
      </React.Fragment >
    );
  }
}


function Tab1Body() {
  return (
    <React.Fragment>
      <h3 className={styles.title}>How does it work?</h3>
      <p>Ad Service helps you monetize your mobile app through in-app advertising. Ads can be displayed as banner ads, interstitial ads, video ads, or native ads — which are seamlessly added to platform native UI components. On Android, you can additionally display in-app purchase ads, which allow users to purchase advertised products from within your app.</p>
    </React.Fragment>
  )
}

function Tab2Body() {
  return (
    <React.Fragment>
      <h3 className={styles.title}>How does AdService work?</h3>
      <p>Ad Service helps you monetize your mobile app through in-app advertising. Ads can be displayed as banner ads, interstitial ads, video ads, or native ads — which are seamlessly added to platform native UI components. On Android, you can additionally display in-app purchase ads, which allow users to purchase advertised products from within your app.</p>
    </React.Fragment>
  )
}

function Tab3Body() {
  return (
    <React.Fragment>
      <h3 className={styles.title}>What can AdMob do for me?</h3>
      <p>Ad Service helps you monetize your mobile app through in-app advertising. Ads can be displayed as banner ads, interstitial ads, video ads, or native ads — which are seamlessly added to platform native UI components. On Android, you can additionally display in-app purchase ads, which allow users to purchase advertised products from within your app.</p>
    </React.Fragment>
  )
}

export default Index;

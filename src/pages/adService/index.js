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
        title: "What can Ad Service do for me?",
        subTitle: "View the docs",
        color: "#5C6BC0",
        icon: "fa-smile-o",
        body: <Tab3Body />
      }

    ]

    return (
      <React.Fragment>
        <Hero title="Ad Service" subTitle="Earn more from your apps the smart way by showing decentralize ads" background="#2B383F" />
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
      <p>
        In <b>Web 2.0</b> you have 3 parties in the advertisment ecosystem.
        <ol>
          <li>First is the advertiser, who has an advertisement that he wants to publish.</li>
          <li>Second is the advertisement platform that helps advertisers to place their adds on their platforms in a targetted way, so the ads are seen by a specific set of users.</li>
          <li>And third is the users who see the advertisements.</li>
        </ol>
      </p>
      <p>
        Now the problem here is that the middle men, the advertisement platforms take a cut for displaying ads on their platform and the users don’t get anything for bieng bombarded by tens and hundreds of ads everyday.
      </p>
      <p>
        So, what we do is that we replace the advertisement platform with the network of users itself.
      </p>
      <p>
        Now, Let’s suppose all the users using the dapp form a network. Each user has surfs the app and the behaviour is tracked and recorded. All of this recorded behavioural data is stored with in the users device and is never sent out of the device. Now this data is reduced to some mathmatical vector which represents the user’s behaviour.
      </p>
      <p>
        Now, an advertiser somes with an ad, and he wants to target a specific demographic. He choses the user behaviour that he wants to target. These desired properties are also converted to a mathematical vector which represents an ideal target customer.
    </p>
      Now, the advertiser publishes the ad on the network of users. Now this ad goes to every users device and checks if the user behavious vector is close to the advertiser’s desired vectors. If the vectors are close enough then the ad gets displayed.
    <p>
        Using this way, we totally remove the need of a middle man to publish the ads. Here, the advertisers save the cut that they gave to the advertisment platform and the users can get some fee for allowing the ads to display.
      </p>
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

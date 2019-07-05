import React from "react";
import { Typography, Container, Grid } from "@material-ui/core/";
import Card from "../../components/card/index";
import IMG_BLOCKCHAIN from "../../assets/img/blockchain.png";
import Hero from "../../components/hero/index";
class Index extends React.Component {
  render() {
    let cards = [
      {
        img: IMG_BLOCKCHAIN,
        title: "U PORT",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur`
      },
      {
        img: IMG_BLOCKCHAIN,
        title: "U PORT",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur`
      },
      {
        img: IMG_BLOCKCHAIN,
        title: "U PORT",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur`
      },
      {
        img: IMG_BLOCKCHAIN,
        title: "U PORT",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur`
      }
    ];
    return (
      <React.Fragment>
        <Hero title="Crashlytics" subTitle="Coming Soon" background="#2B383F" buttonText="See Roadmap" />
        {/* <Container style={{ marginTop: "-150px", marginBottom: "80px" }}>
          <Grid container spacing={3}>
            {cards.map((c, i) => (
              <Grid key={i} item xs={4}>
                <Card {...c} />
              </Grid>
            ))}
          </Grid>
        </Container> */}
      </React.Fragment>
    );
  }
}

export default Index;

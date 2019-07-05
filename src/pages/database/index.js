import React from "react";
import { Typography, Container, Grid } from "@material-ui/core/";
import Card from "../../components/card/index";
import ORBITDB from "../../assets/img/orbitdb.png";
import Hero from "../../components/hero/index";
class Index extends React.Component {
  render() {
    let cards = [
      {
        img: ORBITDB,
        title: "OrbitDB",
        desc: `OrbitDB is a serverless, distributed, peer-to-peer database. 
                OrbitDB uses IPFS as its data storage and IPFS Pubsub to
                automatically sync databases with peers.`
      },
      /* {
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
      } */
    ];
    return (
      <React.Fragment>
        <Hero title="Database" subTitle="A Collection of Server-less Distributed Databases" background="#2B383F" />
        <Container style={{ marginTop: "-150px", marginBottom: "80px" }}>
          <Grid container spacing={3}>
            {cards.map(c => (
              <Grid item xs={4}>
                <Card {...c} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Index;

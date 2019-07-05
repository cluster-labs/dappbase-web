import React from "react";
import { Container, Grid } from "@material-ui/core/";
import Card from "../../components/card/index";
import SIA from "../../assets/img/sia.svg";
import IPFS from "../../assets/img/ipfs.png";
import MAIDSAFE from "../../assets/img/maidsafe.png";
import SWARM from "../../assets/img/swarm.jpg";
import STORJ from "../../assets/img/storj.png";
import Hero from "../../components/hero/index";
class Index extends React.Component {
  render() {
    let cards = [
      {
        img: IPFS,
        title: "IPFS",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur`
      },
      {
        img: SWARM,
        title: "SWARM",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur`
      },
      {
        img: SIA,
        title: "SIA",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur`
      },
      {
        img: STORJ,
        title: "STORJ",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur`
      },
      {
        img: MAIDSAFE,
        title: "MAIDSAFE",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur`
      }
    ];
    return (
      <React.Fragment>
        <Hero title="Hosting" subTitle="Host your Apps & Websites" background="#2B383F" />
        <Container style={{ marginTop: "-150px", marginBottom: "80px" }}>
          <Grid container spacing={3}>
            {cards.map((c, i) => (
              <Grid key={i} item xs={4}>
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

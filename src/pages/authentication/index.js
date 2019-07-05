import React from "react";
import { Switch, Container, Grid } from "@material-ui/core/";

import IMG_IDENTITY from "../../assets/img/identity.png";
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
        img: IMG_IDENTITY,
        title: "DID:ABT",
        link: 'https://arcblock.github.io/abt-did-spec/',
        network: 'ABT Network'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:BTCR",
        link: 'https://w3c-ccg.github.io/didm-btcr',
        network: 'Bitcoin'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:STACK",
        link: 'https://github.com/blockstack/blockstack-core/blob/master/docs/blockstack-did-spec.md',
        network: 'Bitcoin'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:ERC725",
        link: 'https://github.com/WebOfTrustInfo/rebooting-the-web-of-trust-spring2018/blob/master/topics-and-advance-readings/DID-Method-erc725.md',
        network: 'Ethereum'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:IPID",
        link: 'https://did-ipid.github.io/ipid-did-method/',
        network: 'IPFS'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:LIFE",
        link: 'https://lifeid.github.io/did-method-spec/',
        network: 'RChain'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:SOV",
        link: 'https://sovrin-foundation.github.io/sovrin/spec/did-method-spec-template.html',
        network: 'Sovrin'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:UPORT",
        link: null,
        network: 'Ethereum'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:ETHR",
        link: 'https://github.com/uport-project/ethr-did-resolver/blob/develop/doc/did-method-spec.md',
        network: 'Ethereum'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:V1",
        link: 'https://w3c-ccg.github.io/didm-veres-one/',
        network: 'Veres One'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:DOM",
        link: null,
        network: 'Ethereum'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:ONT",
        link: 'https://github.com/ontio/ontology-DID/blob/master/docs/en/DID-ONT-method.md',
        network: 'Ontology'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:VVO",
        link: 'https://vivvo.github.io/vivvo-did-scheme/spec/did-method-spec-template.html',
        network: 'Vivvo'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:ICON",
        link: 'https://github.com/icon-project/icon-DID/blob/master/docs/ICON-DID-method.md',
        network: 'ICON'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:IWT",
        link: 'https://github.com/infowallet/did_method/blob/master/did_method.md',
        network: 'InfoWallet'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:OCKAM",
        link: 'https://github.com/ockam-network/did-method-spec/blob/master/README.md',
        network: 'Ockam'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:ALA",
        link: 'https://github.com/alastria/alastria-identity/wiki/Alastria-DID-Method-Specification-(Quorum-version)',
        network: 'Alastria'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:OP",
        link: 'https://github.com/oceanprotocol/OEPs/blob/master/7/did-method-spec.md',
        network: 'Ocean Protocol'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:JLINC",
        link: 'https://did-spec.jlinc.org/',
        network: 'JLINC Protocol'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:ION",
        link: 'https://github.com/decentralized-identity/ion-did-method',
        network: 'Bitcoin'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:JOLO",
        link: 'https://github.com/jolocom/jolocom-did-driver/blob/master/jolocom-did-method-specification.md',
        network: 'Ethereum'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:BRYK",
        link: 'https://github.com/bryk-io/did-method/blob/master/README.md',
        network: 'bryk'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:PEER",
        link: 'https://openssi.github.io/peer-did-method-spec/index.html',
        network: 'peer'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:SELFKEY",
        link: 'https://github.com/SelfKeyFoundation/selfkey-identity/blob/develop/DIDMethodSpecs.md',
        network: 'Ethereum'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:META",
        link: 'https://github.com/METADIUM/meta-DID/blob/master/doc/DID-method-metadium.md',
        network: 'Metadium'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:TYS",
        link: 'https://github.com/chainyard-tys/tys/blob/master/README.md',
        network: 'DID Specification'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:GIT",
        link: 'https://github.com/dhuseby/did-git-spec/blob/master/did-git-spec.md',
        network: 'DID Specification'
      },
      {
        img: IMG_IDENTITY,
        title: "DID:TANGLE",
        link: 'https://github.com/TangleID/TangleID/blob/develop/did-method-spec.md',
        network: 'IOTA Tangle'
      },
    ];
    return (
      <React.Fragment>
        <Hero title="Authentication" subTitle="DID based Authentication methods" background="#2B383F" />
        <Container maxWidth="lg" style={{ marginTop: "-150px", marginBottom: "100px" }}>
          <div className={styles.card}>
            <Grid className={styles.header} container>
              <Grid item xs={4}>
                Did Method
              </Grid>
              <Grid item xs={4}>
                Enable
              </Grid>
              <Grid item xs={4}>
                Network
              </Grid>
            </Grid>
            {cards.map((c, i) => (
              <Grid container key={i} className={styles.body_row}>
                <Grid item xs={4}>
                  <img src={c.img} />

                  {c.title}
                </Grid>
                <Grid item xs={4}>
                  <Switch
                    onChange={e => this.onClick(e, i)}
                    checked={this.state["checked_" + i]}
                    value="checkedA"
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <svg height="16" width="16">
                    <circle cx="8" cy="8" r="8" fill="lightgreen" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                  &nbsp;&nbsp;&nbsp;
                  <a href={c.link}>{c.network}</a>
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

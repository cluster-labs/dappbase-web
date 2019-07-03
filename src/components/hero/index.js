import React from "react";
import styles from "./style.module.scss";
import { Container, Typography, Button } from "@material-ui/core";
function Hero(props) {
  return (
    <React.Fragment>
      <div style={{ background: props.background }} className={styles.hero}>
        <Container className={styles.container}>
          <Typography className={styles.title} variant="h4" component="h4">
            {props.title}
            
          </Typography>
          <Typography className={styles.desc} variant="h6" component="h6">
          {props.subTitle}
            
          </Typography>
          <br />
          <Button className={styles.button} variant="contained" color="primary">
            Get started <i className="fa fa-external-link" aria-hidden="true" />
          </Button>
        </Container>
      </div>
      <div style={{ background: props.background }} className={styles.halfbg} />
    </React.Fragment>
  );
}
export default Hero;

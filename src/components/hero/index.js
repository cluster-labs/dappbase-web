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
          <Typography className={styles.desc} variant="h5" component="h5">
            <b>Project ID:</b> {props.match.params.id}
          </Typography>
          <Button className={styles.button} variant="contained" color="primary" onClick={props.onClick}>
            {props.buttonText || 'Add Your Project'} <i className="fa fa-external-link" aria-hidden="true" />
          </Button>
        </Container>
      </div>
      <div style={{ background: props.background }} className={styles.halfbg} />
    </React.Fragment>
  );
}
export default Hero;

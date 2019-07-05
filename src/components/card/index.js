import React from "react";
import styles from "./style.module.scss";

import { Typography } from "@material-ui/core/";

function card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={props.img} className={styles.img_feature} />
        <Typography className={styles.title} variant="h6" component="h6">
          {props.title}
        </Typography>
      </div>
      <div className={styles.body}>
        <Typography variant="body1" className={styles.desc}>
          {props.desc}
        </Typography>
        <a className={styles.link} href="#">
          Read More
        </a>
      </div>
      <div className={styles.bottom}>
        <a className={styles.link} href="#">
          Add Your Prject <i className="fa fa-external-link" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
export default card;

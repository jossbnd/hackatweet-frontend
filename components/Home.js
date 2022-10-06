import React from "react";
import styles from "../styles/Home.module.css";

export default function home() {
  return (
    <div className={styles.container}>
      <div className={styles.blockLeft}>
        <img
          src="/images/logo.png"
          alt="Logo"
          className={`${styles.logo} 
        ${styles.small}`}
        />
        <div className={styles.disconnectedButton}>
          <div className={styles.blockhaut}>
            <div>
              <img className={styles.avatar} src="/images/avatar.png"></img>
            </div>
            <div className={styles.blocktopright}>
              <div className={styles.pseudo}>John</div>
              <div className={styles.username}>@John Cenna</div>
            </div>
          </div>
          <button className={styles.button}>Logout</button>

          <div></div>
        </div>
      </div>
      <div className={styles.blockCenter}>
        <div className={styles.newmessage}>Zone news message</div>
        <div className={styles.zonemessage}>Zone message déja posté</div>
      </div>
      <div className={styles.blockRight}>block droite</div>
    </div>
  );
}

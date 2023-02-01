import React from "react";
import styles from "./Battle.module.css";

const Attack = () => {
  return (
    <div className={styles.battleMenu}>
      <div className={styles.attacks}>
        <button className={styles.attackButton}>Attack1</button>
        <button className={styles.attackButton}>Attack2</button>
        <button className={styles.attackButton}>Attack3</button>
        <button className={styles.attackButton}>Attack4</button>
      </div>
      <div className={styles.attackType}>
        <h1 className={styles.attackTypeText}>Attack Type</h1>
      </div>
    </div>
  );
};

export default Attack;

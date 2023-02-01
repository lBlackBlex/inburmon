import React, { useState } from "react";
import { IBeast } from "../../Interfaces/IBeast";
import styles from "./Battle.module.css";

const HealthBar = () => {
  const [oponent, setOponent] = useState<IBeast>({
    name: "Draggle",
    health: "50%",
  });

  const [player, setPlayer] = useState<IBeast>({
    name: "Toluca I",
    health: "25%",
  });

  return (
    <>
      <div className={styles.oponentHealthContainer}>
        <h1>{oponent.name}</h1>
        <div className={styles.healthBar}>
          <div className={styles.healthBarBackground}></div>
          <div
            className={styles.healthBarMain}
            style={{ width: oponent.health }}
          ></div>
        </div>
      </div>
      <div className={styles.playerHealthContainer}>
        <h1>{player.name}</h1>
        <div className={styles.healthBar}>
          <div className={styles.healthBarBackground}></div>
          <div
            className={styles.healthBarMain}
            style={{ width: player.health }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default HealthBar;

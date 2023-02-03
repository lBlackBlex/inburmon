import React, { useEffect, useState } from "react";
import { BattleTurn } from "../../Enums/BattleTurn";
import { useBattleInfo } from "../../Hooks/UseBattle";
import { IBeast } from "../../Interfaces/IBeast";
import styles from "./Battle.module.css";

const HealthBar = () => {
  const [oponent, setOponent] = useState<IBeast>({
    name: "Draggle",
    health: 100,
  });

  const [player, setPlayer] = useState<IBeast>({
    name: "Toluca I",
    health: 100,
  });

  const { attack, turn } = useBattleInfo();

  const oponentTurn = () => {
    const newHealth = player.health - attack.damage;
    if (player.health >= 0)
      setPlayer({
        ...player,
        health: newHealth,
      });
  };

  const playerTurn = () => {
    const newHealth = oponent.health - attack.damage;
    if (oponent.health >= 0)
      setOponent({
        ...oponent,
        health: newHealth,
      });
  };

  useEffect(() => {
    setTimeout(() => {
      if (turn == BattleTurn.Player) oponentTurn();
      else playerTurn();
    }, 1000);
  }, [turn]);

  return (
    <>
      <div className={styles.oponentHealthContainer}>
        <h1>{oponent.name}</h1>
        <div className={styles.healthBar}>
          <div className={styles.healthBarBackground}></div>
          <div
            className={styles.healthBarMain}
            style={{ width: `${oponent.health}%` }}
          ></div>
        </div>
      </div>
      <div className={styles.playerHealthContainer}>
        <h1>{player.name}</h1>
        <div className={styles.healthBar}>
          <div className={styles.healthBarBackground}></div>
          <div
            className={styles.healthBarMain}
            style={{ width: `${player.health}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default HealthBar;

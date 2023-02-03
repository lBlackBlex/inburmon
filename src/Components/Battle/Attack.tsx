import React from "react";
import { draggle, emby, fireball, playerAttacks } from "../../Constants";
import { BattleTurn } from "../../Enums/BattleTurn";
import { useBattleInfo } from "../../Hooks/UseBattle";
import styles from "./Battle.module.css";

const Attack = () => {
  const { attack, turn, setBattleInfo } = useBattleInfo();

  const setType = (
    attackName: string,
    attackType: string,
    attackDamage: number
  ) => {
    setBattleInfo({
      attack: {
        name: attackName,
        type: attackType,
        damage: attackDamage,
      },
      turn: turn == BattleTurn.Player ? BattleTurn.Oponent : BattleTurn.Player,
    });

    const atacker = turn == BattleTurn.Player ? emby : draggle;
    const recipient = turn == BattleTurn.Player ? draggle : emby;

    fireball.setRotation = turn == BattleTurn.Player ? 1 : -2.2;
    atacker.attack({
      attack: {
        name: attackName,
        damage: attackDamage,
        type: attackType,
      },
      recipient: recipient,
    });

    console.log(turn);
  };

  return (
    <div className={styles.battleMenu}>
      <div className={styles.attacks}>
        {playerAttacks.map(({ name, type, damage }) => (
          <button
            key={name}
            className={styles.attackButton}
            onClick={() => setType(name, type, damage)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className={styles.attackType}>
        <h1 className={styles.attackTypeText}>
          {attack.type.length > 0 ? attack.type : "Attack Type"}
        </h1>
      </div>
    </div>
  );
};

export default Attack;

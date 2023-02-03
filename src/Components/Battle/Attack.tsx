import React, { useEffect, useState } from "react";
import { draggle, emby, fireball, playerAttacks } from "../../Constants";
import { BattleTurn } from "../../Enums/BattleTurn";
import { useBattleInfo } from "../../Hooks/UseBattle";
import { IAttack } from "../../Interfaces/IBattle";
import AttackDialog from "./AttackDialog";
import styles from "./Battle.module.css";

const Attack = () => {
  const { attack, turn, setBattleInfo } = useBattleInfo();
  const [showDialog, setShowDialog] = useState(false);
  const [dialog, setDialog] = useState("");

  const battleAttackSetup = (attack: IAttack) => {
    const { atacker, recipient } = getTurns();
    setDialog(`${atacker.getName} uso ${attack.name}`);
    setBattleInfo({
      attack: {
        name: attack.name,
        type: attack.type,
        damage: attack.damage,
      },
      turn: turn == BattleTurn.Player ? BattleTurn.Oponent : BattleTurn.Player,
    });
    atacker.attack({
      attack: {
        name: attack.name,
        type: attack.type,
        damage: attack.damage,
      },
      recipient: recipient,
    });
  };

  const setType = (
    attackName: string,
    attackType: string,
    attackDamage: number
  ) => {
    setShowDialog(true);
    fireball.setRotation = turn == BattleTurn.Player ? 1 : -2.2;
    battleAttackSetup({
      name: attackName,
      type: attackType,
      damage: attackDamage,
    });
  };

  const oponentAttack = () => {
    const selectedAttack =
      playerAttacks[Math.floor(Math.random() * playerAttacks.length)];

    console.log(selectedAttack);
    battleAttackSetup(selectedAttack);

    setTimeout(() => {
      setShowDialog(false);
    }, 2000);
  };

  const getTurns = () => {
    const atacker = turn == BattleTurn.Player ? emby : draggle;
    const recipient = turn == BattleTurn.Player ? draggle : emby;
    return { atacker, recipient };
  };

  useEffect(() => {
    if (turn != BattleTurn.Player)
      setTimeout(() => {
        oponentAttack();
      }, 2000);
  }, [turn]);

  return (
    <div className={styles.battleMenu}>
      {showDialog && (
        <AttackDialog>
          <div>{dialog}</div>
        </AttackDialog>
      )}
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

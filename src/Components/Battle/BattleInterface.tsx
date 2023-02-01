import React from "react";
import Attack from "./Attack";
import HealthBar from "./HealthBar";

const BattleInterface = () => {
  return (
    <>
      <HealthBar></HealthBar>
      <div></div>
      <Attack></Attack>
    </>
  );
};

export default BattleInterface;

import { Sprite } from "./Classes/Sprite";
import { Attacks } from "./Enums/Attacks";
import {
  battleBackgroundImg,
  draggleImg,
  embyImg,
  fireballImg,
  foregroundImg,
  mapImg,
  playerDownImg,
  playerLeftImg,
  playerRightImg,
  playerUpImg,
} from "./Images";

const canvasWidth = 1024;
const canvasHeight = 576;

const mapOffset = {
  x: 150,
  y: 15,
};

const background = new Sprite({
  position: {
    x: mapOffset.x,
    y: mapOffset.y,
  },
  image: mapImg,
});

const battleBackground = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  image: battleBackgroundImg,
});

const foreground = new Sprite({
  position: {
    x: mapOffset.x,
    y: mapOffset.y,
  },
  image: foregroundImg,
});

const player = new Sprite({
  position: {
    x: 200,
    y: 400,
  },
  image: playerDownImg,
  frames: {
    max: 4,
    hold: 10,
  },
  sprites: {
    up: playerUpImg,
    left: playerLeftImg,
    right: playerRightImg,
    down: playerDownImg,
  },
});

const draggle = new Sprite({
  position: {
    x: 800,
    y: 100,
  },
  image: draggleImg,
  frames: {
    max: 4,
    hold: 30,
  },
  animate: true,
  isEnemy: true,
});

const emby = new Sprite({
  position: {
    x: 280,
    y: 325,
  },
  image: embyImg,
  frames: {
    max: 4,
    hold: 30,
  },
  animate: true,
});

const keys = {
  ArrowUp: {
    pressed: false,
  },
  ArrowDown: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};

const BATTLE_PROBABILITY = 0.01;

const canvasBackground = "#3A3A52";

const playerAttacks = [
  { name: Attacks.Validando, type: "Normal", damage: 10 },
  { name: Attacks.Inyeccion, type: "Fuego", damage: 50 },
  { name: Attacks.Attack3, type: "Attack Type", damage: 10 },
  { name: Attacks.Attack4, type: "Attack Type", damage: 10 },
];

const fireball = new Sprite({
  position: {
    x: 280,
    y: 325,
  },
  image: fireballImg,
  show: false,
  frames: {
    max: 4,
    hold: 10,
  },
  animate: true,
  rotation: 1,
});

export {
  BATTLE_PROBABILITY,
  canvasWidth,
  canvasHeight,
  mapOffset,
  background,
  foreground,
  player,
  keys,
  canvasBackground,
  battleBackground,
  draggle,
  emby,
  playerAttacks,
  fireball,
};

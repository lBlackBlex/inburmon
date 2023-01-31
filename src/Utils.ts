import { ICollisions } from "./Interfaces/ICollisions";

const rectangularCollison = ({ rectangle1, rectangle2 }: ICollisions) => {
  return (
    rectangle1.xPosition + rectangle1.getWidth >= rectangle2.xPosition &&
    rectangle1.xPosition <= rectangle2.xPosition + rectangle2.getWidth &&
    rectangle1.yPosition <= rectangle2.yPosition + rectangle2.getHeight &&
    rectangle1.yPosition + rectangle1.getHeight >= rectangle2.yPosition
  );
};

const cancelAnimation = (window: Window, animationId: number) => {
  window.cancelAnimationFrame(animationId);
  window.cancelAnimationFrame(animationId - 1);
};

const requestAnimation = (window: Window, animationFun: () => void) => {
  return window.requestAnimationFrame(animationFun);
};

export { rectangularCollison, cancelAnimation, requestAnimation };

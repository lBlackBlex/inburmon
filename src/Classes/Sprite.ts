import { ISprite } from "../Interfaces/ISprite";
import gsap from "gsap";
import { Attacks } from "../Enums/Attacks";
import { IBattleAttack } from "../Interfaces/IBattle";
import { fireball } from "../Constants";

export class Sprite {
  private position;
  private image;
  private frames;
  private sprites;
  private animate;
  private width = 0;
  private height = 0;
  private opacity = 1;
  private isEnemy;
  private show;
  private rotation;
  private name;

  constructor({
    position,
    image,
    frames = { max: 1, hold: 10 },
    sprites,
    animate = false,
    isEnemy = false,
    show = true,
    rotation = 0,
    name,
  }: ISprite) {
    this.position = position;
    this.image = image;
    this.frames = { ...frames, val: 0, elapsed: 0 };

    this.image.onload = () => {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    };

    this.animate = animate;
    this.sprites = sprites;
    this.isEnemy = isEnemy;
    this.show = show;
    this.rotation = rotation;
    this.name = name;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.show) {
      ctx.save();
      ctx.translate(
        this.position.x + this.width / 2,
        this.position.y + this.height / 2
      );
      ctx.rotate(this.rotation);
      ctx.translate(
        -this.position.x - this.width / 2,
        -this.position.y - this.height / 2
      );
      ctx.globalAlpha = this.opacity;
      ctx.drawImage(
        this.image,
        this.frames.val * this.width,
        0,
        this.image.width / this.frames.max,
        this.image.height,
        this.position.x,
        this.position.y,
        this.image.width / this.frames.max,
        this.image.height
      );
      ctx.restore();

      if (!this.animate) return;

      if (this.frames.max > 1) this.frames.elapsed++;

      if (this.frames.elapsed % this.frames.hold === 0) {
        if (this.frames.val < this.frames.max - 1) this.frames.val++;
        else this.frames.val = 0;
      }
    }
  }

  attack({ attack, recipient }: IBattleAttack) {
    switch (attack.name) {
      case Attacks.Validando:
        const timeLine = gsap.timeline();
        let movementDistance = 20;
        if (this.isEnemy) movementDistance = -20;
        timeLine
          .to(this.position, {
            x: this.position.x - movementDistance,
          })
          .to(this.position, {
            x: this.position.x + movementDistance * 2,
            duration: 0.1,
            onComplete() {
              gsap.to(recipient.position, {
                x: recipient.position.x + 10,
                yoyo: true,
                repeat: 5,
                duration: 0.08,
              });
              gsap.to(recipient, {
                opacity: 0,
                repeat: 5,
                yoyo: true,
                duration: 0.08,
              });
            },
          })
          .to(this.position, { x: this.position.x });
        break;
      case Attacks.Inyeccion:
        console.log("fireball");
        fireball.setShow = true;
        gsap.to(fireball.position, {
          x: recipient.position.x,
          y: recipient.position.y,
          onComplete: () => {
            gsap.to(recipient.position, {
              x: recipient.position.x + 10,
              yoyo: true,
              repeat: 5,
              duration: 0.08,
            });
            gsap.to(recipient, {
              opacity: 0,
              repeat: 5,
              yoyo: true,
              duration: 0.08,
            });
            fireball.setShow = false;
          },
        });
        break;
    }
  }

  set yPosition(y: number) {
    this.position.y = y;
  }

  get yPosition() {
    return this.position.y;
  }

  set xPosition(x: number) {
    this.position.x = x;
  }

  get xPosition() {
    return this.position.x;
  }

  get getWidth() {
    return this.width;
  }

  get getHeight() {
    return this.height;
  }

  set isMoving(animate: boolean) {
    this.animate = animate;
  }

  set setImage(image: HTMLImageElement) {
    this.image = image;
  }

  get getSprites() {
    return this.sprites;
  }

  set setShow(show: boolean) {
    this.show = show;
  }

  set setRotation(rotation: number) {
    this.rotation = rotation;
  }

  get getName() {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }
}

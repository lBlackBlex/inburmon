import { ISprite } from "../Interfaces/ISprite";

export class Sprite {
  private position;
  private image;
  private frames;
  private sprites;
  private animate;
  private width = 0;
  private height = 0;

  constructor({
    position,
    image,
    frames = { max: 1, hold: 10 },
    sprites,
    animate = false,
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
  }

  draw(ctx: CanvasRenderingContext2D) {
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

    if (!this.animate) return;

    if (this.frames.max > 1) this.frames.elapsed++;

    if (this.frames.elapsed % this.frames.hold === 0) {
      if (this.frames.val < this.frames.max - 1) this.frames.val++;
      else this.frames.val = 0;
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
}

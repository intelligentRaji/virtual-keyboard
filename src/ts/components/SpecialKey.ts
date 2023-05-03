import { KeyArguemnts, Key } from "./Key";

export class SpecialKey extends Key {
  constructor({ files, parent, className, textarea }: KeyArguemnts) {
    super({
      files,
      parent,
      className,
      textarea,
    });
  }

  public action(): void {
    this.addActive();
  }
}

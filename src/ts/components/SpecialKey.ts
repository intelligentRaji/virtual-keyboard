import { KeyArguemnts, Key } from "./Key";
import { KeyInterface } from "../interfaces/keyInterface";

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

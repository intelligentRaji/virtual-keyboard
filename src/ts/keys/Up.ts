import { KeyArguemnts, Key } from "../components/Key";

export class Up extends Key {
  constructor({ files, parent, className, textarea }: KeyArguemnts) {
    super({
      files,
      parent,
      className,
      textarea,
    });
  }

  public action(): void {
    super.action("▲");
  }
}

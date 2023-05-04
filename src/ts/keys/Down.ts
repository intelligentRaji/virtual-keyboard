import { KeyArguemnts, Key } from "../components/Key";

export class Down extends Key {
  constructor({ files, parent, className, textarea }: KeyArguemnts) {
    super({
      files,
      parent,
      className,
      textarea,
    });
  }

  public action(): void {
    window.getSelection()?.modify("move", "forward", "line");
  }
}

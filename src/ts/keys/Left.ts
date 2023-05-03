import { KeyArguemnts, Key } from "../components/Key";

export class Left extends Key {
  constructor({ files, parent, className, textarea }: KeyArguemnts) {
    super({
      files,
      parent,
      className,
      textarea,
    });
  }

  public action(): void {
    this.leftAction();
    this.addActive();
  }

  private leftAction(): void {
    const position = this.textarea.selectionStart - 1;
    this.moveCursorTo(position);
  }
}

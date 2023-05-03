import { KeyArguemnts, Key } from "../components/Key";

export class Right extends Key {
  constructor({ files, parent, className, textarea }: KeyArguemnts) {
    super({
      files,
      parent,
      className,
      textarea,
    });
  }

  public action(): void {
    this.rightAction();
    this.addActive();
  }

  private rightAction(): void {
    const position = this.textarea.selectionStart + 1;
    this.moveCursorTo(position);
  }
}

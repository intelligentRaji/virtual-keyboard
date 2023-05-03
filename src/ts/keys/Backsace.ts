import { KeyArguemnts, Key } from "../components/Key";

export class Backspace extends Key {
  constructor({ files, parent, className, textarea }: KeyArguemnts) {
    super({
      files,
      parent,
      className,
      textarea,
    });
  }

  public action(): void {
    this.backspaceAction();
    this.addActive();
  }

  private backspaceAction(): void {
    if (this.textarea.selectionStart > 0) {
      const position = this.textarea.selectionStart - 1;
      this.textarea.value = `${this.textarea.value.slice(
        0,
        this.textarea.selectionStart - 1
      )}${this.textarea.value.slice(this.textarea.selectionStart)}`;
      this.moveCursorTo(position);
    }
  }
}

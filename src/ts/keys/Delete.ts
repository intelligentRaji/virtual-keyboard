import { KeyArguemnts, Key } from "../components/Key";

export class Delete extends Key {
  constructor({ files, parent, className, textarea }: KeyArguemnts) {
    super({
      files,
      parent,
      className,
      textarea,
    });
  }

  public action(): void {
    this.deleteAction();
    this.addActive();
  }

  private deleteAction(): void {
    const position = this.textarea.selectionStart;
    this.textarea.value = `${this.textarea.value.slice(
      0,
      this.textarea.selectionStart
    )}${this.textarea.value.slice(this.textarea.selectionStart + 1)}`;
    this.moveCursorTo(position);
  }
}

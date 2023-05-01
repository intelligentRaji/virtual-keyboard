import { Key } from "../components/Key";
import { KeyInterface } from "../interfaces/keyInterface";
import type { KeysRecord } from "../main/Keyboard";

export class Delete extends Key {
  private readonly keys: KeysRecord;
  private readonly files: KeyInterface;

  constructor({
    files,
    parent,
    className,
    textarea,
    keys,
  }: {
    files: KeyInterface;
    parent: HTMLElement;
    className: string;
    textarea: HTMLTextAreaElement;
    keys: KeysRecord;
  }) {
    super({
      files,
      parent,
      className,
      textarea,
    });
    this.keys = keys;
    this.files = files;
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

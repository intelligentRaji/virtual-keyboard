import { Key } from "../components/Key";
import { KeyInterface } from "../interfaces/keyInterface";
import type { KeysRecord } from "../main/Keyboard";

export class Enter extends Key {
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
    this.enterAction();
    this.addActive();
  }

  private enterAction(): void {
    const position = this.textarea.selectionStart + 1;
    this.textarea.value = `${this.textarea.value.slice(
      0,
      this.textarea.selectionStart
    )}\n${this.textarea.value.slice(this.textarea.selectionStart)}`;
    this.moveCursorTo(position);
  }
}

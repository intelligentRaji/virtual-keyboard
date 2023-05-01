import { Key } from "../components/Key";
import { KeyInterface } from "../interfaces/keyInterface";
import type { KeysRecord } from "../main/Keyboard";

export class Alt extends Key {
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
    this.altAction();
    this.addActive();
  }

  private altAction(): void {
    if (Key.shift) {
      this.changeLanguage();
      Object.values(this.keys).forEach((item) => {
        item.getSecondValue();
      });
    }
  }
}

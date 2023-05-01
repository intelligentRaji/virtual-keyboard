import { Key } from "../components/Key";
import { KeyInterface } from "../interfaces/keyInterface";
import type { KeysRecord } from "../main/Keyboard";

export class CapsLock extends Key {
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
    this.capslockAction();
    this.addActive();
  }

  private capslockAction(): void {
    Object.entries(this.keys).forEach((item: [string, Key | SpecialKey]) => {
      if (item[1].element.textContent?.match(/^[a-zA-Zа-яА-Я]$/)) {
        const key: Key | SpecialKey = item[1];
        if (key.element.textContent) {
          if (Key.capslock === false) {
            key.element.textContent = key.element.textContent.toUpperCase();
          } else {
            key.element.textContent = key.element.textContent.toLowerCase();
          }
        }
      }
    });
    if (Key.capslock === false) {
      Key.capslock = true;
    } else {
      Key.capslock = false;
    }
  }
}

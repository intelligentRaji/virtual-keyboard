import { KeyArguemnts, Key } from "../components/Key";
import type { KeysRecord } from "../main/Keyboard";

interface CapsConstructor extends KeyArguemnts {
  keys: KeysRecord;
}

export class CapsLock extends Key {
  private readonly keys: KeysRecord;

  constructor({ files, parent, className, textarea, keys }: CapsConstructor) {
    super({
      files,
      parent,
      className,
      textarea,
    });
    this.keys = keys;
  }

  public action(): void {
    this.capslockAction();
    this.element.classList.toggle("active");
  }

  public removeActive(): void {}

  private capslockAction(): void {
    Object.entries(this.keys).forEach((item: [string, Key]) => {
      if (item[1].element.textContent?.match(/^[a-zA-Zа-яА-Я]$/)) {
        const key: Key = item[1];
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

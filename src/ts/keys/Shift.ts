import { KeyArguemnts, Key } from "../components/Key";
import { KeyInterface } from "../interfaces/keyInterface";
import type { KeysRecord } from "../main/Keyboard";

interface ShiftConstructor extends KeyArguemnts {
  keys: KeysRecord;
}

export class Shift extends Key {
  private readonly keys: KeysRecord;
  private readonly files: KeyInterface;

  constructor({ files, parent, className, textarea, keys }: ShiftConstructor) {
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
    if (Key.alt) {
      this.changeLanguage();
    }
    this.shiftAction(true);
    this.addActive();
  }

  public removeActive(): void {
    super.removeActive();
    this.shiftAction();
  }

  private shiftTouchAction(): void {
    console.log(1);
    if (Key.shift) {
      this.shiftAction();
    } else {
      this.shiftAction(true);
    }
    this.element.classList.toggle("active");
  }

  private shiftAction(prop: boolean = false): void {
    Key.shift = prop;
    Object.values(this.keys).forEach((item: Key) => {
      if (prop) {
        item.getSecondValue();
        if (Key.capslock) {
          const { element } = item;
          if (element.textContent?.match(/^[a-zA-Zа-яА-Я]$/)) {
            if (Key.capslock) {
              element.textContent = element.textContent.toLowerCase();
            } else {
              element.textContent = element.textContent.toUpperCase();
            }
          }
        }
      } else {
        item.getFirstValue(this.files);
        if (Key.capslock) {
          const { element } = item;
          if (element.textContent?.match(/^[a-zA-Zа-яА-Я]$/)) {
            if (Key.capslock) {
              element.textContent = element.textContent.toUpperCase();
            } else {
              element.textContent = element.textContent.toLowerCase();
            }
          }
        }
      }
    });
  }

  protected getListeners(): void {
    this.element.addEventListener("click", this.shiftTouchAction.bind(this));
  }
}

import { KeyArguemnts, Key } from "../components/Key";
import type { KeysRecord } from "../main/Keyboard";

interface AltConstructor extends KeyArguemnts {
  keys: KeysRecord;
}

export class Alt extends Key {
  private readonly keys: KeysRecord;

  constructor({ files, parent, className, textarea, keys }: AltConstructor) {
    super({
      files,
      parent,
      className,
      textarea,
    });
    this.keys = keys;
  }

  public action(): void {
    this.altAction();
    this.addActive();
  }

  public removeActive(): void {
    super.removeActive();
    Key.alt = false;
  }

  private altAction(): void {
    Key.alt = true;
    if (Key.shift) {
      this.changeLanguage();
      Object.values(this.keys).forEach((item) => {
        item.getSecondValue();
      });
    }
  }
}

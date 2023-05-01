import { Key } from "../components/Key";
import { KeyInterface } from "../interfaces/keyInterface";
import type { KeysRecord } from "../main/Keyboard";

export class Shift extends Key {
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
    this.shiftAction();
    this.addActive();
  }

  public removeActive(): void {
    super.removeActive();
    Key.shift = false;
    Object.values(this.keys).forEach((item: Key | SpecialKey) =>
      item.getFirstValue(this.files)
    );
  }

  public touchpadAction(): void {
    this.shiftTouchAction();
  }

  private shiftAction(): void {
    Key.shift = true;
    Object.values(this.keys).forEach((item: Key | SpecialKey) =>
      item.getSecondValue()
    );
  }

  private shiftTouchAction(): void {
    if (Key.shift) {
      Key.shift = false;
      Object.values(this.keys).forEach((item: Key | SpecialKey) =>
        item.getFirstValue(this.files)
      );
    } else {
      Key.shift = true;
      Object.values(this.keys).forEach((item: Key | SpecialKey) =>
        item.getSecondValue()
      );
    }
    this.element.classList.toggle("active");
  }
}

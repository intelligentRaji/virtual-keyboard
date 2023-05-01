import { Key } from "./Key";
import { KeyInterface } from "../interfaces/keyInterface";
import type { KeysRecord } from "../main/Keyboard";

export class SpecialKey extends Key {
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
    switch (this.element.textContent) {
      case "CapsLock":
        this.capslockAction();
        break;

      case "Backspace":
        this.backspaceAction();
        break;

      case "Tab":
        this.tabAction();
        break;

      case "Alt":
        this.altAction();
        break;

      case "Shift":
        this.shiftAction();
        break;

      case "Del":
        this.deleteAction();
        break;

      case "Enter":
        this.enterAction();
        break;

      case "◀":
        this.leftAction();
        break;

      case "▶":
        this.rightAction();
        break;

      case "▲":
        this.upAction();
        break;

      case "▼":
        this.downAction();
        break;

      default:
    }
    this.addActive();
  }

  public touchpadAction(): void {
    if (this.element.textContent === "Shift") {
      this.shiftTouchAction();
    }
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

  private deleteAction(): void {
    const position = this.textarea.selectionStart;
    this.textarea.value = `${this.textarea.value.slice(
      0,
      this.textarea.selectionStart
    )}${this.textarea.value.slice(this.textarea.selectionStart + 1)}`;
    this.moveCursorTo(position);
  }

  private tabAction(): void {
    const position = this.textarea.selectionStart + 1;
    this.textarea.value = `${this.textarea.value.slice(
      0,
      this.textarea.selectionStart
    )}\t${this.textarea.value.slice(this.textarea.selectionStart)}`;
    this.moveCursorTo(position);
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

  private altAction(): void {
    if (Key.shift) {
      this.changeLanguage();
      Object.values(this.keys).forEach((item) => {
        item.getSecondValue();
      });
    }
  }

  private enterAction(): void {
    const position = this.textarea.selectionStart + 1;
    this.textarea.value = `${this.textarea.value.slice(
      0,
      this.textarea.selectionStart
    )}\n${this.textarea.value.slice(this.textarea.selectionStart)}`;
    this.moveCursorTo(position);
  }

  public addActive(): void {
    super.addActive();
    if (this.element.textContent === "Alt gr") {
      this.keys.ControlLeft.element.classList.remove("active");
    }
  }

  private leftAction(): void {
    const position = this.textarea.selectionStart - 1;
    this.moveCursorTo(position);
  }

  private rightAction(): void {
    const position = this.textarea.selectionStart + 1;
    this.moveCursorTo(position);
  }

  private upAction(): void {
    const position = this.textarea.selectionStart + 1;
    this.textarea.value = `${this.textarea.value.slice(
      0,
      this.textarea.selectionStart
    )}${this.element.textContent}${this.textarea.value.slice(
      this.textarea.selectionStart
    )}`;
    this.moveCursorTo(position);
  }

  private downAction(): void {
    const position = this.textarea.selectionStart + 1;
    this.textarea.value = `${this.textarea.value.slice(
      0,
      this.textarea.selectionStart
    )}${this.element.textContent}${this.textarea.value.slice(
      this.textarea.selectionStart
    )}`;
    this.moveCursorTo(position);
  }

  public removeActive(): void {
    super.removeActive();
    if (this.element.textContent === "Shift") {
      Key.shift = false;
      Object.values(this.keys).forEach((item: Key | SpecialKey) =>
        item.getFirstValue(this.files)
      );
    }
  }
}

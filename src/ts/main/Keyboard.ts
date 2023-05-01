import { BaseComponent } from "../components/BaseComponent";
import keysJSON from "../../json/keyboard.json";
import { Key } from "../components/Key";
import { KeyInterface } from "../interfaces/keyInterface";
import { SpecialKey } from "../components/SpecialKey";
import { ObjofClassProperties, objOfSpecialClasses } from "./getSpecialClass";

export type KeysRecord = Record<string, Key>;

export class Keyboard extends BaseComponent {
  public keys: KeysRecord;
  public readonly textarea: HTMLTextAreaElement;
  private readonly classes = objOfSpecialClasses;

  constructor(parent: HTMLElement, textarea: HTMLTextAreaElement) {
    super({ className: "keyboard", parent });
    this.textarea = textarea;
    this.keys = this.getKeys();

    document.addEventListener("keydown", (e): void => {
      if (!e.repeat) {
        if (this.keys[e.code]) {
          e.preventDefault();
          this.keys[e.code].action();
        }
      }
    });

    document.addEventListener("keyup", (e): void => {
      if (this.keys[e.code]) {
        e.preventDefault();
        this.keys[e.code].removeActive();
      }
    });
  }

  private getKeys(): KeysRecord {
    let row = new BaseComponent({ className: "row", parent: this.element });
    return keysJSON.reduce((acc: KeysRecord, cur: KeyInterface) => {
      switch (cur.key) {
        case "Tab":
        case "CapsLock":
        case "ControlLeft":
        case "ShiftLeft":
          row = new BaseComponent({ className: "row", parent: this.element });
          break;

        default:
          break;
      }
      acc[cur.key] = this.getKeyClass(cur, row.element, acc);
      return acc;
    }, {});
  }

  private getKeyClass(
    json: KeyInterface,
    row: HTMLElement,
    keys: KeysRecord
  ): Key {
    if (this.classes[json.english.code]) {
      return new SpecialKey({
        files: json,
        parent: row,
        className: "key special",
        textarea: this.textarea,
        keys,
      });
    }
    return new Key({
      files: json,
      parent: row,
      className: "key",
      textarea: this.textarea,
    });
  }
}

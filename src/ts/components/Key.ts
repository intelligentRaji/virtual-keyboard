import { BaseComponent } from "./BaseComponent";
import { KeyInterface } from "../interfaces/keyInterface";

type TextContetType = string | null;

export interface KeyArguemnts {
  files: KeyInterface;
  parent: HTMLElement;
  className: string;
  textarea: HTMLTextAreaElement;
  keys?: Record<string, Key>;
}

export class Key extends BaseComponent {
  protected readonly textarea: HTMLTextAreaElement;
  protected static capslock = false;
  protected static shift = false;
  protected static alt = false;
  protected static language: "english" | "russian";
  protected english!: { code: string; second?: string };
  protected russian!: { code: string; second?: string };

  constructor({ files, parent, className, textarea }: KeyArguemnts) {
    super({
      tag: "button",
      parent,
      className: `${className} ${files.key}`,
    });
    this.textarea = textarea;
    Key.language = this.getLanguage();
    this.getValues(files);
    this.getFirstValue(files);
    this.getListeners();
  }

  protected getListeners(): void {
    this.element.addEventListener("mousedown", () => {
      this.action();
    });
    this.element.addEventListener("mouseup", this.removeActive.bind(this));
    this.element.addEventListener("mouseout", this.removeActive.bind(this));
  }

  public action(symbol = this.element.textContent): void {
    const position = this.textarea.selectionStart + 1;
    this.write(symbol);
    this.moveCursorTo(position);
    this.addActive();
  }

  protected moveCursorTo(position: number): void {
    this.textarea.setSelectionRange(position, position);
  }

  private write(symbol: TextContetType): void {
    this.textarea.value = `${this.textarea.value.slice(
      0,
      this.textarea.selectionStart
    )}${symbol}${this.textarea.value.slice(this.textarea.selectionStart)}`;
  }

  public addActive(): void {
    this.element.classList.add("active");
    this.textarea.blur();
    this.textarea.focus();
  }

  public removeActive(): void {
    this.element.classList.remove("active");
    this.textarea.focus();
  }

  protected getValues(files: KeyInterface): void {
    if (files.russian) {
      this.russian = files.russian;
    }
    if (files.english) {
      this.english = files.english;
    }
  }

  public getSecondValue(): void {
    switch (Key.language) {
      case "english":
        if (this.english?.second) {
          this.element.textContent = this.english.second;
        }
        break;

      case "russian":
        if (this.russian?.second) {
          this.element.textContent = this.russian.second;
        }
        break;

      default:
    }
  }

  public getLanguage(): "english" | "russian" {
    const lang = localStorage.getItem("language");
    if (lang === "english" || lang === "russian") {
      return lang;
    }
    return "english";
  }

  protected changeLanguage(): void {
    switch (Key.language) {
      case "english":
        localStorage.language = "russian";
        Key.language = "russian";
        break;

      case "russian":
        localStorage.language = "english";
        Key.language = "english";
        break;

      default:
    }
  }

  public getFirstValue(files: KeyInterface): void {
    switch (Key.language) {
      case "english":
        if (!this.english) {
          this.element.textContent = files.key;
        } else {
          this.element.textContent = this.english.code;
        }
        break;

      case "russian":
        if (!this.russian) {
          this.element.textContent = files.key;
        } else {
          this.element.textContent = this.russian.code;
        }
        break;

      default:
    }
  }
}

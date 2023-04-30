import { BaseComponent } from "./BaseComponent";
import { KeyInterface } from "../interfaces/keyInterface";

export class Key extends BaseComponent {
  protected readonly textarea: HTMLTextAreaElement;
  protected static capslock = false;
  protected static language: "english" | "russian";
  protected static shift = false;
  protected english!: { code: string; second?: string } | null;
  protected russian!: { code: string; second?: string } | null;

  constructor({
    files,
    parent,
    className,
    textarea,
  }: {
    files: KeyInterface;
    parent: HTMLElement;
    className: string;
    textarea: HTMLTextAreaElement;
  }) {
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

  public action(): void {
    const position = this.textarea.selectionStart + 1;
    this.write();
    this.moveCursorTo(position);
    this.addActive();
  }

  public touchpadAction(): void {}

  protected moveCursorTo(position: number): void {
    this.textarea.setSelectionRange(position, position);
  }

  private write(): void {
    this.textarea.value = `${this.textarea.value.slice(
      0,
      this.textarea.selectionStart
    )}${this.element.textContent}${this.textarea.value.slice(
      this.textarea.selectionStart
    )}`;
  }

  public addActive(): void {
    this.element.classList.add("active");
    this.textarea.focus();
  }

  public removeActive(): void {
    this.element.classList.remove("active");
    this.textarea.focus();
  }

  private getListeners(): void {
    this.element.addEventListener("mousedown", () => {
      if (this.element.textContent !== "Shift") {
        this.action();
      }
    });
    this.element.addEventListener("mouseup", () => {
      if (this.element.textContent !== "Shift") {
        this.removeActive();
      }
    });
    this.element.addEventListener("mouseout", () => {
      if (this.element.textContent !== "Shift") {
        this.removeActive();
      }
    });
    if (this.element.textContent === "Shift") {
      this.element.addEventListener("click", this.touchpadAction.bind(this));
    }
  }

  protected getValues(files: KeyInterface): void {
    if (files.russian) {
      this.russian = files.russian;
    } else {
      this.russian = null;
    }
    if (files.english) {
      this.english = files.english;
    } else {
      this.english = null;
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

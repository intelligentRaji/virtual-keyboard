import { BaseComponent } from "../components/BaseComponent";
import { Keyboard } from "./Keyboard";
import { TextArea } from "./TextArea";

export class Main extends BaseComponent {
  public readonly textarea: TextArea;
  public readonly keyBoard: Keyboard;

  constructor() {
    super({ tag: "main", parent: document.body, className: "main" });
    this.textarea = new TextArea(this.element);
    this.keyBoard = new Keyboard(this.element, this.textarea.element);
  }
}

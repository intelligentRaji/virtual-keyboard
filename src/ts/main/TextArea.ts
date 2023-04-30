import { BaseComponent } from "../components/BaseComponent";

export class TextArea extends BaseComponent<HTMLTextAreaElement> {
  constructor(parent: HTMLElement) {
    super({ tag: "textarea", parent, className: "textarea" });
    this.element.autocomplete = "off";
    this.element.rows = 6;
    this.element.focus();
  }
}

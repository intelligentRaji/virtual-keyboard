interface BaseObject {
  tag: keyof HTMLElementTagNameMap;
  parent: HTMLElement;
  className?: string;
  text?: string;
}

export default class BaseComponent {
  public readonly element: HTMLElement;
  constructor({
    tag = "div",
    parent,
    className,
    text,
  }: BaseObject) {
    this.element = document.createElement(tag);
    if (className) {
      this.element.className = className;
    }
    if (parent) {
      parent.append(this.element);
    }
    if (text) {
      this.element.textContent = text;
    }
  }
}

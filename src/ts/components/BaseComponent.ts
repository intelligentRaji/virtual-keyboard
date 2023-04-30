export interface BaseObject {
  tag?: keyof HTMLElementTagNameMap;
  parent: HTMLElement;
  className?: string;
  text?: string;
}

export class BaseComponent<T extends HTMLElement = HTMLElement> {
  public readonly element: T;

  constructor({ tag = "div", parent, className, text }: BaseObject) {
    this.element = document.createElement(tag) as T;
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

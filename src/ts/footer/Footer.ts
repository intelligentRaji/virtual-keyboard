import { BaseComponent } from "../components/BaseComponent";

export class Footer extends BaseComponent {
  private languageInstructions: BaseComponent;

  constructor(parent: HTMLElement) {
    super({ parent, className: "footer" });
    this.languageInstructions = new BaseComponent<HTMLParagraphElement>({
      tag: "p",
      parent: this.element,
      text: `Смена языка Shift + Alt. <br> Клавиатура сделана на системе Windows`,
      className: "instructions",
    });
  }
}

import "../style/style.scss";
import { Footer } from "./footer/Footer";

import { Main } from "./main/Main";

if (!localStorage.getItem("language")) {
  localStorage.setItem("language", "english");
}

const main = new Main();
const footer = new Footer(document.body);

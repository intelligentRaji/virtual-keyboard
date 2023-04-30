import "../style/style.scss";

import { Main } from "./main/Main";

if (!localStorage.getItem("language")) {
  localStorage.setItem("language", "english");
}

const main = new Main();

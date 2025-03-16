import { render } from "../Charger/Charger.mjs";
render();

function lockOrientation() {
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock("portrait").catch((error) => {
      console.warn("No se pudo bloquear la orientación:", error);
    });
  }
}

AOS.init({ offset: 0 });

document.addEventListener("DOMContentLoaded", lockOrientation);

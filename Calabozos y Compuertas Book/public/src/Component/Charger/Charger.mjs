import { initMenu } from "../Menu/Menu.mjs";

class Charger {
  constructor() {
    this.element = this.createChargerElement();
  }
  createChargerElement() {
    const maincharger = document.createElement("main");
    maincharger.classList.add("container-charger");
    const chargerDiv = document.createElement("div");
    chargerDiv.classList.add("charger");

    const tipTop = document.createElement("div");
    tipTop.classList.add("tip-top-charger");

    const textTitle = document.createElement("p");
    textTitle.classList.add("TitleCandC");
    textTitle.innerText = "Calabozos y Compuertas";
    textTitle.transition = "0.3s linear";
    textTitle.setAttribute("data-aos", "fade-right");
    textTitle.setAttribute("data-aos-duration", "700");
    textTitle.setAttribute("data-aos-delay", "600");

    const containertextDescColab = document.createElement("p");
    containertextDescColab.classList.add("ContainerColab");

    const textDescColab = document.createElement("p");
    textDescColab.classList.add("Colab");
    textDescColab.innerText = "Powered By";
    textDescColab.transition = "0.3s linear";
    textDescColab.setAttribute("data-aos", "fade-left");
    textDescColab.setAttribute("data-aos-duration", "700");
    textDescColab.setAttribute("data-aos-delay", "600");

    const LogoOverride = document.createElement("img");
    LogoOverride.classList.add("LogoColab");
    LogoOverride.src = "src/Assets/Img/logo/Overridelogo.svg";
    LogoOverride.transition = "0.3s linear";
    LogoOverride.setAttribute("data-aos", "zoom-in-right");
    LogoOverride.setAttribute("data-aos-duration", "400");

    const LogoCAC = document.createElement("img");
    LogoCAC.classList.add("LogoCaC");
    LogoCAC.src = "src/Assets/Img/logo/LogoCandC.svg";
    LogoCAC.transition = "0.3s linear";
    LogoCAC.setAttribute("data-aos", "zoom-in-right");
    LogoCAC.setAttribute("data-aos-duration", "400");

    const textDescColabPart2 = document.createElement("p");
    textDescColabPart2.classList.add("Colab");
    textDescColabPart2.innerText = "Override";
    textDescColabPart2.transition = "0.3s linear";
    textDescColabPart2.setAttribute("data-aos", "fade-left");
    textDescColabPart2.setAttribute("data-aos-duration", "700");
    textDescColabPart2.setAttribute("data-aos-delay", "600");

    containertextDescColab.appendChild(textDescColab);
    containertextDescColab.appendChild(LogoOverride);
    containertextDescColab.appendChild(textDescColabPart2);

    chargerDiv.appendChild(textTitle);
    chargerDiv.appendChild(containertextDescColab);
    tipTop.appendChild(LogoCAC);
    maincharger.appendChild(tipTop);
    maincharger.appendChild(chargerDiv);

    LogoOverride.addEventListener("click", () => {
      window.open("https://override.com.mx");
    });

    return maincharger;
  }

  // Función para renderizar el elemento en el body
  render() {
    document.body.appendChild(this.element);
    /*this.removeAfterTimeout(8000);*/
    this.removeAfterTimeout(8000);
  }
  // Función para eliminar el contenedor después de un tiempo
  removeAfterTimeout(timeout) {
    setTimeout(() => {
      if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element); // Eliminar el contenedor
        const dragonfont = document.getElementById("canvas");
        dragonfont.remove();
        initMenu();
      }
    }, timeout);
  }
}

const Instance = new Charger();
export const render = Instance.render.bind(Instance);

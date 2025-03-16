import { renderBookCharger } from "../Charger/BookCharger/BookCharger.mjs";
import Book1 from "../Book/Pages/Book1/Book1.mjs";
import Book2 from "../Book/Pages/Book2/Book2.mjs";

class Menu {
  Menu() {
    this.isValid = false;
  }

  async initMenu() {
    const fontMenu = document.createElement("div");
    fontMenu.classList.add("FontMenu");
    const CharacterDataLight = document.createElement("img");
    CharacterDataLight.classList.add("characterLight");
    CharacterDataLight.src = "src/Assets/Img/character/VELA.svg";
    const CharacterData = document.createElement("img");
    CharacterData.classList.add("characterPJ");
    CharacterData.src = "src/Assets/Img/character/PJWEB.svg";

    const CharacterDataVela = document.createElement("img");
    CharacterDataVela.classList.add("characterVela");
    CharacterDataVela.src = "src/Assets/Img/character/VELA.svg";

    const underTextTitle1 = document.createElement("p");
    underTextTitle1.innerHTML = `Calabozos y <span class="tercera-palabra"> Compuertas</span>`;
    underTextTitle1.classList.add("titleBookGMenu");
    const underTextTitle2 = document.createElement("p");
    underTextTitle2.innerHTML = `Calabozos y <span class="tercera-palabra"> Compuertas</span>`;
    underTextTitle2.classList.add("titleBookGMenu");

    const textContainerBookMenu = document.createElement("div");
    textContainerBookMenu.classList.add("textContainerBook1Menu");
    textContainerBookMenu.appendChild(underTextTitle1);
    const titleBook1 = document.createElement("p");
    titleBook1.classList.add("titleBookMenu");
    titleBook1.innerText = "La maldicion de la cueva logica";
    textContainerBookMenu.appendChild(titleBook1);

    const textContainerBookMenu2 = document.createElement("div");
    textContainerBookMenu2.classList.add("textContainerBook2Menu");
    textContainerBookMenu2.appendChild(underTextTitle2);
    const titleBook2 = document.createElement("p");
    titleBook2.classList.add("titleBookMenu");
    titleBook2.innerText = "El viaje de las grandes runas";
    textContainerBookMenu2.appendChild(titleBook2);

    fontMenu.innerHTML = `
    <div class="clickable-book book1">
    </div>
    <div class="clickable-book book2">
    </div>
    `;

    const main = document.createElement("main");
    const footer = document.createElement("footer");
    const optBtn = document.createElement("div");
    optBtn.classList.add("burger-icon");
    optBtn.innerHTML = `
  <label class="burger" for="burger">
    <input class="line" type="checkbox" id="burger" />
  </label>
`;
    const Shop = document.createElement("div");
    Shop.innerHTML = `
     <button
  style="-webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));"
  class="px-10 py-3 bg-gradient-to-r from-gray-500 to-gray-500 rounded-full shadow-xl group-hover:shadow-2xl group-hover:shadow-red-600 shadow-red-600 uppercase font-serif tracking-widest relative overflow-hidden group text-transparent cursor-pointer z-10 after:absolute after:rounded-full after:bg-red-200 after:h-[85%] after:w-[95%] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 hover:saturate-[1.15] active:saturate-[1.4]"
>
  Button
  <p
    class="absolute z-40 font-semibold bg-gradient-to-r from-gray-500 to-orange-500 bg-clip-text text-transparent top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-full h-full w-full transition-all duration-300 -translate-y-[30%] tracking-widest"
  >
    SHOP
  </p>
  <p
    class="absolute z-40 top-1/2 left-1/2 bg-gradient-to-r from-gray-700 to-orange-700 bg-clip-text text-transparent -translate-x-1/2 translate-y-full h-full w-full transition-all duration-300 group-hover:-translate-y-[40%] tracking-widest font-extrabold"
  >
    GO
  </p>
  <svg
    class="absolute w-full h-full scale-x-125 rotate-180 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group-hover:animate-none animate-pulse group-hover:-translate-y-[45%] transition-all duration-300"
    viewBox="0 0 2400 800"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sssurf-grad" y2="100%" x2="50%" y1="0%" x1="50%">
        <stop
          offset="0%"
          stop-opacity="1"
          stop-color="#d09306"
        ></stop>
        <stop
          offset="100%"
          stop-opacity="1"
          stop-color="yellow"
        ></stop>
      </linearGradient>
    </defs>
    <g transform="matrix(1,0,0,1,0,-91.0877685546875)" fill="url(#sssurf-grad)">
      <path
        opacity="0.05"
        transform="matrix(1,0,0,1,0,35)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.21"
        transform="matrix(1,0,0,1,0,70)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.37"
        transform="matrix(1,0,0,1,0,105)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.53"
        transform="matrix(1,0,0,1,0,140)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.68"
        transform="matrix(1,0,0,1,0,175)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.84"
        transform="matrix(1,0,0,1,0,210)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="1"
        transform="matrix(1,0,0,1,0,245)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
    </g>
  </svg>
  <svg
    class="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] group-hover:-translate-y-[33%] group-hover:scale-95 transition-all duration-500 z-40 fill-yellow-500"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,288L9.2,250.7C18.5,213,37,139,55,133.3C73.8,128,92,192,111,224C129.2,256,148,256,166,256C184.6,256,203,256,222,250.7C240,245,258,235,277,213.3C295.4,192,314,160,332,170.7C350.8,181,369,235,388,229.3C406.2,224,425,160,443,122.7C461.5,85,480,75,498,74.7C516.9,75,535,85,554,101.3C572.3,117,591,139,609,170.7C627.7,203,646,245,665,256C683.1,267,702,245,720,245.3C738.5,245,757,267,775,266.7C793.8,267,812,245,831,234.7C849.2,224,868,224,886,218.7C904.6,213,923,203,942,170.7C960,139,978,85,997,53.3C1015.4,21,1034,11,1052,48C1070.8,85,1089,171,1108,197.3C1126.2,224,1145,192,1163,197.3C1181.5,203,1200,245,1218,224C1236.9,203,1255,117,1274,106.7C1292.3,96,1311,160,1329,170.7C1347.7,181,1366,139,1385,128C1403.1,117,1422,139,1431,149.3L1440,160L1440,320L1430.8,320C1421.5,320,1403,320,1385,320C1366.2,320,1348,320,1329,320C1310.8,320,1292,320,1274,320C1255.4,320,1237,320,1218,320C1200,320,1182,320,1163,320C1144.6,320,1126,320,1108,320C1089.2,320,1071,320,1052,320C1033.8,320,1015,320,997,320C978.5,320,960,320,942,320C923.1,320,905,320,886,320C867.7,320,849,320,831,320C812.3,320,794,320,775,320C756.9,320,738,320,720,320C701.5,320,683,320,665,320C646.2,320,628,320,609,320C590.8,320,572,320,554,320C535.4,320,517,320,498,320C480,320,462,320,443,320C424.6,320,406,320,388,320C369.2,320,351,320,332,320C313.8,320,295,320,277,320C258.5,320,240,320,222,320C203.1,320,185,320,166,320C147.7,320,129,320,111,320C92.3,320,74,320,55,320C36.9,320,18,320,9,320L0,320Z"
      fill-opacity="1"
    ></path>
  </svg>
</button>
    `;
    const menuOpt = document.createElement("div");
    menuOpt.classList.add("menuOpt");
    menuOpt.innerHTML = `

    <p>Opciones</p>

  <button class="value">
    <label class="sliderVolume">
      <input type="range" class="level">
      <input type="checkbox" id="checkboxInput">
    <label for="checkboxInput" class="toggleSwitch">

<div class="speaker"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 75 75">
<path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style="stroke:#d09306;stroke-width:5;stroke-linejoin:round;fill:#d09306;"></path>
<path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style="fill:none;stroke:#d09306;stroke-width:5;stroke-linecap:round"></path>
</svg></div>

<div class="mute-speaker"><svg version="1.0" viewBox="0 0 75 75" stroke="#d09306" stroke-width="5">
<path d="m39,14-17,15H6V48H22l17,15z" fill="#d09306" stroke-linejoin="round"></path>
<path d="m49,26 20,24m0-24-20,24" fill="#d09306" stroke-linecap="round"></path>
</svg></div>

    </label>
          <g>
              <path d="M18.36 19.36a1 1 0 0 1-.705-1.71C19.167 16.148 20 14.142 20 12s-.833-4.148-2.345-5.65a1 1 0 1 1 1.41-1.419C20.958 6.812 22 9.322 22 12s-1.042 5.188-2.935 7.069a.997.997 0 0 1-.705.291z" fill="currentColor" data-original="#000000"></path>
              <path d="M15.53 16.53a.999.999 0 0 1-.703-1.711C15.572 14.082 16 13.054 16 12s-.428-2.082-1.173-2.819a1 1 0 1 1 1.406-1.422A6 6 0 0 1 18 12a6 6 0 0 1-1.767 4.241.996.996 0 0 1-.703.289zM12 22a1 1 0 0 1-.707-.293L6.586 17H4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h2.586l4.707-4.707A.998.998 0 0 1 13 3v18a1 1 0 0 1-1 1z" fill="currentColor" data-original="#000000"></path>
          </g>
      </svg>
  </label>

  

    `;

    const menuButtonsContainer = document.createElement("div");
    menuButtonsContainer.classList.add("menuButtonsContainer");
    menuButtonsContainer.innerHTML = `
    <button class="menuButtons">Creditos</button>
    <button class="menuButtons">Nosotros</button>
    <button class="menuButtons">Tutorial</button>
    `;

    menuOpt.appendChild(menuButtonsContainer);

    footer.appendChild(optBtn);
    footer.appendChild(menuOpt);
    footer.appendChild(Shop);

    fontMenu.appendChild(CharacterData);
    fontMenu.appendChild(CharacterDataVela);

    main.appendChild(footer);
    document.body.appendChild(fontMenu);
    document.body.appendChild(main);

    const btn_o = document.getElementById("burger");

    btn_o.addEventListener("click", () => {
      this.toggle = !this.toggle;
      this.VisibilyMenu(menuOpt);
    });

    const imgFont = Book1.Pag7.imageUrl;
    const imgFont2 = Book2.Pag0.imageUrl;

    const BookCharger1 = renderBookCharger(
      imgFont,
      "La maldicion de la cueva logica",
      "Calabozos y Compuertas"
    );

    const BookCharger2 = renderBookCharger(
      imgFont2,
      "El viaje de las grandes runas",
      "Calabozos y Compuertas"
    );

    document.querySelector(".book1").addEventListener("click", () => {
      fontMenu.remove();
      main.remove();
      document.body.appendChild(BookCharger1);
    });

    document.querySelector(".book2").addEventListener("click", () => {
      fontMenu.remove();
      main.remove();
      document.body.appendChild(BookCharger2);
    });

    document.querySelectorAll(".clickable-book").forEach((book) => {
      // Elemento hijo que contiene el texto

      // Evento al entrar con el mouse
      book.addEventListener("mouseenter", () => {
        // Aplicar transformaciones
        book.style.transform = "scale(3.6) rotateZ(30deg)";

        // Mostrar el texto
      });

      // Evento al salir con el mouse
      book.addEventListener("mouseleave", () => {
        // Resetear transformaciones
        book.style.transform = "scale(1) rotateZ(0deg)";
        // Ocultar el texto
        textContainerBookMenu2.remove();
      });
    });

    const book2 = document.querySelector(".clickable-book.book2");

    book2.addEventListener("mouseenter", () => {
      fontMenu.appendChild(textContainerBookMenu2);
    });

    // Evento al salir con el mouse--
    book2.addEventListener("mouseleave", () => {
      textContainerBookMenu2.remove();
    });

    const book1 = document.querySelector(".clickable-book.book1");

    book1.addEventListener("mouseenter", () => {
      fontMenu.appendChild(textContainerBookMenu);

      // Mostrar el texto
    });

    // Evento al salir con el mouse
    book1.addEventListener("mouseleave", () => {
      textContainerBookMenu.remove();
    });
  }

  VisibilyMenu(burger) {
    if (this.toggle) {
      burger.style.display = "flex";
    } else {
      burger.style.display = "none";
    }
  }
}

const Instance = new Menu();
export const initMenu = Instance.initMenu.bind(Instance);

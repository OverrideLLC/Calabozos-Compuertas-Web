class BookCharger {
  renderBookCharger(imgUrlName, Text, title) {
    const bookCharger = document.createElement("div");
    bookCharger.classList.add("book-charger");

    const imgBook = document.createElement("img");
    imgBook.src = imgUrlName;
    imgBook.classList.add("imgSizeBookCharger");
    const bookText = document.createElement("div");
    bookText.classList.add("ContainerTextbookCharger");
    const TitleText = document.createElement("p");
    TitleText.innerText = title;
    TitleText.classList.add("TitleTextBookCharger");
    const TitleBook = document.createElement("h2");
    TitleBook.innerText = Text;
    TitleBook.classList.add("TextBookCharger");

    const loading = document.createElement("div");
    loading.classList.add("loader_Book");

    bookText.appendChild(TitleText);
    bookText.appendChild(TitleBook);
    bookText.appendChild(loading);

    bookCharger.appendChild(imgBook);
    bookCharger.appendChild(bookText);

    return bookCharger;
  }
}

const Instance = new BookCharger();
export const renderBookCharger = Instance.renderBookCharger.bind(Instance);

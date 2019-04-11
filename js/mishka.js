
var header = document.querySelector(".page-header");
var headerSearch = document.querySelector(".page-header__search");
var headerSearchBox = document.querySelector(".page-header__search-box");
var headerSearchImg = document.querySelector(".page-header__search-img");
var headerSearchText = document.querySelector(".page-header__search-text");

var menuButton = document.querySelector(".main-nav__toggle")
var list = document.querySelector(".main-nav__list--top")
var listItem = document.querySelector(".site-list__item")
var listItem2 = document.querySelector(".site-list__item2")


var basket = document.querySelector(".basket")
var basketField = document.querySelector(".basket__field")
var basketImg = document.querySelector(".basket__img")



menuButton.addEventListener("click", function(evt) {
  console.log("Клик по кнопке меню");
  evt.preventDefault();
  if (menuButton.classList.contains("main-nav__toggle--closed"))  {
  menuButton.classList.remove("main-nav__toggle--closed");
  menuButton.classList.add("main-nav__toggle--active");
  list.classList.add("main-nav__list--top-active");
  listItem.classList.add("site-list__item--active");
  listItem2.classList.add("site-list__item--active");
  header.classList.add("page-header--active");
  headerSearch.classList.add("page-header__search--active");
  headerSearchBox.classList.add("page-header__search-box--active");
  headerSearchImg.classList.add("page-header__search-img--active");
  headerSearchText.classList.add("page-header__search-text--active");
  basket.classList.add("basket--active");
  basketField.classList.add("basket__field--active");
  basketImg.classList.add("basket__img--active");
    } else {
        menuButton.classList.add("main-nav__toggle--closed");
        menuButton.classList.remove("main-nav__toggle--active");
        list.classList.remove("main-nav__list--top-active");
        listItem.classList.remove("site-list__item--active");
        listItem2.classList.remove("site-list__item--active");
        header.classList.remove("page-header--active");
        headerSearch.classList.remove("page-header__search--active");
        headerSearchBox.classList.remove("page-header__search-box--active");
        headerSearchImg.classList.remove("page-header__search-img--active");
        headerSearchText.classList.remove("page-header__search-text--active");
        basket.classList.remove("basket--active");
        basketField.classList.remove("basket__field--active");
        basketImg.classList.remove("basket__img--active");
            }
}); 



/*
link.addEventListener("click", function(evt) {
  console.log("Клик по ссылке напишите нам");
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
  } else {
    login.focus();
  }
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value || !textarea.value) {
    evt.preventDefault();
    form.classList.add("modal-eror");
    console.log("Нужно ввести имя, почту и текст сообщения");
  } else {
    localStorage.setItem("login", login.value);
    email.focus();
    console.log(login.value);
    console.log(email.value);
    console.log(textarea.value);
    console.log("форма отпарвлена");
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Закрытие модального окна кликом");
  popup.classList.remove("modal-show");
  form.classList.remove("modal-eror");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      console.log("Закрытие модального окна через Esc");
      popup.classList.remove("modal-show");
    }
  }
});

*/
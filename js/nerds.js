
var header = document.querySelector(".page-header--active");
var headerWrap = document.querySelector(".page-header__wrap--active");
var headerSearch = document.querySelector(".page-header__search--active");
var headerSearchBox = document.querySelector(".page-header__search-box--active ");
var headerSearchImg = document.querySelector(".page-header__search-img--active");
var headerSearchText = document.querySelector(".page-header__search-text--active");

var menuButton = document.querySelector(".main-nav__toggle")
var menuButtonOpen = document.querySelector(".main-nav__toggle--active")
var list = document.querySelector(".main-nav__list--top-active")
var listItem = document.querySelector(".site-list__item")

var headerSearchText = document.querySelector(".basket--active")
var headerSearchText = document.querySelector(".basket__field--active")
var headerSearchText = document.querySelector(".basket__img--active ")



menuButton.addEventListener("click", function(evt) {
  console.log("Клик по ссылке по кнопке меню");
  evt.preventDefault();
  menuButton.classList.remove("main-nav__toggle--closed");
  menuButton.classList.add("main-nav__toggle--active");
});

menuButtonOpen .addEventListener("click", function(evt) {
  console.log("Клик по ссылке по кнопке закрыть меню");
  evt.preventDefault();
  menuButton.classList.remove("main-nav__toggle--active");
  menuButton.classList.add("main-nav__toggle--closed");
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
var header = document.querySelector(".page-header__wrap--top");
var headerSearchBox = document.querySelector(".page-header__search-box");
var menuButton = document.querySelector(".main-nav__toggle");
var list = document.querySelector(".main-nav--top");
var basket = document.querySelector(".basket");



menuButton.addEventListener("click", function(evt) {
  console.log("Клик по кнопке меню");
  evt.preventDefault();
  if (menuButton.classList.contains("main-nav__toggle--closed"))  {
  menuButton.classList.remove("main-nav__toggle--closed");
  menuButton.classList.add("main-nav__toggle--active");
  list.classList.add("main-nav--top-active");
  header.classList.add("page-header__wrap--top-active");
  headerSearchBox.classList.add("page-header__search-box--active");
  basket.classList.add("basket--active");
    } else {
        menuButton.classList.add("main-nav__toggle--closed");
        menuButton.classList.remove("main-nav__toggle--active");
        list.classList.remove("main-nav--top-active");
        header.classList.remove("page-header__wrap--top-active");
        headerSearchBox.classList.remove("page-header__search-box--active");
        basket.classList.remove("basket--active");
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
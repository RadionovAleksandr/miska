(function() {
    var header = document.querySelector(".page-header__wrap--top");
    var headerSearchBox = document.querySelector(".page-header__search-box");
    var menuButton = document.querySelector(".main-nav__toggle");
    var list = document.querySelector(".main-nav--top");
    var basket = document.querySelector(".basket");
    var order = document.querySelector('#order');
    var addOrder = document.querySelector('.modal-window__btn');
    var popup = document.querySelector('.modal-window');
    var btnsSize = document.querySelectorAll('.modal-window__btn-size');
    var popupBackground = document.querySelector('.modal-wrapper');

    console.log(addOrder)
    menuButton.addEventListener("click", function(evt) {
        console.log("Клик по кнопке меню");
        evt.preventDefault();
        if (menuButton.classList.contains("main-nav__toggle--closed")) {
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

    var onModalActive = function(evt) {
        evt.preventDefault();
        console.log("Сообщение");
        popup.classList.add("modal-show");
        popupBackground.classList.add("modal-wrapper--active");
    }
    if (order) {
        order.addEventListener("click", onModalActive);
    };

    var onBtnSizeActive = function(evt) {
        evt.preventDefault();
        console.log("Закрытие модального окна кликом");
        popup.classList.remove("modal-show");
        popupBackground.classList.remove("modal-wrapper--active");
    }

    if (addOrder) {
        addOrder.addEventListener("click", onBtnSizeActive);
    }

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            if (popup.classList.contains("modal-show")) {
                console.log("Закрытие модального окна через Esc");
                popup.classList.remove("modal-show");
                popupBackground.classList.remove("modal-wrapper--active");
            }
        }
    });

    var onbuttonClick = function(evt) {
        btnsSize.forEach(function(btn) {
            var id = evt.target.dataset.id;
            if (btn.dataset.id === id) {
                btn.classList.add('modal-window__btn-size--active');
            } else {
                btn.classList.remove('modal-window__btn-size--active');
            }
        });
    }

    btnsSize.forEach(function(btnSize) {
        console.log('клик по кнопке')
        btnSize.addEventListener('click', onbuttonClick)
    });
}());


//создаю элемент каталога, вставляюв разметку
(function() {
    var cardData = [
        card1 = {
            cardTitle: 'Корзинка для белья',
            cardImgMobileWebP: "img/photo-1-mobile.webp 1x, img/photo-1-mobile@2x.webp 2x",
            cardImgTabletWebP: "img/photo-1-tablet.webp 1x, img/photo-1-tablet@2x.webp 2x",
            cardImgdesktopWebP: "img/photo-1-desktop.webp 1x, img/photo-1-desktop@2x.webp 2x",
            cardImgMobile: "img/photo-1-mobile.jpg, img/photo-1-mobile@2x.jpg 2x",
            cardImgTablet: "img/photo-1-tablet.jpg 1x, img/photo-1-tablet@2x.jpg 2x",
            cardImgDesktop2x: "img/photo-1-desktop@2x.jpg 2x",
            cardImgDesktop: "img/photo-1-desktop.jpg ",
            cardTitle: 'Зайчик-попрыгайчик',
            cardText: 'Рост 30см, вес 200г',
            cardPrice: '1200 руб.'
        },
        card2 = {
            cardTitle: 'Корзинка для белья',
            cardImgMobileWebP: "img/photo-2-mobile.webp 1x, img/photo-2-mobile@2x.webp 2x",
            cardImgTabletWebP: "img/photo-2-tablet.webp 1x, img/photo-2-tablet@2x.webp 2x",
            cardImgdesktopWebP: "img/photo-2-desktop.webp 1x, img/photo-2-desktop@2x.webp 2x",
            cardImgMobile: "img/photo-2-mobile.jpg, img/photo-2-mobile@2x.jpg 2x",
            cardImgTablet: "img/photo-2-tablet.jpg 1x, img/photo-2-tablet@2x.jpg 2x",
            cardImgDesktop2x: "img/photo-2-desktop@2x.jpg 2x",
            cardImgDesktop: "img/photo-2-desktop.jpg ",
            cardTitle: 'Корзинка для белья',
            cardText: 'Диаметр 15см, высота 10см',
            cardPrice: '690 руб.'
        },
        card3 = {
            cardTitle: 'Корзинка для белья',
            cardImgMobileWebP: "img/photo-3-mobile.webp 1x, img/photo-3-mobile@2x.webp 2x",
            cardImgTabletWebP: "img/photo-3-tablet.webp 1x, img/photo-3-tablet@2x.webp 2x",
            cardImgdesktopWebP: "img/photo-3-desktop.webp 1x, img/photo-3-desktop@2x.webp 2x",
            cardImgMobile: "img/photo-3-mobile.jpg, img/photo-3-mobile@2x.jpg 2x",
            cardImgTablet: "img/photo-3-tablet.jpg 1x, img/photo-3-tablet@2x.jpg 2x",
            cardImgDesktop2x: "img/photo-3-desktop@2x.jpg 2x",
            cardImgDesktop: "img/photo-3-desktop.jpg ",
            cardTitle: 'Большая корзинка для игрушек',
            cardText: 'Диаметр 30см, высота 30см',
            cardPrice: '1500 руб.'
        },
    ];


    var ListElement = document.querySelector('.catalog');
    var fragment = document.createDocumentFragment();
    var fabrication = document.querySelector('.fabrication');

    var createCard = function(create) {
        var cardTemplate = document.querySelector('#card')

        for (var i = 0; i < create; i++) {
            var catalogElement = cardTemplate.cloneNode(true);
            catalogElement.querySelector('.img-mobil-webp').srcset = cardData[i].cardImgMobileWebP;
            catalogElement.querySelector('.img-tablet-webp').srcset = cardData[i].cardImgTabletWebP;
            catalogElement.querySelector('.img-desktop-webp').srcset = cardData[i].cardImgdesktopWebP;
            catalogElement.querySelector('.img-mobil').srcset = cardData[i].cardImgMobile;
            catalogElement.querySelector('.img-tablet').srcset = cardData[i].cardImgTablet;
            catalogElement.querySelector('.img-descktop').srcset = cardData[i].cardImgDesktop2x;
            catalogElement.querySelector('.img-descktop').src = cardData[i].cardImgDesktop;

            catalogElement.querySelector('.catalog-card__title').textContent = cardData[i].cardTitle;
            catalogElement.querySelector('.catalog-card__title').textContent = cardData[i].cardTitile;
            catalogElement.querySelector('.catalog-card__text').textContent = cardData[i].cardText;
            catalogElement.querySelector('.catalog-card__price').textContent = cardData[i].cardPrice;
            fragment.appendChild(catalogElement);
        }
        ListElement.insertBefore(fragment, fabrication);
    }
    if (ListElement) {
        createCard(cardData.length);
    };
})();
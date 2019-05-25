var btnMenu = document.querySelector(".header__menu-toogle");
var btnCloseMenu = document.querySelector(".header__menu-toogle--close");
var btnOpenMenu = document.querySelector(".header__menu-toogle--open");
var menuMain = document.querySelector(".header__menu-list");
var menuUser = document.querySelector(".header__user-menu");
var modalForm = document.querySelector(".modal");
var modalOverlay = document.querySelector('.modal-overlay');
var openModalForm = document.querySelectorAll(".js-to-cart");
var closeModalForm = document.querySelector(".modal__button");
var mapContainer = document.querySelector(".map");

var closeMenu = function () {
  menuMain.classList.add("header__menu-hidden");
  menuUser.classList.add("header__user-menu--hidden");

  btnMenu.classList.remove("header__menu-toogle--close");
  btnMenu.classList.add("header__menu-toogle--open");
};

var openMenu = function () {
  menuMain.classList.remove("header__menu-hidden");
  menuUser.classList.remove("header__user-menu--hidden");

  btnMenu.classList.remove("header__menu-toogle--open");
  btnMenu.classList.add("header__menu-toogle--close");
}

var enableJSMenu = function () {
  menuMain.classList.remove("header__menu-list--no-js");
  menuUser.classList.remove("header__user-menu--no-js");

  btnMenu.classList.remove("header__menu-toogle--no-js");
}

enableJSMenu();
if (btnCloseMenu && menuMain && menuUser) {
  closeMenu();
}

btnMenu.addEventListener("click", function (evt) {
  btnCloseMenu = document.querySelector(".header__menu-toogle--close");
  btnOpenMenu = document.querySelector(".header__menu-toogle--open");

  menuMain = document.querySelector(".header__menu-list");
  menuUser = document.querySelector(".header__user-menu");

  evt.preventDefault();
  if (btnCloseMenu && menuUser && menuMain) {
    closeMenu();
  }

  if(btnOpenMenu) {
    openMenu();
  }
});

for (var i = 0; i < openModalForm.length; i++) {
  openModalForm[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalForm.classList.add("modal--show");
    modalOverlay.classList.add("modal-overlay--show");
  });
}

closeModalForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalForm.classList.remove("modal--show");
  modalOverlay.classList.remove("modal-overlay--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalForm.classList.contains("modal--show")) {
        modalForm.classList.remove("modal--show");
        modalOverlay.classList.remove("modal-overlay--show");
    }
  }
});

if (mapContainer) {
  window.onload = function () {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(59.9369, 30.3218)
    }
    var map = new google.maps.Map(mapContainer, mapOptions);
    var image = {
      url: "img/icon-map-pin.svg",
      scaledSize: new google.maps.Size(100, 100)
    }
    var myLatLng = new google.maps.LatLng(59.9363, 30.3217);
    var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      optimized: false,
      icon: image
    });
  }
}


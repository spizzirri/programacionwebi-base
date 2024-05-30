// console.log("getById", header);

const mainHeader = document.querySelector(".img-bkg");

// const header = document.querySelector("header");
// const headerOptions = document.querySelector(".header-options");

// header.removeChild(headerOptions);

function addItemToMainMenu(parentNode, className, link) {
  // seleccionar el container - padre
  const menu = document.querySelector(parentNode);

  // creacion del nodo - li
  const newItem = document.createElement("li");
  newItem.classList.add(className);

  // crear element a
  const linkElement = document.createElement("a");
  linkElement.href = link;
  linkElement.textContent = "New";
  newItem.appendChild(linkElement);

  // agregar contenido
  // const newText = document.createTextNode('New');
  // newItem.textContent = "New";

  // agregar el elemento creado al container - padre
  menu.appendChild(newItem);
}

function checkItemMenuClick() {
  const menuItems = document.querySelectorAll(".menu-items .menu-items--item");

  menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.target;
      target.classList.toggle("show-submenu");
    });
  });
}

addItemToMainMenu(".menu-items", "menu-items--item", "/new-movies");
checkItemMenuClick();

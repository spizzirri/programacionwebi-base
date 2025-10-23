import { BuscadorElementos } from "../buscadorElementos.js";
import { ACCOUNT } from "../constants/constants.js";

const buscador = new BuscadorElementos();

export class AccountOption {
  constructor() {}

  render() {
    const accountBtn = buscador.buscarElemento(".js-account-option");
    const accountOptions = buscador.buscarElemento(".js-account-submenu");

    accountBtn.addEventListener("click", (event) => {
      event.preventDefault();

      const target = event.target;

      target.innerHTML = `${ACCOUNT.MESSAGE} Cristian`;

      target.classList.toggle("js-active");
      accountOptions.classList.toggle("show-options");
    });
  }
}

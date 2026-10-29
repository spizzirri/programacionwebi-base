
/**
 * Representa un producto del catálogo.
 */
export class Product {
  constructor({
    id = null,
    name = "",
    category = "",
    price = 0,
    stock = 0,
    details = {},
    active = true
  } = {}) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = Number(price);
    this.stock = Number(stock);

    // Objeto anidado para practicar objetos dentro de objetos.
    this.details = {
      description: details.description ?? "",
      image: {
        url: details.image?.url ?? ""
      }
    };

    this.active = active;
  }
}

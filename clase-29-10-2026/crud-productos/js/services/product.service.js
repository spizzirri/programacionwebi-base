
import { Product } from "../models/product.model.js";
import { saveData } from "./storage.service.js";
import { validateProduct } from "../utils/validators.js";

// Clave que identifica nuestros datos en localStorage.
const STORAGE_KEY = "crud-products";

// Recibe el arreglo que utiliza la aplicación.
export class ProductService {
  constructor(products) {
    this.products = products;
  }

  // Consulta: devuelve todos los productos.
  getAll() {
    return [...this.products];
  }

  // Consulta: busca un producto por su ID.
  getById(id) {
    return this.products.find((product) => product.id === id);
  }

  // Alta: valida, crea y guarda un producto.
  create(data) {
    const product = new Product(data);

    const errors = validateProduct(product);

    if (Object.keys(errors).length > 0) {
      throw new Error(Object.values(errors)[0]);
    }

    // Generamos un ID sencillo para la simulación.
    product.id = String(Date.now());

    this.products.push(product);
    this.save();

    return product;
  }

  // Modificación: busca el producto y actualiza sus datos.
  update(id, data) {
    const index = this.products.findIndex(
      (product) => product.id === id
    );

    if (index === -1) {
      throw new Error("No se encontró el producto.");
    }

    const product = new Product({
      ...data,
      id
    });

    const errors = validateProduct(product);

    if (Object.keys(errors).length > 0) {
      throw new Error(Object.values(errors)[0]);
    }

    this.products[index] = product;
    this.save();

    return product;
  }

  // Baja: elimina el producto del arreglo.
  delete(id) {
    const index = this.products.findIndex(
      (product) => product.id === id
    );

    if (index === -1) {
      throw new Error("No se encontró el producto.");
    }

    // splice elimina un elemento desde la posición encontrada.
    this.products.splice(index, 1);

    this.save();
  }

  // Guarda el estado actual del arreglo.
  save() {
    saveData(STORAGE_KEY, this.products);
  }
}

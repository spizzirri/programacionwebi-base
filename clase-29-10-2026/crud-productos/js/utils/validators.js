
/**
 * Valida los campos de un producto.
 *
 * Devuelve un objeto con los errores encontrados.
 * Si no hay errores, devuelve un objeto vacío.
 */
export function validateProduct(product) {
  const errors = {};

  // Expresión regular: permite letras, números y espacios,
  // con al menos un carácter que no sea un espacio.
  const namePattern = /^(?=.*\S).{2,100}$/;

  if (!namePattern.test(product.name.trim())) {
    errors.name = "Ingresá un nombre de entre 2 y 100 caracteres.";
  }

  if (!product.category) {
    errors.category = "Seleccioná una categoría.";
  }

  if (
    !Number.isFinite(product.price) ||
    product.price <= 0
  ) {
    errors.price = "El precio debe ser mayor que cero.";
  }

  if (
    !Number.isInteger(product.stock) ||
    product.stock < 0
  ) {
    errors.stock = "El stock debe ser un entero igual o mayor que cero.";
  }

  // La imagen es opcional. Si se ingresa, debe ser una URL válida.
  const imageUrl = product.details.image.url.trim();

  if (imageUrl !== "") {
    try {
      const url = new URL(imageUrl);

      if (url.protocol !== "http:" && url.protocol !== "https:") {
        errors.imageUrl = "La imagen debe utilizar HTTP o HTTPS.";
      }
    } catch {
      errors.imageUrl = "Ingresá una URL válida.";
    }
  }

  return errors;
}

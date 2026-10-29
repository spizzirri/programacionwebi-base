
/**
 * Muestra los productos en la tabla.
 * Los callbacks permiten que la vista avise cuando se quiere
 * editar o eliminar un producto.
 */
export function renderProducts(products, { onEdit, onDelete }) {
  const tableBody = document.querySelector("#products-table-body");

  // Limpiamos las filas anteriores antes de renderizar.
  tableBody.replaceChildren();

  if (products.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const container = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");

    cell.colSpan = 6;
    container.className = "empty-state";
    title.textContent = "No hay productos cargados";
    description.textContent = "Agregá un producto para comenzar.";

    container.append(title, description);
    cell.append(container);
    row.append(cell);
    tableBody.append(row);

    return;
  }

  products.forEach((product) => {
    const row = document.createElement("tr");

    // Nombre y descripción.
    const nameCell = document.createElement("td");
    const name = document.createElement("span");
    const description = document.createElement("span");

    name.className = "product-cell__name";
    name.textContent = product.name;

    description.className = "product-cell__description";
    description.textContent = product.details.description;

    nameCell.append(name, description);

    // Categoría.
    const categoryCell = document.createElement("td");
    categoryCell.textContent = product.category;

    // Precio.
    const priceCell = document.createElement("td");
    priceCell.textContent = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS"
    }).format(product.price);

    // Stock.
    const stockCell = document.createElement("td");
    stockCell.textContent = product.stock;

    // Estado.
    const statusCell = document.createElement("td");
    const status = document.createElement("span");

    status.className = product.active
      ? "badge badge--success"
      : "badge badge--neutral";

    status.textContent = product.active ? "Activo" : "Inactivo";
    statusCell.append(status);

    // Acciones.
    const actionsCell = document.createElement("td");
    const actions = document.createElement("div");

    actions.className = "product-actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "button button--secondary button--small";
    editButton.textContent = "Editar";
    editButton.setAttribute(
      "aria-label",
      `Editar ${product.name}`
    );

    // Al hacer clic, ejecutamos el callback recibido.
    editButton.addEventListener("click", () => onEdit(product.id));

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "button button--danger button--small";
    deleteButton.textContent = "Eliminar";
    deleteButton.setAttribute(
      "aria-label",
      `Eliminar ${product.name}`
    );

    deleteButton.addEventListener("click", () => onDelete(product.id));

    actions.append(editButton, deleteButton);
    actionsCell.append(actions);

    // Agregamos todas las celdas a la fila.
    row.append(
      nameCell,
      categoryCell,
      priceCell,
      stockCell,
      statusCell,
      actionsCell
    );

    tableBody.append(row);
  });
}

/**
 * Muestra un mensaje y aplica el estilo correspondiente.
 * type puede ser success, error, warning o info.
 */
export function showMessage(element, message, type = "info") {
  element.textContent = message;
  element.className = `alert alert--${type}`;
  element.hidden = false;
}

/**
 * Limpia los mensajes de validación del formulario.
 */
export function clearFieldErrors() {
  document.querySelectorAll(".field-error").forEach((element) => {
    element.textContent = "";
  });

  document.querySelectorAll(".is-invalid").forEach((element) => {
    element.classList.remove("is-invalid");
  });
}

/**
 * Muestra los errores junto a cada campo.
 */

export function showFieldErrors(errors) {
  clearFieldErrors();

  Object.entries(errors).forEach(([field, message]) => {
    // El nombre del campo no siempre coincide con el ID HTML.
    const inputId = `product-${field}`;

    const input = document.getElementById(inputId);
    const error = document.getElementById(`${inputId}-error`);

    if (input) {
      input.classList.add("is-invalid");
    }

    if (error) {
      error.textContent = message;
    }
  });
}


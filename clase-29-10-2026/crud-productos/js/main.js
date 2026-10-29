import { Product } from "./models/product.model.js";
import { loadData } from "./services/storage.service.js";
import { ProductService } from "./services/product.service.js";
import { validateProduct } from "./utils/validators.js";
import {
  renderProducts,
  showMessage,
  showFieldErrors,
  clearFieldErrors,
} from "./views/product.view.js";
import { INITIAL_PRODUCTS } from "../data/initial-data.js";
// ----------------------------------------
// 1. Referencias al HTML
// ----------------------------------------

// formulario del producto
const productForm = document.querySelector("#product-form");
// form title para ver si es editar o guardar nuevo registro
const formTitle = document.querySelector("#form-title");
// descripcion del formulario
const formDescription = document.querySelector("#form-description");
// mensaje del formulario
const formMessage = document.querySelector("#form-message");
//mensaje generico para toda la aplicacion
const globalMessage = document.querySelector("#global-message");

//filtro de busquedas
const searchInput = document.querySelector("#search-product");
const categoryFilter = document.querySelector("#filter-category");

//contador de total de productos
const totalProducts = document.querySelector("#total-products");
// contador de productos activos
const activeProducts = document.querySelector("#active-products");
// contador de stock bajo
const lowStockProducts = document.querySelector("#low-stock-products");

//contador total de productos en la tabla mostrada
const visibleProductsCount = document.querySelector("#visible-products-count");

// mensaje: mostrando x de x productos
const tableSummary = document.querySelector("#table-summary");

// ----------------------------------------
// 2. Cargar los datos y crear el servicio
// ----------------------------------------

const STORAGE_KEY = "crud-products";

let productService;

try {
  // Si no existen datos, comenzamos con un arreglo vacío.
  const products = loadData(STORAGE_KEY, INITIAL_PRODUCTS, Product);

  productService = new ProductService(products);
} catch (error) {
  console.error("No se pudieron cargar los productos:", error);

  showMessage(
    globalMessage,
    "No se pudo acceder al almacenamiento del navegador.",
    "error",
  );
}

// ----------------------------------------
// 3. Funciones auxiliares
// ----------------------------------------

/**
 * Devuelve los datos actuales del formulario como un objeto.
 */
function getFormData() {
  // o podemos usar form data
  return {
    name: document.querySelector("#product-name").value.trim(),
    category: document.querySelector("#product-category").value,
    price: Number(document.querySelector("#product-price").value),
    stock: Number(document.querySelector("#product-stock").value),
    active: document.querySelector("#product-active").checked,
    details: {
      description: document.querySelector("#product-description").value.trim(),
      image: {
        url: document.querySelector("#product-imageUrl").value.trim(),
      },
    },
  };
}

/**
 * Limpia el formulario y lo prepara para un alta nueva.
 */
function resetProductForm() {
  productForm.reset();

  // Un ID vacío indica que estamos creando un producto.
  document.querySelector("#product-id").value = "";

  formTitle.textContent = "Nuevo producto";
  formDescription.textContent =
    "Completá los datos para registrar un producto.";

  document.querySelector("#btn-save-product").textContent = "Guardar producto";

  clearFieldErrors();
  formMessage.hidden = true;
}

/**
 * Actualiza las estadísticas y vuelve a dibujar la tabla.
 */
function refreshProducts() {
  if (!productService) return;

  const products = productService.getAll();
  const searchText = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  // Filtramos el arreglo sin modificar los productos originales.
  const filteredProducts = products.filter((product) => {
    const matchesText =
      product.name.toLowerCase().includes(searchText) ||
      product.details.description.toLowerCase().includes(searchText);

    const matchesCategory = category === "" || product.category === category;

    return matchesText && matchesCategory;
  });

  // Actualizamos los contadores.
  totalProducts.textContent = products.length;

  activeProducts.textContent = products.filter(
    (product) => product.active,
  ).length;

  lowStockProducts.textContent = products.filter(
    (product) => product.stock <= 5,
  ).length;

  visibleProductsCount.textContent = `${filteredProducts.length} productos`;

  tableSummary.textContent = `Mostrando ${filteredProducts.length} de ${products.length} productos`;

  // Pasamos callbacks para editar y eliminar.
  renderProducts(filteredProducts, {
    onEdit: editProduct,
    onDelete: deleteProduct,
  });
}

/**
 * Busca un producto y carga sus datos en el formulario.
 */
function editProduct(id) {
  const product = productService.getById(id);

  if (!product) {
    showMessage(globalMessage, "El producto ya no existe.", "error");
    return;
  }

  document.querySelector("#product-id").value = product.id;
  document.querySelector("#product-name").value = product.name;
  document.querySelector("#product-category").value = product.category;
  document.querySelector("#product-price").value = product.price;
  document.querySelector("#product-stock").value = product.stock;

  document.querySelector("#product-description").value =
    product.details.description;

  document.querySelector("#product-image").value = product.details.image.url;

  document.querySelector("#product-active").checked = product.active;

  formTitle.textContent = "Editar producto";
  formDescription.textContent = "Modificá los datos y guardá los cambios.";

  document.querySelector("#btn-save-product").textContent = "Guardar cambios";

  clearFieldErrors();
  formMessage.hidden = true;

  document.querySelector("#product-form-section").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/**
 * Elimina un producto después de solicitar confirmación.
 */
function deleteProduct(id) {
  const product = productService.getById(id);

  if (!product) {
    showMessage(globalMessage, "El producto ya no existe.", "error");
    return;
  }

  // confirm() devuelve true o false.
  const confirmed = window.confirm(
    `¿Querés eliminar el producto "${product.name}"?`,
  );

  if (!confirmed) return;

  try {
    productService.delete(id);

    // Si se estaba editando ese producto, limpiamos el formulario.
    if (document.querySelector("#product-id").value === id) {
      resetProductForm();
    }

    refreshProducts();

    showMessage(globalMessage, "Producto eliminado correctamente.", "success");
  } catch (error) {
    showMessage(globalMessage, error.message, "error");
  }
}

// ----------------------------------------
// 4. Evento de envío del formulario
// ----------------------------------------

productForm.addEventListener("submit", (event) => {
  // Evitamos que el navegador recargue la página.
  event.preventDefault();

  if (!productService) {
    showMessage(globalMessage, "El servicio no está disponible.", "error");
    return;
  }

  const data = getFormData();
  const errors = validateProduct(data);

  // Si existen errores, los mostramos y detenemos el guardado.
  if (Object.keys(errors).length > 0) {
    showFieldErrors(errors);

    showMessage(
      formMessage,
      "Revisá los campos señalados antes de continuar.",
      "error",
    );

    return;
  }

  // Si el ID está vacío, es un alta. Si existe, es una edición.
  const id = document.querySelector("#product-id").value;

  try {
    if (id === "") {
      productService.create(data);

      showMessage(globalMessage, "Producto creado correctamente.", "success");
    } else {
      productService.update(id, data);

      showMessage(
        globalMessage,
        "Producto actualizado correctamente.",
        "success",
      );
    }

    resetProductForm();
    refreshProducts();
  } catch (error) {
    showMessage(formMessage, error.message, "error");
  }
});

// ----------------------------------------
// 5. Botones y eventos de búsqueda
// ----------------------------------------

document.querySelector("#btn-new-product").addEventListener("click", () => {
  resetProductForm();

  document.querySelector("#product-form-section").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  document.querySelector("#product-name").focus();
});

document.querySelector("#btn-reset-form").addEventListener("click", () => {
  // El evento reset se completa después del clic.
  // Limpiamos los mensajes en el siguiente evento del navegador.
  window.setTimeout(resetProductForm, 0);
});

searchInput.addEventListener("input", refreshProducts);
categoryFilter.addEventListener("change", refreshProducts);

// Limpiar filtros y volver a mostrar todos los productos.
document.querySelector("#btn-clear-filters").addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "";
  refreshProducts();
});

// ----------------------------------------
// 6. Parámetro de URL
// ----------------------------------------

// Ejemplo: index.html?categoria=electronica
const urlParams = new URLSearchParams(window.location.search);
const categoryFromUrl = urlParams.get("categoria");

if (
  categoryFromUrl &&
  [...categoryFilter.options].some((option) => option.value === categoryFromUrl)
) {
  categoryFilter.value = categoryFromUrl;
}

// ----------------------------------------
// 7. sessionStorage
// ----------------------------------------

// Recordamos la búsqueda durante la sesión de la pestaña.
try {
  searchInput.value = sessionStorage.getItem("product-search") ?? "";
} catch (error) {
  console.warn("No se pudo recuperar la búsqueda:", error);
}

searchInput.addEventListener("input", () => {
  try {
    sessionStorage.setItem("product-search", searchInput.value);
  } catch (error) {
    console.warn("No se pudo guardar la búsqueda:", error);
  }
});

// ----------------------------------------
// 8. Primera renderización
// ----------------------------------------

if (productService) {
  refreshProducts();
}

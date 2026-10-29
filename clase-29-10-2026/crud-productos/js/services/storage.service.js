
/**
 * Guarda datos en localStorage.
 *
 * JSON.stringify convierte el arreglo de objetos en texto,
 * porque localStorage solamente almacena cadenas de texto.
 */
export function saveData(key, data) {
  const dataAsText = JSON.stringify(data);

  localStorage.setItem(key, dataAsText);
}

/**
 * Recupera datos del almacenamiento.
 *
 * Si no hay datos, utiliza el arreglo inicial.
 * Si los datos están dañados, recupera el arreglo inicial.
 */
export function loadData(key, initialData, ModelClass) {
  const storedData = localStorage.getItem(key);

  // null significa que todavía no existe esa clave.
  if (storedData === null) {
    saveData(key, initialData);
    return initialData.map((item) => new ModelClass(item));
  }

  try {
    const parsedData = JSON.parse(storedData);

    // Esperamos que la raíz del JSON sea un arreglo.
    if (!Array.isArray(parsedData)) {
      throw new Error("Los datos guardados no son un arreglo.");
    }

    // JSON.parse devuelve objetos comunes, no instancias de Product.
    return parsedData.map((item) => new ModelClass(item));

  } catch (error) {
    console.error("Error al recuperar los datos:", error);

    // Restablecemos los datos iniciales si el JSON está dañado.
    saveData(key, initialData);

    return initialData.map((item) => new ModelClass(item));
  }
}


/**
 * Productos iniciales de la aplicación.
 *
 * Se utilizan cuando todavía no hay productos guardados
 * en localStorage.
 */
export const INITIAL_PRODUCTS = [
  {
    id: "1",
    name: "Teclado mecánico",
    category: "informatica",
    price: 45000,
    stock: 12,
    details: {
      description: "Teclado mecánico con iluminación RGB.",
      image: {
        url: "https://ejemplo.com/teclado.jpg"
      }
    },
    active: true
  },
  {
    id: "2",
    name: "Mouse inalámbrico",
    category: "informatica",
    price: 18000,
    stock: 20,
    details: {
      description: "Mouse inalámbrico con conexión USB.",
      image: {
        url: "https://ejemplo.com/mouse.jpg"
      }
    },
    active: true
  },
  {
    id: "3",
    name: "Monitor 24 pulgadas",
    category: "informatica",
    price: 220000,
    stock: 4,
    details: {
      description: "Monitor Full HD de 24 pulgadas.",
      image: {
        url: "https://ejemplo.com/monitor.jpg"
      }
    },
    active: true
  },
  {
    id: "4",
    name: "Lámpara de escritorio",
    category: "hogar",
    price: 25000,
    stock: 8,
    details: {
      description: "Lámpara LED para escritorio.",
      image: {
        url: "https://ejemplo.com/lampara.jpg"
      }
    },
    active: true
  },
  {
    id: "5",
    name: "Auriculares",
    category: "electronica",
    price: 32000,
    stock: 0,
    details: {
      description: "Auriculares estéreo con micrófono.",
      image: {
        url: "https://ejemplo.com/auriculares.jpg"
      }
    },
    active: false
  }
];

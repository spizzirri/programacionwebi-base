// Example course cart JSON data
const webCourseCartData = {
  cart: [
    {
      courseId: 301,
      courseName: "HTML & CSS Basics",
      duration: "3 weeks",
      image: "./images/html_css.jpeg",
      price: 39.99,
      totalPrice: 39.99,
    },
    {
      courseId: 302,
      courseName: "Advanced JavaScript",
      duration: "6 weeks",
      image: "./images/html_css.jpeg",
      price: 79.99,
      totalPrice: 79.99,
    },
    {
      courseId: 303,
      courseName: "Responsive Web Design",
      duration: "4 weeks",
      image: "./images/html_css.jpeg",
      price: 59.99,
      totalPrice: 59.99,
    },
    {
      courseId: 304,
      courseName: "Web Accessibility",
      duration: "2 weeks",
      image: "./images/html_css.jpeg",
      price: 29.99,
      totalPrice: 29.99,
    },
  ],
  cartTotal: 209.96,
  currency: "USD",
};

localStorage.setItem("cart", JSON.stringify(webCourseCartData));

// Get the cart data from local storage
function getCart() {
  const storedCart = localStorage.getItem("cart");
  const initialState = {
    cart: [],
    cartTotal: 0,
    currency: "USD",
  };

  return storedCart ? JSON.parse(storedCart) : initialState;
}

// Save the updated cart data to local storage
function saveCart(cartData) {
  localStorage.setItem("cart", JSON.stringify(cartData));
}

// Function to display courses in the cart
function displayCart() {
  const cardData = getCart();
  const cartItems = cardData.cart;
  const cartItemsContainer = document.querySelector(".js-cart__items");

  cartItemsContainer.innerHTML = "";

  cartItems.forEach((item, index) => {
    const cartItemElement = document.createElement("li");
    cartItemElement.classList.add("col", "m3");

    // Template literals to create the cart item element
    cartItemElement.innerHTML = `<div class="card">
      <div class="card-image">
        <img src="${item.image}" alt="${item.courseName}">
      </div>
      <div class="card-content">
        <p>${item.courseName}</p>
        <p>${item.duration}</p>
      </div>
      <div class="card-action">
        <a href="#">$${item.price}</a>
        <button class="btn waves-effect waves-light red lighten-2" onclick="removeCourse(${index})">Remove</button>
      </div>
    </div>`;

    // Old JS
    // cartItemElement.innerHTML =
    //   '<div class="card"><div class="card-content"><p>' +
    //   item.courseName +
    //   "</p><p>" +
    //   item.duration +
    //   '</p></div><div class="card-action"><a href="#">' +
    //   item.price +
    //   "</a></div></div>";

    // Calculate the total price of the cart

    cartItemsContainer.appendChild(cartItemElement);
  });
}

// Function to remove a course from the cart
function removeCourse(courseIndex) {
  let cartData = getCart();

  // Remove the course from the cart array by index and get the removed course
  const removedCourse = cartData.cart.splice(courseIndex, 1)[0];

  // Calc the total price with the new cart data

  saveCart(cartData);

  displayCart();
}

displayCart();

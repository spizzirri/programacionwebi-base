const mockData = {
  courses: [
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
  cart: [],
  users: [],
  currentUser: {},
};

localStorage.setItem("state", JSON.stringify(mockData));

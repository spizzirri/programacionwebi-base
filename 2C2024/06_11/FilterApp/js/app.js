const searchInput = document.querySelector(".js-search");
const itemList = document.querySelector(".js-item-list");

// Listen for keyup event on the search input
searchInput.addEventListener("keyup", (_event) => {
  const filterValue = searchInput.value.toLowerCase();
  const items = itemList.querySelectorAll(".item");

  // Compare the items list with the filterValue
  items.forEach((item, index) => {
    const itemText = item.textContent.toLowerCase();

    if (itemText.includes(filterValue)) item.style.display = "block";
    else item.style.display = "none";
  });
});

const getStateFromLocalStorage = () => {
  const state = localStorage.getItem("state");

  if (!state) return {};

  return JSON.parse(state);
};

const state = getStateFromLocalStorage();

console.log("My state - Courses", state.courses);

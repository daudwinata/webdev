const clickBurgerIcon = document.querySelector(".js_burger-button");

clickBurgerIcon.addEventListener("click", function () {
  clickBurgerIcon.classList.toggle("change");
})


const burgerClick = document.querySelector(".js_burger-button");
//const containerClick = document.querySelector(".site-container");

burgerClick.addEventListener("click", function () {
  const containerClick = document.querySelector("body");

  if (containerClick.classList.contains("right-green-wrapper")) {
    containerClick.classList.remove("right-green-wrapper");

  } else {
    containerClick.classList.add("right-green-wrapper");
  }
})
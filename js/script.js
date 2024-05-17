const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#bars").onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#bars");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Searchbox
const searchBox = document.querySelector(".form");

document.querySelector("#search").onclick = (e) => {
  searchBox.classList.toggle("active");
};

const searchAja = document.querySelector("#search");

document.addEventListener("click", function (e) {
  if (!searchAja.contains(e.target) && !searchBox.contains(e.target)) {
    searchBox.classList.remove("active");
  }
});

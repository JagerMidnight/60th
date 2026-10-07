const desktopQuery = window.matchMedia("(min-width: 768px)");
const navList = document.querySelector(".nav-list");
const navToggle = document.getElementById("nav-toggle");

function handleLayoutChange(e) {
  navList.style.flexDirection = e.matches ? "row" : "column";
  navList.style.display = e.matches ? "flex" : "none";
  navToggle.style.display = e.matches ? "none" : "block";
}

handleLayoutChange(desktopQuery);

desktopQuery.addEventListener("change", handleLayoutChange);

navToggle.addEventListener("click", () => {
  if (!desktopQuery.matches) {
    const isHidden = navList.style.display === "none";
    navList.style.display = isHidden ? "flex" : "none";
  }
});

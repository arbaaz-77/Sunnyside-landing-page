const x = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => handleMenu());

function handleMenu() {
  const visibility = x.getAttribute("data-visible");

  if (visibility === "false") {
    x.setAttribute("data-visible", true);
    hamburger.setAttribute("aria-expanded", true);
  } else {
    x.setAttribute("data-visible", false);
    hamburger.setAttribute("aria-expanded", false);
  }
}

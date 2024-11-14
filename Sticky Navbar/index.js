const navBarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");


const offsetBuffer = 50;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const triggerPoint = bottomContainerEl.offsetTop - navBarEl.offsetHeight - offsetBuffer;

  if (scrollPosition > triggerPoint) {
    navBarEl.classList.add("active");
  } else {
    navBarEl.classList.remove("active");
  }
});
